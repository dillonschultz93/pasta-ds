---
project_id: FFL # 3-letter code
title: Dimensions # title case
permalink: farfalle/choices/dimensions # lowercase + use hyphens › https://tinyurl.com/27kmc4rb
grand_parent: Farfalle # title case
parent: Choices # title case
layout: default
nav_order: 10
---
<!-- This module fetches and pushes all basic functions and constants/variables required to run other ad hoc Pasta Scripts ↓ -->
<script type="module">

  document.getElementsByTagName('body')[0].setAttribute('data-pasta-project-id', '{{ page.project_id }}');
  document.getElementsByTagName('body')[0].setAttribute('data-pasta-page-permalink', '{{ page.permalink }}');

  window.projectId = '{{ page.project_id }}';
  window.pagePermalinkSuffix = '{{ page.permalink }}';
  window.pastaBaseurl = '{{site.baseurl}}';

  import { YPL_getKeyByValue } from '{{site.baseurl}}/assets/js/pasta-required.js';
  window.YPL_getKeyByValue = YPL_getKeyByValue;
  import { YPL_buildHTMlTable } from '{{site.baseurl}}/assets/js/pasta-required.js';
  window.YPL_buildHTMlTable = YPL_buildHTMlTable;
  import { YPL_buildCodeSection } from '{{site.baseurl}}/assets/js/pasta-required.js';
  window.YPL_buildCodeSection = YPL_buildCodeSection;
  import { YPL_generateFigmaTokens } from '{{site.baseurl}}/assets/js/pasta-required.js';
  window.YPL_generateFigmaTokens = YPL_generateFigmaTokens;
  import { YPL_generateRawTokens } from '{{site.baseurl}}/assets/js/pasta-required.js';
  window.YPL_generateRawTokens = YPL_generateRawTokens;
  import { YPL_addCopyToClipboardToCodeNodes } from '{{site.baseurl}}/assets/js/pasta-required.js';
  window.YPL_addCopyToClipboardToCodeNodes = YPL_addCopyToClipboardToCodeNodes;

  import { tokens } from '{{site.baseurl}}/assets/projects/FFL/tokens/tokens.js';
  window.tokens = {...tokens };

</script>

<!-- Inject Pasta Apparatus ad hoc script ↓ -->
<script type="text/javascript" src="{{site.baseurl}}/assets/js/pasta-dimensions.js" defer></script>



# Dimensions `{{ page.project_id }}`
{: .no_toc}

- TOC
{:toc}


<br>
<a href="" class="btn">Copy Tokens</a>


## Scales

Scales are Mathematic functions that allow us to derivate all our sizes from a limited number of Super Choices:


<section class="flex-1_1_1-cols inputsWrapper">
      <div>
        <label for="inputBase">Base</label><br>
        <input type="text" id="inputBase" name="inputBase" value="2">
      </div>
      <div>
        <label for="inputRatio">Ratio</label><br>
        <input type="text" id="inputRatio" name="inputRatio" value="2">
      </div>
      <div>
        <label for="inputBaseIndex">Base Index</label><br>
        <input type="text" id="inputBaseIndex" name="inputBaseIndex" value="400">
      </div>
</section>

To translate the comlpexity of our designs build before our design system we use 4 scales: a power of 2 geometric scale which encompasses [1,2,4,8,16,32,64,128 …]. We use an arithemtic scale A that feeds the arithmetic scales B and C. All these scales take a base 100 index as input.

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

### Math Details
  Geometric Scale A:

  {% highlight javascript %}
  functionGeoA(index) = Math.round(base * ratio**((200 + index - baseIndex)/100));{% endhighlight %}

  Arithmetic Scale A:
  {% highlight javascript %}
  functionArithA(index) =  base * (8 + (index - baseIndex)/100);{% endhighlight %}

  Arithmetic Scale B:
  {% highlight javascript %}
  functionArithB(index) = Math.round(base * ratio**2) + (Math.round(base * ratio**2))*((index - 400)/100);{% endhighlight %}

  Arithmetic Scale C:
  {% highlight javascript %}
  functionArithC(index) = functionArithB(index - 100) * 1.5;
  functionArithC(index) = (Math.round(base * ratio**2) + (Math.round(base * ratio**2))*((index - 500)/100))*1.5;{% endhighlight %}


<section id="mathOutputCollector">
  <!-- fed by script  -->
</section>

### Choices

<section class="flex-1_1-cols">
  <div id="RawTokensScalesCollector">
    <h4>Raw</h4>
    <!-- fed by script -->
  </div>
  <div id="FigmaTokensScalesCollector">
    <h4>Figma Tokens</h4>
    <!-- fed by script -->
  </div>
</section>

## Spaces

Tokens used to set margins, gutters and padding.

<section class="flex-1_1-cols">
  <div id="RawTokensSpacesCollector">
    <h3>Raw</h3>
    <!-- fed by script -->
  </div>
  <div id="FigmaTokensSpacesCollector">
    <h3>Figma Tokens</h3>
    <!-- fed by script -->
  </div>
</section>


## Static sizes

This Sizes are always expressed in pixel (px unit) and are used to set attributes that doesn't scale when the UI scales, ie: button border-width. Their function is to provide proper pixel hinting.

<section class="flex-1_1-cols">
  <div id="RawTokensStaticSpacesCollector">
    <h3>Raw</h3>
    <!-- fed by script -->
  </div>
  <div id="FigmaTokensStaticSpacesCollector">
    <h3>Figma Tokens</h3>
    <!-- fed by script -->
  </div>
</section>

## Factors

Factors are multipliers use to scale specific items in the UI. Mainly text they also can help to address the scale required by different platforms and resolution.
To facilitate their usage we use aliases from the get go.


|  | Description | Alias |
| --- | --- | --- |
| **All Text except Controls** | This factor is required by all Text that are not inside Controls | `F1` |
| **Controls Text size** | This factor is required by all Text | `f2` |
| **Controls size without Text** | This factor is required by all inner dimensions of all Controls except their Text| `F3` |
| **Controls** | This factor is required by all dimensions of all Controls including Text | `F4` |
| **Text size · WCAG 1.4.4 AA** | This tokens serves as a reference: all UI Text elements should be tested to meet the WCAG [Success Criterion 1.4.4 Level AA](https://www.w3.org/TR/WCAG21/#x1-4-4-resize-text) which means if their size is multiplied they should not break the general layout or eclipse information | `F5` |


<section class="flex-1_1-cols">
  <div id="RawTokensFactorsCollector">
    <h3>Raw</h3>
    <!-- fed by script -->
  </div>
  <div id="FigmaTokensFactorsCollector">
    <h3>Figma Tokens</h3>
    <!-- fed by script -->
  </div>
</section>

<section class="flex-1_1-cols">
  <div id="RawTokensFactorsAliasCollector">
    <h3>Raw Aliases</h3>
    <!-- fed by script -->
  </div>
  <div id="FigmaTokensFactorsAliasCollector">
    <h3>Figma Tokens Aliases</h3>
    <!-- fed by script -->
  </div>
</section>
