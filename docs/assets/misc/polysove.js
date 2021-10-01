/***************************************************************************
 *   Copyright (C) 2019, Paul Lutus                                        *
 *                                                                         *
 *   This program is free software; you can redistribute it and/or modify  *
 *   it under the terms of the GNU General Public License as published by  *
 *   the Free Software Foundation; either version 2 of the License, or     *
 *   (at your option) any later version.                                   *
 *                                                                         *
 *   This program is distributed in the hope that it will be useful,       *
 *   but WITHOUT ANY WARRANTY; without even the implied warranty of        *
 *   MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the         *
 *   GNU General Public License for more details.                          *
 *                                                                         *
 *   You should have received a copy of the GNU General Public License     *
 *   along with this program; if not, write to the                         *
 *   Free Software Foundation, Inc.,                                       *
 *   59 Temple Place - Suite 330, Boston, MA  02111-1307, USA.             *
 ***************************************************************************/

"use strict"

function addEvent(o,e,f) {
  if (o.addEventListener) {
    o.addEventListener(e,f,false);
    return true;
  }
  else if (o.attachEvent) {
    return o.attachEvent("on"+e,f);
  }
  else {
    return false;
  }
}

class GraphDim {
  constructor(xl,xh,yl,yh) {
    this.xl = xl;
    this.xh = xh;
    this.yl = yl;
    this.yh = yh;
  }
  toString() {
    return this.xl + "," + this.xh + "," + this.yl + "," + this.yh;
  }
}

class AxisData {
  constructor(min,max,steps,label,nums) {
    this.exp_ratio = 0.1;
    this.min = min;
    this.max = max;
    this.minlimit = min * 8;
    this.maxlimit = max * 8;
    this.exp = (max-min) * this.exp_ratio;
    this.gmin = this.min - this.exp;
    this.gmax = this.max + this.exp;
    this.steps = steps;
    this.increm = (max-min)/steps;
    this.label = label;
    this.nums = nums;
  }
  toString() {
    return this.min + "," + this.max + "," + this.steps + "," + this.increm + "," + this.label + "," + this.nums;
  }
}

// polynomial processing class

class PolySolve {

  constructor() {
    this.setup();
    this.read_cookie();
  }

  setup() {
    this.setup_function_strings();
    this.matf = new MatFunctions();
    this.output_form = 0;
    this.default_font_size = "80%";
    this.left_margin = 8;
    this.right_margin = 8;
    this.top_margin = 8;
    this.bottom_margin = 32;
    this.x_axis_data = null;
    this.y_axis_data = null;
    this.text_color = "rgb(0,0,0)";
    this.grid_color = "rgb(192,240,192)";
    this.plot_color = "rgb(31,119,180)";
    this.point_color = "rgb(255,0,0)";
    this.explore_color = "rgb(128,0,128)";
    this.mousedown = false;

    // Explanation: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/bind

    document.onmousedown = this.mouse_down.bind(this);
    document.onmouseup = this.mouse_up.bind(this);
    document.onmousemove = this.mouse_move.bind(this);

    this.poly_terms = null;
    this.xy_data = null;

    this.poly_degree = 2;

    this.plot_steps = 500;

    this.reverse_xy = false;

    this.form_labels = ['simple list (ordered x^0 to x^n)','mathematical function','C function','C++ function','Java Function','JavaScript function','Python function'];

    this.canvas = this.id("graphicPane1");
    this.canvas_ctx = this.canvas.getContext("2d");
    this.text_div = this.id("textPane1");
    this.table_data = this.id("table_results_area");
    this.chart_wrapper = this.id("chart_wrapper");
    this.control_panel = this.id("control_panel");
    this.data_entry = this.id('data_entry');
    this.reverse_checkbox = this.id("reverse_checkbox");
    this.resize_graph();
    this.set_title_strings();
    this.adjust_degree();
  }

  reset_all() {
    if(confirm("Polysolve: okay to reset all entries/values to defaults?")) {
      this.data_entry.value = "-1 -1\n0 3\n1 2.5\n2 5\n3 4\n5 2\n7 5\n9 4";
      this.reverse_xy = false;
      this.reverse_checkbox.checked = this.reverse_xy;
      this.table_data.value = "";
      this.setup();
    }
  }

