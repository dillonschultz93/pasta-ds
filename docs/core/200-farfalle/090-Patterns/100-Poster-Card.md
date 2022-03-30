---
project_name: Farfalle # title case
project_id: FFL # 3-letter code
title: Poster Card # title case
UID: P0001 # "P" = Pattern + Hexa code/index
variants: [] # all variants index
permalink: farfalle/patterns/poster-card # lowercase + use hyphens › https://tinyurl.com/27kmc4rb
grand_parent: Farfalle # title case
parent: Patterns # title case
layout: default
nav_order: 100
---

<!-- Set the choices and nomenclature for token naming -->
<!-- ⚠️ WARNING: NEVER USE COMMENTS INSIDE SCRIPT TAGS -->
<script>
  const superChoices =  {
    "dimensions": {
      "breakpoints": {
        "options": {
          "s": {
            "value": 640
          },
          "m": {
            "value": 768
          },
          "l": {
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
          "s": {
            "value": "$YPL.FFL.TKUI_M.scales.arithA.200"
          },
          "m": {
            "value": "YPL.FFL.TKUI_M.scales.arithA.600"
          },
          "l": {
            "value": "$YPL.FFL.TKUI_M.scales.arithA.900"
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
          "nano": {
            "000": {
              "value": 0
            },
            "100": {
              "value": 1
            },
            "200": {
              "value": 2
            },
            "300": {
              "value": 3
            },
            "400": {
              "value": 4
            }
          },
          "micro": {
            "100": {
              "value": "$YPL.FFL.TKUI_M.scales.arithA.100"
            },
            "200": {
              "value": "$YPL.FFL.TKUI_M.scales.arithA.200"
            },
            "300": {
              "value": "$YPL.FFL.TKUI_M.scales.arithA.300"
            },
            "400": {
              "value": "$YPL.FFL.TKUI_M.scales.arithA.400"
            },
            "500": {
              "value": "$YPL.FFL.TKUI_M.scales.arithA.500"
            },
            "600": {
              "value": "$YPL.FFL.TKUI_M.scales.arithA.600"
            },
            "700": {
              "value": "$YPL.FFL.TKUI_M.scales.arithA.700"
            },
            "800": {
              "value": "$YPL.FFL.TKUI_M.scales.arithA.800"
            },
            "900": {
              "value": "$YPL.FFL.TKUI_M.scales.arithA.900"
            },
            "1000": {
              "value": "$YPL.FFL.TKUI_M.scales.arithA.1000"
            },
            "1100": {
              "value": "$YPL.FFL.TKUI_M.scales.arithA.1100"
            },
            "1200": {
              "value": "$YPL.FFL.TKUI_M.scales.arithA.1200"
            },
            "1300": {
              "value": "$YPL.FFL.TKUI_M.scales.arithA.1300"
            }
          },
          "macro": {
            "100": {
              "value": "$YPL.FFL.TKUI_M.scales.arithB.100"
            },
            "200": {
              "value": "$YPL.FFL.TKUI_M.scales.arithB.200"
            },
            "300": {
              "value": "$YPL.FFL.TKUI_M.scales.arithB.300"
            },
            "400": {
              "value": "$YPL.FFL.TKUI_M.scales.arithB.700"
            },
            "500": {
              "value": "$YPL.FFL.TKUI_M.scales.arithB.1200"
            },
            "600": {
              "value": "$YPL.FFL.TKUI_M.scales.arithB.1500"
            },
            "700": {
              "value": "$YPL.FFL.TKUI_M.scales.arithB.2600"
            },
            "800": {
              "value": "$YPL.FFL.TKUI_M.scales.arithB.2800"
            },
            "900": {
              "value": "$YPL.FFL.TKUI_M.scales.arithB.3100"
            },
            "1000": {
              "value": "$YPL.FFL.TKUI_M.scales.arithB.4700"
            },
            "1100": {
              "value": "$YPL.FFL.TKUI_M.scales.arithB.6300"
            }
          }
        },
        "description": "",
        "type": "sizing",
        "kingdom": "TKUI_C",
        "category": "sizes",
        "group": "staticSizes"
      }
    },
    "typography": {},
    "color": {}
  };

  const nomenclatureOptions = {
    namespace: 'YPL',
    project: '{{ page.project_id }}'
  };

  const overrideOptions = {
    "YPL.FFL.TKUI_C.percents.s": {
      "value": 0.33,
      "description": "",
      "type": "sizing",
      "group": "percents"
    },
    "YPL.FFL.TKUI_C.percents.m": {
      "value": 0.50,
      "description": "",
      "type": "sizing",
      "group": "percents"
    },
    "YPL.FFL.TKUI_C.percents.ml": {
      "value": 0.66,
      "description": "",
      "type": "sizing",
      "group": "percents"
    },
    "YPL.FFL.TKUI_C.percents.l": {
      "value": 0.75,
      "description": "",
      "type": "sizing",
      "group": "percents"
    },
    "YPL.FFL.TKUI_C.percents.xl": {
      "value": 0.85,
      "description": "",
      "type": "sizing",
      "group": "percents"
    },
    "YPL.FFL.TKUI_C.percents.full": {
      "value": 1,
      "description": "",
      "type": "sizing",
      "group": "percents"
    },
    "YPL.TEST.textSizeFactor": {
      "value": 1,
      "description": "Inject this factor into Typography Sizes Choices. It's used to blow font sizes up to test compliancy with WCAG 1.4.4 · Remove it once in β release",
      "type": "test"
    },
    "YPL.FFL.TKUI_C.typo.Europa.700.size": {
      "value": "$YPL.FFL.TKUI_C.sizes.micro.900 * $YPL.TEST.textSizeFactor",
      "description": "",
      "type": "fontSizes",
      "group": "typo"
    },
    "YPL.FFL.TKUI_C.typo.Europa.700.leading.s": {
      "value": "",
      "description": "",
      "type": "lineHeights",
      "group": "typo"
    },
    "YPL.FFL.TKUI_C.typo.Europa.700.leading.m": {
      "value": "",
      "description": "",
      "type": "lineHeights",
      "group": "typo"
    },
    "YPL.FFL.TKUI_C.typo.Europa.700.leading.l": {
      "value": "",
      "description": "",
      "type": "lineHeights",
      "group": "typo"
    },
    "YPL.FFL.TKUI_C.typo.Europa.700.paragraphSpacing.s": {
      "value": "",
      "description": "",
      "type": "paragraphSpacing",
      "group": "typo"
    },
    "YPL.FFL.TKUI_C.typo.Europa.700.paragraphSpacing.m": {
      "value": "",
      "description": "",
      "type": "paragraphSpacing",
      "group": "typo"
    },
    "YPL.FFL.TKUI_C.typo.Europa.700.paragraphSpacing.l": {
      "value": "",
      "description": "",
      "type": "paragraphSpacing",
      "group": "typo"
    },
    "YPL.FFL.TKUI_C.typo.Europa.700.tracking": {
      "value": "",
      "description": "",
      "type": "letterSpacing",
      "group": "typo"
    }
  };
</script>

<!-- Utility scripts -->
<script defer src="{{ site.baseurl }}/assets/js/utilities/pasta-token-generation.js"></script>
<!-- Inject Pasta Apparatus ad hoc script ↓ -->
<script defer src="{{ site.baseurl }}/assets/js/apparatuses/index.js"></script>
<script defer src="{{ site.baseurl }}/assets/js/apparatuses/page-script.js"></script>


# Poster Card
{: .no_toc}

Poster Cards distinctive attribute is their background image that fill the card container (bleed). The Cards can embed various information. At minima a Heading is required. Poster Cards are used to promote key features within the user journey.

| UID | Ticket | Owner | Options |{{ page.project_id }} Version|
|---|---|---|---|
|`{{ page.project_id }}.{{ page.UID }}`{% for item in page.variants %}&nbsp;`{{item | default: ""}}`{% endfor %}|[&#35;2](https://github.com/yummly/pasta/issues/7)|[Robert](https://github.com/robert-ANML)|<span data-toolclip='OPT_layout2, OPT_small'><code>2</code></span> |[TBD](https://github.com/yummly/pasta/releases)|
{: .headTopBorder}

<div class="tabs">
  <input type="radio" name="tabs_previews" id="tab_preview_01" checked="checked">
  <label for="tab_preview_01">( <i>default</i> )</label>
  <div class="tab">
     <img src="{{site.baseurl}}/assets/projects/{{page.project_id}}/images/YPL-DOC-FFL-P0001-opt1-preview_01.png" alt="Default Preview" class="darkenabled">
  </div>
  <input type="radio" name="tabs_previews" id="tab_preview_02">
  <label for="tab_preview_02">OPT_layout2</label>
  <div class="tab">
     <img src="{{site.baseurl}}/assets/projects/{{page.project_id}}/images/YPL-DOC-FFL-P0001-opt2-preview_01.png" alt="Layout 2 Preview" class="darkenabled">
  </div>
  <input type="radio" name="tabs_previews" id="tab_preview_03">
  <label for="tab_preview_03">OPT_small</label>
  <div class="tab">
     <img src="{{site.baseurl}}/assets/projects/{{page.project_id}}/images/YPL-DOC-FFL-P0001-opt3-preview_01.png" alt="Small Preview" class="darkenabled">
  </div>
</div>

<a href="https://www.figma.com/file/0bsuBBIh84iyjXEVC8AUE1/?node-id=12%3A1694" class="btn iconed figmaBadge">To Figma →</a>

- TOC
{:toc}


## Layout

![Layout Blueprint]({{site.baseurl}}/assets/projects/{{page.project_id}}/images/YPL-DOC-FFL-P0001-bp_layout_01.png)

## Dependencies

<div class="tabs">
  <input type="radio" name="tabs_dependencies" id="tab_dependency_01" checked="checked">
  <label for="tab_dependency_01">( <i>default</i> )</label>
  <div class="tab">
     <img src="{{site.baseurl}}/assets/projects/{{page.project_id}}/images/YPL-DOC-FFL-P0001-bp_dependencies_01.png" alt="Default Preview">
  </div>
  <input type="radio" name="tabs_dependencies" id="tab_dependency_02">
  <label for="tab_dependency_02">OPT_layout2</label>
  <div class="tab">
     <img src="{{site.baseurl}}/assets/projects/{{page.project_id}}/images/YPL-DOC-FFL-P0001-bp_dependencies_02.png" alt="Layout 2 Preview">
  </div>
</div>

### Instantiation

<section class="flex-1_2-cols">
   <div>
     <br>
    <p>
     This Pattern requires that you implement and instantiate all these dependencies.<br>
     Please refer to each component in this list&nbsp;→
     </p>
   </div>
   <div>
     <table>
       <thead>
         <tr>
           <th>Instance</th>
           <th>Component</th>
           <!-- <th>Type</th> -->
           <th></th>
         </tr>
       </thead>
        <tbody>
         <tr>
            <td>.chip</td>
            <td><span data-toolclip='"YPL.FFL.P0001.HMN_posterCard.blockHeader.chip": "YPL.FFL.E0001.HMN_chip" // alias'><code>FFL.E0001</code></span></td>
            <!-- <td>Element</td> -->
            <td><a href="{{site.baseurl}}/{{ page.project_name | downcase }}/elements/chip" alt="Link to Element page" class="btn">Chip →</a></td>
         </tr>
         <tr>
            <td>.chip</td>
            <td><span data-toolclip='"YPL.FFL.P0001.HMN_posterCard.blockCopy.chip": "YPL.FFL.E0001.HMN_chip" // alias'><code>FFL.E0001</code></span></td>
            <!-- <td>Element</td> -->
            <td><a href="{{site.baseurl}}/{{ page.project_name | downcase }}/elements/chip" alt="Link to Element page" class="btn">Chip →</a></td>
         </tr>
         <tr>
            <td>.heading</td>
            <td><span data-toolclip='"YPL.FFL.P0001.HMN_posterCard.blockCopy.heading": "YPL.FFL.F0002-003.HMN_typo_europe-heading_5" // alias'><code>FFL.F0002-005</code></span></td>
            <!-- <td>Primitive</td> -->
            <td><a href="{{site.baseurl}}/{{ page.project_name | downcase }}/primitives/typography#F0002-005" alt="Link to Element page" class="btn">heading →</a></td>
         </tr>
         <tr>
            <td>.eyebrow</td>
            <td><span data-toolclip='"YPL.FFL.P0001.HMN_posterCard.blockFooter.eyebrow": "YPL.FFL.F0002-201.HMN_typo_europa-eyebrow_regular" // alias'><code>FFL.F0002-401</code></span></td>
            <!-- <td>Primitive</td> -->
            <td><a href="{{site.baseurl}}/{{ page.project_name | downcase }}/primitives/typography#F0002-401" alt="Link to Primitive page" class="btn">eyebrow →</a></td>
         </tr>
         <tr>
            <td>.switchButton</td>
            <td><span data-toolclip='"YPL.FFL.P0001.HMN_posterCard.blockFooter.switchButton": "YPL.FFL.E0003-003.HMN_button-switchIcon" // alias'><code>FFL.E0003-003</code></span></td>
            <!-- <td>Element</td> -->
            <td><a href="{{site.baseurl}}/{{ page.project_name | downcase }}/elements/button" alt="Link to Element page" class="btn">button →</a></td>
         </tr>
         <tr>
            <td>.paragraph<sup> OPT</sup></td>
            <td><span data-toolclip='"YPL.FFL.P0001.HMN_posterCard.blockCopy.paragraph": "YPL.FFL.F0002-101.HMN_typo_europa-p_small" // alias'><code>FFL.F0002-201</code></span></td>
            <!-- <td>Primitive</td> -->
            <td><a href="{{site.baseurl}}/{{ page.project_name | downcase }}/primitives/typography#F0002-201" alt="Link to Primitive page" class="btn">paragraph →</a></td>
         </tr>
        </tbody>
     </table>
   </div>
 </section>

  <hr>

  <details>
  <summary>verbose snippet</summary>
  <p>
  {% highlight js %}
  //// dependencies

  // .blockHeader

  "YPL.FFL.P0001.HMN_posterCard.blockHeader.chip": "YPL.FFL.E0001.HMN_chip",

  // .blockCopy

  "YPL.FFL.P0001.HMN_posterCard.blockCopy.chip": "YPL.FFL.E0001.HMN_chip",
  "YPL.FFL.P0001.HMN_posterCard.blockCopy.heading": "YPL.FFL.F0002-003.HMN_typo_europa-heading_5",
  "YPL.FFL.P0001.HMN_posterCard.blockCopy.paragraph": "YPL.FFL.F0002-101.HMN_typo_europa-p_small",

  // .blockFooter

  "YPL.FFL.P0001.HMN_posterCard.blockFooter.eyebrow": "YPL.FFL.F0002-201.HMN_typo_europa-eyebrow_regular",
  "YPL.FFL.P0001.HMN_posterCard.blockFooter.switchButton": "YPL.FFL.E0003-003.HMN_button-switchIcon",
  {% endhighlight %}
  </p>
  </details>

  <hr>

### Tree

 <section class="flex-1_2-cols">
   <div>
    <p>
      Tree-view of all nested items. <code>(optional)</code> means that the item is not always used and displayed depending on the Component Options.
    </p>
   </div>
   <div>
     {% highlight txt %}
          YPL.FFL.P0001.HMN_posterCard
          ├─ .blockHeader
          │   └─ .chip
          ├─ .blockCopy
          │   ├─ .chip (optional)
          │   ├─ .heading
          │   └─ .paragraph (optional)
          └─ .blockFooter
              ├─ .eyebrow
              └─ .switchButton (optional)
     {% endhighlight %}
   </div>
 </section>


## Decisions


<div class="tabs">
  <input type="radio" name="tabs_decisions" id="tab_decisions_01" checked="checked">
  <label for="tab_decisions_01">( <i>default</i> )</label>
  <div class="tab">
     <img src="{{site.baseurl}}/assets/projects/{{page.project_id}}/images/YPL-DOC-FFL-P0001-bp_decisions_01.png" alt="Default Preview">
  </div>
  <input type="radio" name="tabs_decisions" id="tab_decisions_02">
  <label for="tab_decisions_02">OPT_layout2</label>
  <div class="tab">
     <img src="{{site.baseurl}}/assets/projects/{{page.project_id}}/images/YPL-DOC-FFL-P0001-bp_decisions_02.png" alt="Layout 2 Preview">
  </div>
</div>

### Interaction

###### Default

<table class="type-01 headerNoUpperCase colBordered headFramed">
  <!-- <caption>my caption</caption> -->
  <thead>
    <tr>
      <th>.i (idle)</th>
      <th>.o (mouse over)</th>
      <th>.p (pressed)</th>
      <th>.f (focus)</th>
      <th>.w (waiting)</th>
      <th>.d (disabled)</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><span class="dimmed">N/A</span></td>
      <td><span class="dimmed">N/A</span></td>
      <td><span class="dimmed">N/A</span></td>
      <td><span class="dimmed">N/A</span></td>
      <td><span class="dimmed">N/A</span></td>
      <td><span class="dimmed">N/A</span></td>
    </tr>
  </tbody>
</table>

###### Highighted

<table class="type-01 headerNoUpperCase colBordered headFramed">
  <!-- <caption>my caption</caption> -->
  <thead>
    <tr>
      <th>.hi</th>
      <th>.ho</th>
      <th>.hp</th>
      <th>.hf</th>
      <th>.hu <span data-toolclip='Occurs when a parent or grand-parent node loses the focus while the compoment is still highlighted. Cf. OSX Finder Columns View, when navigating within nested folders.'>(?)</span></th>
      <th>.hw</th>
      <th>.hd</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><span class="dimmed">N/A</span></td>
      <td><span class="dimmed">N/A</span></td>
      <td><span class="dimmed">N/A</span></td>
      <td><span class="dimmed">N/A</span></td>
      <td><span class="dimmed">N/A</span></td>
      <td><span class="dimmed">N/A</span></td>
      <td><span class="dimmed">N/A</span></td>
    </tr>
  </tbody>
</table>



### Variations

###### Options

<table class="type-01 headerNoUpperCase colBordered headFramed">
  <!-- <caption>my caption</caption> -->
  <thead>
    <tr>
      <th>.OPT_small</th>
      <th>.OPT_layout2</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        <span data-toolclip='"YPL.FFL.TKUI_D.P0001.HMN_posterCard.height.OPT_small": "YPL.FFL.TKUI_C.sizes.macro.700.value"'><code class="language-plaintext highlighter-rouge">.height</code></span>
        <span data-toolclip='"YPL.FFL.TKUI_D.P0001.HMN_posterCard.h3.size.OPT_small": "YPL.FFL.TKUI_C.typo.Europa.h4.size.value"'><code class="language-plaintext highlighter-rouge">.h3.size</code></span>
        <span data-toolclip='"YPL.FFL.TKUI_D.P0001.HMN_posterCard.h3.tracking.OPT_small": "YPL.FFL.TKUI_C.typo.Europa.h4.tracking.value"'><code class="language-plaintext highlighter-rouge">.h3.tracking</code></span>
        <span data-toolclip='"YPL.FFL.TKUI_D.P0001.HMN_posterCard.h3.leading.OPT_small": "YPL.FFL.TKUI_C.typo.Europa.h4.leading.value"'><code class="language-plaintext highlighter-rouge">.h3.leading</code></span>
      </td>
      <td>
      <span data-toolclip='"YPL.FFL.TKUI_D.P0001.HMN_posterCard.gradient": "YPL.FFL.TKUI_C.gradients.overlay.black.TL_BR"'><code class="language-plaintext highlighter-rouge">.gradient</code></span>
      </td>
    </tr>
  </tbody>
</table>

<!-- ##### Modes
{: .no_toc} -->


###### Breakpoints

<table class="headerCentered headerNoUpperCase colBordered headFramed">
  <!-- <caption>my caption</caption> -->
  <thead>
    <tr>
      <th>.BRKP_s&nbsp;(480)</th>
      <th>.BRKP_m&nbsp;(768)</th>
      <th>.BRKP_l&nbsp;(1024)</th>
      <th>.BRKP_xl&nbsp;(1920)</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        <span class="dimmed">( <i> default </i> )</span>
      </td>
      <td>
        <span data-toolclip='"YPL.FFL.TKUI_D.P0001.HMN_posterCard.height": "YPL.FFL.TKUI_C.sizes.macro.800.value"'><code class="language-plaintext highlighter-rouge">.height</code></span>
        <span data-toolclip='"YPL.FFL.TKUI_D.P0001.HMN_posterCard.h3.size.OPT_small": "YPL.FFL.TKUI_C.typo.Europa.h2.size.value"'><code class="language-plaintext highlighter-rouge">.h3.size</code></span>
        <span data-toolclip='"YPL.FFL.TKUI_D.P0001.HMN_posterCard.h3.tracking.OPT_small": "YPL.FFL.TKUI_C.typo.Europa.h2.tracking.value"'><code class="language-plaintext highlighter-rouge">.h3.tracking</code></span>
        <span data-toolclip='"YPL.FFL.TKUI_D.P0001.HMN_posterCard.h3.leading.OPT_small": "YPL.FFL.TKUI_C.typo.Europa.h2.leading.value"'><code class="language-plaintext highlighter-rouge">.h3.leading</code></span>
      </td>
      <td>
        <span class="dimmed">N/A</span>
      </td>
      <td>
        <span class="dimmed">N/A</span>
      </td>
    </tr>
  </tbody>
</table>


## Tokens Playground

Playground · Pattern-siloed Tokens including all required Choices and Decisions:

<table>
    <tr class="playground-details-row" id="css">
        <td><button class="btn">CSS Tokens</button></td>
        <td>
          <details class="playground-details"><summary>Preview</summary>
            <figure class="highlight">
              <code class="language-css" data-lang="css">
                <!-- Generated by the pasta-patterns-recipe-cards.js script -->
              </code>
            </figure>
          </details>
        </td>
    </tr>
    <tr class="playground-details-row" id="ios">
        <td><button class="btn">iOS Tokens</button></td>
        <td>
          <details class="playground-details"><summary>Preview</summary>
            <figure class="highlight">
              <code class="language-json" data-lang="json">
                <!-- Generated by the pasta-patterns-recipe-cards.js script -->
              </code>
            </figure>
          </details>
        </td>
    </tr>
    <tr class="playground-details-row" id="android">
        <td><button class="btn">Android Tokens</button></td>
        <td>
          <details class="playground-details"><summary>Preview</summary>
            <figure class="highlight">
              <code class="language-xml" data-lang="xml">
                <!-- Generated by the pasta-patterns-recipe-cards.js script -->
              </code>
            </figure>
          </details>
        </td>
    </tr>
    <tr class="playground-details-row" id="figma-tokens">
        <td><button class="btn">Figma Tokens</button></td>
        <td>
          <details class="playground-details"><summary>Preview</summary>
            <figure class="highlight">
              <code class="language-json" data-lang="json">
                <!-- Generated by the pasta-patterns-recipe-cards.js script -->
              </code>
            </figure>
          </details>
        </td>
    </tr>
</table>

<details>
<summary>Raw</summary>
{% highlight javascript %}
{
  //// CHOICES

    // Dimensions
    "YPL.FFL.TKUI_M.scales.geoA.400": "8",
    "YPL.FFL.TKUI_M.scales.arithA.100": "10",
    "YPL.FFL.TKUI_M.scales.arithA.200": "12",
    "YPL.FFL.TKUI_M.scales.arithA.400": "16",
    "YPL.FFL.TKUI_M.scales.arithA.600": "24",
    "YPL.FFL.TKUI_M.scales.arithA.1000": "28",
    "YPL.FFL.TKUI_M.scales.arithC.900": "60",
    "YPL.FFL.TKUI_M.scales.geoA.900": "256",
    "YPL.FFL.TKUI_M.scales.geoA.1000": "512",

    // Typography
    "YPL.FFL.TKUI_C.typo.face.bold": "Europa-Bold",

    // Colors
    "YPL.FFL.TKUI_C.colors.white": "ffffff",
    "YPL.FFL.TKUI_C.colors.black": "000000",
    "YPL.FFL.TKUI_C.colors.blackish": "242424",
    "YPL.FFL.TKUI_C.colors.gray.300": "bababa",
    "YPL.FFL.TKUI_C.colors.oldOrange": "e05f1f",
    "YPL.FFL.TKUI_C.colors.oldCyan": "3b9690",

    // Dark Theme Colors:
    "YPL.FFL.TKUI_C.colors.springGreen": "00ee66", // option #1 for accent
    "YPL.FFL.TKUI_C.colors.orangeFlame": "ff5221c", // option #2 for accent
    "YPL.FFL.TKUI_C.colors.MD_dark.z100.backgrd": "2e2e2e", // background material
    "YPL.FFL.TKUI_C.colors.MD_dark.z400.backgrd": "151515", // foreground material

  //// ELEMENT & PRIMITIVES

    // buttonIcon
    "YPL.FFL.TKUI_D.buttonIcon.width": "YPL.FFL.TKUI_M.scales.arithA.600",
    "YPL.FFL.TKUI_D.buttonIcon.height": "YPL.FFL.TKUI_M.scales.arithA.600",
    "YPL.FFL.TKUI_D.buttonIcon.glyphColor": "YPL.FFL.TKUI_C.colors.black",
    "YPL.FFL.TKUI_D.buttonIcon.bgColor": "YPL.FFL.TKUI_C.colors.white",

    // chip
    "YPL.FFL.TKUI_D.chip.width": "YPL.FFL.TKUI_M.scales.arithC.900",
    "YPL.FFL.TKUI_D.chip.height": "YPL.FFL.TKUI_M.scales.arithA.600",
    "YPL.FFL.TKUI_D.chip.bgColor": "YPL.FFL.TKUI_C.colors.black",

    // rating
    "YPL.FFL.TKUI_D.rating.height": "YPL.FFL.TKUI_M.scales.arithA.200",
    "YPL.FFL.TKUI_D.rating.icon.color": "YPL.FFL.TKUI_C.colors.oldOrange",
    "YPL.FFL.TKUI_D.rating.icon.width": "YPL.FFL.TKUI_M.scales.arithA.200",
    "YPL.FFL.TKUI_D.rating.text.size": "YPL.FFL.TKUI_M.scales.arithA.200",
    "YPL.FFL.TKUI_D.rating.text.color": "YPL.FFL.TKUI_C.colors.oldOrange",

    // eyebrow
    "YPL.FFL.TKUI_D.eyebrow.face": "YPL.FFL.TKUI_C.typo.face.bold",
    "YPL.FFL.TKUI_D.eyebrow.size": "YPL.FFL.TKUI_M.scales.arithA.200",
    "YPL.FFL.TKUI_D.eyebrow.color": "YPL.FFL.TKUI_C.colors.gray.300",

  //// DECISIONS

    // Main
    "YPL.FFL.TKUI_D.cardRecipeLarge.width": "100%",
    "YPL.FFL.TKUI_D.cardRecipeLarge.height": "432pt",
    "YPL.FFL.TKUI_D.cardRecipeLarge.radius": "YPL.FFL.TKUI_M.scales.geoA.400",
    "YPL.FFL.TKUI_D.cardRecipeLarge.bgGradient": "gradient(58deg, #000000 100%, #000000 0%)",
    "YPL.FFL.TKUI_D.cardRecipeLarge.bgImage.fillMode": "COVER",
    "YPL.FFL.TKUI_D.cardRecipeLarge.paddingLeft": "YPL.FFL.TKUI_M.scales.arithA.600", // overrides all paddings ← Fringe
    "YPL.FFL.TKUI_D.cardRecipeLarge.paddingRight": "YPL.FFL.TKUI_M.scales.arithA.600", // overrides all paddings ← Fringe
    "YPL.FFL.TKUI_D.cardRecipeLarge.fringeBottom": "YPL.FFL.TKUI_M.scales.arithA.600", // ♺

    // (sub) Containers
    "YPL.FFL.TKUI_D.cardRecipeLarge.block.width": "100%", // TBD
    "YPL.FFL.TKUI_D.cardRecipeLarge.block.maxWidth": "YPL.FFL.TKUI_M.scales.geoA.1000", // TBD
    "YPL.FFL.TKUI_D.cardRecipeLarge.blockCopy.width": "87%", // TBD
    "YPL.FFL.TKUI_D.cardRecipeLarge.rating.fringeBottom": "YPL.FFL.TKUI_M.scales.geoA.400", // override?

    // Typo
    "YPL.FFL.TKUI_D.cardRecipeLarge.title.typo.face": "YPL.FFL.TKUI_C.typo.face.bold",
    "YPL.FFL.TKUI_D.cardRecipeLarge.title.typo.size": "YPL.FFL.TKUI_M.scales.arithA.600",
    "YPL.FFL.TKUI_D.cardRecipeLarge.title.typo.lineHeight": "YPL.FFL.TKUI_M.scales.arithA.1000",
    "YPL.FFL.TKUI_D.cardRecipeLarge.title.typo.fringeBottom": "YPL.FFL.TKUI_M.scales.arithA.400" // ♺
}
{% endhighlight %}
</details>

<!--
## Copy Writing Guidelines

<section class="flex-1_1-cols">
  <div>
    <p>
     Aenean lacinia bibendum nulla sed consectetur. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Nullam quis risus eget urna mollis ornare vel eu leo.<br><br>
    </p>
    <hr class="dd-do">
  </div>
   <div>
     <p>
      Aenean lacinia bibendum nulla sed consectetur. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Nullam quis risus eget urna mollis ornare vel eu leo.<br><br>
     </p>
      <hr class="dd-dont">
 </div>
 </section> -->


## Accessibility Status

| Criterion | Description | Pending| Done | N/A |
|---|---|:---:|:---:|:---:|
|[1.1.1](https://www.w3.org/TR/WCAG21/#text-alternatives)|Text Alternatives|<input type="radio" id="WCAG_1_1_1P" name="WCAG_1_1_1" value="Pending" checked>|<input type="radio" id="WCAG_1_1_1D" name="WCAG_1_1_1" value="Done">|<input type="radio" id="WCAG_1_1_1N" name="WCAG_1_1_1" value="N/A">|
|[1.4.1](https://www.w3.org/TR/WCAG21/#use-of-color)|Color not the only way to convey information|<input type="radio" id="WCAG_1_4_1P" name="WCAG_1_4_1" value="Pending" checked>|<input type="radio" id="WCAG_1_4_1D" name="WCAG_1_4_1" value="Done">|<input type="radio" id="WCAG_1_4_1N" name="WCAG_1_4_1" value="N/A">|
|[1.4.3](https://www.w3.org/TR/WCAG21/#contrast-minimum)|Text Color Contrast|<input type="radio" id="WCAG_1_4_3P" name="WCAG_1_4_3" value="Pending" checked>|<input type="radio" id="WCAG_1_4_3D" name="WCAG_1_4_3" value="Done">|<input type="radio" id="WCAG_1_4_3N" name="WCAG_1_4_3" value="N/A">|
|[1.4.6](https://www.w3.org/TR/WCAG21/#contrast-enhanced)|Text Color Contrast AAA|<input type="radio" id="WCAG_1_4_6P" name="WCAG_1_4_6" value="Pending" checked>|<input type="radio" id="WCAG_1_4_6D" name="WCAG_1_4_6" value="Done">|<input type="radio" id="WCAG_1_4_6N" name="WCAG_1_4_6" value="N/A">|
|[1.4.11](https://www.w3.org/TR/WCAG21/#non-text-contrast)|Fill Color Contrast|<input type="radio" id="WCAG_1_4_11P" name="WCAG_1_4_11" value="Pending" checked>|<input type="radio" id="WCAG_1_4_11D" name="WCAG_1_4_11" value="Done">|<input type="radio" id="WCAG_1_4_11N" name="WCAG_1_4_11" value="N/A">|
|[1.4.4](https://www.w3.org/TR/WCAG21/#resize-text)|200% Text Size|<input type="radio" id="WCAG_1_4_4P" name="WCAG_1_4_4" value="Pending" checked>|<input type="radio" id="WCAG_1_4_4D" name="WCAG_1_4_4" value="Done">|<input type="radio" id="WCAG_1_4_4N" name="WCAG_1_4_4" value="N/A">|
|[1.4.12](https://www.w3.org/TR/WCAG21/#text-spacing)|Text Spacing|<input type="radio" id="WCAG_1_4_12P" name="WCAG_1_4_12" value="Pending" checked>|<input type="radio" id="WCAG_1_4_12D" name="WCAG_1_4_12" value="Done">|<input type="radio" id="WCAG_1_4_12N" name="WCAG_1_4_12" value="N/A">|
|[2.1.3](https://www.w3.org/TR/WCAG21/#keyboard-no-exception)|Keyboard Operable|<input type="radio" id="WCAG_2_1_3P" name="WCAG_2_1_3" value="Pending" checked>|<input type="radio" id="WCAG_2_1_3D" name="WCAG_2_1_3" value="Done">|<input type="radio" id="WCAG_2_1_3N" name="WCAG_2_1_3" value="N/A">|


## Checklist

Please comply to and update the checklist below:

|Ops|
|---|
|<input type="checkbox" class="checklistItem" checked><strong>UID</strong>|
|<input type="checkbox" class="checklistItem" checked><strong>Github Ticket</strong>|
|<input type="checkbox" class="checklistItem" checked><strong>Figma Link(s)</strong>|
|<input type="checkbox" class="checklistItem" checked><strong>Design Owner</strong>|

|Design|
|---|
|<input type="checkbox" class="checklistItem" checked><strong>Dark and Light Modes</strong><br>Works properly across both color Modes|
|<input type="checkbox" class="checklistItem"><strong>All interactive states</strong><br>Includes all applicable interactive states: idle, over, pressed, focus, disabled, highlighted idle, highlighted disabled, etc.|
|<input type="checkbox" class="checklistItem"> <strong>Document Variations</strong><br>Includes relevant options: variant, styles, sizes, orientations, optional iconography, decorations|
|<input type="checkbox" class="checklistItem"><strong>All color Schemes</strong><br>Works properly across all color Schemes|

|Design Constraints|
|---|
|<input type="checkbox" class="checklistItem"><strong>Breakpoints and platform scales</strong><br>Includes a desktop scale (web desktop) and a mobile scale (iOS, Android)|
|<input type="checkbox" class="checklistItem"><strong>"Yield point" behaviors</strong><br>Includes guidelines for behaviors at maximum strain, often around text size: wrapping, truncation, overflow, animation|

|Content|
|---|
|<input type="checkbox" class="checklistItem"><strong>Copy Writing guidelines</strong><br>Includes content standards or usage guidelines for how to write or format in-product content for the component|
|<input type="checkbox" class="checklistItem"><strong>Internationalization guidelines</strong><br>Works properly across various locales and includes guidelines for bi-directionality (RTL)|
|<input type="checkbox" class="checklistItem"><strong>Accessiblity Content</strong><br>Accessibility content has been addressed (WCAG 1.1.1)|

|Accessiblity|
|---|
|<input type="checkbox" class="checklistItem"><strong>Accessiblity</strong><br>All required accessiblity criteria have been addressed|

|Tokens|
|---|
|<input type="checkbox" class="checklistItem"><strong>Design tokens</strong><br>All Choices, all Decisions, thus all design attributes (color, typography, layout, animation, etc.) are available as design tokens for all plateforms|
|<input type="checkbox" class="checklistItem"><strong>Tokens Reversibility</strong><br>The Artifact(s) UID has been injected inside all associated tokens (Choices)|

|Implementation|
|---|
|<input type="checkbox" class="checklistItem"><strong>Figma Document Link</strong><br>Inject Pasta URL inside the [Figma Component Details Panel](https://help.figma.com/hc/en-us/articles/360055203533-Use-the-Inspect-panel#View_component_details) |
|<input type="checkbox" class="checklistItem"><strong>Figma</strong><br>All Tokens have been injected inside Figma components and tested|
|<input type="checkbox" class="checklistItem"><strong>Pasta Release Version</strong><br>Pasta `V0.1.0`|
|<input type="checkbox" class="checklistItem"><strong>iOS</strong><br>Artifact(s) have been implemented inside iOS component library|
|<input type="checkbox" class="checklistItem"><strong>Android<strong><br>Artifact(s) have been implemented inside iOS component library|
|<input type="checkbox" class="checklistItem"><strong>Web</strong><br>Artifact(s) have been implemented inside Web component library|
|<input type="checkbox" class="checklistItem"><strong>Analytics Log Snippets</strong><br>The analytics log snippets have been implemented|
