---
project_name: Farfalle # title case
project_id: FFL # 3-letter code
title: Button # title case
UID: E0003 # ["P","E","F"] + Hexa code/index
variants: [] # all variants index
permalink: farfalle/elements/button # lowercase + use hyphens › https://tinyurl.com/27kmc4rb
grand_parent: Farfalle # title case
parent: Elements # title case
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

# Button
{: .no_toc}

Buttons allow users to perform an action or to navigate to another page. They have multiple styles for various needs.

<table class="headTopBorder">
  <!-- <caption>my caption</caption> -->
  <thead>
    <tr>
      <th>UID</th>
      <th>Ticket</th>
      <th>Owner</th>
      <th>Options</th>
      <th>{{ page.project_id }} Version</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>{{ page.project_id }}.{{ page.UID }}</code></td>
      <td><a href="https://github.com/yummly/pasta/issues/27">&#35;27</a></td>
      <td><a href="https://github.com/robert-ANML">Robert</a></td>
      <td><span data-toolclip='OPT_layout2, OPT_small'><code>NA</code></span></td>
      <td><a href="https://github.com/yummly/pasta/releases">TBD</a></td>
    </tr>
    {% if page.variants.size > 0 %}
    <tr>
      <td colspan="5" class="pageHeaderVariantsRow">
        {% for item in page.variants %}<a href="#{{ page.UID }}-{{item}}"><code>-{{item | default: ""}}</code></a> {% endfor %}
      </td>
    </tr>
    {% endif %}
  </tbody>
</table>


![Preview]({{site.baseurl}}/assets/projects/{{page.project_id}}/images/YPL-DOC-FFL-E0003-preview_01.png){: .darkenabled}

<a href="https://www.figma.com/file/le9hbXPWmA55qUA7a7otgH/Pasta-0.1.0?node-id=1737%3A68833" class="btn iconed figmaBadge">To Figma →<a>

- TOC
{:toc}

## Layout

![Layout Blueprint]({{site.baseurl}}/assets/projects/{{page.project_id}}/images/YPL-DOC-FFL-E0003-layout_01.png)

## Dependencies

![Dependencies Blueprint]({{site.baseurl}}/assets/projects/{{page.project_id}}/images/YPL-DOC-FFL-E0003-bp_dependencies_01.png)

## Instantiation

<section class="flex-1_2-cols">
   <div>
     <br>
    <p>
     This Element requires that you implement and instantiate all these dependencies.<br>
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
            <td>.icon</td>
            <td><span data-toolclip='"YPL.FFL.E0003.HMN_button.icon": "YPL.FFL.F0003.HMN_icon"'><code>FFL.F0003</code></span></td>
            <td><a href="{{site.baseurl}}/{{ page.project_name | downcase }}/primitives/icons" alt="Link to Icon page" class="btn">Icon →</a></td>
         </tr>
         <tr>
            <td>.label</td>
            <td><span data-toolclip='"YPL.FFL.P0001.HMN_button.blockLabel": "YPL.FFL.F0002-102.HMN_typo_europa-p_strong"'><code>FFL.F0002-102</code></span></td>
            <td><a href="{{site.baseurl}}/{{ page.project_name | downcase }}/primitives/typography#F0002-102" alt="Link to Typography Primitives page" class="btn">label →</a></td>
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
  TODO: Add tokens here
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
          YPL.FFL.E0003.HMN_button
          ├─ .blockIcon (optional)
          │   └─ .icon
          └─.blockLabel (optional)
              └─ .label
     {% endhighlight %}
   </div>
 </section>