  // All that typing!
  id(s) {
    return document.getElementById(s);
  }

  float_id(s) {
    return parseFloat(this.id(s).value);
  }

  set_wh(obj,w,h) {
    obj.style.width = w + "px";
    obj.style.height = h + "px";
  }

  resize_graph() {
    this.chart_width = 860;
    this.chart_height = 500;
    this.set_wh(this.chart_wrapper,this.chart_width,this.chart_height);
    this.set_wh(this.canvas,this.chart_width,this.chart_height);
    this.canvas.width = this.chart_width;
    this.canvas.height = this.chart_height;
    this.set_wh(this.text_div,this.chart_width,this.chart_height);
  }

  resize_plot() {
    this.resize_graph();
    this.plot_graph();
  }

  set_title_strings() {
    var array = document.getElementsByTagName("input");
    for(var i in array) {
      var ob = array[i];
      var class_name = ob.className;
      var ident = ob.id;
      if ((class_name && class_name.match(/input_field/i))
        && ! (ident.match(/equation/i))
        // && ! (ident.match(/chart(Width|Height)/i))
        ) {
        ob.title = "Change value with mouse wheel.";
      }
    }
  }


  hide_show_divs(array,show) {
    for(var i in array) {
      div = this.id(array[i]);
      div.className = (show)?"visible_class":"hidden_class";
    }
  }

  open_edit_div() {
    var target = id("edit_div");
    target.className = "edit_div"; // from "hidden_class"
  }

  open_comment_list() {
    this.hide_show_divs(["comment_wrapper"],true);
  }

  close_comment_list() {
    this.hide_show_divs(["comment_wrapper"],false)
  }

  decode_example(s) {
    var data = "";
    eval("data = example_" + s);
    this.decode_piped_list(data);
  }

  launch_example(s) {
    this.decode_example(s);
    this.plot_graph();
    window.location.href = "#x_scrolldown";
  }

  reset_normal() {
    window.location.href = this.bare_url(window.location.href);
  }

  decode_queries() {
    result = [];
    var path = window.location.href;
    var args = path.replace(/^(.*?)(\?|$)(.*)/,"$3");
    args = this.strip_whitespace(args);
    if(args.length > 0) {
      var array = args.split("&");
      for(var i in array) {
        var pair = array[i].split("=");
        if(pair.length == 2) {
          result[strip_whitespace(pair[0])] = strip_whitespace(pair[1]);
        }
      }
    }
    return result;
  }

  mouse_handler(event) {
    var target;
    if(this.mousedown) {
      if(!event) {
        event = window.event;
      }
      if(event.target) {
        target = event.target;
      }
      else if (event.srcElement) {
        target = event.srcElement;
      }
      if (target.nodeType == 3) { // defeat Safari bug
        target = target.parentNode;
      }
      // When the canvas emulator is in use,
      // the lines on the graph are not normal HTML
      // objects. They belong to G_vml_.
      // So:
      if(target.id == "textPane1" ||
        target.id == "graphicPane1" ||
        target.id == "text_span" ||
        target.scopeName == "g_vml_") {
        // draw a crosshair and values
        var xpos = (event.layerX)?event.layerX:event.x;
        this.draw_mouse_query(xpos);
        return false;
      }
    }
    return true;
  }

  mouse_down(event) {
    this.mousedown = true;
    return this.mouse_handler(event);
  }

  mouse_move(event) {
    if(this.mousedown) {
      this.plot_graph();
      return this.mouse_handler(event);
    }
  }

  mouse_up() {
    this.mousedown = false;
    this.plot_graph();
    return false;
  }

  draw_line(x1,y1,x2,y2) {
    try {
      this.canvas_ctx.moveTo(x1,y1);
      this.canvas_ctx.lineTo(x2,y2);
    }
    catch(err) {
      this.error_flag = true;
    }
  }

  // interpolate x from xa,xb -> ya,yb

  ntrp(x,xa,xb,ya,yb) {
    var q = xb-xa;
    if(q == 0) return 0;
    return (x-xa) * (yb-ya)/q + ya;
  }

