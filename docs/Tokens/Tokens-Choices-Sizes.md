---
layout: default
title: Sizes
grand_parent: Tokens
parent: Choices
nav_order: 10
---

# Sizes

## Units

### Points

We want to express Sizes using an absolute 1:1 scale as much as we can.
Thus we try to use **Point (1/72 inch)** when possible. Note that Figma uses a 72 dpi resolution, which makes the conversion easy at `1x`: 1 pt = 1 px.

### Pixels

To avoid pixel hinting issues we then switch to Pixel. Border Width or even button sizes are examples where we need to switch to deliver a pixel perfect end result.

## Scales

Scales are tools that allow us to derivate all our sizes from a very limited number of Super Choices:

- base
- scale (ratios or functions)

Thanks to scale if we want to scale all our interface up, or down, changing one of these constant will trickle down everywhere.

### 3 entangled scales

We use 3 scales that trickle down into each other at different Index-threshold:

Up to the Index base (100-400) with use a power of 2 geometric function. This function then feeds the arithemtic scale #1 that takes over in the 500 to 1100 index range. Then this scale will feed the arithmetic scale #2 where we cherry pick some of its value.

### Why?

**Proportional**. That's why. We want the power of "one constant to rule them all": if you change the Super Choice `scale_base` then everything will fall into place and grow or shrink in proportion, while keeping the relationship we want in between those sizes.

#### Super Choices:

- scale_base = `2`
- scale_scale = `2`
- scale_baseIndex = `400`

#### Math

Geometric scale:

```
functionGeo(index) = YPL-TKSC-scales-base * YPL-TKSC-scales-scale ^ round((200 + index - YPL-TKSC-scales-base-index) / 100)
```

Arithmetic scale #1:

```
functionArithSt(index) = functionGeo(YPL-TKSC-scales-base-index) + functionGeo(YPL-TKSC-scales-base-index)*((index - 400) / 100)
```

Arithmetic scale #2:

```
functionArithNd(index) = functionArithSt(index - 100) * 1.5
```

#### Ouput

<!-- | index | Geometric | Arithmetic #1 | Arithmetic #2 |
| --- | --- | --- | --- |
| 100 |  **1** |   |   |
| 200 |  **2** |   |   |
| 300 |  **4** |   |   |
| **400&nbsp;&nbsp;•** | **8**  | |   |
| 500 |  16 → |  **16** |  |
| 600 |  32 |  **24** | |
| 700 |  64 |  **32** |  36 |
| 800 |  128 |  **40** |  **48** |
| 900 |  256 |  **48** |  60 |
| 1000 |  512 |  **56** |  72 |
| 1100 |  1024 |  **64** |  84 |
| 1200 |   |  72 → |  **96** |
| 1300 |   |  80 |  108 |
| 1400 |   |  88 |  120 |
| 1500 |   |  96 |  132 |
| 1600 |   |  104 |  **144** |
| 1700 |   |  112 |  156 |
| 1800 |   |  120 |  168 |
| 1900 |   |  128 |  180 |
| 2000 |   |  136 |  **192** |  -->

<table class="type-02">
  <thead>
    <tr>
      <th>index</th>
      <th>Geometric</th>
      <th>Arithmetic #1</th>
      <th>Arithmetic #2</th>
      <th>Arithmetic #3</th>
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
      <td class="textfaded">48</td>
    </tr>
    <tr>
      <td>900</td>
      <td class="textfaded">256</td>
      <td class="textfaded">26</td>
      <td><strong>48</strong></td>
      <td class="textfaded">60</td>
    </tr>
    <tr>
      <td>1000</td>
      <td class="textfaded">512</td>
      <td><strong>28</strong></td>
      <td>56</td>
      <td class="textfaded">72</td>
    </tr>
    <tr>
      <td>1100</td>
      <td class="textfaded">1024</td>
      <td class="textfaded">30</td>
      <td>64</td>
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
      <td><strong>144</strong></td>
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
      <td><strong>192</strong></td>
    </tr>
  </tbody>
</table>

<!--
### Font Scales

## Spaces

## Fonts

## Breakpoints -->
