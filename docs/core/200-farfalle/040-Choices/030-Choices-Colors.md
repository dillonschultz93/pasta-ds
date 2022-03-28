---
project_name: Farfalle # title case
project_id: FFL # 3-letter code  (✨ CHANGE ME ✨ )
title: Colors # title case (⚠️ DO NOT TOUCH ME ⚠️ )
permalink: farfalle/choices/colors # lowercase + use hyphens › https://tinyurl.com/27kmc4rb (✨ CHANGE ME ✨ )
grand_parent: Farfalle # title case (✨ CHANGE ME ✨ )
parent: Choices # title case (⚠️ DO NOT TOUCH ME ⚠️ )
layout: default
nav_order: 30
---
<!-- Set the choices and nomenclature for token naming -->
<!-- ⚠️ WARNING: NEVER USE COMMENTS INSIDE SCRIPT TAGS ⚠️ -->
<script>
  const superChoices =  {
    "dimensions": {
      "breakpoints": {
        "options": {
          "sm": {
            "value": 640
          },
          "md": {
            "value": 768
          },
          "lg": {
            "value": 1024
          },
          "xl": {
            "value": 1280
          },
          "xxl": {
            "value": 1536
          }
        },
        "description": "",
        "type": "other",
        "kingdom": "TKUI_C",
        "category": "breakpoints",
        "group": "breakpoints"
      },
      "factors": {
        "options": {
          "F1": {
            "value": 1
          },
          "F2": {
            "value": 1
          },
          "F3": {
            "value": 1
          },
          "F4": {
            "value": 1
          },
          "F5": {
            "value": 2
          }
        },
        "description": "",
        "type": "other",
        "kingdom": "TKUI_C",
        "category": "factors",
        "group": "factors"
      },
      "scale": {
        "value": {
          "base": 2,
          "ratio": 2,
          "baseIndex": 400,
          "scaleStems": ["geoA" , "arithA", "arithB"]
        },
        "description": "",
        "type": "other",
        "kingdom": "TKUI_M",
        "category": "scales",
        "group": "scales"
      },
      "spaces": {
        "options": {
          "xs": {
            "value": "$undefined"
          },
          "sm": {
            "value": "$YPL.FFL.TKUI_M.scales.geoA.400"
          },
          "md": {
            "value": "$YPL.FFL.TKUI_M.scales.geoA.500"
          },
          "lg": {
            "value": "$YPL.FFL.TKUI_M.scales.geoA.600"
          },
          "xl": {
            "value": "$undefined"
          },
          "xxl": {
            "value": "$undefined"
          }
        },
        "description": "",
        "type": "spacing",
        "kingdom": "TKUI_C",
        "category": "spaces",
        "group": "spaces"
      },
      "staticSizes": {
        "options": {
          "xs": {
            "value": 1
          },
          "sm": {
            "value": 2
          },
          "md": {
            "value": 3
          },
          "lg": {
            "value": 4
          }
        },
        "description": "",
        "type": "sizing",
        "kingdom": "TKUI_C",
        "category": "sizes",
        "group": "staticSizes"
      }
    },
    "typography": {
      "fontFamily": {
        "options": {
          "light": {
            "value": "europa-light"
          },
          "regular": {
            "value": "europa-regular"
          },
          "bold": {
            "value": "europa-bold"
          }
        },
        "description": "",
        "type":"fontFamilies",
        "kingdom": "TKUI_C",
        "category": "fontFamily",
        "group": "fontFamily"
      },
      "leading": {
        "options": {
          "sm": {
            "value": 1.2
          },
          "md":{
            "value": 1.5
          },
          "lg": {
            "value": 1.75
          }
        },
        "description": "",
        "type": "lineHeights",
        "kingdom": "TKUI_C",
        "category": "leading",
        "group": "leading"
      },
      "paragraphSpacing": {
        "value":  1.5,
        "description": "",
        "type": "paragraphSpacing",
        "kingdom": "TKUI_C",
        "category": "paragraphSpacing",
        "group": "paragraphSpacing"
      },
      "trackingThreshold": {
        "value": 32,
        "description": "",
        "type": "other",
        "kingdom": "TKUI_C",
        "category": "trackingThreshold",
        "group": "trackingThreshold"
      }
    },
    "color": {
      "primary": {
        "value": "#3B9792",
        "description": "",
        "type": "color",
        "kingdom": "TKUI_C",
        "category": "colors",
        "group": "color"
      },
      "secondary": {
        "value": "#E05F1F",
        "description": "",
        "type": "color",
        "kingdom": "TKUI_C",
        "category": "colors",
        "group": "color"
      }
    }
  };

  const nomenclatureOptions = {
    namespace: 'YPL',
    project: '{{ page.project_id }}'
  };

  const overrideOptions = {};
</script>

<!-- Library/Vendor scripts -->
<script defer src="{{ site.baseurl }}/assets/js/libs/chroma.min.js"></script>
<script defer src="{{ site.baseurl }}/assets/js/libs/name-that-color.js"></script>
<script type="text/javascript" src="{{site.baseurl}}/assets/js/libs/chartist.min.js"></script>
<script type="text/javascript" src="{{site.baseurl}}/assets/js/libs/chartist-plugin-legend.min.js"></script>
<script type="text/javascript" src="{{site.baseurl}}/assets/js/libs/chartist-plugin-axistitle.min.js"></script>
<script type="text/javascript" src="{{site.baseurl}}/assets/js/libs/chartist-plugin-zoom.min.js"></script>
<link rel="stylesheet" href="{{site.baseurl}}/assets/css/chartist.css">

<!-- Utility scripts -->
<script defer src="{{ site.baseurl }}/assets/js/utilities/pasta-doc-utilities.js"></script>
<script defer src="{{ site.baseurl }}/assets/js/utilities/pasta-token-generation.js"></script>

<!-- Inject Pasta Apparatus ad hoc script ↓ -->
<script defer src="{{ site.baseurl }}/assets/js/apparatuses/index.js"></script>
<script defer src="{{ site.baseurl }}/assets/js/apparatuses/page-script.js"></script>
# Colors `{{ page.project_id }}`
{: .no_toc}

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