  plot_grid() {
    this.canvas_ctx.beginPath();
    var px,py;
    var ox = null;
    var oy = null;
    this.canvas_ctx.strokeStyle = this.grid_color;
    for (var x = 0;x <= this.x_axis_data.steps; x++) {
      px = this.ntrp(x,0,this.x_axis_data.steps,this.graph_dims.xl,this.graph_dims.xh);
      // deal with a perfectly insane canvas bug
      px = parseInt(px) + 0.5;
      this.draw_line(px,this.graph_dims.yl,px,this.graph_dims.yh);
    }
    for (var y = 0;y <= this.y_axis_data.steps; y++) {
      py = this.ntrp(y,0,this.y_axis_data.steps,this.graph_dims.yl,this.graph_dims.yh);
      // deal with a perfectly insane canvas bug (again)
      py = parseInt(py) + 0.5;
      this.draw_line(this.graph_dims.xl,py,this.graph_dims.xh,py);
    }
    this.canvas_ctx.stroke();
    this.canvas_ctx.closePath();
  }

  plot_points() {
    var fc = Math.PI * 2;
    this.canvas_ctx.fillStyle = this.point_color;
    this.canvas_ctx.lineWidth = 1;
    this.canvas_ctx.beginPath();
    var pr,px,py;
    for(var i in this.xy_data) {
      pr = this.xy_data[i];
      px = this.ntrp(pr.x,this.x_axis_data.gmin,this.x_axis_data.gmax,this.graph_dims.xl,this.graph_dims.xh);
      py = this.ntrp(pr.y,this.y_axis_data.gmin,this.y_axis_data.gmax,this.graph_dims.yh,this.graph_dims.yl);
      this.canvas_ctx.moveTo(px,py);
      this.canvas_ctx.arc(px,py,3,0,fc);
      this.canvas_ctx.fill();
    }
    this.canvas_ctx.closePath();
  }

  plot_function() {
    this.canvas_ctx.strokeStyle = this.plot_color;
    this.canvas_ctx.beginPath();
    var ax,px;
    var y,py;
    var steps = 500;
    for(var x = 0;x <= steps;x++) {
      ax = this.ntrp(x,0,steps,this.x_axis_data.min,this.x_axis_data.max);
      px = this.ntrp(ax,this.x_axis_data.gmin,this.x_axis_data.gmax,this.graph_dims.xl,this.graph_dims.xh);
      y = this.matf.regress(ax,this.poly_terms);
      py = this.ntrp(y,this.y_axis_data.gmin,this.y_axis_data.gmax,this.graph_dims.yh,this.graph_dims.yl);
      try {
        if(x == 0) {
          this.canvas_ctx.moveTo(px,py);
        }
        else {
          this.canvas_ctx.lineTo(px,py);
        }
      }
      catch(err) {
        this.error_flag = true;
      }
    }
    this.canvas_ctx.stroke();
    this.canvas_ctx.closePath();
  }

  clearChildren(obj)
  {
    try {
      if(obj.hasChildNodes() && obj.childNodes) {
        while(obj.firstChild) {
          obj.removeChild(obj.firstChild);
        }
      }
    }
    catch(e) {
    }
  }

  create_text_span(s,ps) {
    var tsp = document.createElement('span');
    tsp.id = "text_span";
    var ts = tsp.style;
    ts.fontSize = ps;
    ts.whiteSpace = "nowrap";
    ts.fontFamily = "monospace";
    var tn = document.createTextNode(s);
    tsp.appendChild(tn);
    return tsp;
  }

  create_index_span(parent,str,x,y,max,align,ps) {
    var tsp = this.create_text_span(str,ps);
    parent.appendChild(tsp);
    var ts = tsp.style;
    ts.position = "absolute";
    ts.textAlign = align;
    ts.width = (max*8) + "px"
    ts.left = x + "px";
    ts.top = y + "px";
  }

