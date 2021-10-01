---
title: Typo Test # title case
permalink: farfalle/primitives/typo-test # lowercase + use hyphens › https://tinyurl.com/27kmc4rb
grand_parent: Farfalle # title case
parent: Primitives # title case
layout: default
nav_order: 0
---

<script type="text/javascript" src="{{site.baseurl}}/assets/js/libs/chartist.min.js"></script>
<script type="text/javascript" src="{{site.baseurl}}/assets/js/libs/chartist-plugin-legend.min.js"></script>
<script type="text/javascript" src="{{site.baseurl}}/assets/js/libs/chartist-plugin-axistitle.min.js"></script>
<script type="text/javascript" src="{{site.baseurl}}/assets/js/libs/chartist-plugin-zoom.min.js"></script>
<link rel="stylesheet" href="{{site.baseurl}}/assets/css/chartist.css">


# Typo Test `FFL`

## Font Familly Apparatus

<section class="apparati" markdown="1">
  <script type="text/javascript" id="">
  </script>
</section>

## Font Leading Apparatus

### Includes Paragraph Spacing

<section class="apparati" markdown="1">
  <script type="text/javascript" id="">
  </script>
</section>


<section class="apparati" markdown="1">
## Font Tracking Apparatus



  <section class="flex-1_1-cols">
    <div>
      <div class="ct-chart ct-minor-third" id="typo_tracking_typo_name_1"></div>

    </div>
    <div>
      <div class="ct-chart ct-minor-third" id="typo_tracking_typo_name_2"></div>
    </div>
  </section>

  <div class="" id="typo_tracking_table"></div>


  <script type="text/javascript" src="{{site.baseurl}}/assets/js/pasta-typo.js"></script>



  <script type="text/javascript" id="">

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
  </script>



</section>





<section class="apparati" markdown="1">

### Tracking: Apple New York

