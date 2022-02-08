---
project_id: FFL # 3-letter code
title: Typography # title case
permalink: farfalle/choices/typography # lowercase + use hyphens › https://tinyurl.com/27kmc4rb
grand_parent: Farfalle # title case
parent: Choices # title case
layout: default
nav_order: 20
---
<!-- chartist.js + plugins -->
<script type="text/javascript" src="{{site.baseurl}}/assets/js/libs/chartist.min.js"></script>
<script type="text/javascript" src="{{site.baseurl}}/assets/js/libs/chartist-plugin-legend.min.js"></script>
<script type="text/javascript" src="{{site.baseurl}}/assets/js/libs/chartist-plugin-axistitle.min.js"></script>
<script type="text/javascript" src="{{site.baseurl}}/assets/js/libs/chartist-plugin-zoom.min.js"></script>
<link rel="stylesheet" href="{{site.baseurl}}/assets/css/chartist.css">
<!-- end chartist calls -->

<script type="module" src="{{site.baseurl}}/assets/projects/{{page.project_id}}/js/{{page.parent | downcase}}/{{page.title | downcase}}/{{page.title | downcase}}.js"></script>

# Typography `{{ page.project_id }}`
{: .no_toc}

- TOC
{:toc}

## Font Family Apparatus
Work in progress

## Font Leading Apparatus
Work in progress

<!-- Chart legend -->
  <div class="tracking-chart-legend">
    <div class="tracking-label">
      <div class="handpicked-tracking-label"></div>
      <span>Handpicked</span>
    </div>
    <div class="tracking-label">
      <div class="apparatus-tracking-label"></div>
      <span>Apparatus Interpolation</span>
    </div>
  </div>
<!-- Chart -->
<div style="position: relative;">
  <div class="ct-chart ct-minor-third" id="hand-picked-leading-points">
    <!-- Generated with the typography.js script -->
  </div>

  <div class="ct-chart ct-minor-third" style="position: absolute; top: 0; left: 0;" id="leading-apparatus-output">
    <!-- Generated with the typography.js script -->
  </div>
</div>
## Font Tracking Apparatus

### Exploration

To dynamically generate letter spacing from a given font size we needed to explore the relation between our handpicked font size and tracking. The graph below shows our handpicked values (in Yummly branded orange) as a plot of data points. Using [polynomial regression](https://en.wikipedia.org/wiki/Polynomial_regression#:~:text=In%20statistics%2C%20polynomial%20regression%20is,nth%20degree%20polynomial%20in%20x.&text=For%20this%20reason%2C%20polynomial%20regression,case%20of%20multiple%20linear%20regression.) we can then construct a "best-fit line" (in Yummly branded teal) to predict our desired letter spacing.

<!-- Chart legend -->
  <div class="tracking-chart-legend">
    <div class="tracking-label">
      <div class="handpicked-tracking-label"></div>
      <span>Handpicked</span>
    </div>
    <div class="tracking-label">
      <div class="apparatus-tracking-label"></div>
      <span>Apparatus Interpolation</span>
    </div>
  </div>
<!-- Chart -->
<div style="position: relative;">
  <div class="ct-chart ct-minor-third" id="hand-picked-tracking-points">
    <!-- Generated with the typography.js script -->
  </div>

  <div class="ct-chart ct-minor-third" style="position: absolute; top: 0; left: 0;" id="tracking-apparatus-output">
    <!-- Generated with the typography.js script -->
  </div>
</div>

This apparatus takes in a font size and outputs the approximate letter spacing appropriate for that font size. It does this by breaking up our handpicked tracking vs. font size choices into two sections. As you can see, at smaller font sizes our tracking can fluctuate. To capture those designer decisions we model the smaller font choices using polynomial regression at the seventh degree. As we approach larger font sizes we can see that the designer decisions become more linear. Our polynomial regression output then switches to model at the second degree.

### Putting it together

Here is the tracking apparatus at work.

<section>
  <table id="typo-tracking-table">
    <tbody>
      <!-- Generated with the typography.js script -->
    </tbody>
  </table>
</section>