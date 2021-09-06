---
layout: default
title: Colors
grand_parent: Tokens
parent: Choices
nav_order: 20
---

<script type="text/javascript" src="{{site.baseurl}}/assets/vanilla/pasta.js" defer></script>

# Colors
{: .no_toc}
<!-- ↑ skips H1 inside TOC -->

- TOC
{:toc}

## Super Choices


## Main Colors

<table class="colorTable">
    <!-- <caption>vertical-align</caption> -->
    <thead>
        <tr>
            <th>Tokens</th>
            <th>Value</th>
            <th></th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td><strong>Primary ↓</strong></td>
            <td></td>
            <td></td>
        </tr>
        <tr data-colorValue="hsla(177, 44%, 51%, 1.00)">
            <td>TKC-cyan~teal-300</td>
            <td></td>
            <td></td>
        </tr>
        <tr data-colorValue="hsla(177, 44%, 41%, 1.00)">
            <td>TKC-cyan~teal-400</td>
            <td></td>
            <td></td>
        </tr>
        <tr data-colorValue="hsla(176, 44%, 31%, 1.00)">
            <td>TKC-cyan~teal-500</td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td><strong>Secondary ↓</strong></td>
            <td></td>
            <td></td>
        </tr>
        <tr data-colorValue="hsla(20, 76%, 60%, 1.00)">
            <td>TKC-orange~chocolate-300</td>
            <td></td>
            <td></td>
        </tr>
        <tr data-colorValue="hsla(20, 76%, 50%, 1.00)">
            <td>TKC-orange~chocolate-400</td>
            <td></td>
            <td></td>
        </tr>
        <tr data-colorValue="hsla(20, 76%, 40%, 1.00)">
            <td>TKC-orange~chocolate-500</td>
            <td></td>
            <td></td>
        </tr>
   </tbody>
</table>


## Grays

<table class="colorTable">
    <!-- <caption>vertical-align</caption> -->
    <thead>
        <tr>
            <th>Tokens</th>
            <th>Value</th>
            <th></th>
        </tr>
    </thead>
    <tbody>
        <tr data-colorValue="hsla(104, 100%, 100%, 1.00)">
            <td><strong>white</strong></td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td class="textfaded"><strong>Brights Domain</strong></td>
            <td class="textfaded">(None)</td>
            <td></td>
        </tr>
        <tr>
            <td><strong>Grays Domain ↓</strong></td>
            <td></td>
            <td></td>
        </tr>
        <tr data-colorValue="hsla(109, 0%, 96%, 1.00)">
            <td>TKC-gray-100</td>
            <td></td>
            <td></td>
        </tr>
        <tr data-colorValue="hsla(109, 0%, 89%, 1.00)">
            <td>TKC-gray-200</td>
            <td></td>
            <td></td>
        </tr>
        <tr data-colorValue="hsla(109, 0%, 73%, 1.00)">
            <td>TKC-gray-300</td>
            <td></td>
            <td></td>
        </tr>
        <tr data-colorValue="hsla(109, 0%, 44%, 1.00)">
            <td>TKC-gray-400</td>
            <td></td>
            <td></td>
        </tr>
        <tr data-colorValue="hsla(109, 0%, 29%, 1.00)">
            <td>TKC-gray-500</td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td><strong>Darks Domain ↓</strong></td>
            <td></td>
            <td></td>
        </tr>
        <tr data-colorValue="hsla(109, 0%, 14%, 1.00)">
            <td>TKC-dark-400</td>
            <td></td>
            <td></td>
        </tr>
        <tr data-colorValue="hsla(0, 0%, 0%, 1.00)">
            <td><strong>black</strong></td>
            <td></td>
            <td></td>
        </tr>
    </tbody>
</table>


## Color names


![WIP]({{site.baseurl}}/assets/images/YPL-DOC-colors-030-TokenNaming.png)


### Infering color index

#### Luminance Index

![WIP]({{site.baseurl}}/assets/images/YPL-DOC-colors-010-shadesIndex.png)

Calculating relative Luminance:

```js
Y = 0.2126 * R + 0.7152 * G + 0.0722 * B
```
Ressources:

