---
project_name: Farfalle # title case
project_id: FFL # 3-letter code
title: Cardlet # title case
UID: P0002 # ["P","E","F"] + Hexa code/index
variants: [] # all variants index
permalink: farfalle/patterns/cardlet # lowercase + use hyphens › https://tinyurl.com/27kmc4rb
grand_parent: Farfalle # title case
parent: Patterns # title case
layout: default
nav_order: 110
---

<!-- Set the choices and nomenclature for token naming -->
<!-- ⚠️ WARNING: NEVER USE COMMENTS INSIDE SCRIPT TAGS -->
<script>
  const superChoices =  {
    "dimensions": {
      "breakpoints": {
        "options": {
          "s": {
            "value": 480
          },
          "m": {
            "value": 768
          },
          "l": {
            "value": 1024
          },
          "xl": {
            "value": 1920
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
          "none": {
            "value": 0
          },
          "xs": {
            "value": "YPL.FFL.TKUI_M.scales.arithA.200"
          },
          "s": {
            "value": "YPL.FFL.TKUI_M.scales.arithA.400"
          },
          "sm": {
            "value": "YPL.FFL.TKUI_M.scales.arithA.600"
          },
          "m": {
            "value": "YPL.FFL.TKUI_M.scales.arithA.800"
          },
          "ml": {
            "value": "YPL.FFL.TKUI_M.scales.arithA.1000"
          },
          "l": {
            "value": "YPL.FFL.TKUI_M.scales.arithA.1200"
          },
          "xl": {
            "value": "YPL.FFL.TKUI_M.scales.arithA.1600"
          },
          "xxl": {
            "value": "YPL.FFL.TKUI_M.scales.arithA.1800"
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
              "value": "YPL.FFL.TKUI_M.scales.arithA.100"
            },
            "200": {
              "value": "YPL.FFL.TKUI_M.scales.arithA.200"
            },
            "300": {
              "value": "YPL.FFL.TKUI_M.scales.arithA.300"
            },
            "400": {
              "value": "YPL.FFL.TKUI_M.scales.arithA.400"
            },
            "500": {
              "value": "YPL.FFL.TKUI_M.scales.arithA.500"
            },
            "600": {
              "value": "YPL.FFL.TKUI_M.scales.arithA.600"
            },
            "700": {
              "value": "YPL.FFL.TKUI_M.scales.arithA.700"
            },
            "800": {
              "value": "YPL.FFL.TKUI_M.scales.arithA.800"
            },
            "900": {
              "value": "YPL.FFL.TKUI_M.scales.arithA.900"
            },
            "1000": {
              "value": "YPL.FFL.TKUI_M.scales.arithA.1000"
            },
            "1100": {
              "value": "YPL.FFL.TKUI_M.scales.arithA.1100"
            },
            "1200": {
              "value": "YPL.FFL.TKUI_M.scales.arithA.1200"
            },
            "1300": {
              "value": "YPL.FFL.TKUI_M.scales.arithA.1300"
            },
            "1400": {
              "value": "YPL.FFL.TKUI_M.scales.arithA.1400"
            },
            "1500": {
              "value": "YPL.FFL.TKUI_M.scales.arithA.1500"
            },
            "1600": {
              "value": "YPL.FFL.TKUI_M.scales.arithA.1600"
            }
          },
          "macro": {
            "100": {
              "value": "YPL.FFL.TKUI_M.scales.arithB.100"
            },
            "200": {
              "value": "YPL.FFL.TKUI_M.scales.arithB.200"
            },
            "300": {
              "value": "YPL.FFL.TKUI_M.scales.arithB.300"
            },
            "400": {
              "value": "YPL.FFL.TKUI_M.scales.arithB.700"
            },
            "500": {
              "value": "YPL.FFL.TKUI_M.scales.arithB.1200"
            },
            "600": {
              "value": "YPL.FFL.TKUI_M.scales.arithB.1500"
            },
            "700": {
              "value": "YPL.FFL.TKUI_M.scales.arithB.2600"
            },
            "800": {
              "value": "YPL.FFL.TKUI_M.scales.arithB.2800"
            },
            "900": {
              "value": "YPL.FFL.TKUI_M.scales.arithB.3100"
            },
            "1000": {
              "value": "YPL.FFL.TKUI_M.scales.arithB.4700"
            },
            "1100": {
              "value": "YPL.FFL.TKUI_M.scales.arithB.6300"
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
    "YPL.FFL.TKUI_M.scales.arithA.2000": {
      "value": 40,
      "description": "",
      "type": "other",
      "group": "scales"
    },
    "YPL.FFL.TKUI_C.sizes.micro.1700": {
      "value": "YPL.FFL.TKUI_M.scales.arithA.2000",
      "description": "",
      "type": "sizing",
      "group": "sizes"
    },
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
    "YPL.FFL.TKUI_C.colors.white": {
      "value": "#ffffff",
      "description": "",
      "type": "color",
      "group": "colors"
    },
    "YPL.FFL.TKUI_C.colors.black": {
      "value": "#000000",
      "description": "",
      "type": "color",
      "group": "colors"
    },
    "YPL.FFL.TKUI_C.colors.grey.100": {
      "value": "#f5f5f5",
      "description": "",
      "type": "color",
      "group": "colors"
    },
    "YPL.FFL.TKUI_C.colors.grey.200": {
      "value": "#E3E3E3",
      "description": "",
      "type": "color",
      "group": "colors"
    },
    "YPL.FFL.TKUI_C.colors.grey.300": {
      "value": "#BABABA",
      "description": "",
      "type": "color",
      "group": "colors"
    },
    "YPL.FFL.TKUI_C.colors.grey.500": {
      "value": "#707070",
      "description": "",
      "type": "color",
      "group": "colors"
    },
    "YPL.FFL.TKUI_C.colors.grey.700": {
      "value": "#4A4A4A",
      "description": "",
      "type": "color",
      "group": "colors"
    },
    "YPL.FFL.TKUI_C.colors.grey.900": {
      "value": "#242424",
      "description": "",
      "type": "color",
      "group": "colors"
    },
    "YPL.FFL.TKUI_C.colors.teal.300": {
      "value": "#4BB9B3",
      "description": "",
      "type": "color",
      "group": "colors"
    },
    "YPL.FFL.TKUI_C.colors.teal.400": {
      "value": "#3A9691",
      "description": "",
      "type": "color",
      "group": "colors"
    },
    "YPL.FFL.TKUI_C.colors.teal.500": {
      "value": "#2C726E",
      "description": "",
      "type": "color",
      "group": "colors"
    },
    "YPL.FFL.TKUI_C.colors.orange.300": {
      "value": "#E77F4B",
      "description": "",
      "type": "color",
      "group": "colors"
    },
    "YPL.FFL.TKUI_C.colors.orange.400": {
      "value": "#E05F1F",
      "description": "",
      "type": "color",
      "group": "colors"
    },
    "YPL.FFL.TKUI_C.colors.orange.500": {
      "value": "#B44B18",
      "description": "",
      "type": "color",
      "group": "colors"
    },
    "YPL.FFL.TKUI_C.gradients.overlay.black.BL_TR": {
      "value": "linear-gradient(64deg, YPL.FFL.TKUI_C.colors.black 0%, YPL.FFL.TKUI_C.colors.black 100%)",
      "description": "",
      "type": "color",
      "group": "gradients"
    },
    "YPL.FFL.TKUI_C.gradients.overlay.black.TL_BR": {
      "value": "linear-gradient(116deg, YPL.FFL.TKUI_C.colors.black 0%, YPL.FFL.TKUI_C.colors.black 100%)",
      "description": "",
      "type": "color",
      "group": "gradients"
    },
    "YPL.FFL.TKUI_C.typo.europa.familyName.light": {
      "value": "Europa-Light",
      "description": "",
      "type": "fontFamilies",
      "group": "typo"
    },
    "YPL.FFL.TKUI_C.typo.europa.familyName.regular": {
      "value": "Europa-Regular",
      "description": "",
      "type": "fontFamilies",
      "group": "typo"
    },
    "YPL.FFL.TKUI_C.typo.europa.familyName.bold": {
      "value": "Europa-Bold",
      "description": "",
      "type": "fontFamilies",
      "group": "typo"
    },
    "YPL.FFL.TKUI_C.typo.europa.leadingRatio.s": {
      "value": 1.2,
      "description": "",
      "type": "lineHeights",
      "group": "typo"
    },
    "YPL.FFL.TKUI_C.typo.europa.leadingRatio.m": {
      "value": 1.4,
      "description": "",
      "type": "lineHeights",
      "group": "typo"
    },
    "YPL.FFL.TKUI_C.typo.europa.leadingRatio.l": {
      "value": 1.5,
      "description": "",
      "type": "lineHeights",
      "group": "typo"
    },
    "YPL.FFL.TKUI_M.typo.europa.eyebrow.regular.size": {
      "value": "YPL.FFL.TKUI_C.sizes.micro.600 * YPL.TEST.textSizeFactor",
      "description": "",
      "type": "fontSizes",
      "group": "typo"
    },
    "YPL.FFL.TKUI_M.typo.europa.eyebrow.small.size": {
      "value": "YPL.FFL.TKUI_C.sizes.micro.500 * YPL.TEST.textSizeFactor",
      "description": "",
      "type": "fontSizes",
      "group": "typo"
    },
    "YPL.FFL.TKUI_M.typo.europa.caption.regular.size": {
      "value": "YPL.FFL.TKUI_C.sizes.micro.600 * YPL.TEST.textSizeFactor",
      "description": "",
      "type": "fontSizes",
      "group": "typo"
    },
    "YPL.FFL.TKUI_M.typo.europa.caption.strong.size": {
      "value": "YPL.FFL.TKUI_C.sizes.micro.600 * YPL.TEST.textSizeFactor",
      "description": "",
      "type": "fontSizes",
      "group": "typo"
    },
    "YPL.FFL.TKUI_M.typo.europa.ps.regular.size": {
      "value": "YPL.FFL.TKUI_C.sizes.micro.700 * YPL.TEST.textSizeFactor",
      "description": "",
      "type": "fontSizes",
      "group": "typo"
    },
    "YPL.FFL.TKUI_M.typo.europa.ps.strong.size": {
      "value": "YPL.FFL.TKUI_C.sizes.micro.700 * YPL.TEST.textSizeFactor",
      "description": "",
      "type": "fontSizes",
      "group": "typo"
    },
    "YPL.FFL.TKUI_M.typo.europa.p.regular.size": {
      "value": "YPL.FFL.TKUI_C.sizes.micro.800 * YPL.TEST.textSizeFactor",
      "description": "",
      "type": "fontSizes",
      "group": "typo"
    },
    "YPL.FFL.TKUI_M.typo.europa.p.strong.size": {
      "value": "YPL.FFL.TKUI_C.sizes.micro.800 * YPL.TEST.textSizeFactor",
      "description": "",
      "type": "fontSizes",
      "group": "typo"
    },
    "YPL.FFL.TKUI_M.typo.europa.h8.size": {
      "value": "YPL.FFL.TKUI_C.sizes.micro.700 * YPL.TEST.textSizeFactor",
      "description": "",
      "type": "fontSizes", 
      "group": "typo"
    },
    "YPL.FFL.TKUI_M.typo.europa.h7.size": {
      "value": "YPL.FFL.TKUI_C.sizes.micro.900 * YPL.TEST.textSizeFactor",
      "description": "",
      "type": "fontSizes", 
      "group": "typo"
    },
    "YPL.FFL.TKUI_M.typo.europa.h6.size": {
      "value": "YPL.FFL.TKUI_C.sizes.micro.1000 * YPL.TEST.textSizeFactor",
      "description": "",
      "type": "fontSizes", 
      "group": "typo"
    },
    "YPL.FFL.TKUI_M.typo.europa.h5.size": {
      "value": "YPL.FFL.TKUI_C.sizes.micro.1200 * YPL.TEST.textSizeFactor",
      "description": "",
      "type": "fontSizes", 
      "group": "typo"
    },
    "YPL.FFL.TKUI_M.typo.europa.h4.size": {
      "value": "YPL.FFL.TKUI_C.sizes.micro.1400 * YPL.TEST.textSizeFactor",
      "description": "",
      "type": "fontSizes", 
      "group": "typo"
    },
    "YPL.FFL.TKUI_M.typo.europa.h3.size": {
      "value": "YPL.FFL.TKUI_C.sizes.micro.1600 * YPL.TEST.textSizeFactor",
      "description": "",
      "type": "fontSizes", 
      "group": "typo"
    },
    "YPL.FFL.TKUI_M.typo.europa.h2.size": {
      "value": "YPL.FFL.TKUI_C.sizes.micro.1700 * YPL.TEST.textSizeFactor",
      "description": "",
      "type": "fontSizes", 
      "group": "typo"
    },
    "YPL.FFL.TKUI_M.typo.europa.h1.size": {
      "value": "YPL.FFL.TKUI_C.sizes.macro.200 * YPL.TEST.textSizeFactor",
      "description": "",
      "type": "fontSizes",
      "group": "typo"
    },
    "YPL.FFL.TKUI_M.typo.europa.eyebrow.regular.leading": {
      "value": 18,
      "description": "FIXME",
      "type": "lineHeights",
      "group": "typo"
    },
    "YPL.FFL.TKUI_M.typo.europa.eyebrow.small.leading": {
      "value": 14,
      "description": "FIXME",
      "type": "lineHeights",
      "group": "typo"
    },
    "YPL.FFL.TKUI_M.typo.europa.caption.regular.leading": {
      "value": 18,
      "description": "FIXME",
      "type": "lineHeights",
      "group": "typo"
    },
    "YPL.FFL.TKUI_M.typo.europa.caption.strong.leading": {
      "value": 18,
      "description": "FIXME",
      "type": "lineHeights",
      "group": "typo"
    },
    "YPL.FFL.TKUI_M.typo.europa.ps.regular.leading": {
      "value": "YPL.FFL.TKUI_C.sizes.micro.700 * YPL.FFL.TKUI_C.typo.europa.leadingRatio.s",
      "description": "",
      "type": "lineHeights",
      "group": "typo"
    },
    "YPL.FFL.TKUI_M.typo.europa.ps.strong.leading": {
      "value": "YPL.FFL.TKUI_C.sizes.micro.700 * YPL.FFL.TKUI_C.typo.europa.leadingRatio.s",
      "description": "",
      "type": "lineHeights",
      "group": "typo"
    },
    "YPL.FFL.TKUI_M.typo.europa.p.regular.leading": {
      "value": "YPL.FFL.TKUI_C.sizes.micro.800 * YPL.FFL.TKUI_C.typo.europa.leadingRatio.s",
      "description": "",
      "type": "lineHeights",
      "group": "typo"
    },
    "YPL.FFL.TKUI_M.typo.europa.p.strong.leading": {
      "value": "YPL.FFL.TKUI_C.sizes.micro.800 * YPL.FFL.TKUI_C.typo.europa.leadingRatio.s",
      "description": "",
      "type": "lineHeights",
      "group": "typo"
    },
    "YPL.FFL.TKUI_M.typo.europa.h8.leading": {
      "value": "YPL.FFL.TKUI_C.sizes.micro.700 * YPL.FFL.TKUI_C.typo.europa.leadingRatio.s",
      "description": "",
      "type": "lineHeights", 
      "group": "typo"
    },
    "YPL.FFL.TKUI_M.typo.europa.h7.leading": {
      "value": "YPL.FFL.TKUI_C.sizes.micro.900 * YPL.FFL.TKUI_C.typo.europa.leadingRatio.s",
      "description": "",
      "type": "lineHeights", 
      "group": "typo"
    },
    "YPL.FFL.TKUI_M.typo.europa.h6.leading": {
      "value": "YPL.FFL.TKUI_C.sizes.micro.1000 * YPL.FFL.TKUI_C.typo.europa.leadingRatio.s",
      "description": "",
      "type": "lineHeights", 
      "group": "typo"
    },
    "YPL.FFL.TKUI_M.typo.europa.h5.leading": {
      "value": "YPL.FFL.TKUI_C.sizes.micro.1200 * YPL.FFL.TKUI_C.typo.europa.leadingRatio.s",
      "description": "",
      "type": "lineHeights", 
      "group": "typo"
    },
    "YPL.FFL.TKUI_M.typo.europa.h4.leading": {
      "value": "YPL.FFL.TKUI_C.sizes.micro.1400 * YPL.FFL.TKUI_C.typo.europa.leadingRatio.s",
      "description": "",
      "type": "lineHeights", 
      "group": "typo"
    },
    "YPL.FFL.TKUI_M.typo.europa.h3.leading": {
      "value": "YPL.FFL.TKUI_C.sizes.micro.1600 * YPL.FFL.TKUI_C.typo.europa.leadingRatio.s",
      "description": "",
      "type": "lineHeights", 
      "group": "typo"
    },
    "YPL.FFL.TKUI_M.typo.europa.h2.leading": {
      "value": 41.6,
      "description": "FIXME",
      "type": "lineHeights", 
      "group": "typo"
    },
    "YPL.FFL.TKUI_M.typo.europa.h1.leading": {
      "value": 50.4,
      "description": "FIXME",
      "type": "lineHeights",
      "group": "typo"
    },
    "YPL.FFL.TKUI_M.typo.europa.eyebrow.regular.paragraphSpacing": {
      "value": 0,
      "description": "FIXME",
      "type": "paragraphSpacing",
      "group": "typo"
    },
    "YPL.FFL.TKUI_M.typo.europa.eyebrow.small.paragraphSpacing": {
      "value": 0,
      "description": "FIXME",
      "type": "paragraphSpacing",
      "group": "typo"
    },
    "YPL.FFL.TKUI_M.typo.europa.caption.regular.paragraphSpacing": {
      "value": 0,
      "description": "FIXME",
      "type": "paragraphSpacing",
      "group": "typo"
    },
    "YPL.FFL.TKUI_M.typo.europa.caption.strong.paragraphSpacing": {
      "value": 0,
      "description": "FIXME",
      "type": "paragraphSpacing",
      "group": "typo"
    },
    "YPL.FFL.TKUI_M.typo.europa.ps.regular.paragraphSpacing": {
      "value": 7.56,
      "description": "FIXME",
      "type": "paragraphSpacing",
      "group": "typo"
    },
    "YPL.FFL.TKUI_M.typo.europa.ps.strong.paragraphSpacing": {
      "value": 7.56,
      "description": "FIXME",
      "type": "paragraphSpacing",
      "group": "typo"
    },
    "YPL.FFL.TKUI_M.typo.europa.p.regular.paragraphSpacing": {
      "value": 8.64,
      "description": "FIXME",
      "type": "paragraphSpacing",
      "group": "typo"
    },
    "YPL.FFL.TKUI_M.typo.europa.p.strong.paragraphSpacing": {
      "value": 8.64,
      "description": "FIXME",
      "type": "paragraphSpacing",
      "group": "typo"
    },
    "YPL.FFL.TKUI_M.typo.europa.h8.paragraphSpacing": {
      "value": 7.56,
      "description": "FIXME",
      "type": "paragraphSpacing", 
      "group": "typo"
    },
    "YPL.FFL.TKUI_M.typo.europa.h7.paragraphSpacing": {
      "value": 9.72,
      "description": "FIXME",
      "type": "paragraphSpacing", 
      "group": "typo"
    },
    "YPL.FFL.TKUI_M.typo.europa.h6.paragraphSpacing": {
      "value": 10.8,
      "description": "FIXME",
      "type": "paragraphSpacing", 
      "group": "typo"
    },
    "YPL.FFL.TKUI_M.typo.europa.h5.paragraphSpacing": {
      "value": 12.96,
      "description": "FIXME",
      "type": "paragraphSpacing", 
      "group": "typo"
    },
    "YPL.FFL.TKUI_M.typo.europa.h4.paragraphSpacing": {
      "value": 15.12,
      "description": "FIXME",
      "type": "paragraphSpacing", 
      "group": "typo"
    },
    "YPL.FFL.TKUI_M.typo.europa.h3.paragraphSpacing": {
      "value": 17.28,
      "description": "FIXME",
      "type": "paragraphSpacing", 
      "group": "typo"
    },
    "YPL.FFL.TKUI_M.typo.europa.h2.paragraphSpacing": {
      "value": 23.12,
      "description": "FIXME",
      "type": "paragraphSpacing", 
      "group": "typo"
    },
    "YPL.FFL.TKUI_M.typo.europa.h1.paragraphSpacing": {
      "value": 22.68,
      "description": "FIXME",
      "type": "paragraphSpacing",
      "group": "typo"
    },
    "YPL.FFL.TKUI_M.typo.europa.eyebrow.regular.tracking": {
      "value": "10%",
      "description": "FIXME",
      "type": "letterSpacing",
      "group": "typo"
    },
    "YPL.FFL.TKUI_M.typo.europa.eyebrow.small.tracking": {
      "value": "10%",
      "description": "FIXME",
      "type": "letterSpacing",
      "group": "typo"
    },
    "YPL.FFL.TKUI_M.typo.europa.caption.regular.tracking": {
      "value": "-2%",
      "description": "FIXME",
      "type": "letterSpacing",
      "group": "typo"
    },
    "YPL.FFL.TKUI_M.typo.europa.caption.strong.tracking": {
      "value": "-2%",
      "description": "FIXME",
      "type": "letterSpacing",
      "group": "typo"
    },
    "YPL.FFL.TKUI_M.typo.europa.ps.regular.tracking": {
      "value": "-2%",
      "description": "FIXME",
      "type": "letterSpacing",
      "group": "typo"
    },
    "YPL.FFL.TKUI_M.typo.europa.ps.strong.tracking": {
      "value": "-2%",
      "description": "FIXME",
      "type": "letterSpacing",
      "group": "typo"
    },
    "YPL.FFL.TKUI_M.typo.europa.p.regular.tracking": {
      "value": "-2%",
      "description": "FIXME",
      "type": "letterSpacing",
      "group": "typo"
    },
    "YPL.FFL.TKUI_M.typo.europa.p.strong.tracking": {
      "value": "-2%",
      "description": "FIXME",
      "type": "letterSpacing",
      "group": "typo"
    },
    "YPL.FFL.TKUI_M.typo.europa.h8.tracking": {
      "value": "3.5%",
      "description": "FIXME",
      "type": "letterSpacing", 
      "group": "typo"
    },
    "YPL.FFL.TKUI_M.typo.europa.h7.tracking": {
      "value": "0%",
      "description": "FIXME",
      "type": "letterSpacing", 
      "group": "typo"
    },
    "YPL.FFL.TKUI_M.typo.europa.h6.tracking": {
      "value": "0%",
      "description": "FIXME",
      "type": "letterSpacing", 
      "group": "typo"
    },
    "YPL.FFL.TKUI_M.typo.europa.h5.tracking": {
      "value": "-1%",
      "description": "FIXME",
      "type": "letterSpacing", 
      "group": "typo"
    },
    "YPL.FFL.TKUI_M.typo.europa.h4.tracking": {
      "value": "-1%",
      "description": "FIXME",
      "type": "letterSpacing", 
      "group": "typo"
    },
    "YPL.FFL.TKUI_M.typo.europa.h3.tracking": {
      "value": "-2%",
      "description": "FIXME",
      "type": "letterSpacing", 
      "group": "typo"
    },
    "YPL.FFL.TKUI_M.typo.europa.h2.tracking": {
      "value": "-2%",
      "description": "FIXME",
      "type": "letterSpacing", 
      "group": "typo"
    },
    "YPL.FFL.TKUI_M.typo.europa.h1.tracking": {
      "value": "-2%",
      "description": "FIXME",
      "type": "letterSpacing",
      "group": "typo"
    },
    "YPL.FFL.TKUI_D.F0002-401.HMN_typo_europa-eyebrow.familyName": {
      "value": "YPL.FFL.TKUI_C.typo.europa.familyName.regular",
      "description": "",
      "type": "fontFamilies",
      "group": "typo"
    },
    "YPL.FFL.TKUI_D.F0002-401.HMN_typo_europa-eyebrow.size": {
      "value": "YPL.FFL.TKUI_M.typo.europa.eyebrow.regular.size",
      "description": "",
      "type": "fontSizes",
      "group": "typo"
    },
    "YPL.FFL.TKUI_D.F0002-401.HMN_typo_europa-eyebrow.leading": {
      "value": "YPL.FFL.TKUI_M.typo.europa.eyebrow.regular.leading",
      "description": "",
      "type": "lineHeights",
      "group": "typo"
    },
    "YPL.FFL.TKUI_D.F0002-401.HMN_typo_europa-eyebrow.paragraphSpacing": {
      "value": "YPL.FFl.TKUI_M.typo.europa.eyebrow.regular.paragraphSpacing",
      "description": "",
      "type": "paragraphSpacing",
      "group": "typo"
    },
    "YPL.FFL.TKUI_D.F0002-401.HMN_typo_europa-eyebrow.tracking": {
      "value": "YPL.FFL.TKUI_M.typo.europa.eyebrow.regular.tracking",
      "description": "",
      "type": "letterSpacing",
      "group": "typo"
    },
    "YPL.FFL.TKUI_D.F0002-401.HMN_typo_europa-eyebrow.textAlignHorizontal": {
      "value": "LEFT",
      "description": "",
      "type": "other",
      "group": "typo"
    },
    "YPL.FFL.TKUI_D.F0002-401.HMN_typo_europa-eyebrow.textCase": {
      "value": "ORIGINAL",
      "description": "",
      "type": "other",
      "group": "typo"
    },
    "YPL.FFL.TKUI_D.F0002-401.HMN_typo_europa-eyebrow.textDecoration": {
      "value": "NONE",
      "description": "",
      "type": "other",
      "group": "typo"
    },
    "YPL.FFL.TKUI_D.F0002-401.HMN_typo_europa-eyebrow.color": {
      "value": "YPL.FFL.TKUI_C.colors.black",
      "description": "",
      "type": "other",
      "group": "typo"
    },
    "YPL.FFL.TKUI_D.F0002-402.HMN_typo_europa-eyebrow_small.familyName": {
      "value": "YPL.FFL.TKUI_C.typo.europa.familyName.bold",
      "description": "",
      "type": "fontFamilies",
      "group": "typo"
    },
    "YPL.FFL.TKUI_D.F0002-402.HMN_typo_europa-eyebrow_small.size": {
      "value": "YPL.FFL.TKUI_M.typo.europa.eyebrow.small.size",
      "description": "",
      "type": "fontSizes",
      "group": "typo"
    },
    "YPL.FFL.TKUI_D.F0002-402.HMN_typo_europa-eyebrow_small.leading": {
      "value": "YPL.FFL.TKUI_M.typo.europa.eyebrow.small.leading",
      "description": "",
      "type": "lineHeights",
      "group": "typo"
    },
    "YPL.FFL.TKUI_D.F0002-402.HMN_typo_europa-eyebrow_small.paragraphSpacing": {
      "value": "YPL.FFl.TKUI_M.typo.europa.eyebrow.small.paragraphSpacing",
      "description": "",
      "type": "paragraphSpacing",
      "group": "typo"
    },
    "YPL.FFL.TKUI_D.F0002-402.HMN_typo_europa-eyebrow_small.tracking": {
      "value": "YPL.FFL.TKUI_M.typo.europa.eyebrow.small.tracking",
      "description": "",
      "type": "letterSpacing",
      "group": "typo"
    },
    "YPL.FFL.TKUI_D.F0002-402.HMN_typo_europa-eyebrow_small.textAlignHorizontal": {
      "value": "LEFT",
      "description": "",
      "type": "other",
      "group": "typo"
    },
    "YPL.FFL.TKUI_D.F0002-402.HMN_typo_europa-eyebrow_small.textCase": {
      "value": "ORIGINAL",
      "description": "",
      "type": "other",
      "group": "typo"
    },
    "YPL.FFL.TKUI_D.F0002-402.HMN_typo_europa-eyebrow_small.textDecoration": {
      "value": "NONE",
      "description": "",
      "type": "other",
      "group": "typo"
    },
    "YPL.FFL.TKUI_D.F0002-402.HMN_typo_europa-eyebrow_small.color": {
      "value": "YPL.FFL.TKUI_C.colors.black",
      "description": "",
      "type": "other",
      "group": "typo"
    },
    "YPL.FFL.TKUI_D.F0002-301.HMN_typo_europa-caption_regular.familyName": {
      "value": "YPL.FFL.TKUI_C.typo.europa.familyName.regular",
      "description": "",
      "type": "fontFamilies",
      "group": "typo"
    },
    "YPL.FFL.TKUI_D.F0002-301.HMN_typo_europa-caption_regular.size": {
      "value": "YPL.FFL.TKUI_M.typo.europa.caption.regular.size",
      "description": "",
      "type": "fontSizes",
      "group": "typo"
    },
    "YPL.FFL.TKUI_D.F0002-301.HMN_typo_europa-caption_regular.leading": {
      "value": "YPL.FFL.TKUI_M.typo.europa.caption.regular.leading",
      "description": "",
      "type": "lineHeights",
      "group": "typo"
    },
    "YPL.FFL.TKUI_D.F0002-301.HMN_typo_europa-caption_regular.paragraphSpacing": {
      "value": "YPL.FFl.TKUI_M.typo.europa.caption.regular.paragraphSpacing",
      "description": "",
      "type": "paragraphSpacing",
      "group": "typo"
    },
    "YPL.FFL.TKUI_D.F0002-301.HMN_typo_europa-caption_regular.tracking": {
      "value": "YPL.FFL.TKUI_M.typo.europa.caption.regular.tracking",
      "description": "",
      "type": "letterSpacing",
      "group": "typo"
    },
    "YPL.FFL.TKUI_D.F0002-301.HMN_typo_europa-caption_regular.textAlignHorizontal": {
      "value": "LEFT",
      "description": "",
      "type": "other",
      "group": "typo"
    },
    "YPL.FFL.TKUI_D.F0002-301.HMN_typo_europa-caption_regular.textCase": {
      "value": "ORIGINAL",
      "description": "",
      "type": "other",
      "group": "typo"
    },
    "YPL.FFL.TKUI_D.F0002-301.HMN_typo_europa-caption_regular.textDecoration": {
      "value": "NONE",
      "description": "",
      "type": "other",
      "group": "typo"
    },
    "YPL.FFL.TKUI_D.F0002-301.HMN_typo_europa-caption_regular.color": {
      "value": "YPL.FFL.TKUI_C.colors.black",
      "description": "",
      "type": "other",
      "group": "typo"
    },
    "YPL.FFL.TKUI_D.F0002-302.HMN_typo_europa-caption_strong.familyName": {
      "value": "YPL.FFL.TKUI_C.typo.europa.familyName.bold",
      "description": "",
      "type": "fontFamilies",
      "group": "typo"
    },
    "YPL.FFL.TKUI_D.F0002-302.HMN_typo_europa-caption_strong.size": {
      "value": "YPL.FFL.TKUI_M.typo.europa.caption.strong.size",
      "description": "",
      "type": "fontSizes",
      "group": "typo"
    },
    "YPL.FFL.TKUI_D.F0002-302.HMN_typo_europa-caption_strong.leading": {
      "value": "YPL.FFL.TKUI_M.typo.europa.caption.strong.leading",
      "description": "",
      "type": "lineHeights",
      "group": "typo"
    },
    "YPL.FFL.TKUI_D.F0002-302.HMN_typo_europa-caption_strong.paragraphSpacing": {
      "value": "YPL.FFl.TKUI_M.typo.europa.caption.strong.paragraphSpacing",
      "description": "",
      "type": "paragraphSpacing",
      "group": "typo"
    },
    "YPL.FFL.TKUI_D.F0002-302.HMN_typo_europa-caption_strong.tracking": {
      "value": "YPL.FFL.TKUI_M.typo.europa.caption.strong.tracking",
      "description": "",
      "type": "letterSpacing",
      "group": "typo"
    },
    "YPL.FFL.TKUI_D.F0002-302.HMN_typo_europa-caption_strong.textAlignHorizontal": {
      "value": "LEFT",
      "description": "",
      "type": "other",
      "group": "typo"
    },
    "YPL.FFL.TKUI_D.F0002-302.HMN_typo_europa-caption_strong.textCase": {
      "value": "ORIGINAL",
      "description": "",
      "type": "other",
      "group": "typo"
    },
    "YPL.FFL.TKUI_D.F0002-302.HMN_typo_europa-caption_strong.textDecoration": {
      "value": "NONE",
      "description": "",
      "type": "other",
      "group": "typo"
    },
    "YPL.FFL.TKUI_D.F0002-302.HMN_typo_europa-caption_strong.color": {
      "value": "YPL.FFL.TKUI_C.colors.black",
      "description": "",
      "type": "other",
      "group": "typo"
    },
    "YPL.FFL.TKUI_D.F0002-103.HMN_typo_europa-p_s_regular.familyName": {
      "value": "YPL.FFL.TKUI_C.typo.europa.familyName.regular",
      "description": "",
      "type": "fontFamilies",
      "group": "typo"
    },
    "YPL.FFL.TKUI_D.F0002-103.HMN_typo_europa-p_s_regular.size": {
      "value": "YPL.FFL.TKUI_M.typo.europa.ps.regular.size",
      "description": "",
      "type": "fontSizes",
      "group": "typo"
    },
    "YPL.FFL.TKUI_D.F0002-103.HMN_typo_europa-p_s_regular.leading": {
      "value": "YPL.FFL.TKUI_M.typo.europa.ps.regular.leading",
      "description": "",
      "type": "lineHeights",
      "group": "typo"
    },
    "YPL.FFL.TKUI_D.F0002-103.HMN_typo_europa-p_s_regular.paragraphSpacing": {
      "value": "YPL.FFl.TKUI_M.typo.europa.ps.regular.paragraphSpacing",
      "description": "",
      "type": "paragraphSpacing",
      "group": "typo"
    },
    "YPL.FFL.TKUI_D.F0002-103.HMN_typo_europa-p_s_regular.tracking": {
      "value": "YPL.FFL.TKUI_M.typo.europa.ps.regular.tracking",
      "description": "",
      "type": "letterSpacing",
      "group": "typo"
    },
    "YPL.FFL.TKUI_D.F0002-103.HMN_typo_europa-p_s_regular.textAlignHorizontal": {
      "value": "LEFT",
      "description": "",
      "type": "other",
      "group": "typo"
    },
    "YPL.FFL.TKUI_D.F0002-103.HMN_typo_europa-p_s_regular.textCase": {
      "value": "ORIGINAL",
      "description": "",
      "type": "other",
      "group": "typo"
    },
    "YPL.FFL.TKUI_D.F0002-103.HMN_typo_europa-p_s_regular.textDecoration": {
      "value": "NONE",
      "description": "",
      "type": "other",
      "group": "typo"
    },
    "YPL.FFL.TKUI_D.F0002-103.HMN_typo_europa-p_s_regular.color": {
      "value": "YPL.FFL.TKUI_C.colors.black",
      "description": "",
      "type": "other",
      "group": "typo"
    },
    "YPL.FFL.TKUI_D.F0002-104.HMN_typo_europa-p_s_strong.familyName": {
      "value": "YPL.FFL.TKUI_C.typo.europa.familyName.bold",
      "description": "",
      "type": "fontFamilies",
      "group": "typo"
    },
    "YPL.FFL.TKUI_D.F0002-104.HMN_typo_europa-p_s_strong.size": {
      "value": "YPL.FFL.TKUI_M.typo.europa.ps.strong.size",
      "description": "",
      "type": "fontSizes",
      "group": "typo"
    },
    "YPL.FFL.TKUI_D.F0002-104.HMN_typo_europa-p_s_strong.leading": {
      "value": "YPL.FFL.TKUI_M.typo.europa.ps.strong.leading",
      "description": "",
      "type": "lineHeights",
      "group": "typo"
    },
    "YPL.FFL.TKUI_D.F0002-104.HMN_typo_europa-p_s_strong.paragraphSpacing": {
      "value": "YPL.FFl.TKUI_M.typo.europa.ps.strong.paragraphSpacing",
      "description": "",
      "type": "paragraphSpacing",
      "group": "typo"
    },
    "YPL.FFL.TKUI_D.F0002-104.HMN_typo_europa-p_s_strong.tracking": {
      "value": "YPL.FFL.TKUI_M.typo.europa.ps.strong.tracking",
      "description": "",
      "type": "letterSpacing",
      "group": "typo"
    },
    "YPL.FFL.TKUI_D.F0002-104.HMN_typo_europa-p_s_strong.textAlignHorizontal": {
      "value": "LEFT",
      "description": "",
      "type": "other",
      "group": "typo"
    },
    "YPL.FFL.TKUI_D.F0002-104.HMN_typo_europa-p_s_strong.textCase": {
      "value": "ORIGINAL",
      "description": "",
      "type": "other",
      "group": "typo"
    },
    "YPL.FFL.TKUI_D.F0002-104.HMN_typo_europa-p_s_strong.textDecoration": {
      "value": "NONE",
      "description": "",
      "type": "other",
      "group": "typo"
    },
    "YPL.FFL.TKUI_D.F0002-104.HMN_typo_europa-p_s_strong.color": {
      "value": "YPL.FFL.TKUI_C.colors.black",
      "description": "",
      "type": "other",
      "group": "typo"
    },
    "YPL.FFL.TKUI_D.F0002-101.HMN_typo_europa-p_regular.familyName": {
      "value": "YPL.FFL.TKUI_C.typo.europa.familyName.regular",
      "description": "",
      "type": "fontFamilies",
      "group": "typo"
    },
    "YPL.FFL.TKUI_D.F0002-101.HMN_typo_europa-p_regular.size": {
      "value": "YPL.FFL.TKUI_M.typo.europa.p.regular.size",
      "description": "",
      "type": "fontSizes",
      "group": "typo"
    },
    "YPL.FFL.TKUI_D.F0002-101.HMN_typo_europa-p_regular.leading": {
      "value": "YPL.FFL.TKUI_M.typo.europa.p.regular.leading",
      "description": "",
      "type": "lineHeights",
      "group": "typo"
    },
    "YPL.FFL.TKUI_D.F0002-101.HMN_typo_europa-p_regular.paragraphSpacing": {
      "value": "YPL.FFl.TKUI_M.typo.europa.p.regular.paragraphSpacing",
      "description": "",
      "type": "paragraphSpacing",
      "group": "typo"
    },
    "YPL.FFL.TKUI_D.F0002-101.HMN_typo_europa-p_regular.tracking": {
      "value": "YPL.FFL.TKUI_M.typo.europa.p.regular.tracking",
      "description": "",
      "type": "letterSpacing",
      "group": "typo"
    },
    "YPL.FFL.TKUI_D.F0002-101.HMN_typo_europa-p_regular.textAlignHorizontal": {
      "value": "LEFT",
      "description": "",
      "type": "other",
      "group": "typo"
    },
    "YPL.FFL.TKUI_D.F0002-101.HMN_typo_europa-p_regular.textCase": {
      "value": "ORIGINAL",
      "description": "",
      "type": "other",
      "group": "typo"
    },
    "YPL.FFL.TKUI_D.F0002-101.HMN_typo_europa-p_regular.textDecoration": {
      "value": "NONE",
      "description": "",
      "type": "other",
      "group": "typo"
    },
    "YPL.FFL.TKUI_D.F0002-101.HMN_typo_europa-p_regular.color": {
      "value": "YPL.FFL.TKUI_C.colors.black",
      "description": "",
      "type": "other",
      "group": "typo"
    },
    "YPL.FFL.TKUI_D.F0002-102.HMN_typo_europa-p_strong.familyName": {
      "value": "YPL.FFL.TKUI_C.typo.europa.familyName.bold",
      "description": "",
      "type": "fontFamilies",
      "group": "typo"
    },
    "YPL.FFL.TKUI_D.F0002-102.HMN_typo_europa-p_strong.size": {
      "value": "YPL.FFL.TKUI_M.typo.europa.p.strong.size",
      "description": "",
      "type": "fontSizes",
      "group": "typo"
    },
    "YPL.FFL.TKUI_D.F0002-102.HMN_typo_europa-p_strong.leading": {
      "value": "YPL.FFL.TKUI_M.typo.europa.p.strong.leading",
      "description": "",
      "type": "lineHeights",
      "group": "typo"
    },
    "YPL.FFL.TKUI_D.F0002-102.HMN_typo_europa-p_strong.paragraphSpacing": {
      "value": "YPL.FFl.TKUI_M.typo.europa.p.strong.paragraphSpacing",
      "description": "",
      "type": "paragraphSpacing",
      "group": "typo"
    },
    "YPL.FFL.TKUI_D.F0002-102.HMN_typo_europa-p_strong.tracking": {
      "value": "YPL.FFL.TKUI_M.typo.europa.p.strong.tracking",
      "description": "",
      "type": "letterSpacing",
      "group": "typo"
    },
    "YPL.FFL.TKUI_D.F0002-102.HMN_typo_europa-p_strong.textAlignHorizontal": {
      "value": "LEFT",
      "description": "",
      "type": "other",
      "group": "typo"
    },
    "YPL.FFL.TKUI_D.F0002-102.HMN_typo_europa-p_strong.textCase": {
      "value": "ORIGINAL",
      "description": "",
      "type": "other",
      "group": "typo"
    },
    "YPL.FFL.TKUI_D.F0002-102.HMN_typo_europa-p_strong.textDecoration": {
      "value": "NONE",
      "description": "",
      "type": "other",
      "group": "typo"
    },
    "YPL.FFL.TKUI_D.F0002-102.HMN_typo_europa-p_strong.color": {
      "value": "YPL.FFL.TKUI_C.colors.black",
      "description": "",
      "type": "other",
      "group": "typo"
    },
    "YPL.FFL.TKUI_D.F0002-001.HMN_typo_europa-h1.familyName": {
      "value": "YPL.FFL.TKUI_C.typo.europa.familyName.bold",
      "description": "",
      "type": "fontFamilies",
      "group": "typo"
    },
    "YPL.FFL.TKUI_D.F0002-001.HMN_typo_europa-h1.size": {
      "value": "YPL.FFL.TKUI_M.typo.europa.h1.size",
      "description": "",
      "type": "fontSizes",
      "group": "typo"
    },
    "YPL.FFL.TKUI_D.F0002-001.HMN_typo_europa-h1.leading": {
      "value": "YPL.FFL.TKUI_M.typo.europa.h1.leading",
      "description": "",
      "type": "lineHeights",
      "group": "typo"
    },
    "YPL.FFL.TKUI_D.F0002-001.HMN_typo_europa-h1.paragraphSpacing": {
      "value": "YPL.FFl.TKUI_M.typo.europa.h1.paragraphSpacing",
      "description": "",
      "type": "paragraphSpacing",
      "group": "typo"
    },
    "YPL.FFL.TKUI_D.F0002-001.HMN_typo_europa-h1.tracking": {
      "value": "YPL.FFL.TKUI_M.typo.europa.h1.tracking",
      "description": "",
      "type": "letterSpacing",
      "group": "typo"
    },
    "YPL.FFL.TKUI_D.F0002-001.HMN_typo_europa-h1.textAlignHorizontal": {
      "value": "LEFT",
      "description": "",
      "type": "other",
      "group": "typo"
    },
    "YPL.FFL.TKUI_D.F0002-001.HMN_typo_europa-h1.textCase": {
      "value": "ORIGINAL",
      "description": "",
      "type": "other",
      "group": "typo"
    },
    "YPL.FFL.TKUI_D.F0002-001.HMN_typo_europa-h1.textDecoration": {
      "value": "NONE",
      "description": "",
      "type": "other",
      "group": "typo"
    },
    "YPL.FFL.TKUI_D.F0002-001.HMN_typo_europa-h1.color": {
      "value": "YPL.FFL.TKUI_C.colors.black",
      "description": "",
      "type": "other",
      "group": "typo"
    },
    "YPL.FFL.TKUI_D.F0002-002.HMN_typo_europa-h2.familyName": {
      "value": "YPL.FFL.TKUI_C.typo.europa.familyName.bold",
      "description": "",
      "type": "fontFamilies",
      "group": "typo"
    },
    "YPL.FFL.TKUI_D.F0002-002.HMN_typo_europa-h2.size": {
      "value": "YPL.FFL.TKUI_M.typo.europa.h2.size",
      "description": "",
      "type": "fontSizes",
      "group": "typo"
    },
    "YPL.FFL.TKUI_D.F0002-002.HMN_typo_europa-h2.leading": {
      "value": "YPL.FFL.TKUI_M.typo.europa.h2.leading",
      "description": "",
      "type": "lineHeights",
      "group": "typo"
    },
    "YPL.FFL.TKUI_D.F0002-002.HMN_typo_europa-h2.paragraphSpacing": {
      "value": "YPL.FFl.TKUI_M.typo.europa.h2.paragraphSpacing",
      "description": "",
      "type": "paragraphSpacing",
      "group": "typo"
    },
    "YPL.FFL.TKUI_D.F0002-002.HMN_typo_europa-h2.tracking": {
      "value": "YPL.FFL.TKUI_M.typo.europa.h2.tracking",
      "description": "",
      "type": "letterSpacing",
      "group": "typo"
    },
    "YPL.FFL.TKUI_D.F0002-002.HMN_typo_europa-h2.textAlignHorizontal": {
      "value": "LEFT",
      "description": "",
      "type": "other",
      "group": "typo"
    },
    "YPL.FFL.TKUI_D.F0002-002.HMN_typo_europa-h2.textCase": {
      "value": "ORIGINAL",
      "description": "",
      "type": "other",
      "group": "typo"
    },
    "YPL.FFL.TKUI_D.F0002-002.HMN_typo_europa-h2.textDecoration": {
      "value": "NONE",
      "description": "",
      "type": "other",
      "group": "typo"
    },
    "YPL.FFL.TKUI_D.F0002-002.HMN_typo_europa-h2.color": {
      "value": "YPL.FFL.TKUI_C.colors.black",
      "description": "",
      "type": "other",
      "group": "typo"
    },
    "YPL.FFL.TKUI_D.F0002-003.HMN_typo_europa-h3.familyName": {
      "value": "YPL.FFL.TKUI_C.typo.europa.familyName.bold",
      "description": "",
      "type": "fontFamilies",
      "group": "typo"
    },
    "YPL.FFL.TKUI_D.F0002-003.HMN_typo_europa-h3.size": {
      "value": "YPL.FFL.TKUI_M.typo.europa.h3.size",
      "description": "",
      "type": "fontSizes",
      "group": "typo"
    },
    "YPL.FFL.TKUI_D.F0002-003.HMN_typo_europa-h3.leading": {
      "value": "YPL.FFL.TKUI_M.typo.europa.h3.leading",
      "description": "",
      "type": "lineHeights",
      "group": "typo"
    },
    "YPL.FFL.TKUI_D.F0002-003.HMN_typo_europa-h3.paragraphSpacing": {
      "value": "YPL.FFl.TKUI_M.typo.europa.h3.paragraphSpacing",
      "description": "",
      "type": "paragraphSpacing",
      "group": "typo"
    },
    "YPL.FFL.TKUI_D.F0002-003.HMN_typo_europa-h3.tracking": {
      "value": "YPL.FFL.TKUI_M.typo.europa.h3.tracking",
      "description": "",
      "type": "letterSpacing",
      "group": "typo"
    },
    "YPL.FFL.TKUI_D.F0002-003.HMN_typo_europa-h3.textAlignHorizontal": {
      "value": "LEFT",
      "description": "",
      "type": "other",
      "group": "typo"
    },
    "YPL.FFL.TKUI_D.F0002-003.HMN_typo_europa-h3.textCase": {
      "value": "ORIGINAL",
      "description": "",
      "type": "other",
      "group": "typo"
    },
    "YPL.FFL.TKUI_D.F0002-003.HMN_typo_europa-h3.textDecoration": {
      "value": "NONE",
      "description": "",
      "type": "other",
      "group": "typo"
    },
    "YPL.FFL.TKUI_D.F0002-003.HMN_typo_europa-h3.color": {
      "value": "YPL.FFL.TKUI_C.colors.black",
      "description": "",
      "type": "other",
      "group": "typo"
    },
    "YPL.FFL.TKUI_D.F0002-004.HMN_typo_europa-h4.familyName": {
      "value": "YPL.FFL.TKUI_C.typo.europa.familyName.bold",
      "description": "",
      "type": "fontFamilies",
      "group": "typo"
    },
    "YPL.FFL.TKUI_D.F0002-004.HMN_typo_europa-h4.size": {
      "value": "YPL.FFL.TKUI_M.typo.europa.h4.size",
      "description": "",
      "type": "fontSizes",
      "group": "typo"
    },
    "YPL.FFL.TKUI_D.F0002-004.HMN_typo_europa-h4.leading": {
      "value": "YPL.FFL.TKUI_M.typo.europa.h4.leading",
      "description": "",
      "type": "lineHeights",
      "group": "typo"
    },
    "YPL.FFL.TKUI_D.F0002-004.HMN_typo_europa-h4.paragraphSpacing": {
      "value": "YPL.FFl.TKUI_M.typo.europa.h4.paragraphSpacing",
      "description": "",
      "type": "paragraphSpacing",
      "group": "typo"
    },
    "YPL.FFL.TKUI_D.F0002-004.HMN_typo_europa-h4.tracking": {
      "value": "YPL.FFL.TKUI_M.typo.europa.h4.tracking",
      "description": "",
      "type": "letterSpacing",
      "group": "typo"
    },
    "YPL.FFL.TKUI_D.F0002-004.HMN_typo_europa-h4.textAlignHorizontal": {
      "value": "LEFT",
      "description": "",
      "type": "other",
      "group": "typo"
    },
    "YPL.FFL.TKUI_D.F0002-004.HMN_typo_europa-h4.textCase": {
      "value": "ORIGINAL",
      "description": "",
      "type": "other",
      "group": "typo"
    },
    "YPL.FFL.TKUI_D.F0002-004.HMN_typo_europa-h4.textDecoration": {
      "value": "NONE",
      "description": "",
      "type": "other",
      "group": "typo"
    },
    "YPL.FFL.TKUI_D.F0002-004.HMN_typo_europa-h4.color": {
      "value": "YPL.FFL.TKUI_C.colors.black",
      "description": "",
      "type": "other",
      "group": "typo"
    },
    "YPL.FFL.TKUI_D.F0002-005.HMN_typo_europa-h5.familyName": {
      "value": "YPL.FFL.TKUI_C.typo.europa.familyName.bold",
      "description": "",
      "type": "fontFamilies",
      "group": "typo"
    },
    "YPL.FFL.TKUI_D.F0002-005.HMN_typo_europa-h5.size": {
      "value": "YPL.FFL.TKUI_M.typo.europa.h5.size",
      "description": "",
      "type": "fontSizes",
      "group": "typo"
    },
    "YPL.FFL.TKUI_D.F0002-005.HMN_typo_europa-h5.leading": {
      "value": "YPL.FFL.TKUI_M.typo.europa.h5.leading",
      "description": "",
      "type": "lineHeights",
      "group": "typo"
    },
    "YPL.FFL.TKUI_D.F0002-005.HMN_typo_europa-h5.paragraphSpacing": {
      "value": "YPL.FFl.TKUI_M.typo.europa.h5.paragraphSpacing",
      "description": "",
      "type": "paragraphSpacing",
      "group": "typo"
    },
    "YPL.FFL.TKUI_D.F0002-005.HMN_typo_europa-h5.tracking": {
      "value": "YPL.FFL.TKUI_M.typo.europa.h5.tracking",
      "description": "",
      "type": "letterSpacing",
      "group": "typo"
    },
    "YPL.FFL.TKUI_D.F0002-005.HMN_typo_europa-h5.textAlignHorizontal": {
      "value": "LEFT",
      "description": "",
      "type": "other",
      "group": "typo"
    },
    "YPL.FFL.TKUI_D.F0002-005.HMN_typo_europa-h5.textCase": {
      "value": "ORIGINAL",
      "description": "",
      "type": "other",
      "group": "typo"
    },
    "YPL.FFL.TKUI_D.F0002-005.HMN_typo_europa-h5.textDecoration": {
      "value": "NONE",
      "description": "",
      "type": "other",
      "group": "typo"
    },
    "YPL.FFL.TKUI_D.F0002-005.HMN_typo_europa-h5.color": {
      "value": "YPL.FFL.TKUI_C.colors.black",
      "description": "",
      "type": "other",
      "group": "typo"
    },
    "YPL.FFL.TKUI_D.F0002-006.HMN_typo_europa-h6.familyName": {
      "value": "YPL.FFL.TKUI_C.typo.europa.familyName.bold",
      "description": "",
      "type": "fontFamilies",
      "group": "typo"
    },
    "YPL.FFL.TKUI_D.F0002-006.HMN_typo_europa-h6.size": {
      "value": "YPL.FFL.TKUI_M.typo.europa.h6.size",
      "description": "",
      "type": "fontSizes",
      "group": "typo"
    },
    "YPL.FFL.TKUI_D.F0002-006.HMN_typo_europa-h6.leading": {
      "value": "YPL.FFL.TKUI_M.typo.europa.h6.leading",
      "description": "",
      "type": "lineHeights",
      "group": "typo"
    },
    "YPL.FFL.TKUI_D.F0002-006.HMN_typo_europa-h6.paragraphSpacing": {
      "value": "YPL.FFl.TKUI_M.typo.europa.h6.paragraphSpacing",
      "description": "",
      "type": "paragraphSpacing",
      "group": "typo"
    },
    "YPL.FFL.TKUI_D.F0002-006.HMN_typo_europa-h6.tracking": {
      "value": "YPL.FFL.TKUI_M.typo.europa.h6.tracking",
      "description": "",
      "type": "letterSpacing",
      "group": "typo"
    },
    "YPL.FFL.TKUI_D.F0002-006.HMN_typo_europa-h6.textAlignHorizontal": {
      "value": "LEFT",
      "description": "",
      "type": "other",
      "group": "typo"
    },
    "YPL.FFL.TKUI_D.F0002-006.HMN_typo_europa-h6.textCase": {
      "value": "ORIGINAL",
      "description": "",
      "type": "other",
      "group": "typo"
    },
    "YPL.FFL.TKUI_D.F0002-006.HMN_typo_europa-h6.textDecoration": {
      "value": "NONE",
      "description": "",
      "type": "other",
      "group": "typo"
    },
    "YPL.FFL.TKUI_D.F0002-006.HMN_typo_europa-h6.color": {
      "value": "YPL.FFL.TKUI_C.colors.black",
      "description": "",
      "type": "other",
      "group": "typo"
    },
    "YPL.FFL.TKUI_D.F0002-007.HMN_typo_europa-h7.familyName": {
      "value": "YPL.FFL.TKUI_C.typo.europa.familyName.bold",
      "description": "",
      "type": "fontFamilies",
      "group": "typo"
    },
    "YPL.FFL.TKUI_D.F0002-007.HMN_typo_europa-h7.size": {
      "value": "YPL.FFL.TKUI_M.typo.europa.h7.size",
      "description": "",
      "type": "fontSizes",
      "group": "typo"
    },
    "YPL.FFL.TKUI_D.F0002-007.HMN_typo_europa-h7.leading": {
      "value": "YPL.FFL.TKUI_M.typo.europa.h7.leading",
      "description": "",
      "type": "lineHeights",
      "group": "typo"
    },
    "YPL.FFL.TKUI_D.F0002-007.HMN_typo_europa-h7.paragraphSpacing": {
      "value": "YPL.FFl.TKUI_M.typo.europa.h7.paragraphSpacing",
      "description": "",
      "type": "paragraphSpacing",
      "group": "typo"
    },
    "YPL.FFL.TKUI_D.F0002-007.HMN_typo_europa-h7.tracking": {
      "value": "YPL.FFL.TKUI_M.typo.europa.h7.tracking",
      "description": "",
      "type": "letterSpacing",
      "group": "typo"
    },
    "YPL.FFL.TKUI_D.F0002-007.HMN_typo_europa-h7.textAlignHorizontal": {
      "value": "LEFT",
      "description": "",
      "type": "other",
      "group": "typo"
    },
    "YPL.FFL.TKUI_D.F0002-007.HMN_typo_europa-h7.textCase": {
      "value": "ORIGINAL",
      "description": "",
      "type": "other",
      "group": "typo"
    },
    "YPL.FFL.TKUI_D.F0002-007.HMN_typo_europa-h7.textDecoration": {
      "value": "NONE",
      "description": "",
      "type": "other",
      "group": "typo"
    },
    "YPL.FFL.TKUI_D.F0002-007.HMN_typo_europa-h7.color": {
      "value": "YPL.FFL.TKUI_C.colors.black",
      "description": "",
      "type": "other",
      "group": "typo"
    },
    "YPL.FFL.TKUI_D.F0002-008.HMN_typo_europa-h8.familyName": {
      "value": "YPL.FFL.TKUI_C.typo.europa.familyName.bold",
      "description": "",
      "type": "fontFamilies",
      "group": "typo"
    },
    "YPL.FFL.TKUI_D.F0002-008.HMN_typo_europa-h8.size": {
      "value": "YPL.FFL.TKUI_M.typo.europa.h8.size",
      "description": "",
      "type": "fontSizes",
      "group": "typo"
    },
    "YPL.FFL.TKUI_D.F0002-008.HMN_typo_europa-h8.leading": {
      "value": "YPL.FFL.TKUI_M.typo.europa.h8.leading",
      "description": "",
      "type": "lineHeights",
      "group": "typo"
    },
    "YPL.FFL.TKUI_D.F0002-008.HMN_typo_europa-h8.paragraphSpacing": {
      "value": "YPL.FFl.TKUI_M.typo.europa.h8.paragraphSpacing",
      "description": "",
      "type": "paragraphSpacing",
      "group": "typo"
    },
    "YPL.FFL.TKUI_D.F0002-008.HMN_typo_europa-h8.tracking": {
      "value": "YPL.FFL.TKUI_M.typo.europa.h8.tracking",
      "description": "",
      "type": "letterSpacing",
      "group": "typo"
    },
    "YPL.FFL.TKUI_D.F0002-008.HMN_typo_europa-h8.textAlignHorizontal": {
      "value": "LEFT",
      "description": "",
      "type": "other",
      "group": "typo"
    },
    "YPL.FFL.TKUI_D.F0002-008.HMN_typo_europa-h8.textCase": {
      "value": "ORIGINAL",
      "description": "",
      "type": "other",
      "group": "typo"
    },
    "YPL.FFL.TKUI_D.F0002-008.HMN_typo_europa-h8.textDecoration": {
      "value": "NONE",
      "description": "",
      "type": "other",
      "group": "typo"
    },
    "YPL.FFL.TKUI_D.F0002-008.HMN_typo_europa-h8.color": {
      "value": "YPL.FFL.TKUI_C.colors.black",
      "description": "",
      "type": "other",
      "group": "typo"
    },
    "YPL.FFL.TKUI_D.P0001.HMN_posterCard.width": {
      "value": "YPL.FFL.TKUI_C.percents.full",
      "description": "",
      "type": "other",
      "group": ""
    },
    "YPL.FFL.TKUI_D.P0001.HMN_posterCard.height": {
      "value": "YPL.FFL.TKUI_C.sizes.macro.700",
      "description": "",
      "type": "other",
      "group": ""
    },
    "YPL.FFL.TKUI_D.P0001.HMN_posterCard.margin": {
      "value": "YPL.FFL.TKUI_C.spaces.l",
      "description": "",
      "type": "other",
      "group": ""
    },
    "YPL.FFL.TKUI_D.P0001.HMN_posterCard.fringeBottom": {
      "value": "YPL.FFL.TKUI_C.spaces.l",
      "description": "",
      "type": "other",
      "group": ""
    },
    "YPL.FFL.TKUI_D.P0001.HMN_posterCard.padding": {
      "value": "YPL.FFL.TKUI_C.spaces.l",
      "description": "",
      "type": "other",
      "group": ""
    },
    "YPL.FFL.TKUI_D.P0001.HMN_posterCard.radius": {
      "value": "YPL.FFL.TKUI_C.sizes.micro.200",
      "description": "",
      "type": "other",
      "group": ""
    },
    "YPL.FFL.TKUI_D.P0001.HMN_posterCard.blockCopy.width": {
      "value": "YPL.FFL.TKUI_C.percents.full",
      "description": "",
      "type": "other",
      "group": ""
    },
    "YPL.FFL.TKUI_D.P0001.HMN_posterCard.blockCopy.slack": {
      "value": "YPL.FFL.TKUI_C.sizes.macro.500",
      "description": "",
      "type": "other",
      "group": ""
    },
    "YPL.FFL.TKUI_D.P0001.HMN_posterCard.blockHeader.height": {
      "value": "YPL.FFL.TKUI_C.spaces.l",
      "description": "",
      "type": "other",
      "group": ""
    },
    "YPL.FFL.TKUI_D.P0001.HMN_posterCard.blockFooter.height": {
      "value": "YPL.FFL.TKUI_C.spaces.e",
      "description": "",
      "type": "other",
      "group": ""
    },
    "YPL.FFL.TKUI_D.P0001.HMN_posterCard.gradient": {
      "value": "YPL.FFL.TKUI_C.gradients.overlay.black.BL_TR",
      "description": "",
      "type": "other",
      "group": ""
    },
    "YPL.FFL.TKUI_D.P0001.HMN_posterCard.bgImage.fillMode": {
      "value": "FILL",
      "description": "",
      "type": "other",
      "group": ""
    },
    "YPL.FFL.TKUI_D.P0001.HMN_posterCard.heading.color": {
      "value": "YPL.FFL.TKUI_C.colors.white",
      "description": "",
      "type": "other",
      "group": ""
    },
    "YPL.FFL.TKUI_D.P0001.HMN_posterCard.eyebrow.color": {
      "value": "YPL.FFL.TKUI_C.colors.grey.300",
      "description": "",
      "type": "other",
      "group": ""
    },
    "YPL.FFL.TKUI_D.P0001.HMN_posterCard.heading.margin": {
      "value": "negativeOf(YPL.FFL.TKUI_C.spaces.xs)",
      "description": "",
      "type": "other",
      "group": ""
    },
    "YPL.FFL.TKUI_D.P0001.HMN_posterCard.heading.fringeBottom": {
      "value": "negativeOf(YPL.FFL.TKUI_C.spaces.xs)",
      "description": "",
      "type": "other",
      "group": ""
    },
    "YPL.FFL.TKUI_D.P0001.HMN_posterCard.blockCopy.chip.margin": {
      "value": "YPL.FFL.TKUI_C.spaces.s",
      "description": "",
      "type": "other",
      "group": ""
    },
    "YPL.FFL.TKUI_D.P0001.HMN_posterCard.blockCopy.chip.fringeBottom": {
      "value": "YPL.FFL.TKUI_C.spaces.s",
      "description": "",
      "type": "other",
      "group": ""
    },
    "YPL.FFL.TKUI_D.P0001.HMN_posterCard.heading.paddingLeft": {
      "value": "YPL.FFL.TKUI_C.spaces.xxl",
      "description": "",
      "type": "other",
      "group": ""
    },
    "YPL.FFL.TKUI_D.P0001.HMN_posterCard.blockFooter.eyebrow.paddingLeft": {
      "value": "YPL.FFL.TKUI_C.spaces.sm",
      "description": "",
      "type": "other",
      "group": ""
    },
    "YPL.FFL.TKUI_D.P0001.HMN_posterCard.gradient.OPT_layout2": {
      "value": "YPL.FFL.TKUI_C.gradients.overlay.black.TL_BR",
      "description": "",
      "type": "other",
      "group": ""
    },
    "YPL.FFL.TKUI_D.P0001.HMN_posterCard.blockCopy.paragraph.color": {
      "value": "YPL.FFL.TKUI_C.colors.white.value",
      "description": "",
      "type": "other",
      "group": ""
    },
    "YPL.FFL.TKUI_D.P0001.HMN_posterCard.heading.margin.OPT_layout2": {
      "value": "YPL.FFL.TKUI_C.sizes.micro.400.value",
      "description": "",
      "type": "other",
      "group": ""
    },
    "YPL.FFL.TKUI_D.P0001.HMN_posterCard.blockFooter.eyebrow.paddingLeft.OPT_layout2": {
      "value": "YPL.FFL.TKUI_C.spaces.none",
      "description": "",
      "type": "other",
      "group": ""
    },
    "YPL.FFL.TKUI_D.P0001.HMN_posterCard.height.OPT_small": {
      "value": "YPL.FFL.TKUI_C.sizes.macro.700.value",
      "description": "",
      "type": "other",
      "group": ""
    },
    "YPL.FFL.TKUI_D.P0001.HMN_posterCard.heading.size.OPT_small": {
      "value": "YPL.FFL.TKUI_C.typo.europa.h7.size.value",
      "description": "",
      "type": "other",
      "group": ""
    },
    "YPL.FFL.TKUI_D.P0001.HMN_posterCard.heading.tracking.OPT_small": {
      "value": "YPL.FFL.TKUI_C.typo.europa.h7.tracking.value",
      "description": "",
      "type": "other",
      "group": ""
    },
    "YPL.FFL.TKUI_D.P0001.HMN_posterCard.heading.leading.OPT_small": {
      "value": "YPL.FFL.TKUI_C.typo.europa.h7.leading.value",
      "description": "",
      "type": "other",
      "group": ""
    },
    "YPL.FFL.TKUI_D.P0001.HMN_posterCard.heading.paragraphSpacing.OPT_small": {
      "value": "YPL.FFL.TKUI_C.typo.europa.h7.paragraphSpacing.value",
      "description": "",
      "type": "other",
      "group": ""
    },
    "YPL.FFL.TKUI_D.P0001.HMN_posterCard.blockCopy.width.BRKP_m": {
      "value": "YPL.FFL.TKUI_C.percents.ml.value",
      "description": "",
      "type": "other",
      "group": ""
    },
    "YPL.FFL.TKUI_D.P0001.HMN_posterCard.heading.size.BRKP_m": {
      "value": "YPL.FFL.TKUI_C.typo.europa.h3.size.value",
      "description": "",
      "type": "other",
      "group": ""
    },
    "YPL.FFL.TKUI_D.P0001.HMN_posterCard.heading.tracking.BRKP_m": {
      "value": "YPL.FFL.TKUI_C.typo.europa.h3.tracking.value",
      "description": "",
      "type": "other",
      "group": ""
    },
    "YPL.FFL.TKUI_D.P0001.HMN_posterCard.heading.leading.BRKP_m": {
      "value": "YPL.FFL.TKUI_C.typo.europa.h3.leading.value",
      "description": "",
      "type": "other",
      "group": ""
    },
    "YPL.FFL.TKUI_D.P0001.HMN_posterCard.heading.paragraphSpacing.BRKP_m": {
      "value": "YPL.FFL.TKUI_C.typo.europa.h3.paragraphSpacing.value",
      "description": "",
      "type": "other",
      "group": ""
    }
  };
</script>

<!-- Utility scripts -->
<script defer src="{{ site.baseurl }}/assets/js/utilities/pasta-token-generation.js"></script>
<!-- Inject Pasta Apparatus ad hoc script ↓ -->
<script defer src="{{ site.baseurl }}/assets/js/apparatuses/index.js"></script>
<script defer src="{{ site.baseurl }}/assets/js/apparatuses/page-script.js"></script>

# Cardlet
{: .no_toc}

Cardlets are a way to present several items of a same category. They're part of collections, lists, caroussels. They sometimes present advanced interaction (swipe, move, re-order… ).

| UID | Ticket | Owner |Figma|Pasta Version|
|---|---|---|---|---|
|`{{ page.project_id }}.{{ page.UID }}`{% for item in page.variants %}&nbsp;`{{item | default: ""}}`{% endfor %}|[&#35;8](https://github.com/yummly/pasta/issues/8)|[Robert](https://github.com/robert-ANML)|[Cardlet Page](https://www.figma.com/file/KAOO6VWYzBV9Xz7kWJtFOG/?node-id=1475%3A36781)|[TBD](https://github.com/yummly/pasta/releases)|
{: .headTopBorder}


![Preview]({{site.baseurl}}/assets/projects/{{page.project_id}}/images/YPL-DOC-FFL-P0002-preview_01.png){: .darkenabled}

<a href="https://www.figma.com/file/KAOO6VWYzBV9Xz7kWJtFOG/?node-id=1475%3A36781" class="btn iconed figmaBadge">To Figma →</a>

- TOC
{:toc}


## Layout

 ![Layout Blueprint]({{site.baseurl}}/assets/projects/{{page.project_id}}/images/YPL-DOC-FFL-P0002-layout_01.png)


## Dependencies

![Dependencies Blueprint]({{site.baseurl}}/assets/projects/{{page.project_id}}/images/YPL-DOC-FFL-P0002-bp_dependencies_01.png)

<section class="flex-1_2-cols">
   <div>
    <br>
     In order to implement this Pattern you will need to implement all its dependencies first.<br>
     Please refer to each element in this list&nbsp;→
   </div>
   <div>
     <table>
       <thead>
         <tr>
           <th>UID</th>
           <th>Type</th>
           <th>Link</th>
         </tr>
       </thead>
        <tbody>
         <tr>
            <td><code>LGN-EXXXX</code></td><td>Element</td>
            <td><a href="{{site.baseurl}}/TBD" alt="WIP" class="btn">Button Icon →</a></td>
         </tr>
         <tr>
            <td><code>LGN-EXXXX</code></td><td>Element</td>
            <td><a href="{{site.baseurl}}/TBD" alt="WIP" class="btn">Chip →</a></td>
         </tr>
         <tr>
            <td><code>LGN-EXXXX</code></td><td>Element</td>
            <td><a href="{{site.baseurl}}/TBD" alt="WIP" class="btn">Rating →</a></td>
         </tr>
         <tr>
            <td><code>LGN-V0004</code></td><td>Primitive</td>
            <td><a href="{{site.baseurl}}/TBD" alt="WIP" class="btn">Eyebrow →</a></td>
         </tr>
        </tbody>
     </table>
   </div>
 </section>


## Decisions

![Decisions Blueprint]({{site.baseurl}}/assets/projects/{{page.project_id}}/images/YPL-DOC-FFL-P0002-bp_decisions_01.png)

### Interaction

#### default
{: .no_toc}

|↓ impacted| idle | over | pressed | disabled | focused | pending |
|---|---|---|---|---|---|---|
|Attribute &#35;1|<span data-toolclip="TBD"><code class="language-plaintext highlighter-rouge">token</code></span>|N/A|<span data-toolclip="TBD"><code class="language-plaintext highlighter-rouge">token</code></span>|<span data-toolclip="TBD"><code class="language-plaintext highlighter-rouge">token</code></span>|<span data-toolclip="TBD"><code class="language-plaintext highlighter-rouge">token</code></span>|N/A|
|Attribute &#35;2|<span data-toolclip="TBD"><code class="language-plaintext highlighter-rouge">token</code></span>|N/A|<span data-toolclip="TBD"><code class="language-plaintext highlighter-rouge">token</code></span>|<span data-toolclip="TBD"><code class="language-plaintext highlighter-rouge">token</code></span>|<span data-toolclip="TBD"><code class="language-plaintext highlighter-rouge">token</code></span>|N/A|
{: .type-01}

#### highlighted
{: .no_toc}

|↓ impacted| h-idle | h-over | h-pressed | h-disabled | h-focused | h-pending |
|---|---|---|---|---|---|---|
|Attribute &#35;1|<span data-toolclip="TBD"><code class="language-plaintext highlighter-rouge">token</code></span>|N/A|<span data-toolclip="TBD"><code class="language-plaintext highlighter-rouge">token</code></span>|<span data-toolclip="TBD"><code class="language-plaintext highlighter-rouge">token</code></span>|<span data-toolclip="TBD"><code class="language-plaintext highlighter-rouge">token</code></span>|N/A|
|Attribute &#35;2|<span data-toolclip="TBD"><code class="language-plaintext highlighter-rouge">token</code></span>|N/A|<span data-toolclip="TBD"><code class="language-plaintext highlighter-rouge">token</code></span>|<span data-toolclip="TBD"><code class="language-plaintext highlighter-rouge">token</code></span>|<span data-toolclip="TBD"><code class="language-plaintext highlighter-rouge">token</code></span>|N/A|
{: .type-01}

### Variations

##### Breakpoints
{: .no_toc}

|↓ impacted|sm (320)| md (384)| lg(512)|
|---|---|---|---|
|Attribute &#35;1|<span data-toolclip="TBD"><code class="language-plaintext highlighter-rouge">token</code></span>|<span data-toolclip="TBD"><code class="language-plaintext highlighter-rouge">token</code></span>|<span data-toolclip="TBD"><code class="language-plaintext highlighter-rouge">token</code></span>|
|Attribute &#35;2|<span data-toolclip="TBD"><code class="language-plaintext highlighter-rouge">token</code></span>|<span data-toolclip="TBD"><code class="language-plaintext highlighter-rouge">token</code></span>|<span data-toolclip="TBD"><code class="language-plaintext highlighter-rouge">token</code></span>|
{: .type-01}

##### Modes
{: .no_toc}

|↓ impacted|Light|Dark|
|---|---|---|
|Attribute &#35;1|<span data-toolclip="TBD"><code class="language-plaintext highlighter-rouge">token</code></span>|<span data-toolclip="TBD"><code class="language-plaintext highlighter-rouge">token</code></span>|
|Attribute &#35;2|<span data-toolclip="TBD"><code class="language-plaintext highlighter-rouge">token</code></span>|<span data-toolclip="TBD"><code class="language-plaintext highlighter-rouge">token</code></span>|
{: .type-01}

##### Themes
{: .no_toc}

|↓ impacted|Theme &#35;1 |Theme &#35;2|Theme &#35;3|
|---|---|---|
|Attribute &#35;1|<span data-toolclip="TBD"><code class="language-plaintext highlighter-rouge">token</code></span>|<span data-toolclip="TBD"><code class="language-plaintext highlighter-rouge">token</code></span>|<span data-toolclip="TBD"><code class="language-plaintext highlighter-rouge">token</code></span>|
|Attribute &#35;2|<span data-toolclip="TBD"><code class="language-plaintext highlighter-rouge">token</code></span>|<span data-toolclip="TBD"><code class="language-plaintext highlighter-rouge">token</code></span>|<span data-toolclip="TBD"><code class="language-plaintext highlighter-rouge">token</code></span>|
{: .type-01}

### Animations

<section class="flex-1_2-cols">
   <div>
     Little explanation. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Vestibulum id ligula porta felis euismod semper. Sed posuere consectetur est at lobortis.
   </div>
   <div>
      <img src="{{site.baseurl}}/assets/projects/{{page.project_id}}/images/YPL-DOC-imgAnimPlaceholder-twoThird.gif" alt="WIP">
   </div>
 </section>

## Accessibility Checklist

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
 </section>

## Tokens Playground

Playground · Pattern-siloed Tokens including all required Choices and Decisions:

<table>
    <tr class="playground-details-row" id="css">
        <td><button class="btn copy-token-btn">CSS Tokens</button></td>
    </tr>
    <tr class="playground-details-row" id="ios">
        <td><button class="btn copy-token-btn">iOS Tokens</button></td>
    </tr>
    <tr class="playground-details-row" id="android">
        <td><button class="btn copy-token-btn">Android Tokens</button></td>
    </tr>
    <tr class="playground-details-row" id="figma-tokens">
        <td><button class="btn copy-token-btn">Figma Tokens</button></td>
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