## Decisions

 ![Decisions Blueprint]({{site.baseurl}}/assets/projects/{{page.project_id}}/images/YPL-DOC-FFL-E0003-bp_decisions_01.png)

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
      <td><span class="dimmed">TODO</span></td>
      <td><span class="dimmed">TODO</span></td>
      <td><span class="dimmed">TODO</span></td>
      <td><span class="dimmed">TODO</span></td>
      <td><span class="dimmed">TODO</span></td>
      <td><span class="dimmed">TODO</span></td>
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
      <td><span class="dimmed">TODO</span></td>
      <td><span class="dimmed">TODO</span></td>
      <td><span class="dimmed">TODO</span></td>
      <td><span class="dimmed">TODO</span></td>
      <td><span class="dimmed">TODO</span></td>
      <td><span class="dimmed">TODO</span></td>
      <td><span class="dimmed">TODO</span></td>
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
        <td><button class="btn tokens-btn">CSS Tokens</button></td>
    </tr>
    <tr class="playground-details-row" id="ios">
        <td><button class="btn tokens-btn">iOS Tokens</button></td>
    </tr>
    <tr class="playground-details-row" id="android">
        <td><button class="btn tokens-btn">Android Tokens</button></td>
    </tr>
    <tr class="playground-details-row" id="figma-tokens">
        <td><button class="btn tokens-btn">Figma Tokens</button></td>
    </tr>
</table>