- [Wikipedia](https://contrastchecker.online/color-relative-luminance-calculator)
- [online calculator](https://contrastchecker.online/color-relative-luminance-calculator)
- [How to Assess Luminance and Contrast · article](https://www.myndex.com/WEB/LuminanceContrast)
- [Figma LCH Color Picker](https://www.figma.com/community/plugin/969496279507778512/LCH)


#### Index convention

| Stem | Luminance | Font-Weight Equivalence |
| :--- | :--- | --- |
| `100` | Y ≃ 90 | Extra Light |
| `200` | Y ≃ 80 | Light / Thin |
| `300` | Y ≃ 70 | Book / Demi |
| `400` | Y ≃ 60 | Regular |
| `500` | Y ≃ 50 | Medium |
| `600` | Y ≃ 40 | Semibold / Demibold |
| `700` | Y ≃ 30 | Bold |
| `800` | Y ≃ 20 | Black / Extra Bold / Heavy |
| `900` | Y ≃ 10 | Extra or Ultra Black / Fat / Poster |
| > 900 | darks | "Jumbo" domain |


<table class="layoutOnly">
<!-- <caption>my caption</caption> -->
<tbody>
  <tr>
    <td style="width: 100%">
    <h4>Use Luminance<br>(LCH / YCL)</h4>
      <p>
        Cras justo odio, dapibus ac facilisis in, egestas eget quam. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Donec id elit non mi porta gravida at eget metus. Sed posuere consectetur est at lobortis.
      </p>
    </td>
    <td>
      <img src="{{site.baseurl}}/assets/images/YPL-DOC-colors-011-indexingShadesYCL_LCH.png" alt="WIP">
      <hr class="dd-do">
    </td>
  </tr>
</tbody>
</table>


<table class="layoutOnly">
<!-- <caption>my caption</caption> -->
<tbody>
  <tr>
    <td style="width: 100%">
    <h4>Don't use lightness or brightness<br>(HSL / HSB)</h4>
    <p>
      Cras justo odio, dapibus ac facilisis in, egestas eget quam. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Donec id elit non mi porta gravida at eget metus. Sed posuere consectetur est at lobortis.
    </p>
    </td>
    <td>
      <img src="{{site.baseurl}}/assets/images/YPL-DOC-colors-011-indexingShadesHSL.png" alt="WIP">
      <hr class="dd-dont">
    </td>
  </tr>
</tbody>
</table>

### Root name

![WIP]({{site.baseurl}}/assets/images/YPL-DOC-colors-011-primarySecondaryTertiary.png)

#### Root names scope and protanopia

![WIP]({{site.baseurl}}/assets/images/YPL-DOC-colors-012-PST-scopes-protanopia.png)

### Naming protocol


<table class="layoutOnly">
<!-- <caption>my caption</caption> -->
<tbody>
  <tr>
    <td style="width: 100%">
    <h4>Simple case</h4>
    <p>
      Cras justo odio, dapibus ac facilisis in, egestas eget quam. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Donec id elit non mi porta gravida at eget metus. Sed posuere consectetur est at lobortis.
    </p>
    </td>
    <td>
      <img src="{{site.baseurl}}/assets/images/YPL-DOC-colors-020-indexingAndNaming.png" alt="WIP">
    </td>
  </tr>
</tbody>
</table>

<table class="layoutOnly">
<!-- <caption>my caption</caption> -->
<tbody>
  <tr>
    <td style="width: 100%">
    <h4>Complex case</h4>
    <p>
      Cras justo odio, dapibus ac facilisis in, egestas eget quam. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Donec id elit non mi porta gravida at eget metus. Sed posuere consectetur est at lobortis.
    </p>
    </td>
    <td>
      <img src="{{site.baseurl}}/assets/images/YPL-DOC-colors-021-indexingAndNaming.png" alt="WIP">
    </td>
  </tr>
</tbody>
</table>

<!--
![WIP]({{site.baseurl}}/assets/images/YPL-DOC-colors-020-indexingAndNaming.png)
![WIP]({{site.baseurl}}/assets/images/YPL-DOC-colors-021-indexingAndNaming.png) -->
