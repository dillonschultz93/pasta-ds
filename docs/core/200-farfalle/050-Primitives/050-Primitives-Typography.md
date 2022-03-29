---
project_name: Farfalle # title case
project_id: FFL # 3-letter code
title: Typography # title case
UID: F0002 # ["P","E","F"] + Hexa code/index
variants: [] # all variants index
permalink: farfalle/primitives/typography # lowercase + use hyphens › https://tinyurl.com/27kmc4rb
grand_parent: Farfalle # title case
parent: Primitives # title case
layout: default
nav_order: 50
---

<!-- Set the choices and nomenclature for token naming -->
<!-- ⚠️ WARNING: NEVER USE COMMENTS INSIDE SCRIPT TAGS ⚠️ -->
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
          "xs": {
            "value": "$YPL.FFL.TKUI_M.scales.arithA.200"
          },
          "s": {
            "value": "$YPL.FFL.TKUI_M.scales.arithA.400"
          },
          "sm": {
            "value": "$YPL.FFL.TKUI_M.scales.arithA.600"
          },
          "m": {
            "value": "YPL.FFL.TKUI_M.scales.arithA.800"
          },
          "ml": {
            "value": "$YPL.FFL.TKUI_M.scales.arithA.1000"
          },
          "l": {
            "value": "$YPL.FFL.TKUI_M.scales.arithA.1200"
          },
          "xl": {
            "value": "$YPL.FFL.TKUI_M.scales.arithA.1600"
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
            },
            "1400": {
              "value": "$YPL.FFL.TKUI_M.scales.arithA.1400"
            },
            "1500": {
              "value": "$YPL.FFL.TKUI_M.scales.arithA.1500"
            },
            "1600": {
              "value": "$YPL.FFL.TKUI_M.scales.arithA.1600"
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
    "YPL.FFL.TKUI_C.typo.Europa.familyName": {
      "value": "Europa",
      "description": "",
      "type": "fontFamily",
      "group": "typo"
    },
    "YPL.FFL.TKUI_C.typo.Europa.weights.400": {
      "value": "regular",
      "description": "",
      "type": "fontWeight",
      "group": "typo"
    },
    "YPL.FFL.TKUI_C.typo.Europa.weights.700": {
      "value": "bold",
      "description": "",
      "type": "fontWeight",
      "group": "typo"
    },
    "YPL.FFL.TKUI_C.typo.Europa.h3.family": {
      "value": "$YPL.FFL.TKUI_C.typo.Europa.familyName",
      "description": "",
      "type": "fontSizes",
      "group": "typo"
    },
    "YPL.FFL.TKUI_C.typo.Europa.h3.weight": {
      "value": "$YPL.FFL.TKUI_C.typo.Europa.weights.700",
      "description": "",
      "type": "fontSizes",
      "group": "typo"
    },
    "YPL.FFL.TKUI_C.typo.Europa.h3.size": {
      "value": "$YPL.FFL.TKUI_C.sizes.micro.1600 * $YPL.TEST.textSizeFactor",
      "description": "",
      "type": "fontSizes",
      "group": "typo"
    },
    "YPL.FFL.TKUI_C.typo.Europa.h3.leading.m": {
      "value": "$YPL.FFL.TKUI_C.sizes.micro.1600 * 1.2",
      "description": "",
      "type": "lineHeights",
      "group": "typo"
    },
    "YPL.FFL.TKUI_C.typo.Europa.h3.paragraphSpacing.m": {
      "value": "17.28",
      "description": "",
      "type": "paragraphSpacing",
      "group": "typo"
    },
    "YPL.FFL.TKUI_C.typo.Europa.h3.tracking": {
      "value": "-2%",
      "description": "",
      "type": "letterSpacing",
      "group": "typo"
    },
    "YPL.FFL.TKUI_C.typo.Europa.h5.family": {
      "value": "$YPL.FFL.TKUI_C.typo.Europa.familyName",
      "description": "",
      "type": "fontSizes",
      "group": "typo"
    },
    "YPL.FFL.TKUI_C.typo.Europa.h5.weight": {
      "value": "$YPL.FFL.TKUI_C.typo.Europa.weights.700",
      "description": "",
      "type": "fontSizes",
      "group": "typo"
    },
    "YPL.FFL.TKUI_C.typo.Europa.h5.size": {
      "value": "$YPL.FFL.TKUI_C.sizes.micro.1200 * $YPL.TEST.textSizeFactor",
      "description": "",
      "type": "fontSizes",
      "group": "typo"
    },
    "YPL.FFL.TKUI_C.typo.Europa.h5.leading.m": {
      "value": "$YPL.FFL.TKUI_C.sizes.micro.1200 * 1.2",
      "description": "",
      "type": "lineHeights",
      "group": "typo"
    },
    "YPL.FFL.TKUI_C.typo.Europa.h5.paragraphSpacing.m": {
      "value": "12.96",
      "description": "",
      "type": "paragraphSpacing",
      "group": "typo"
    },
    "YPL.FFL.TKUI_C.typo.Europa.h5.tracking": {
      "value": "-1%",
      "description": "",
      "type": "letterSpacing",
      "group": "typo"
    },
    "YPL.FFL.TKUI_C.typo.Europa.h6.family": {
      "value": "$YPL.FFL.TKUI_C.typo.Europa.familyName",
      "description": "",
      "type": "fontSizes",
      "group": "typo"
    },
    "YPL.FFL.TKUI_C.typo.Europa.h6.weight": {
      "value": "$YPL.FFL.TKUI_C.typo.Europa.weights.700",
      "description": "",
      "type": "fontSizes",
      "group": "typo"
    },
    "YPL.FFL.TKUI_C.typo.Europa.h6.size": {
      "value": "$YPL.FFL.TKUI_C.sizes.micro.1000 * $YPL.TEST.textSizeFactor",
      "description": "",
      "type": "fontSizes",
      "group": "typo"
    },
    "YPL.FFL.TKUI_C.typo.Europa.h6.leading.m": {
      "value": "$YPL.FFL.TKUI_C.sizes.micro.1000 * 1.2",
      "description": "",
      "type": "lineHeights",
      "group": "typo"
    },
    "YPL.FFL.TKUI_C.typo.Europa.h6.paragraphSpacing.m": {
      "value": "10.8",
      "description": "",
      "type": "paragraphSpacing",
      "group": "typo"
    },
    "YPL.FFL.TKUI_C.typo.Europa.h6.tracking": {
      "value": "0%",
      "description": "",
      "type": "letterSpacing",
      "group": "typo"
    },
    "YPL.FFL.TKUI_C.typo.Europa.p.m.strong.family": {
      "value": "$YPL.FFL.TKUI_C.typo.Europa.familyName",
      "description": "",
      "type": "fontSizes",
      "group": "typo"
    },
    "YPL.FFL.TKUI_C.typo.Europa.p.m.strong.weight": {
      "value": "$YPL.FFL.TKUI_C.typo.Europa.weights.700",
      "description": "",
      "type": "fontSizes",
      "group": "typo"
    },
    "YPL.FFL.TKUI_C.typo.Europa.p.m.strong.size": {
      "value": "$YPL.FFL.TKUI_C.sizes.micro.800 * $YPL.TEST.textSizeFactor",
      "description": "",
      "type": "fontSizes",
      "group": "typo"
    },
    "YPL.FFL.TKUI_C.typo.Europa.p.m.strong.leading.m": {
      "value": "$YPL.FFL.TKUI_C.sizes.micro.800 * 1.2",
      "description": "",
      "type": "lineHeights",
      "group": "typo"
    },
    "YPL.FFL.TKUI_C.typo.Europa.p.m.strong.paragraphSpacing.m": {
      "value": "8.64",
      "description": "",
      "type": "paragraphSpacing",
      "group": "typo"
    },
    "YPL.FFL.TKUI_C.typo.Europa.p.m.strong.tracking": {
      "value": "-2%",
      "description": "",
      "type": "letterSpacing",
      "group": "typo"
    },
    "YPL.FFL.TKUI_C.typo.Europa.p.m.regular.family": {
      "value": "$YPL.FFL.TKUI_C.typo.Europa.familyName",
      "description": "",
      "type": "fontSizes",
      "group": "typo"
    },
    "YPL.FFL.TKUI_C.typo.Europa.p.m.regular.weight": {
      "value": "$YPL.FFL.TKUI_C.typo.Europa.weights.400",
      "description": "",
      "type": "fontSizes",
      "group": "typo"
    },
    "YPL.FFL.TKUI_C.typo.Europa.p.m.regular.size": {
      "value": "$YPL.FFL.TKUI_C.sizes.micro.800 * $YPL.TEST.textSizeFactor",
      "description": "",
      "type": "fontSizes",
      "group": "typo"
    },
    "YPL.FFL.TKUI_C.typo.Europa.p.m.regular.leading.m": {
      "value": "$YPL.FFL.TKUI_C.sizes.micro.800 * 1.2",
      "description": "",
      "type": "lineHeights",
      "group": "typo"
    },
    "YPL.FFL.TKUI_C.typo.Europa.p.m.regular.paragraphSpacing.m": {
      "value": "8.64",
      "description": "",
      "type": "paragraphSpacing",
      "group": "typo"
    },
    "YPL.FFL.TKUI_C.typo.Europa.p.m.regular.tracking": {
      "value": "-2%",
      "description": "",
      "type": "letterSpacing",
      "group": "typo"
    },
    "YPL.FFL.TKUI_C.typo.Europa.p.s.strong.family": {
      "value": "$YPL.FFL.TKUI_C.typo.Europa.familyName",
      "description": "",
      "type": "fontSizes",
      "group": "typo"
    },
    "YPL.FFL.TKUI_C.typo.Europa.p.s.strong.weight": {
      "value": "$YPL.FFL.TKUI_C.typo.Europa.weights.700",
      "description": "",
      "type": "fontSizes",
      "group": "typo"
    },
    "YPL.FFL.TKUI_C.typo.Europa.p.s.strong.size": {
      "value": "$YPL.FFL.TKUI_C.sizes.micro.700 * $YPL.TEST.textSizeFactor",
      "description": "",
      "type": "fontSizes",
      "group": "typo"
    },
    "YPL.FFL.TKUI_C.typo.Europa.p.s.strong.leading.m": {
      "value": "$YPL.FFL.TKUI_C.sizes.micro.700 * 1.2",
      "description": "",
      "type": "lineHeights",
      "group": "typo"
    },
    "YPL.FFL.TKUI_C.typo.Europa.p.s.strong.paragraphSpacing.m": {
      "value": "7.56",
      "description": "",
      "type": "paragraphSpacing",
      "group": "typo"
    },
    "YPL.FFL.TKUI_C.typo.Europa.p.s.strong.tracking": {
      "value": "-2%",
      "description": "",
      "type": "letterSpacing",
      "group": "typo"
    },
    "YPL.FFL.TKUI_C.typo.Europa.p.s.regular.family": {
      "value": "$YPL.FFL.TKUI_C.typo.Europa.familyName",
      "description": "",
      "type": "fontSizes",
      "group": "typo"
    },
    "YPL.FFL.TKUI_C.typo.Europa.p.s.regular.weight": {
      "value": "$YPL.FFL.TKUI_C.typo.Europa.weights.400",
      "description": "",
      "type": "fontSizes",
      "group": "typo"
    },
    "YPL.FFL.TKUI_C.typo.Europa.p.s.regular.size": {
      "value": "$YPL.FFL.TKUI_C.sizes.micro.700 * $YPL.TEST.textSizeFactor",
      "description": "",
      "type": "fontSizes",
      "group": "typo"
    },
    "YPL.FFL.TKUI_C.typo.Europa.p.s.regular.leading.m": {
      "value": "$YPL.FFL.TKUI_C.sizes.micro.700 * 1.2",
      "description": "",
      "type": "lineHeights",
      "group": "typo"
    },
    "YPL.FFL.TKUI_C.typo.Europa.p.s.regular.paragraphSpacing.m": {
      "value": "7.56",
      "description": "",
      "type": "paragraphSpacing",
      "group": "typo"
    },
    "YPL.FFL.TKUI_C.typo.Europa.p.s.regular.tracking": {
      "value": "-2%",
      "description": "",
      "type": "letterSpacing",
      "group": "typo"
    },
    "YPL.FFL.TKUI_C.typo.Europa.caption.strong.family": {
      "value": "$YPL.FFL.TKUI_C.typo.Europa.familyName",
      "description": "",
      "type": "fontSizes",
      "group": "typo"
    },
    "YPL.FFL.TKUI_C.typo.Europa.caption.strong.weight": {
      "value": "$YPL.FFL.TKUI_C.typo.Europa.weights.700",
      "description": "",
      "type": "fontSizes",
      "group": "typo"
    },
    "YPL.FFL.TKUI_C.typo.Europa.caption.strong.size": {
      "value": "$YPL.FFL.TKUI_C.sizes.micro.600 * $YPL.TEST.textSizeFactor",
      "description": "",
      "type": "fontSizes",
      "group": "typo"
    },
    "YPL.FFL.TKUI_C.typo.Europa.caption.strong.leading.l": {
      "value": "$YPL.FFL.TKUI_C.sizes.micro.600 * 1.5",
      "description": "",
      "type": "lineHeights",
      "group": "typo"
    },
    "YPL.FFL.TKUI_C.typo.Europa.caption.strong.paragraphSpacing.l": {
      "value": "0",
      "description": "",
      "type": "paragraphSpacing",
      "group": "typo"
    },
    "YPL.FFL.TKUI_C.typo.Europa.caption.strong.tracking": {
      "value": "-2%",
      "description": "",
      "type": "letterSpacing",
      "group": "typo"
    },
    "YPL.FFL.TKUI_C.typo.Europa.caption.regular.family": {
      "value": "$YPL.FFL.TKUI_C.typo.Europa.familyName",
      "description": "",
      "type": "fontSizes",
      "group": "typo"
    },
    "YPL.FFL.TKUI_C.typo.Europa.caption.regular.weight": {
      "value": "$YPL.FFL.TKUI_C.typo.Europa.weights.400",
      "description": "",
      "type": "fontSizes",
      "group": "typo"
    },
    "YPL.FFL.TKUI_C.typo.Europa.caption.regular.size": {
      "value": "$YPL.FFL.TKUI_C.sizes.micro.600 * $YPL.TEST.textSizeFactor",
      "description": "",
      "type": "fontSizes",
      "group": "typo"
    },
    "YPL.FFL.TKUI_C.typo.Europa.caption.regular.leading.l": {
      "value": "$YPL.FFL.TKUI_C.sizes.micro.600 * 1.5",
      "description": "",
      "type": "lineHeights",
      "group": "typo"
    },
    "YPL.FFL.TKUI_C.typo.Europa.caption.regular.paragraphSpacing.l": {
      "value": "0",
      "description": "",
      "type": "paragraphSpacing",
      "group": "typo"
    },
    "YPL.FFL.TKUI_C.typo.Europa.caption.regular.tracking": {
      "value": "-2%",
      "description": "",
      "type": "letterSpacing",
      "group": "typo"
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
      "value": "linear-gradient(64deg, $YPL.FFL.TKUI_C.colors.black 0%, $YPL.FFL.TKUI_C.colors.black 100%)",
      "description": "",
      "type": "color",
      "group": "gradients"
    },
    "YPL.FFL.TKUI_C.gradients.overlay.black.TL_BR": {
      "value": "linear-gradient(116deg, $YPL.FFL.TKUI_C.colors.black 0%, $YPL.FFL.TKUI_C.colors.black 100%)",
      "description": "",
      "type": "color",
      "group": "gradients"
    },
    "YPL.FFL.V0001.typo.h3": {
      "value": {
        "fontFamily": "$YPL.FFL.TKUI_C.typo.Europa.h3.family",
        "fontWeight": "$YPL.FFL.TKUI_C.typo.Europa.h3.weights.700",
        "lineHeight": "$YPL.FFL.TKUI_C.typo.Europa.h3.leading.m",
        "fontSize": "$YPL.FFL.TKUI_C.typo.Europa.h3.size",
        "letterSpacing": "$YPL.FFL.TKUI_C.typo.Europa.h3.tracking",
        "paragraphSpacing": "$YPL.FFL.TKUI_C.typo.Europa.h3.paragraphSpacing.m",
        "textDecoration": "none",
        "textCase": "original",
        "textAlignHorizontal": "left"
      },
      "description": "",
      "type": "typography",
      "group": "typo"
    }
  };
