---
project_name: Farfalle # title case
project_id: FFL # 3-letter code  (✨ CHANGE ME ✨ )
title: Fonts # title case (⚠️ DO NOT TOUCH ME ⚠️ )
permalink: farfalle/choices/fonts # lowercase + use hyphens › https://tinyurl.com/27kmc4rb (✨ CHANGE ME ✨ )
grand_parent: Farfalle # title case (✨ CHANGE ME ✨ )
parent: Choices # title case (⚠️ DO NOT TOUCH ME ⚠️ )
layout: default
nav_order: 20
---

<!-- Library/Vendor scripts -->
<!-- <script defer src="{{ site.baseurl }}/assets/js/libs/chroma.min.js"></script>
<script defer src="{{ site.baseurl }}/assets/js/libs/name-that-color.js"></script>
<script type="text/javascript" src="{{site.baseurl}}/assets/js/libs/chartist.min.js"></script>
<script type="text/javascript" src="{{site.baseurl}}/assets/js/libs/chartist-plugin-legend.min.js"></script>
<script type="text/javascript" src="{{site.baseurl}}/assets/js/libs/chartist-plugin-axistitle.min.js"></script>
<script type="text/javascript" src="{{site.baseurl}}/assets/js/libs/chartist-plugin-zoom.min.js"></script>
<link rel="stylesheet" href="{{site.baseurl}}/assets/css/chartist.css"> -->

<!-- Utility scripts -->

<!-- <script defer src="{{ site.baseurl }}/assets/js/utilities/pasta-token-generation.js"></script> -->

<!-- Inject Pasta Apparatus ad hoc script ↓ -->
<!-- <script defer src="{{ site.baseurl }}/assets/js/apparatuses/index.js"></script>
<script defer src="{{ site.baseurl }}/assets/js/apparatuses/page-script.js"></script> -->

# Fonts
{: .no_toc}

- TOC
{:toc}

## Font Family
We use Europa across all platforms to maintain a consistent experience.

<h1 class="Europa-ed-b">Europa</h1>

<section class="flex-1_1_1-cols">
  <div>
    <h2 class=" Europa-ed-l">The quick brown fox jumps over the lazy dog.</h2>
    <p>Europa Light</p>
  </div>
  <div>
    <h2 class=" Europa-ed-r">The quick brown fox jumps over the lazy dog.</h2>
    <p>Europa Regular</p>
  </div>
  <div>
    <h2 class=" Europa-ed-b">The quick brown fox jumps over the lazy dog.</h2>
    <p>Europa Bold</p>
  </div>
</section>

<!-- ## Font Leading
Leading, also known as line height, is a typographic concept that is simply defined as the distance between lines of text. -->

<!-- ## Font Tracking Apparatus
Tracking, also known as letter spacing, is a typographic principle that defines the horizontal distance between each letter. Negative tracking allows more characters to fit into a horizontal space, while positive tracking spreads out the horizontal distance between character.

### Exploration
{: .no_toc}

To dynamically generate letter spacing from a given font size we needed to explore the relation between our font size and handpicked tracking. The graph below shows our handpicked values as a plot of data points. Using [polynomial regression](https://en.wikipedia.org/wiki/Polynomial_regression#:~:text=In%20statistics%2C%20polynomial%20regression%20is,nth%20degree%20polynomial%20in%20x.&text=For%20this%20reason%2C%20polynomial%20regression,case%20of%20multiple%20linear%20regression.) we can then construct a "best-fit line" to predict our desired letter spacing.

This apparatus takes in a font size and outputs the approximate letter spacing appropriate for that font size. It does this by breaking up our handpicked tracking vs. font size choices into two sections. As you can see, at smaller font sizes our tracking can fluctuate. To capture those designer decisions we model the smaller font choices using polynomial regression at the seventh degree. As we approach larger font sizes we can see that the designer decisions become more linear. Our polynomial regression output then switches to model at the second degree. -->