  gen_y_index(obj) {
    var text_delta = 12;
    var maxw = this.y_axis_data.label.length;
    var w;
    var array = [];
    for(var i = 0;i <= this.y_axis_data.steps;i++) {
      var y = this.ntrp(i,0,this.y_axis_data.steps,this.y_axis_data.gmin,this.y_axis_data.gmax);
      //for(var y = y_axis_data.gmin;y <= y_axis_data.gmax;y += y_axis_data.increm) {
      var py = this.ntrp(i,0,this.y_axis_data.steps,this.graph_dims.yh,this.graph_dims.yl);
      var sy = y.toFixed(2);
      array.push(sy + "\t" + py);
      var w = ("" + sy).length;
      maxw = (w > maxw)?w:maxw;
    }
    // create y axis label
    this.canvas_ctx.fillText(this.y_axis_data.label,32,this.graph_dims.yl-text_delta);
    var pair;
    // create Y axis index
    for(i in array) {
      var pair = array[i].split("\t");
      this.canvas_ctx.fillText(pair[0],16,parseInt(pair[1])+4);
    }
    this.graph_dims.xl += (maxw * 8);
  }

  gen_x_index(obj) {
    this.canvas_ctx.strokeStyle = this.text_color;
    var deltax = 0;
    var maxw = this.x_axis_data.label.length;
    var text_delta = 16;
    var w;
    var array = [];
    for(var x = 0;x <= this.x_axis_data.steps;x++) {
      var px = this.ntrp(x,0,this.x_axis_data.steps,this.x_axis_data.gmin,this.x_axis_data.gmax);
      var sx = px.toFixed(2);
      array.push(sx + "\t" + px);
      w = ("" + sx).length;
      maxw = (w > maxw)?w:maxw;
    }
    var len = this.x_axis_data.label.length;
    var maxx = (maxw > len)?len:maxw;
    this.graph_dims.xh -= maxx * 8;
    // create x axis index
    for(var i in array) {
      var pair = array[i].split("\t");
      var px = this.ntrp(pair[1],this.x_axis_data.gmin,this.x_axis_data.gmax,this.graph_dims.xl,this.graph_dims.xh);
      this.canvas_ctx.fillText(pair[0],px-maxw*4,this.graph_dims.yh+text_delta);
    }
    // create x axis label
    this.canvas_ctx.fillText(this.x_axis_data.label,this.graph_dims.xh+24,this.graph_dims.yh+text_delta);

  }

  graph_indices() {
    this.canvas_ctx.font = "13px Monospace";
    this.canvas_ctx.fillStyle = this.text_color;
    //if(this.text_div != null) {
    if(this.y_axis_data.nums) {
      this.gen_y_index(this.text_div);
    } // x axis index
    if(this.chart_title.length > 0) {
      var title = this.chart_title;//.replace(/\?/,plot_function_2d);
      var center = (this.graph_dims.xl + this.graph_dims.xh-(title.length*10))/2;
      //this.create_index_span(this.text_div,title,center,4,title.length,"center","100%");
      this.canvas_ctx.fillText(title,center,16);
    }
    if(this.x_axis_data.nums) {
      this.gen_x_index(this.text_div);
    } // y axis index
    //} // text_div != null
  } // graph_title()

  set_dimensions() {
    var bottom = this.canvas.height - this.bottom_margin;
    var left = this.left_margin + ((this.x_axis_data.nums)?16:0);
    var right = this.canvas.width - this.right_margin - ((this.x_axis_data.nums)?16:0);
    var top = this.top_margin + ((this.chart_title.length > 0 || this.y_axis_data.nums)?20:0);
    this.graph_dims = new GraphDim(left,right,top,bottom);
  }

  update_axis_data() {
    this.chart_title = "";
    if(this.xy_data != null) {
      this.chart_title = "Polynomial degree " + this.poly_degree + " with " + this.xy_data.length + " data points.";
    }
  }

  valid_test() {
    return (this.xy_data != null);
  }

