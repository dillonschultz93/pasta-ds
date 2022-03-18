---
project_id: FFL # 3-letter code (✨ CHANGE ME ✨ )
title: Typography # title case (⚠️ DO NOT TOUCH ME ⚠️ )
permalink: farfalle/choices/typography # lowercase + use hyphens › https://tinyurl.com/27kmc4rb (✨ CHANGE ME ✨ )
grand_parent: Farfalle # title case (✨ CHANGE ME ✨ )
parent: Choices # title case (⚠️ DO NOT TOUCH ME ⚠️ )
layout: default
nav_order: 20
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
        "category": "breakpoints"
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
        "category": "factors"
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
        "category": "scales"
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
        "category": "spaces"
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
        "category": "sizes"
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
        "category": "fontFamily"
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
        "category": "leading"
      },
      "paragraphSpacing": {
        "value":  1.5,
        "description": "",
        "type": "paragraphSpacing",
        "kingdom": "TKUI_C",
        "category": "paragraphSpacing"
      },
      "trackingThreshold": {
        "value": 32,
        "description": "",
        "type": "other",
        "kingdom": "TKUI_C",
        "category": "trackingThreshold"
      }
    },
    "color": {
      "primary": {
        "value": "#3B9792",
        "description": "",
        "type": "color",
        "kingdom": "TKUI_C",
        "category": "colors"
      },
      "secondary": {
        "value": "#E05F1F",
        "description": "",
        "type": "color",
        "kingdom": "TKUI_C",
        "category": "colors"
      }
    }
  };

  const nomenclatureOptions = {
    namespace: 'YPL',
    project: '{{ page.project_id }}'
  };

  const overrideOptions = {};
</script>

<!-- chartist.js + plugins -->
<script type="text/javascript" src="{{site.baseurl}}/assets/js/libs/chartist.min.js"></script>
<script type="text/javascript" src="{{site.baseurl}}/assets/js/libs/chartist-plugin-legend.min.js"></script>
<script type="text/javascript" src="{{site.baseurl}}/assets/js/libs/chartist-plugin-axistitle.min.js"></script>
<script type="text/javascript" src="{{site.baseurl}}/assets/js/libs/chartist-plugin-zoom.min.js"></script>
<link rel="stylesheet" href="{{site.baseurl}}/assets/css/chartist.css">
<!-- end chartist calls -->

<!-- Utility scripts -->
<script defer src="{{ site.baseurl }}/assets/js/utilities/pasta-doc-utilities.js"></script>
<script defer src="{{ site.baseurl }}/assets/js/utilities/pasta-token-generation.js"></script>

<!-- Inject Pasta Apparatus ad hoc script ↓ -->
<script defer src="{{ site.baseurl }}/assets/js/apparatuses/{{ page.title | downcase }}/index.js"></script>
<script defer src="{{ site.baseurl }}/assets/js/apparatuses/{{ page.title | downcase }}/page-script.js"></script>

# Typography `{{ page.project_id }}`
{: .no_toc}

- TOC
{:toc}

## Font Family
We use Europa across all platforms to maintain a consistent experience across all devices.

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

<section>
  {% include output-table.html unit="weight" choiceType="typography" choiceCategory="fontFamily" %}
</section>

{% include copy-all-tokens-section.html section="fontFamily" %}

## Font Leading
Leading, also known as line height, is a typographic concept that is simply defined as the distance between lines of text.



## Font Tracking Apparatus
Tracking, also known as letter spacing, is a typographic principle that defines the horizontal distance between each charter/letter. Negative tracking allows more characters to fit into a horizontal space, while positive tracking spreads out the horizontal distance between character.
### Exploration

To dynamically generate letter spacing from a given font size we needed to explore the relation between our handpicked font size and tracking. The graph below shows our handpicked values as a plot of data points. Using [polynomial regression](https://en.wikipedia.org/wiki/Polynomial_regression#:~:text=In%20statistics%2C%20polynomial%20regression%20is,nth%20degree%20polynomial%20in%20x.&text=For%20this%20reason%2C%20polynomial%20regression,case%20of%20multiple%20linear%20regression.) we can then construct a "best-fit line" to predict our desired letter spacing.

This apparatus takes in a font size and outputs the approximate letter spacing appropriate for that font size. It does this by breaking up our handpicked tracking vs. font size choices into two sections. As you can see, at smaller font sizes our tracking can fluctuate. To capture those designer decisions we model the smaller font choices using polynomial regression at the seventh degree. As we approach larger font sizes we can see that the designer decisions become more linear. Our polynomial regression output then switches to model at the second degree.

