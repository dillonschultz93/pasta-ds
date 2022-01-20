---
project_id: FFL # 3-letter code
title: Typography Old 02 # title case
permalink: farfalle/primitives/typography-old-02 # lowercase + use hyphens › https://tinyurl.com/27kmc4rb
grand_parent: Farfalle # title case
parent: Primitives # title case
layout: default
nav_order: 91
nav_exclude: true
---

<!-- chartist.js + plugins -->
<script type="text/javascript" src="{{site.baseurl}}/assets/js/libs/chartist.min.js"></script>
<script type="text/javascript" src="{{site.baseurl}}/assets/js/libs/chartist-plugin-legend.min.js"></script>
<script type="text/javascript" src="{{site.baseurl}}/assets/js/libs/chartist-plugin-axistitle.min.js"></script>
<script type="text/javascript" src="{{site.baseurl}}/assets/js/libs/chartist-plugin-zoom.min.js"></script>
<link rel="stylesheet" href="{{site.baseurl}}/assets/css/chartist.css">
<!-- end chartist calls -->


# Typo Test `{{ page.project_id }}`

## Font family Apparatus

<script type="text/javascript" src="{{site.baseurl}}/assets/js/pasta-typo.js" defer></script>

<section class="apparati" markdown="1" data-typo-id="AppleNY" data-apparatus="typo-family">
  <div class="typo-familly-table" id=""></div>
  <script type="text/javascript" id=""></script>
</section>

## Font Leading Apparatus

<section class="apparati" markdown="1" data-typo-id="AppleNY" data-apparatus="typo-leading">
  <div class="typo-leading-table" id=""></div>
  <div class="typo-paragraphSpacing-table" id=""></div>
</section>


<section class="apparati" markdown="1" data-typo-id="AppleNY" data-apparatus="typo-tracking">
## Font Tracking Apparatus
  <details open>
    <summary>Tracking/font-size Graphs</summary>
    <div class="flex-1_1-cols">
      <div>
        <div class="ct-chart ct-minor-third typo-tracking-graph-left" id="typo_tracking_typo_name_1"></div>

      </div>
      <div>
        <div class="ct-chart ct-minor-third typo-tracking-graph-left" id="typo_tracking_typo_name_2"></div>
      </div>
    </div>
  </details>
  <div class="typo-tracking_table" id="typo_tracking_table"></div>
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
