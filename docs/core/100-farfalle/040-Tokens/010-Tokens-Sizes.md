---
title: Sizes # title case
permalink: farfalle/tokens/sizes # lowercase + use hyphens › https://tinyurl.com/27kmc4rb
grand_parent: Farfalle # title case
parent: Tokens # title case
layout: default
nav_order: 10
---

# Sizes `FFL`
{: .no_toc}
<!-- ↑ skips H1 inside TOC -->

- TOC
{:toc}



## Units

### Points
{: .no_toc}


We want to express Sizes using an absolute 1:1 scale as much as we can.
Thus we try to use **Point (1/72 inch)** when possible. Note that Figma uses a 72 dpi resolution, which makes the conversion easy at `1x`: 1 pt = 1 px.

### Pixels
{: .no_toc}


To avoid pixel hinting issues we then switch to Pixel. Border Width or even button sizes are examples where we need to switch to deliver a pixel perfect end result.


## Sizes vs Space & Friends

We use different concepts to handle sizes, measurements and proportions; among which "dimensions", "scales", "ratios", etc. This table presents and almost comprehensive breakdown of these concepts and related attributes:

|Token|Description|*Figma Tokens* Type|Pasta Unit|Figma Unit|
| --- | --- | --- | --- | --- |
|Dimensions| YPL abstraction | `other`|N/A|N/A|
|Scales| YPL abstraction | `other`|N/A|N/A|
|Sizes| *Figma Tokens* | `sizing`|pt|px|
|Spaces| *Figma Tokens* | `spacing`|pt|px|
|**Typography**|
|Font Sizes| WIP | `fontSizes`|pt|px|
|Leadings| WIP  | `lineHeights`|pt|px|
|Line Breaks (Paragraph Spacing)| WIP  | `paragraphSpacing`|ratio|px|
|Trackings| WIP  | `letterSpacing`|pt|%|
|**Break Points**|
|Break Points| YPL abstraction - CSS | `other`|px| N/A|
|**Borders**|
|Border Widths| WIP | `borderWidth`|px|px|
|Border Radii| WIP | `borderRadius`|pt| px|
|**Shadow**|
|Drop Shadow h-offsets| WIP | `boxShadow`&nbsp;.value.x|pt|px|
|Drop Shadow v-offsets| WIP | `boxShadow`&nbsp;.value.y|pt|px|
|Drop Shadow Spreads| WIP | `boxShadow`&nbsp;.value.spread|pt|px|
|Drop Shadow Blur Radii | WIP | `boxShadow`&nbsp;.value.blur|pt|px|


## Base, ratios and factors





## Scales