</script>

<!-- Utility scripts -->
<script defer src="{{ site.baseurl }}/assets/js/utilities/pasta-token-generation.js"></script>

<!-- Inject Pasta Apparatus ad hoc script ↓ -->
<script defer src="{{ site.baseurl }}/assets/js/apparatuses/index.js"></script>
<script defer src="{{ site.baseurl }}/assets/js/apparatuses/page-script.js"></script>
# Typography&nbsp;`{{ page.project_id }}.{{ page.UID }}`{% for item in page.variants %}&nbsp;`{{item | default: ""}}`{% endfor %}

{: .no_toc}

| UID                                    | Ticket                                               | Owner                                    | Figma                                                    | Pasta Version |
| -------------------------------------- | ---------------------------------------------------- | ---------------------------------------- | -------------------------------------------------------- | ------------- |
| `{{ page.project_id }}.{{ page.UID }}` | [&#35;25](https://github.com/yummly/pasta/issues/25) | [Robert](https://github.com/robert-ANML) | [TBD](https://www.figma.com/file/le9hbXPWmA55qUA7a7otgH) |
{: .headTopBorder}

- TOC
{:toc}

## Headings

<!-- H1 -->
<table class="type-01 headerNoUpperCase colBordered headFramed">
  <thead>
    <tr>
      <th>
        <p>Heading 1 • F0002-001</p>
        <span class="Europa-ed-b" style="font-size: 48px; line-height: 50.4px; letter-spacing: -0.02em; color: #000000;">Heading 1<br>& Friends</span>
      </th>
    </tr>
  </thead>
  <tbody>
   <tr>
      <td>
        <span data-toolclip='"YPL.FFL.TKUI_D.F0002-001.HMN_typo_europa-h1.familyName": "$YPL.FFL.TKUI_C.typo.europa.familyName.bold"'>
          <code class="language-plaintext highlighter-rouge">-h1.familyName</code>
        </span>
        <span data-toolclip='"YPL.FFL.TKUI_D.F0002-001.HMN_typo_europa-h1.size": "$YPL.FFL.TKUI_C.typo.europa.1100.size"'>
          <code class="language-plaintext highlighter-rouge">-h1.size</code>
        </span>
        <span data-toolclip='"YPL.FFL.TKUI_D.F0002-001.HMN_typo_europa-h1.leading": 50.4'>
          <code class="language-plaintext highlighter-rouge">-h1.leading</code>
        </span>
        <span data-toolclip='"YPL.FFL.TKUI_D.F0002-001.HMN_typo_europa-h1.paragraphSpacing": 22.68'>
          <code class="language-plaintext highlighter-rouge">-h1.paragraphSpacing</code>
        </span>
        <span data-toolclip='"YPL.FFL.TKUI_D.F0002-001.HMN_typo_europa-h1.letterSpacing": "-2%"'>
          <code class="language-plaintext highlighter-rouge">-h1.letterSpacing</code>
        </span>
        <span data-toolclip='"YPL.FFL.TKUI_D.F0002-001.HMN_typo_europa-h1.textAlignHorizontal": "left"'>
          <code class="language-plaintext highlighter-rouge">-h1.textAlignHorizontal</code>
        </span>
        <span data-toolclip='"YPL.FFL.TKUI_D.F0002-001.HMN_typo_europa-h1.textCase": "original"'>
          <code class="language-plaintext highlighter-rouge">-h1.textCase</code>
        </span>
        <span data-toolclip='"YPL.FFL.TKUI_D.F0002-001.HMN_typo_europa-h1.textDecoration": "none"'>
          <code class="language-plaintext highlighter-rouge">-h1.textDecoration</code>
        </span>
        <span data-toolclip='"YPL.FFL.TKUI_D.F0002-001.HMN_typo_europa-h1.color": "$YPL.FFL.TKUI_C.colors.black"'>
          <code class="language-plaintext highlighter-rouge">-h1.color</code>
        </span>
      </td>
   </tr>
  </tbody>
</table>

<!-- H2 -->
<table class="type-01 headerNoUpperCase colBordered headFramed">
  <thead>
    <tr>
      <th>
        <p>Heading 2 • F0002-002</p>
        <span class="Europa-ed-b" style="font-size: 40px; line-height: 41.6px; letter-spacing: -0.02em; color: #000000;">Heading 2<br>& Friends</span>
      </th>
    </tr>
  </thead>
  <tbody>
   <tr>
      <td>
        <span data-toolclip='"YPL.FFL.TKUI_D.F0002-001.HMN_typo_europa-h2.familyName": "$YPL.FFL.TKUI_C.typo.europa.familyName.bold"'>
          <code class="language-plaintext highlighter-rouge">-h2.familyName</code>
        </span>
        <span data-toolclip='"YPL.FFL.TKUI_D.F0002-001.HMN_typo_europa-h2.size": "$YPL.FFL.TKUI_C.typo.europa.1000.size"'>
          <code class="language-plaintext highlighter-rouge">-h2.size</code>
        </span>
        <span data-toolclip='"YPL.FFL.TKUI_D.F0002-001.HMN_typo_europa-h2.leading": 41.6'>
          <code class="language-plaintext highlighter-rouge">-h2.leading</code>
        </span>
        <span data-toolclip='"YPL.FFL.TKUI_D.F0002-001.HMN_typo_europa-h2.paragraphSpacing": 23.12'>
          <code class="language-plaintext highlighter-rouge">-h2.paragraphSpacing</code>
        </span>
        <span data-toolclip='"YPL.FFL.TKUI_D.F0002-001.HMN_typo_europa-h2.letterSpacing": "-2%"'>
          <code class="language-plaintext highlighter-rouge">-h2.letterSpacing</code>
        </span>
        <span data-toolclip='"YPL.FFL.TKUI_D.F0002-001.HMN_typo_europa-h2.textAlignHorizontal": "left"'>
          <code class="language-plaintext highlighter-rouge">-h2.textAlignHorizontal</code>
        </span>
        <span data-toolclip='"YPL.FFL.TKUI_D.F0002-001.HMN_typo_europa-h2.textCase": "original"'>
          <code class="language-plaintext highlighter-rouge">-h2.textCase</code>
        </span>
        <span data-toolclip='"YPL.FFL.TKUI_D.F0002-001.HMN_typo_europa-h2.textDecoration": "none"'>
          <code class="language-plaintext highlighter-rouge">-h2.textDecoration</code>
        </span>
        <span data-toolclip='"YPL.FFL.TKUI_D.F0002-001.HMN_typo_europa-h2.color": "$YPL.FFL.TKUI_C.colors.black"'>
          <code class="language-plaintext highlighter-rouge">-h2.color</code>
        </span>
      </td>
   </tr>
  </tbody>
</table>

<!-- H3 -->
<table class="type-01 headerNoUpperCase colBordered headFramed">
  <thead>
    <tr>
      <th>
        <p>Heading 3 • F0002-003</p>
        <span class="Europa-ed-b" style="font-size: 32px; line-height: 38.4px; letter-spacing: -0.02em; color: #000000;">Heading 3<br>& Friends</span>
      </th>
    </tr>
  </thead>
  <tbody>
   <tr>
      <td>
        <span data-toolclip='"YPL.FFL.TKUI_D.F0002-001.HMN_typo_europa-h3.familyName": "$YPL.FFL.TKUI_C.typo.europa.familyName.bold"'>
          <code class="language-plaintext highlighter-rouge">-h3.familyName</code>
        </span>
        <span data-toolclip='"YPL.FFL.TKUI_D.F0002-001.HMN_typo_europa-h3.size": "$YPL.FFL.TKUI_C.typo.europa.900.size"'>
          <code class="language-plaintext highlighter-rouge">-h3.size</code>
        </span>
        <span data-toolclip='"YPL.FFL.TKUI_D.F0002-001.HMN_typo_europa-h3.leading": $YPL.FFL.TKUI_C.typo.europa.900.leading'>
          <code class="language-plaintext highlighter-rouge">-h3.leading</code>
        </span>
        <span data-toolclip='"YPL.FFL.TKUI_D.F0002-001.HMN_typo_europa-h3.paragraphSpacing": 17.28'>
          <code class="language-plaintext highlighter-rouge">-h3.paragraphSpacing</code>
        </span>
        <span data-toolclip='"YPL.FFL.TKUI_D.F0002-001.HMN_typo_europa-h3.letterSpacing": "-2%"'>
          <code class="language-plaintext highlighter-rouge">-h3.letterSpacing</code>
        </span>
        <span data-toolclip='"YPL.FFL.TKUI_D.F0002-001.HMN_typo_europa-h3.textAlignHorizontal": "left"'>
          <code class="language-plaintext highlighter-rouge">-h3.textAlignHorizontal</code>
        </span>
        <span data-toolclip='"YPL.FFL.TKUI_D.F0002-001.HMN_typo_europa-h3.textCase": "original"'>
          <code class="language-plaintext highlighter-rouge">-h3.textCase</code>
        </span>
        <span data-toolclip='"YPL.FFL.TKUI_D.F0002-001.HMN_typo_europa-h3.textDecoration": "none"'>
          <code class="language-plaintext highlighter-rouge">-h3.textDecoration</code>
        </span>
        <span data-toolclip='"YPL.FFL.TKUI_D.F0002-001.HMN_typo_europa-h3.color": "$YPL.FFL.TKUI_C.colors.black"'>
          <code class="language-plaintext highlighter-rouge">-h3.color</code>
        </span>
      </td>
   </tr>
  </tbody>
</table>

<!-- H4 -->
<table class="type-01 headerNoUpperCase colBordered headFramed">
  <thead>
    <tr>
      <th>
        <p>Heading 4 • F0002-004</p>
        <span class="Europa-ed-b" style="font-size: 28px; line-height: 33.6px; letter-spacing: -0.01em; color: #000000;">Heading 4<br>& Friends</span>
      </th>
    </tr>
  </thead>
  <tbody>
   <tr>
      <td>
        <span data-toolclip='"YPL.FFL.TKUI_D.F0002-001.HMN_typo_europa-h4.familyName": "$YPL.FFL.TKUI_C.typo.europa.familyName.bold"'>
          <code class="language-plaintext highlighter-rouge">-h4.familyName</code>
        </span>
        <span data-toolclip='"YPL.FFL.TKUI_D.F0002-001.HMN_typo_europa-h4.size": "$YPL.FFL.TKUI_C.typo.europa.800.size"'>
          <code class="language-plaintext highlighter-rouge">-h4.size</code>
        </span>
        <span data-toolclip='"YPL.FFL.TKUI_D.F0002-001.HMN_typo_europa-h4.leading": $YPL.FFL.TKUI_C.typo.europa.800.leading'>
          <code class="language-plaintext highlighter-rouge">-h4.leading</code>
        </span>
        <span data-toolclip='"YPL.FFL.TKUI_D.F0002-001.HMN_typo_europa-h4.paragraphSpacing": 15.12'>
          <code class="language-plaintext highlighter-rouge">-h4.paragraphSpacing</code>
        </span>
        <span data-toolclip='"YPL.FFL.TKUI_D.F0002-001.HMN_typo_europa-h4.letterSpacing": "-1%"'>
          <code class="language-plaintext highlighter-rouge">-h4.letterSpacing</code>
        </span>
        <span data-toolclip='"YPL.FFL.TKUI_D.F0002-001.HMN_typo_europa-h4.textAlignHorizontal": "left"'>
          <code class="language-plaintext highlighter-rouge">-h4.textAlignHorizontal</code>
        </span>
        <span data-toolclip='"YPL.FFL.TKUI_D.F0002-001.HMN_typo_europa-h4.textCase": "original"'>
          <code class="language-plaintext highlighter-rouge">-h4.textCase</code>
        </span>
        <span data-toolclip='"YPL.FFL.TKUI_D.F0002-001.HMN_typo_europa-h4.textDecoration": "none"'>
          <code class="language-plaintext highlighter-rouge">-h4.textDecoration</code>
        </span>
        <span data-toolclip='"YPL.FFL.TKUI_D.F0002-001.HMN_typo_europa-h4.color": "$YPL.FFL.TKUI_C.colors.black"'>
          <code class="language-plaintext highlighter-rouge">-h4.color</code>
        </span>
      </td>
   </tr>
  </tbody>
</table>

<!-- H5 -->
<table class="type-01 headerNoUpperCase colBordered headFramed">
  <thead>
    <tr>
      <th>
        <p>Heading 5 • F0002-005</p>
        <span class="Europa-ed-b" style="font-size: 24px; line-height: 28.2px; letter-spacing: -0.01em; color: #000000;">Heading 5<br>& Friends</span>
      </th>
    </tr>
  </thead>
  <tbody>
   <tr>
      <td>
        <span data-toolclip='"YPL.FFL.TKUI_D.F0002-001.HMN_typo_europa-h5.familyName": "$YPL.FFL.TKUI_C.typo.europa.familyName.bold"'>
          <code class="language-plaintext highlighter-rouge">-h5.familyName</code>
        </span>
        <span data-toolclip='"YPL.FFL.TKUI_D.F0002-001.HMN_typo_europa-h5.size": "$YPL.FFL.TKUI_C.typo.europa.700.size"'>
          <code class="language-plaintext highlighter-rouge">-h5.size</code>
        </span>
        <span data-toolclip='"YPL.FFL.TKUI_D.F0002-001.HMN_typo_europa-h5.leading": $YPL.FFL.TKUI_C.typo.europa.700.leading'>
          <code class="language-plaintext highlighter-rouge">-h5.leading</code>
        </span>
        <span data-toolclip='"YPL.FFL.TKUI_D.F0002-001.HMN_typo_europa-h5.paragraphSpacing": 12.96'>
          <code class="language-plaintext highlighter-rouge">-h5.paragraphSpacing</code>
        </span>
        <span data-toolclip='"YPL.FFL.TKUI_D.F0002-001.HMN_typo_europa-h5.letterSpacing": "-1%"'>
          <code class="language-plaintext highlighter-rouge">-h5.letterSpacing</code>
        </span>
        <span data-toolclip='"YPL.FFL.TKUI_D.F0002-001.HMN_typo_europa-h5.textAlignHorizontal": "left"'>
          <code class="language-plaintext highlighter-rouge">-h5.textAlignHorizontal</code>
        </span>
        <span data-toolclip='"YPL.FFL.TKUI_D.F0002-001.HMN_typo_europa-h5.textCase": "original"'>
          <code class="language-plaintext highlighter-rouge">-h5.textCase</code>
        </span>
        <span data-toolclip='"YPL.FFL.TKUI_D.F0002-001.HMN_typo_europa-h5.textDecoration": "none"'>
          <code class="language-plaintext highlighter-rouge">-h5.textDecoration</code>
        </span>
        <span data-toolclip='"YPL.FFL.TKUI_D.F0002-001.HMN_typo_europa-h5.color": "$YPL.FFL.TKUI_C.colors.black"'>
          <code class="language-plaintext highlighter-rouge">-h5.color</code>
        </span>
      </td>
   </tr>
  </tbody>
</table>

<!-- H6 -->
<table class="type-01 headerNoUpperCase colBordered headFramed">
  <thead>
    <tr>
      <th>
        <p>Heading 6 • F0002-006</p>
        <span class="Europa-ed-b" style="font-size: 20px; line-height: 24px; letter-spacing: 0em; color: #000000;">Heading 6<br>& Friends</span>
      </th>
    </tr>
  </thead>
  <tbody>
   <tr>
      <td>
        <span data-toolclip='"YPL.FFL.TKUI_D.F0002-001.HMN_typo_europa-h6.familyName": "$YPL.FFL.TKUI_C.typo.europa.familyName.bold"'>
          <code class="language-plaintext highlighter-rouge">-h6.familyName</code>
        </span>
        <span data-toolclip='"YPL.FFL.TKUI_D.F0002-001.HMN_typo_europa-h6.size": "$YPL.FFL.TKUI_C.typo.europa.600.size"'>
          <code class="language-plaintext highlighter-rouge">-h6.size</code>
        </span>
        <span data-toolclip='"YPL.FFL.TKUI_D.F0002-001.HMN_typo_europa-h6.leading": $YPL.FFL.TKUI_C.typo.europa.600.leading'>
          <code class="language-plaintext highlighter-rouge">-h6.leading</code>
        </span>
        <span data-toolclip='"YPL.FFL.TKUI_D.F0002-001.HMN_typo_europa-h6.paragraphSpacing": 10.8'>
          <code class="language-plaintext highlighter-rouge">-h6.paragraphSpacing</code>
        </span>
        <span data-toolclip='"YPL.FFL.TKUI_D.F0002-001.HMN_typo_europa-h6.letterSpacing": "0%"'>
          <code class="language-plaintext highlighter-rouge">-h6.letterSpacing</code>
        </span>
        <span data-toolclip='"YPL.FFL.TKUI_D.F0002-001.HMN_typo_europa-h6.textAlignHorizontal": "left"'>
          <code class="language-plaintext highlighter-rouge">-h6.textAlignHorizontal</code>
        </span>
        <span data-toolclip='"YPL.FFL.TKUI_D.F0002-001.HMN_typo_europa-h6.textCase": "original"'>
          <code class="language-plaintext highlighter-rouge">-h6.textCase</code>
        </span>
        <span data-toolclip='"YPL.FFL.TKUI_D.F0002-001.HMN_typo_europa-h6.textDecoration": "none"'>
          <code class="language-plaintext highlighter-rouge">-h6.textDecoration</code>
        </span>
        <span data-toolclip='"YPL.FFL.TKUI_D.F0002-001.HMN_typo_europa-h6.color": "$YPL.FFL.TKUI_C.colors.black"'>
          <code class="language-plaintext highlighter-rouge">-h6.color</code>
        </span>
      </td>
   </tr>
  </tbody>
</table>

<!-- H7 -->
<table class="type-01 headerNoUpperCase colBordered headFramed">
  <thead>
    <tr>
      <th>
        <p>Heading 7 • F0002-007</p>
        <span class="Europa-ed-b" style="font-size: 18px; line-height: 21.6px; letter-spacing: 0em; color: #000000;">Heading 7<br>& Friends</span>
      </th>
    </tr>
  </thead>
  <tbody>
   <tr>
      <td>
        <span data-toolclip='"YPL.FFL.TKUI_D.F0002-001.HMN_typo_europa-h7.familyName": "$YPL.FFL.TKUI_C.typo.europa.familyName.bold"'>
          <code class="language-plaintext highlighter-rouge">-h7.familyName</code>
        </span>
        <span data-toolclip='"YPL.FFL.TKUI_D.F0002-001.HMN_typo_europa-h7.size": "$YPL.FFL.TKUI_C.typo.europa.500.size"'>
          <code class="language-plaintext highlighter-rouge">-h7.size</code>
        </span>
        <span data-toolclip='"YPL.FFL.TKUI_D.F0002-001.HMN_typo_europa-h7.leading": $YPL.FFL.TKUI_C.typo.europa.500.leading'>
          <code class="language-plaintext highlighter-rouge">-h7.leading</code>
        </span>
        <span data-toolclip='"YPL.FFL.TKUI_D.F0002-001.HMN_typo_europa-h7.paragraphSpacing": 9.72'>
          <code class="language-plaintext highlighter-rouge">-h7.paragraphSpacing</code>
        </span>
        <span data-toolclip='"YPL.FFL.TKUI_D.F0002-001.HMN_typo_europa-h7.letterSpacing": "-2%"'>
          <code class="language-plaintext highlighter-rouge">-h7.letterSpacing</code>
        </span>
        <span data-toolclip='"YPL.FFL.TKUI_D.F0002-001.HMN_typo_europa-h7.textAlignHorizontal": "left"'>
          <code class="language-plaintext highlighter-rouge">-h7.textAlignHorizontal</code>
        </span>
        <span data-toolclip='"YPL.FFL.TKUI_D.F0002-001.HMN_typo_europa-h7.textCase": "original"'>
          <code class="language-plaintext highlighter-rouge">-h7.textCase</code>
        </span>
        <span data-toolclip='"YPL.FFL.TKUI_D.F0002-001.HMN_typo_europa-h7.textDecoration": "none"'>
          <code class="language-plaintext highlighter-rouge">-h7.textDecoration</code>
        </span>
        <span data-toolclip='"YPL.FFL.TKUI_D.F0002-001.HMN_typo_europa-h7.color": "$YPL.FFL.TKUI_C.colors.black"'>
          <code class="language-plaintext highlighter-rouge">-h7.color</code>
        </span>
      </td>
   </tr>
  </tbody>
</table>

<!-- H8 -->
<table class="type-01 headerNoUpperCase colBordered headFramed">
  <thead>
    <tr>
      <th>
        <p>Heading 8 • F0002-008</p>
        <span class="Europa-ed-b" style="font-size: 14px; line-height: 16.8px; letter-spacing: 0.035em; color: #000000;">Heading 8<br>& Friends</span>
      </th>
    </tr>
  </thead>
  <tbody>
   <tr>
      <td>
        <span data-toolclip='"YPL.FFL.TKUI_D.F0002-001.HMN_typo_europa-h8.familyName": "$YPL.FFL.TKUI_C.typo.europa.familyName.bold"'>
          <code class="language-plaintext highlighter-rouge">-h8.familyName</code>
        </span>
        <span data-toolclip='"YPL.FFL.TKUI_D.F0002-001.HMN_typo_europa-h8.size": "$YPL.FFL.TKUI_C.typo.europa.300.size"'>
          <code class="language-plaintext highlighter-rouge">-h8.size</code>
        </span>
        <span data-toolclip='"YPL.FFL.TKUI_D.F0002-001.HMN_typo_europa-h8.leading": $YPL.FFL.TKUI_C.typo.europa.300.leading'>
          <code class="language-plaintext highlighter-rouge">-h8.leading</code>
        </span>
        <span data-toolclip='"YPL.FFL.TKUI_D.F0002-001.HMN_typo_europa-h8.paragraphSpacing": 7.56'>
          <code class="language-plaintext highlighter-rouge">-h8.paragraphSpacing</code>
        </span>
        <span data-toolclip='"YPL.FFL.TKUI_D.F0002-001.HMN_typo_europa-h8.letterSpacing": "0%"'>
          <code class="language-plaintext highlighter-rouge">-h8.letterSpacing</code>
        </span>
        <span data-toolclip='"YPL.FFL.TKUI_D.F0002-001.HMN_typo_europa-h8.textAlignHorizontal": "left"'>
          <code class="language-plaintext highlighter-rouge">-h8.textAlignHorizontal</code>
        </span>
        <span data-toolclip='"YPL.FFL.TKUI_D.F0002-001.HMN_typo_europa-h8.textCase": "original"'>
          <code class="language-plaintext highlighter-rouge">-h8.textCase</code>
        </span>
        <span data-toolclip='"YPL.FFL.TKUI_D.F0002-001.HMN_typo_europa-h8.textDecoration": "none"'>
          <code class="language-plaintext highlighter-rouge">-h8.textDecoration</code>
        </span>
        <span data-toolclip='"YPL.FFL.TKUI_D.F0002-001.HMN_typo_europa-h8.color": "$YPL.FFL.TKUI_C.colors.black"'>
          <code class="language-plaintext highlighter-rouge">-h8.color</code>
        </span>
      </td>
   </tr>
  </tbody>
</table>

## Paragraphs

## Eyebrows
