function findMinMax(arr,targetKey) {
  let min = arr[0][targetKey], max = arr[0][targetKey];
  for (let i = 1, len=arr.length; i < len; i++) {
    let v = arr[i][targetKey];
    min = (v < min) ? v : min;
    max = (v > max) ? v : max;
  }
  return [min, max];
}
function findKeyIndex(arr,targetKey,targetValue) {
  let index = 0;
  for (let i = 0, len=arr.length; i < len; i++) {
    index = i;
    if (arr[i][targetKey] == targetValue) {
        break
    }
  }
  return index;
}
function findClosestSupKeyIndex(arr,targetKey,targetValue) {
  let index = 0;
  for (let i = 0, len=arr.length; i < len; i++) {
    index = i;
    if (arr[i][targetKey] >= targetValue) {
        break
    }
  }
  return index;
}
function regress(x, terms) {
    var r = 0;
    var t = 1;
    for (var i in terms) {
      r += terms[i] * t;
      t *= x;
    }
    return r;
}

const projectId = "FFL";
const typo_family_id = "AppleNY";
const typo_tracking_raw_data = [
  {x:6, y:0.23}, {x:7, y:0.22}, {x:8, y:0.20}, {x:9, y:0.18}, {x:10, y:0.15}, {x:11, y:0.12}, {x:12, y:0.07}, {x:13, y:0.05}, {x:14, y:0.03}, {x:15, y:0.00}, {x:16, y:-0.03}, {x:17, y:-0.07}, {x:18, y:-0.11}, {x:19, y:-0.15}, {x:20, y:-0.20}, {x:21, y:-0.21}, {x:22, y:-0.23}, {x:23, y:-0.25}, {x:24, y:-0.26}, {x:25, y:-0.27}, {x:26, y:-0.29}, {x:27, y:-0.32}, {x:28, y:-0.33}, {x:29, y:-0.34}, {x:30, y:-0.37}, {x:31, y:-0.39},
  {x:32, y:-0.41},
  {x:33, y:-0.42}, {x:34, y:-0.45}, {x:35, y:-0.48}, {x:36, y:-0.49}, {x:38, y:-0.52}, {x:40, y:-0.55}, {x:42, y:-0.57}, {x:44, y:-0.62}, {x:46, y:-0.65}, {x:48, y:-0.68}, {x:50, y:-0.71}, {x:52, y:-0.74}, {x:54, y:-0.79}, {x:58, y:-0.85}, {x:62, y:-0.91}, {x:66, y:-0.97}, {x:70, y:-1.06}, {x:72, y:-1.09}, {x:80, y:-1.21}, {x:88, y:-1.33}, {x:96, y:-1.50}, {x:100, y:-1.56}, {x:120, y:-1.88}, {x:140, y:-2.26}, {x:160, y:-2.58}, {x:180, y:-2.99}, {x:200, y:-3.32}, {x:220, y:-3.76}, {x:240, y:-4.22}, {x:260, y:-4.57}];

var typo_tracking_polyTerms_A = [
   3.6894866758367006e-002,
   7.8695512950762964e-002,
  -9.8107273906328802e-003,
   3.5325210292512206e-004,
  -4.2861117001397037e-006
];
var typo_tracking_polyThreshold = 32;

var typo_tracking_polyTerms_B = [
   1.1064758750207103e-001,
  -1.6587029761428184e-002,
   3.2970227119601515e-006,
  -3.5282674297130305e-008
];
var typo_tracking_weightStepUp_coef = 1.05;
var typo_picks = [8,10,12,14,16,20,24,32,48,64,96,240];
var typo_tracking_overrides = [[16,0.2],[96,-1.5]];

var typo_tracking_raw_data_limited = findClosestSupKeyIndex(typo_tracking_raw_data,"x",typo_picks[typo_picks.length-1]);

var lowIndexes = typo_picks.filter(index => index <= typo_tracking_polyThreshold);
var highIndexes = typo_picks.filter(index => index > typo_tracking_polyThreshold);



var typo_tracking_choices_math = [
  ...lowIndexes.map(x => Math.round(((regress(x,typo_tracking_polyTerms_A) + Number.EPSILON) * 100)) / 100),
  ...highIndexes.map(x => Math.round(((regress(x,typo_tracking_polyTerms_B) + Number.EPSILON) * 100)) / 100)
];
var typo_tracking_map = typo_picks.map(function (value, index) { return [value, typo_tracking_choices_math[index]]});
for (let override of typo_tracking_overrides) {
  let j = 0;
  for (let item of typo_tracking_map) {
    if (override[0] === item[0]) {
      typo_tracking_map[j][1] = override[1];
    }
    j += 1;
  }
}

let trackingHTMLTable = document.createElement("table");
var style = document.createElement("style");
style.type = "text/css";
style.id = "Pasta Tokens";
let styleArray = [];

for (let row of typo_tracking_map) {
  let styleName = "." + projectId + "-TKSC_UI-typo-" + typo_family_id + "-letter_Spacing-" + row[0];
  styleArray.push(styleName + " { letter-spacing: " + row[1] + "pt; font-size: " + row[0] + "pt }");
  trackingHTMLTable.insertRow();

  let newCell = trackingHTMLTable.rows[trackingHTMLTable.rows.length - 1].insertCell();
  newCell.textContent = "Size: " + row[0];
  newCell.classList.add("noBorder");
  newCell = trackingHTMLTable.rows[trackingHTMLTable.rows.length - 1].insertCell();
  newCell.textContent = "Tracking: " + row[1];
  newCell.classList.add("noBorder");
  newCell = trackingHTMLTable.rows[trackingHTMLTable.rows.length - 1].insertCell();
  let newCode = document.createElement('code');
  newCode.textContent = styleName.substring(1);
  newCell.classList.add("noBorder");
  newCell.appendChild(newCode);
  trackingHTMLTable.insertRow();


  newCell = trackingHTMLTable.rows[trackingHTMLTable.rows.length - 1].insertCell();
  newCell.colSpan = 3;
  let newSpan = document.createElement('span');
  newSpan.textContent = "Heading & Friends";
  newSpan.classList.add(styleName.substring(1));
  newCell.appendChild(newSpan);
}
style.innerHTML = styleArray.join("\n");
document.getElementsByTagName('head')[0].appendChild(style);
document.getElementById("typo_tracking_table").appendChild(trackingHTMLTable);