<details>
<summary>Raw</summary>
{% highlight javascript %}
{
//////  DECISIONS - FFL.P0001

  // macro layout

    "YPL.FFL.TKUI_D.P0001.HMN_posterCard.width": "YPL.FFL.TKUI_C.percents.full.value",
    "YPL.FFL.TKUI_D.P0001.HMN_posterCard.height": "YPL.FFL.TKUI_C.sizes.macro.700.value",
    "YPL.FFL.TKUI_D.P0001.HMN_posterCard.margin": "YPL.FFL.TKUI_C.spaces.l.value",
    "YPL.FFL.TKUI_D.P0001.HMN_posterCard.fringeBottom": "YPL.FFL.TKUI_C.spaces.l.value",
    "YPL.FFL.TKUI_D.P0001.HMN_posterCard.padding": "YPL.FFL.TKUI_C.spaces.l.value",
    "YPL.FFL.TKUI_D.P0001.HMN_posterCard.radius": "YPL.FFL.TKUI_C.sizes.micro.200.value",
    // blocks
    "YPL.FFL.TKUI_D.P0001.HMN_posterCard.blockCopy.width": "YPL.FFL.TKUI_C.percents.full.value",
    "YPL.FFL.TKUI_D.P0001.HMN_posterCard.blockCopy.slack": "YPL.FFL.TKUI_C.sizes.macro.500.value",
    "YPL.FFL.TKUI_D.P0001.HMN_posterCard.blockHeader.height": "YPL.FFL.TKUI_C.spaces.l.value",
    "YPL.FFL.TKUI_D.P0001.HMN_posterCard.blockFooter.height": "YPL.FFL.TKUI_C.spaces.l.value",

    // dependencies

      // .blockHeader
      "YPL.FFL.P0001.HMN_posterCard.blockHeader.chip": "YPL.FFL.E0001.HMN_chip", // instantiation
      // .blockCopy
      "YPL.FFL.P0001.HMN_posterCard.blockCopy.chip": "YPL.FFL.E0001.HMN_chip", // instantiation
      "YPL.FFL.P0001.HMN_posterCard.blockCopy.heading": "YPL.FFL.F0002-003.HMN_typo_europa-h5", // instantiation
      // .blockFooter
      "YPL.FFL.P0001.HMN_posterCard.blockFooter.eyebrow": "YPL.FFL.F0002-401.HMN_typo_europa-eyebrow.", // instantiation
      "YPL.FFL.P0001.HMN_posterCard.blockFooter.switchButton": "YPL.FFL.E0003-003.HMN_button-switchIcon", // TBD

  // colors & stuff

    "YPL.FFL.TKUI_D.P0001.HMN_posterCard.gradient": "YPL.FFL.TKUI_C.gradients.overlay.black.BL_TR",
    "YPL.FFL.TKUI_D.P0001.HMN_posterCard.bgImage.fillMode": "FILL", // https://www.figma.com/plugin-docs/api/Paint/#scalemode
    // typo
    "YPL.FFL.TKUI_D.P0001.HMN_posterCard.heading.color": "YPL.FFL.TKUI_C.colors.white.value",
    "YPL.FFL.TKUI_D.P0001.HMN_posterCard.eyebrow.color": "YPL.FFL.TKUI_C.colors.grey.300.value",
    "YPL.FFL.TKUI_D.P0001.HMN_posterCard.eyebrow.color": "YPL.FFL.TKUI_C.colors.grey.300.value",

  // micro layout

    "YPL.FFL.TKUI_D.P0001.HMN_posterCard.heading.margin": "negativeOf(YPL.FFL.TKUI_C.spaces.xs)", //  it's a negative values
    "YPL.FFL.TKUI_D.P0001.HMN_posterCard.heading.fringeBottom": "negativeOf(YPL.FFL.TKUI_C.spaces.xs)", //  it's a negative values
    "YPL.FFL.TKUI_D.P0001.HMN_posterCard.blockCopy.chip.margin": "YPL.FFL.TKUI_C.spaces.s",
    "YPL.FFL.TKUI_D.P0001.HMN_posterCard.blockCopy.chip.fringeBottom": "YPL.FFL.TKUI_C.spaces.s",
    "YPL.FFL.TKUI_D.P0001.HMN_posterCard.heading.paddingLeft": "YPL.FFL.TKUI_C.spaces.xxl",
    "YPL.FFL.TKUI_D.P0001.HMN_posterCard.blockFooter.eyebrow.paddingLeft": "YPL.FFL.TKUI_C.spaces.sm",

  // variations

    // options

      // OPT_layout2

        // dependencies
        "YPL.FFL.P0001.HMN_posterCard.blockCopy.paragraph": "YPL.FFL.F0002-103.HMN_typo_europa-p_s_regular", // instantiation
        // decisions
        "YPL.FFL.TKUI_D.P0001.HMN_posterCard.gradient.OPT_layout2": "YPL.FFL.TKUI_C.gradients.overlay.black.TL_BR",
        "YPL.FFL.TKUI_D.P0001.HMN_posterCard.blockCopy.paragraph.color": "YPL.FFL.TKUI_C.colors.white.value",
        "YPL.FFL.TKUI_D.P0001.HMN_posterCard.heading.margin": "YPL.FFL.TKUI_C.sizes.micro.400.value",
        "YPL.FFL.TKUI_D.P0001.HMN_posterCard.blockFooter.eyebrow.paddingLeft": "YPL.FFL.TKUI_C.spaces.none", // TBD

      // OPT_small
      "YPL.FFL.TKUI_D.P0001.HMN_posterCard.height.OPT_small": "YPL.FFL.TKUI_C.sizes.macro.700.value", // 432
      "YPL.FFL.TKUI_D.P0001.HMN_posterCard.heading.size.OPT_small": "YPL.FFL.TKUI_C.typo.europa.h7.size.value",
      "YPL.FFL.TKUI_D.P0001.HMN_posterCard.heading.tracking.OPT_small": "YPL.FFL.TKUI_C.typo.europa.h7.tracking.value",
      "YPL.FFL.TKUI_D.P0001.HMN_posterCard.heading.leading.OPT_small": "YPL.FFL.TKUI_C.typo.europa.h7.leading.value",
      "YPL.FFL.TKUI_D.P0001.HMN_posterCard.heading.paragraphSpacing.OPT_small": "YPL.FFL.TKUI_C.typo.europa.h7.paragraphSpacing.value",

    // breakpoints
    "YPL.FFL.TKUI_D.P0001.HMN_posterCard.blockCopy.width.BRKP_m": "YPL.FFL.TKUI_C.percents.ml.value",
    "YPL.FFL.TKUI_D.P0001.HMN_posterCard.heading.size.BRKP_m": "YPL.FFL.TKUI_C.typo.europa.h3.size.value",
    "YPL.FFL.TKUI_D.P0001.HMN_posterCard.heading.tracking.BRKP_m": "YPL.FFL.TKUI_C.typo.europa.h3.tracking.value",
    "YPL.FFL.TKUI_D.P0001.HMN_posterCard.heading.leading.BRKP_m": "YPL.FFL.TKUI_C.typo.europa.h3.leading.value",
    "YPL.FFL.TKUI_D.P0001.HMN_posterCard.heading.paragraphSpacing.BRKP_m": "YPL.FFL.TKUI_C.typo.europa.h3.paragraphSpacing.value"
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