  plot_graph() {
    if (!this.valid_test()) {
      return false;
    }
    this.clearChildren(this.text_div);
    this.canvas_ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.update_axis_data();
    if((this.x_axis_data.max > this.x_axis_data.min) &&
      (this.y_axis_data.max > this.y_axis_data.min) &&
      this.x_axis_data.increm > 0 &&
      this.y_axis_data.increm > 0 &&
      this.plot_steps > 0) {
      this.error_flag = false;
      this.set_dimensions();
      this.graph_indices();
      if(!this.error_flag) {
        this.canvas_ctx.globalAlpha = 1;
        this.canvas_ctx.lineWidth = "" + this.linewidth;
        this.canvas_ctx.lineCap = "round";
        this.plot_grid();
        this.plot_points();
        this.plot_function();
      }
    }
    else { // range error
      this.show_graph_error("Numerical range");
    }
    this.show_results();
    return true;
  }

  show_graph_error(str) {
    this.clearChildren(this.text_div);
    this.canvas_ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    var xm = this.canvas.width/2;
    var ym = this.canvas.height/2;
    this.create_index_span(this.text_div,'Error: ' + str,xm-(str.length*4),ym,str.length,"center","120%");
  }

  draw_mouse_query(x) {
    this.canvas_ctx.lineWidth = 1;
    var fx = this.ntrp(x,this.graph_dims.xl,this.graph_dims.xh,this.x_axis_data.gmin,this.x_axis_data.gmax);
    var y = this.matf.regress(fx,this.poly_terms);
    var px = this.ntrp(fx,this.x_axis_data.gmin,this.x_axis_data.gmax,this.graph_dims.xl,this.graph_dims.xh);
    px = parseInt(px) + 0.5;
    var py = this.ntrp(y,this.y_axis_data.gmin,this.y_axis_data.gmax,this.graph_dims.yh,this.graph_dims.yl);
    py = parseInt(py) + 0.5;
    this.canvas_ctx.strokeStyle = this.explore_color;
    this.canvas_ctx.beginPath();
    this.draw_line(this.graph_dims.xl,py,this.graph_dims.xh,py);
    this.draw_line(px,this.graph_dims.yl,px,this.graph_dims.yh);
    this.canvas_ctx.stroke();
    this.canvas_ctx.closePath();
    this.canvas_ctx.strokeStyle = this.text_color;
    var str = "x = " + fx.toFixed(6) + ", y = " + y.toFixed(6);
    // decide where to put the number tag
    if(fx > (this.x_axis_data.min+this.x_axis_data.max)/2) {
      px -= (str.length * 8) + 4;
    }
    else {
      px += 8;
    }
    if(y < (this.y_axis_data.min+this.y_axis_data.max)/2) {
      py -= 20;
    }
    else {
      py += 4;
    }
    this.create_index_span(this.text_div,str,px,py,str.length,"left",this.default_font_size);
  }

  adjust_degree(w) {
    this.reverse_xy = this.reverse_checkbox.checked;
    this.read_data();
    if(w != null) {
      this.poly_degree += parseFloat(w);
    }
    this.poly_degree = Math.max(0,this.poly_degree);
    if(this.xy_data != null) {
      this.poly_degree = Math.min(this.xy_data.length-1,this.poly_degree);
    }
    this.compute_polynomial();
    this.plot_graph();
  }

  read_data() {
    this.xy_data = null;
    var xl = 1e30;
    var xh = -1e30;
    var yl = 1e30;
    var yh = -1e30;
    var sd = this.data_entry.value;
    // try to filter numerical data from an arbitrary input
    var strings = sd.match(/([0-9\.e+-]+)/gim,"$1");
    if(strings != null && strings.length > 0) {
      var array = [];
      for(var i in strings) {
        var s = strings[i];
        // only if the string contains at least one numerical digit
        if(s.match(/.*[0-9].*/)) {
          array.push(parseFloat(strings[i]));
        }
      }
      var len = array.length;
      if(len % 2 != 0) {
        this.show_graph_error("Unpaired data (x count != y count).");
        return false;
      }
      else {
        //console.debug(array);
        this.xy_data = new Array();
        for(var i = 0;i < len;i += 2) {
          if(this.reverse_xy) {
            x = parseFloat(array[i+1]);
            y = parseFloat(array[i]);
          }
          else {
            var x = parseFloat(array[i]);
            var y = parseFloat(array[i+1]);
          }
          xl = Math.min(x,xl);
          xh = Math.max(x,xh);
          yl = Math.min(yl,y);
          yh = Math.max(yh,y);
          this.xy_data.push(new Pair(x,y));
        }
        this.x_axis_data = new AxisData(xl,xh,12,'x',true);
        this.y_axis_data = new AxisData(yl,yh,8,'y',true);
        this.id("table_start").value = xl;
        this.id("table_end").value = xh;
        this.id("table_step").value = (xh-xl) / 20.0;
      }
    }
    else {
      this.show_graph_error("No data.");
      return false;
    }
    return true;
  }

