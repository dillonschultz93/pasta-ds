---
project_id: FFL # 3-letter code
title: Colors # title case
permalink: farfalle/tokens/colors # lowercase + use hyphens › https://tinyurl.com/27kmc4rb
grand_parent: Farfalle # title case
parent: Tokens # title case
layout: default
nav_order: 20
---
<script type="module">
  document.getElementsByTagName('body')[0].setAttribute('data-pasta-project-id', '{{ page.project_id }}');
  import { tokens } from '{{site.baseurl}}/assets/projects/{{ page.project_id }}/tokens/tokens.js';
  window.tokens = tokens;
</script>






<script type="text/javascript" src="{{site.baseurl}}/assets/js/libs/chroma.min.js" defer></script>
<script type="text/javascript" src="{{site.baseurl}}/assets/js/pasta.js" defer></script>
<script type="text/javascript" src="{{site.baseurl}}/assets/js/pasta-colors.js" defer></script>






# Colors `FFL`
{: .no_toc}
<!-- ↑ skips H1 inside TOC -->

- TOC
{:toc}



## Super Choices

<div class="colorSystem" data-tokenPrefix="TKUI_SC.">

  <h3>backgrounds</h3>

  <!-- Backgrounds -->
  <div class="colorBackgroundSelections" data-tokenInfix="background">

    <!-- Light mode -->
    <div class="flex-1_1_1-cols" data-tokenInfix="MD_light">
      <!-- Widget -->
      <div class="colorWidget" data-tokenSuffix="bright">
        <div class="colorPickerWrapper">
          <input type="color" value="#FFFFFF" class="colorPicker">
        </div>
        <input type="text" value="#FFFFFF" class="colorInput">
      </div>
      <!-- Widget -->
      <div class="colorWidget" data-tokenSuffix="median">
        <div class="colorPickerWrapper">
          <input type="color" value="#FCFCFC" class="colorPicker">
        </div>
        <input type="text" value="#FCFCFC" class="colorInput">
      </div>
      <!-- Widget -->
      <div class="colorWidget" data-tokenSuffix="dark">
        <div class="colorPickerWrapper">
          <input type="color" value="#F9F9F9" class="colorPicker">
        </div>
        <input type="text" value="#F9F9F9" class="colorInput">
      </div>
    </div>

    <!-- Dark Mode -->
    <div class="flex-1_1_1-cols" data-tokenInfix="MD_dark">
      <!-- Widget -->
      <div class="colorWidget" data-tokenSuffix="dark">
        <div class="colorPickerWrapper">
          <input type="color" value="#000000" class="colorPicker">
        </div>
        <input type="text" value="#000000" class="colorInput">
      </div>
      <!-- Widget -->
      <div class="colorWidget" data-tokenSuffix="median">
        <div class="colorPickerWrapper">
          <input type="color" value="#141414" class="colorPicker">
        </div>
        <input type="text" value="#141414" class="colorInput">
      </div>
      <!-- Widget -->
      <div class="colorWidget" data-tokenSuffix="bright">
        <div class="colorPickerWrapper">
          <input type="color" value="#222222" class="colorPicker">
        </div>
        <input type="text" value="#222222" class="colorInput">
      </div>
    </div>

    <!-- The Tokens -->
    <!-- <details class="tokensCode">
      <summary>Tokens</summary>
      <div class="language-plaintext highlighter-rouge">
      <div class="highlight">
      <pre class="highlight">
      <code class="tokensCode">
        TKC.cyan~teal.400.hue
        TKC.cyan~teal.400.saturation
        TKC.cyan~teal.400.lightness
      </code>
      </pre>
      </div>
      </div>
    </details> -->
  </div>
  <!-- End Backgrounds -->

<!-- Colors -->


{% include pasta-color-structure.html
  color-name="primary"
  color-hex-value="#3B9792"
%}

{% include pasta-color-structure.html
  color-name="secondary"
  color-hex-value="#E05F1F"
%}


</div>

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