In the graphs below are represented in gray the [hand-picked tracking](https://developer.apple.com/design/human-interface-guidelines/ios/visual-design/typography/#tracking-values) used by Apple for their New York font.<br>
In black is a [function approximation](https://arachnoid.com/polysolve/) ([Simplified](https://planetcalc.com/5992/)) built using these values. On the left is a regression model using the 6pt to 25pt subset (high variability), on the right the regression used the full data set (6 to 250pt).

<section class="flex-1_1-cols">
  <div>
    <div class="ct-chart ct-minor-third" id="NY_Tracking-01"></div>

  </div>
  <div>
    <div class="ct-chart ct-minor-third" id="NY_Tracking-02"></div>
  </div>
</section>

```text
// Cubic Regression using values from 6pt to 25pt (first graph)
y = 0.000098338344 x^3 + 0.004498114619 x^2 + 0.033187031556 x + 0.1710922878

// Cubic Regression using values from 6pt to 256pt (second graph)
y = -0.000000173824 x^3 + 0.000063535203 x^2 - 0.023870765976 x + 0.329412022273
```


<script type="text/javascript" id="chartist-2-charts">

  const rawData = [
    {x:6, y:0.23},{x:7, y:0.22},{x:8, y:0.20},{x:9, y:0.18},{x:10, y:0.15},{x:11, y:0.12},{x:12, y:0.07},{x:13, y:0.05},{x:14, y:0.03},{x:15, y:0.00},{x:16, y:-0.03},{x:17, y:-0.07},{x:18, y:-0.11},{x:19, y:-0.15},{x:20, y:-0.20},{x:21, y:-0.21},{x:22, y:-0.23},{x:23, y:-0.25},{x:24, y:-0.26},{x:25, y:-0.27},{x:26, y:-0.29},{x:27, y:-0.32},{x:28, y:-0.33},{x:29, y:-0.34},{x:30, y:-0.37},{x:31, y:-0.39},{x:32, y:-0.41},{x:33, y:-0.42},{x:34, y:-0.45},{x:35, y:-0.48},{x:36, y:-0.49},{x:38, y:-0.52},{x:40, y:-0.55},{x:42, y:-0.57},{x:44, y:-0.62},{x:46, y:-0.65},{x:48, y:-0.68},{x:50, y:-0.71},{x:52, y:-0.74},{x:54, y:-0.79},{x:58, y:-0.85},{x:62, y:-0.91},{x:66, y:-0.97},{x:70, y:-1.06},{x:72, y:-1.09},{x:80, y:-1.21},{x:88, y:-1.33},{x:96, y:-1.50},{x:100, y:-1.56},{x:120, y:-1.88},{x:140, y:-2.26},{x:160, y:-2.58},{x:180, y:-2.99},{x:200, y:-3.32},{x:220, y:-3.76},{x:240, y:-4.22},{x:260, y:-4.57}
  ];

  const chartDataZoom = rawData.slice(0,20);

  var mathSerie1 = [];
  var mathSerie1Zoom = [];

  for (let i = 6; i < 261; i += 2) {
    let plotY = -0.000000173824*i**3 + 0.000063535203*i**2 - 0.023870765976*i + 0.329412022273;
    mathSerie1.push({x:i, y:plotY});
    if (i<27) {
      mathSerie1Zoom.push({x:i, y:plotY});
    }
  }

  var mathSerie2 = [];
  var mathSerie2Zoom = [];

  for (let i = 6; i < 261; i += 2) {
    let plotY = 0.000098338344*i**3 - 0.004498114619*i**2 + 0.033187031556*i + 0.1710922878;
    mathSerie2.push({x:i, y:plotY});
    if (i<26) {
      mathSerie2Zoom.push({x:i, y:plotY});
    }
  }


  var chartData1 = {
    series: [
      {
        name: "Hand-picked",
        data: chartDataZoom
      },
      {
        name: "Interpolation",
        data: mathSerie2Zoom
      },
    ]
  };

  new Chartist.Line('#NY_Tracking-01', chartData1, {
    high: 0.3,
    low: -0.3,
    showArea: false,
    showLine: true,
    showPoint: false,
    fullWidth: true,
    axisX: {
      type: Chartist.FixedScaleAxis,
      ticks: [6,10,15,20,25,30]
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
        axisTitle: 'Y: Tracking · X: Font Size · Unit: Pt',
        axisClass: 'ct-axis-title',
        offset: {
          x: 0,
          y: 45
        },
        textAnchor: 'middle'
      }
    }),
        Chartist.plugins.legend(),
    ]
  });

  var chartData2 = {
    series: [
      {
        name: "Hand-picked",
        data: rawData
      },
      {
        name: "Interpolation",
        data: mathSerie1
      }
    ]
  };

  new Chartist.Line('#NY_Tracking-02', chartData2, {
    high: 0.3,
    low: -5,
    showArea: false,
    showLine: true,
    showPoint: false,
    fullWidth: true,
    axisX: {
      type: Chartist.FixedScaleAxis,
      ticks: [6, 50, 100, 150, 200, 250, 300]
    },
    axisY: {
      onlyInteger: true,
      offset: 20
    },
    chartPadding: {
       right: 28,
       bottom: 80,
       left: 0
   },
    plugins: [
      Chartist.plugins.ctAxisTitle({
        axisX: {
          axisTitle: 'Y: Tracking · X: Font Size · Unit: Pt',
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
  });
</script>










### Tracking: Yummly Europa


<section class="flex-1_1-cols">
  <div>
    <div class="ct-chart ct-minor-third" id="EuropaTracking-01"></div>

  </div>
  <div>
    <div class="ct-chart ct-minor-third" id="EuropaTracking-02"></div>
  </div>
</section>

```text
// Cubic Regression using values from 10pt to 96pt

y = -0.000022628223 x^3 + 0.003632069507 x^2 - 0.198814673791 x + 2.751435636573
```



<script type="text/javascript" id="chartist-2-charts">

  const rawData2 = [
    {x:10, y:1}, {x:12, y:1.2}, {x:14, y:0.49}, {x:18, y:0}, {x:20, y:0}, {x:24, y:-0.24}, {x:28, y:-0.28}, {x:32, y:-0.64}, {x:48, y:-0.96}, {x:96, y:-2.88}
  ];

  const chartDataZoom2 = rawData2.slice(0,8);

  var mathSerie1b = [];
  rawData2.forEach((item, i) => {
    let plotY = -0.000022628223*item["x"]**3 + 0.003632069507*item["x"]**2 - 0.198814673791*item["x"] + 2.751435636573;
    mathSerie1b.push({x:item["x"], y:plotY});
  });
  const mathSerie1bZoom = mathSerie1b.slice(0,8);

  var mathSerie2b = [];
  chartDataZoom2.forEach((item, i) => {
    let plotY = -0.000022628223*item["x"]**3 + 0.003632069507*item["x"]**2 - 0.198814673791*item["x"] + 2.751435636573;
    mathSerie2b.push({x:item["x"], y:plotY});
  });


  terms = [
      -1.9120284322307936e+002,
       6.8274757983423385e+001,
      -1.0026774764041594e+001,
       7.9748601572599476e-001,
      -3.7670975453373230e-002,
       1.0808774899546266e-003,
      -1.8308522988294640e-005,
       1.6581277090454915e-007,
      -6.0465974075311366e-010
  ];
  function regress(x, terms) {
      var r = 0;
      var t = 1;
      for (var i in terms) {
        r += terms[i] * t;
        t *= x;
      }
      return r;
  }

  var mathSerie3b = [];
  var mathSerie3bZoom = [];

  for (let i = 10; i < 40; i += 2) {
    let plotY = regress(i,terms);
    mathSerie3b.push({x:i, y:plotY});
    if (i<34) {
      mathSerie3bZoom.push({x:i, y:plotY});
    }
  }

  var chartData1b = {
    series: [
      {
        name: "Hand-picked",
        data: chartDataZoom2
      },
      {
        name: "Polynomial 3º",
        data: mathSerie2b
      },
      {
        name: "Polynomial 8º",
        data: mathSerie3bZoom
      }
    ]
  };

  new Chartist.Line('#EuropaTracking-01', chartData1b, {
    showArea: false,
    showLine: true,
    showPoint: false,
    fullWidth: true,
    axisX: {
      type: Chartist.FixedScaleAxis,
      ticks: [10, 15, 20, 25, 30, 35]
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
        axisTitle: 'Y: Tracking · X: Font Size · Unit: Pt',
        axisClass: 'ct-axis-title',
        offset: {
          x: 0,
          y: 45
        },
        textAnchor: 'middle'
      }
    }),
        Chartist.plugins.legend(),
    ]
  });

  var chartData2b = {
    series: [
      {
        name: "Hand-picked",
        data: rawData2
      },
      {
        name: "Polynomial 3º",
        data: mathSerie1b
      },
      {
        name: "Polynomial 8º",
        data: mathSerie3b
      }
    ]
  };

  new Chartist.Line('#EuropaTracking-02', chartData2b, {
    high: 0.3,
    low: -5,
    showArea: false,
    showLine: true,
    showPoint: false,
    fullWidth: true,
    axisX: {
      type: Chartist.FixedScaleAxis,
      ticks: [10, 20, 30, 40, 50, 60, 70, 80, 90]
    },
    axisY: {
      onlyInteger: true,
      offset: 20
    },
    chartPadding: {
       right: 28,
       bottom: 80,
       left: 0
   },
    plugins: [
      Chartist.plugins.ctAxisTitle({
        axisX: {
          axisTitle: 'Y: Tracking · X: Font Size · Unit: Pt',
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
  });
</script>

</section>


## Headings


# This should be Europa Font, Inside Pasta!
{: .Europa-ed-b}
# Europa regular
{: .Europa-ed-r}
# Europa Light
{: .Europa-ed-l}

WIP · Image Placeholder

![]({{site.baseurl}}/assets/images/YPL-DOC-typography-headings.png)

## Paragraphs

WIP · Image Placeholder

![]({{site.baseurl}}/assets/images/YPL-DOC-typography-paragraphs.png)

## Captions

WIP · Image Placeholder

![]({{site.baseurl}}/assets/images/YPL-DOC-typography-captions.png)