  compute_polynomial() {
    if(!this.valid_test()) {
      return false;
    }
    this.id("poly_degree_field").innerHTML = this.poly_degree
    var result = this.matf.process_data(this.xy_data,this.poly_degree);
    this.poly_terms = result[0];
    this.correlation_coefficient = result[1];
    this.standard_error = result[2];
    return true;
  }

  generate_result() {
    this.read_data();
    this.compute_polynomial();
    this.plot_graph();
  }

  set_optimum() {
    this.read_data();
    this.poly_degree = this.xy_data.length - 1;
    this.compute_polynomial();
    this.plot_graph();
  }

  change_output_form() {
    this.output_form = (this.output_form += 1) % this.form_labels.length;
    this.generate_result();
  }

  show_results() {
    var results = "Mode: " + (this.reverse_xy?"reversed (x,y = y,x) analysis":"normal x,y analysis") + "\n";
    results += "Polynomial degree " + this.poly_degree + ", " + this.xy_data.length + " x,y data pairs.\n";
    results += "Correlation coefficient = " + this.correlation_coefficient + "\n";
    results += "Standard error = " + this.standard_error + "\n\n";
    results += "Output form: " + this.form_labels[this.output_form] + ":\n\n";
    results += this.parse_results();
    this.id("results_area").value = results;
  }

  fix_exponent(v) {
    v = v.toExponential(16);
    var exp = v.replace(/.*e[+-](\d+)$/,"$1");
    while(exp.length < 3) {
      exp = '0' + exp;
    }
    v = v.replace(/(.*e[+-])(\d+)$/,"$1" + exp);
    return v;
  }

  parse_results() {
    var indent = [26,37,45,50];
    var iv = indent[this.output_form];
    var result = "";
    var len = this.poly_terms.length;
    for (var i in this.poly_terms) {
      var v = this.poly_terms[i];
      v = this.fix_exponent(v);
      v = this.right_align(v,24);
      switch(this.output_form) {
        case 0:
          result += v + "\n";
        break;
        case 1:
        if(result.length == 0) {
          result = "f(x) = "
          } else {
          result += "     + ";
        }
        result += v + " * x^" + i + "\n";
        break;
        default:
          var comma = ((i < this.poly_terms.length-1)?",":"");
        result += "    " + v + comma + "\n";
      }
    }
    if(this.output_form >= 2) {
      var body = this.funct_array[this.output_form-2];
      body = body.replace(/TERMS/m,result);
      result = body;
    }
    result += "\n\nCopyright (c) 2019, P. Lutus -- http://arachnoid.com. All Rights Reserved.\n";
    return result;
  }

  right_align(s,n) {
    while(s.length < n) {
      s = " " + s;
    }
    return s
  }

  create_table_row(x,start,end,decimals,exp) {
    var y = this.matf.regress(x,this.poly_terms);
    var pct = this.ntrp(x,start,end,0,100);
    var xs,ys,pcs;
    if(exp) {
      xs = x.toExponential(decimals);
      ys = y.toExponential(decimals);
      pcs = pct.toExponential(decimals);
    }
    else {
      xs = x.toFixed(decimals);
      ys = y.toFixed(decimals);
      pcs = pct.toFixed(decimals);
    }
    return xs + "," + ys + "," + pcs + "\n";
  }

  generate_table() {
    var exp = this.id("table_exponent").checked
    var start = this.float_id("table_start");
    var end = this.float_id("table_end");
    var step = this.float_id("table_step");
    var decimals = this.float_id("table_decimals");
    var result = "x,y,%\n";
    var row = "";
    if (step == 0) {
      this.table_data.value = "Error: numerical range.";
      return false;
    }
    else {
      for(var x = start; x <= end;x += step) {
        row = this.create_table_row(x,start,end,decimals,exp);
        result += row;
      }
      var lastrow = this.create_table_row(end,start,end,decimals,exp);
      if(lastrow != row) {
        result += lastrow;
      }
      this.table_data.value = result;
    }
  }