highIndexes.unshift(typo_picks[0],typo_tracking_polyThreshold);

var thresholdIndex = findKeyIndex(typo_tracking_raw_data,"x",typo_tracking_polyThreshold);
var yMinAndMax = findMinMax(typo_tracking_raw_data,"y");
var xMinAndMax = findMinMax(typo_tracking_raw_data,"x");

console.log("thresholdIndex: " + thresholdIndex);
console.log("threshold value:" + typo_tracking_raw_data[thresholdIndex].y);
console.log("yMinAndMax: " + yMinAndMax);
console.log("xMinAndMax: " + xMinAndMax);

var poly_A_dotsAll = [];
var poly_A_dotsLow = [];
var poly_B_dotsAll = [];
var poly_B_dotsLow = [];

const yIndexPaddingCoef = 1.05;

for (let i = typo_tracking_raw_data[0].x; i < typo_tracking_raw_data[typo_tracking_raw_data.length-1].x+1; i += 1) {

    var plotAY = regress(i,typo_tracking_polyTerms_A);
    if(plotAY <= yMinAndMax[1]*yIndexPaddingCoef && plotAY >= yMinAndMax[0]*yIndexPaddingCoef) {
      poly_A_dotsAll.push({x:i, y:plotAY});
      if (i <= typo_tracking_polyThreshold){
        poly_A_dotsLow.push({x:i, y:plotAY});
      };
    }

    var plotBY = regress(i,typo_tracking_polyTerms_B);
    if(plotBY <= yMinAndMax[1]*yIndexPaddingCoef && plotBY >= yMinAndMax[0]*yIndexPaddingCoef) {
      poly_B_dotsAll.push({x:i, y:plotBY});
      if (i <= typo_tracking_polyThreshold){
        poly_B_dotsLow.push({x:i, y:plotBY});
      };
    }

};

var graphAdata = {
  series: [
    {
      name: "Hand-picked",
      data: typo_tracking_raw_data.slice(0,thresholdIndex+1)
    },
    {
      name: ["Polynomial ",Object.keys(typo_tracking_polyTerms_B).length-1,"º"].join(""),
      data: poly_B_dotsLow
    },
    {
      name: ["Polynomial ",Object.keys(typo_tracking_polyTerms_A).length-1,"º"].join(""),
      data: poly_A_dotsLow
    }
  ]
};
var Aoptions = {
  high: findMinMax(typo_tracking_raw_data.slice(0,thresholdIndex))[1]*yIndexPaddingCoef,
  low: findMinMax(typo_tracking_raw_data.slice(0,thresholdIndex))[0]*yIndexPaddingCoef,
  showArea: false,
  showLine: true,
  showPoint: false,
  fullWidth: true,
  axisX: {
    type: Chartist.FixedScaleAxis,
    ticks: lowIndexes
  },
  axisY: {
    labelInterpolationFnc: function(value, index) {
      return value*10 % 2 === 0 ? value : null;
    }
  },
  chartPadding: {
     right: 28,
     bottom: 80,
     left: 0
 },
  plugins: [Chartist.plugins.ctAxisTitle({
    axisX: {
      axisTitle: 'y: tracking   x: font-size   ·  unit:Pt',
      axisClass: 'ct-axis-title',
      offset: {
        x: 0,
        y: 45
      },
      textAnchor: 'middle'
    }
  }),
      Chartist.plugins.legend()
  ]
};
new Chartist.Line('#typo_tracking_typo_name_1', graphAdata, Aoptions);

var graphBdata = {
  series: [
    {
      name: "Hand-picked",
      data: typo_tracking_raw_data
    },
    {
      name: ["Polynomial ",Object.keys(typo_tracking_polyTerms_A).length-1,"º"].join(""),
      data: poly_A_dotsAll
    },
    {
      name: ["Polynomial ",Object.keys(typo_tracking_polyTerms_B).length-1,"º"].join(""),
      data: poly_B_dotsAll
    }
  ]
};
var Boptions = {
  high: findMinMax(typo_tracking_raw_data)[1]*yIndexPaddingCoef,
  low: findMinMax(typo_tracking_raw_data)[0]*yIndexPaddingCoef,
  showArea: false,
  showLine: true,
  showPoint: false,
  fullWidth: true,
  axisX: {
    type: Chartist.FixedScaleAxis,
    ticks: highIndexes
  },
  axisY: {
    labelInterpolationFnc: function(value, index) {
      return value*10 % 2 === 0 ? value : null;
    }
  },
  chartPadding: {
     right: 28,
     bottom: 80,
     left: 0
 },
  plugins: [Chartist.plugins.ctAxisTitle({
    axisX: {
      axisTitle: 'y: tracking   x: font-size   ·  unit:Pt',
      axisClass: 'ct-axis-title',
      offset: {
        x: 0,
        y: 45
      },
      textAnchor: 'middle'
    }
  }),
      Chartist.plugins.legend()
  ]
};
new Chartist.Line('#typo_tracking_typo_name_2', graphBdata, Boptions);