<table class="type-02">
  <thead>
    <tr>
      <th>index</th>
      <th>Geometric</th>
      <th>Arithmetic A</th>
      <th>Arithmetic B</th>
      <th>Arithmetic C</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>100</td>
      <td class="textfaded">1</td>
      <td><strong>10</strong></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td>200</td>
      <td class="textfaded">2</td>
      <td><strong>12</strong></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td>300</td>
      <td class="textfaded">4</td>
      <td><strong>14</strong></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td><strong>•&nbsp;&nbsp;400</strong> </td>
      <td><strong>8</strong></td>
      <td><strong>16</strong></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td>500</td>
      <td class="textfaded">16</td>
      <td><strong>18</strong></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td>600</td>
      <td class="textfaded">32</td>
      <td><strong>20</strong></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td>700</td>
      <td class="textfaded">64</td>
      <td class="textfaded">22</td>
      <td class="textfaded">32</td>
      <td class="textfaded">36</td>
    </tr>
    <tr>
      <td>800</td>
      <td class="textfaded">128</td>
      <td><strong>24</strong></td>
      <td><strong>40</strong></td>
      <td><strong>48</strong></td>
    </tr>
    <tr>
      <td>900</td>
      <td class="textfaded">256</td>
      <td class="textfaded">26</td>
      <td class="textfaded">48</td>
      <td class="textfaded">60</td>
    </tr>
    <tr>
      <td>1000</td>
      <td class="textfaded">512</td>
      <td><strong>28</strong></td>
      <td class="textfaded">56</td>
      <td class="textfaded">72</td>
    </tr>
    <tr>
      <td>1100</td>
      <td class="textfaded">1024</td>
      <td class="textfaded">30</td>
      <td class="textfaded">64</td>
      <td class="textfaded">84</td>
    </tr>
    <tr>
      <td>1200</td>
      <td></td>
      <td><strong>32</strong></td>
      <td class="textfaded">72</td>
      <td><strong>96</strong></td>
    </tr>
    <tr>
      <td>1300</td>
      <td></td>
      <td class="textfaded">34</td>
      <td class="textfaded">80</td>
      <td class="textfaded">108</td>
    </tr>
    <tr>
      <td>1400</td>
      <td></td>
      <td class="textfaded">36</td>
      <td class="textfaded">88</td>
      <td class="textfaded">120</td>
    </tr>
    <tr>
      <td>1500</td>
      <td></td>
      <td></td>
      <td class="textfaded">96</td>
      <td class="textfaded">132</td>
    </tr>
    <tr>
      <td>1600</td>
      <td></td>
      <td></td>
      <td class="textfaded">104</td>
      <td>144</td>
    </tr>
    <tr>
      <td>1700</td>
      <td></td>
      <td></td>
      <td class="textfaded">112</td>
      <td class="textfaded">156</td>
    </tr>
    <tr>
      <td>1800</td>
      <td></td>
      <td></td>
      <td class="textfaded">120</td>
      <td class="textfaded">168</td>
    </tr>
    <tr>
      <td>1900</td>
      <td></td>
      <td></td>
      <td class="textfaded">128</td>
      <td class="textfaded">180</td>
    </tr>
    <tr>
      <td>2000</td>
      <td></td>
      <td></td>
      <td class="textfaded">136</td>
      <td>192</td>
    </tr>
  </tbody>
</table>

### 3 entangled scales
{: .no_toc}


Scales are tools that allow us to derivate all our sizes from a very limited number of Super Choices:

- a base
- a ratio (sometimes called "scale")

Thanks to scales if we need to scale all the interface up, or down, changing one of these constants will trickle down everywhere.

We use 3 scales that trickle down into each other at different Index-threshold:

Up to the Index base (100-400) with use a geometric function, this scale encompass the usual power of 2 sizes [1,2,4,8,16,32,64,128 …]. This geometric scale then feeds the arithemtic scale #1 that takes over in the 500 to 1100 index range. Then this scale will feed the arithmetic scale #2 where we cherry pick some of its value.

### Why?
{: .no_toc}


**Proportional**. That's why. We want the power of "one constant to rule them all": if you change the Super Choice `scale_base` then everything will fall into place and grow or shrink in proportion, while keeping the relationship we want in between those sizes.

#### Super Choices
{: .no_toc}


… and their default value:

- `TKUI_SC.scale.base` = `2`
- `TKUI_SC.scale.ratio` = `2`
- `TKUI_SC.scale.baseIndex` = `400`

#### Scales Math
{: .no_toc}


Geometric Scale A:

```
functionGeoA(index) = round(TKUI_SC.scales.base * TKUI_SC.scales.ratio ^ ((200 + index - TKUI_SC.scales.baseIndex) / 100))
```

Arithmetic Scale A:

```
functionArithA(index) =  TKUI_SC.scales.base * (8 + (index - TKUI_SC.scales.baseIndex)/100)
```

Arithmetic Scale B:

```
functionArithB(index) = functionGeoA(TKUI_SC.scales.baseIndex) + functionGeoA(TKUI_SC.scales.baseIndex)*((index - 400) / 100)
```


Arithmetic Scale C:

```
functionArithC(index) = functionArithB(index - 100) * 1.5
```