  generate_graphic() {
    var dataURL = this.canvas.toDataURL("image/png");
    var win = window.open();
    win.document.write('<html><head><title>Polynomial Regression Chart</title></head><body><iframe src="' + dataURL, '" width=' + (this.canvas.width+16) + ' height=' + (this.canvas.height+16) + ' style="background-color:white;border:1px solid #c0c0c0;"></iframe></body></html>');
  }

  setup_function_strings() {

    this.cppFunct = "double regress(double x) {\n  double terms[] = {\nTERMS};\n  \n  double t = 1;\n  double r = 0;\n  for (double c : terms) {\n    r += c * t;\n    t *= x;\n  }\n  return r;\n}";
    this.cFunct = "double regress(double x) {\n  double terms[] = {\nTERMS};\n  \n  size_t csz = sizeof terms / sizeof *terms;\n  \n  double t = 1;\n  double r = 0;\n  for (int i = 0; i < csz;i++) {\n    r += terms[i] * t;\n    t *= x;\n  }\n  return r;\n}";
    this.pyFunct = "terms = [\nTERMS]\n\ndef regress(x):\n  t = 1\n  r = 0\n  for c in terms:\n    r += c * t\n    t *= x\n  return r";
    this.javaFunct = "double regress(double x) {\n    double terms[] = {\nTERMS};\n    \n    double t = 1;\n    double r = 0;\n    for (double c : terms) {\n      r += c * t;\n      t *= x;\n    }\n    return r;\n}";
    this.javascriptFunct = "terms = [\nTERMS];\n\nregress(x, terms) {\n    var r = 0;\n    var t = 1;\n    for (var i in terms) {\n      r += terms[i] * t;\n      t *= x;\n    }\n    return r;\n}";

    this.funct_array = [this.cFunct,this.cppFunct,this.javaFunct,this.javascriptFunct,this.pyFunct];
  }

  close() {
    this.write_cookie();
  }

  write_cookie() {
    // save cookie of user data
    // cannot exceed 4096 bytes
    // escape linefeeds
    var data = this.data_entry.value.replace(/\n/gm,"\\n");
    // escape semicolons so cookie syntax works
    data = data.replace(/;/g,"###");
    //console.log(data);
    // set max-age to 90 days
    var ageString = ";max-age=7776000;";
    document.cookie = "data=" + data + ageString;
    document.cookie = "degree=" + this.poly_degree + ageString;
    document.cookie = "reverse=" + this.reverse_xy + ageString;
    document.cookie = "output=" + this.output_form + ageString;
  }

  read_cookie() {
    // if there is a cookie
    if(document.cookie) {
      //console.log("have cookie: " + document.cookie);
      // capture definition of user_data
      if(document.cookie.match(/data=/)) {
        var data = document.cookie.replace(/.*?data=(.*?);.*/m,"$1");
        if(data) {
          // unescape semicolons
          data = data.replace(/###/g,";");
          // unescape linefeeds
          data = data.replace(/\\n/g,"\n");
          this.data_entry.value = data;
        }
      }

      if(document.cookie.match(/output=/)) {
        var output = document.cookie.replace(/.*?output=(.*?);.*/m,"$1");
        this.output_form = parseInt(output);
      }

      if(document.cookie.match(/degree=/)) {
        var degree = document.cookie.replace(/.*?degree=(.*?);.*/m,"$1");
        this.poly_degree = parseInt(degree);
        this.adjust_degree();
      }
      if(document.cookie.match(/reverse=/)) {
        var reverse = document.cookie.replace(/.*?reverse=(.*?);.*/m,"$1");
        this.reverse_xy = reverse === "true";
        this.reverse_checkbox.checked = this.reverse_xy;
      }
    }
  }


} // end of PolySolve class

var polysolve;

addEvent(window,'load',function() { polysolve = new PolySolve() });
addEvent(window,'unload',function() { if(polysolve) { polysolve.close() }});
