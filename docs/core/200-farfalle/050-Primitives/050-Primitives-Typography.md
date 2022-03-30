---
project_name: Farfalle # title case
project_id: FFL # 3-letter code
title: Typography # title case
UID: F0002 # ["P","E","F"] + Hexa code/index
variants: ["001","002","003","004","005","006","007","008","101","102","103","104","301","302","401","402"] # all variants index
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
        "textDecoration": "NONE",
        "textCase": "ORIGINAL",
        "textAlignHorizontal": "LEFT"
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

# Typography
{: .no_toc}

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
      <td><a href="https://github.com/yummly/pasta/issues/25">&#35;25</a></td>
      <td><a href="https://github.com/robert-ANML">Robert</a></td>
      <td>N/A</td>
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


- TOC
{:toc}

## Headings

<!-- H1 -->
<table class="type-01 headerNoUpperCase colBordered headFramed" id="F0002-001">
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
        <span data-toolclip='"YPL.FFL.TKUI_D.F0002-001.HMN_typo_europa-h1.size": "$YPL.FFL.TKUI_M.typo.europa.h1.size"'>
          <code class="language-plaintext highlighter-rouge">-h1.size</code>
        </span>
        <span data-toolclip='"YPL.FFL.TKUI_D.F0002-001.HMN_typo_europa-h1.leading": "$YPL.FFL.TKUI_M.typo.europa.h1.leading"'>
          <code class="language-plaintext highlighter-rouge">-h1.leading</code>
        </span>
        <span data-toolclip='"YPL.FFL.TKUI_D.F0002-001.HMN_typo_europa-h1.paragraphSpacing": "$YPL.FFl.TKUI_M.typo.europa.h1.paragraphSpacing"'>
          <code class="language-plaintext highlighter-rouge">-h1.paragraphSpacing</code>
        </span>
        <span data-toolclip='"YPL.FFL.TKUI_D.F0002-001.HMN_typo_europa-h1.tracking": "$YPL.FFL.TKUI_M.typo.europa.h1.tracking'>
          <code class="language-plaintext highlighter-rouge">-h1.letterSpacing</code>
        </span>
        <span data-toolclip='"YPL.FFL.TKUI_D.F0002-001.HMN_typo_europa-h1.textAlignHorizontal": "LEFT"'>
          <code class="language-plaintext highlighter-rouge">-h1.textAlignHorizontal</code>
        </span>
        <span data-toolclip='"YPL.FFL.TKUI_D.F0002-001.HMN_typo_europa-h1.textCase": "ORIGINAL"'>
          <code class="language-plaintext highlighter-rouge">-h1.textCase</code>
        </span>
        <span data-toolclip='"YPL.FFL.TKUI_D.F0002-001.HMN_typo_europa-h1.textDecoration": "NONE"'>
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
<table class="type-01 headerNoUpperCase colBordered headFramed" id="F0002-002">
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
        <span data-toolclip='"YPL.FFL.TKUI_D.F0002-002.HMN_typo_europa-h2.familyName": "$YPL.FFL.TKUI_C.typo.europa.familyName.bold"'>
          <code class="language-plaintext highlighter-rouge">-h2.familyName</code>
        </span>
        <span data-toolclip='"YPL.FFL.TKUI_D.F0002-002.HMN_typo_europa-h2.size": "$YPL.FFL.TKUI_M.typo.europa.h2.size"'>
          <code class="language-plaintext highlighter-rouge">-h2.size</code>
        </span>
        <span data-toolclip='"YPL.FFL.TKUI_D.F0002-002.HMN_typo_europa-h2.leading": "$YPL.FFL.TKUI_M.typo.europa.h2.leading"'>
          <code class="language-plaintext highlighter-rouge">-h2.leading</code>
        </span>
        <span data-toolclip='"YPL.FFL.TKUI_D.F0002-002.HMN_typo_europa-h2.paragraphSpacing": "$YPL.FFl.TKUI_M.typo.europa.h2.paragraphSpacing"'>
          <code class="language-plaintext highlighter-rouge">-h2.paragraphSpacing</code>
        </span>
        <span data-toolclip='"YPL.FFL.TKUI_D.F0002-002.HMN_typo_europa-h2.tracking": "$YPL.FFL.TKUI_M.typo.europa.h2.tracking"'>
          <code class="language-plaintext highlighter-rouge">-h2.letterSpacing</code>
        </span>
        <span data-toolclip='"YPL.FFL.TKUI_D.F0002-002.HMN_typo_europa-h2.textAlignHorizontal": "LEFT"'>
          <code class="language-plaintext highlighter-rouge">-h2.textAlignHorizontal</code>
        </span>
        <span data-toolclip='"YPL.FFL.TKUI_D.F0002-002.HMN_typo_europa-h2.textCase": "ORIGINAL"'>
          <code class="language-plaintext highlighter-rouge">-h2.textCase</code>
        </span>
        <span data-toolclip='"YPL.FFL.TKUI_D.F0002-002.HMN_typo_europa-h2.textDecoration": "NONE"'>
          <code class="language-plaintext highlighter-rouge">-h2.textDecoration</code>
        </span>
        <span data-toolclip='"YPL.FFL.TKUI_D.F0002-002.HMN_typo_europa-h2.color": "$YPL.FFL.TKUI_C.colors.black"'>
          <code class="language-plaintext highlighter-rouge">-h2.color</code>
        </span>
      </td>
   </tr>
  </tbody>
</table>

<!-- H3 -->
<table class="type-01 headerNoUpperCase colBordered headFramed" id="F0002-003">
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
        <span data-toolclip='"YPL.FFL.TKUI_D.F0002-003.HMN_typo_europa-h3.familyName": "$YPL.FFL.TKUI_C.typo.europa.familyName.bold"'>
          <code class="language-plaintext highlighter-rouge">-h3.familyName</code>
        </span>
        <span data-toolclip='"YPL.FFL.TKUI_D.F0002-003.HMN_typo_europa-h3.size": "$YPL.FFL.TKUI_M.typo.europa.h3.size"'>
          <code class="language-plaintext highlighter-rouge">-h3.size</code>
        </span>
        <span data-toolclip='"YPL.FFL.TKUI_D.F0002-003.HMN_typo_europa-h3.leading": "$YPL.FFL.TKUI_M.typo.europa.h3.leading"'>
          <code class="language-plaintext highlighter-rouge">-h3.leading</code>
        </span>
        <span data-toolclip='"YPL.FFL.TKUI_D.F0002-003.HMN_typo_europa-h3.paragraphSpacing": "$YPL.FFl.TKUI_M.typo.europa.h3.paragraphSpacing"'>
          <code class="language-plaintext highlighter-rouge">-h3.paragraphSpacing</code>
        </span>
        <span data-toolclip='"YPL.FFL.TKUI_D.F0002-003.HMN_typo_europa-h3.tracking": "$YPL.FFL.TKUI_M.typo.europa.h3.tracking"'>
          <code class="language-plaintext highlighter-rouge">-h3.letterSpacing</code>
        </span>
        <span data-toolclip='"YPL.FFL.TKUI_D.F0002-003.HMN_typo_europa-h3.textAlignHorizontal": "LEFT"'>
          <code class="language-plaintext highlighter-rouge">-h3.textAlignHorizontal</code>
        </span>
        <span data-toolclip='"YPL.FFL.TKUI_D.F0002-003.HMN_typo_europa-h3.textCase": "ORIGINAL"'>
          <code class="language-plaintext highlighter-rouge">-h3.textCase</code>
        </span>
        <span data-toolclip='"YPL.FFL.TKUI_D.F0002-003.HMN_typo_europa-h3.textDecoration": "NONE"'>
          <code class="language-plaintext highlighter-rouge">-h3.textDecoration</code>
        </span>
        <span data-toolclip='"YPL.FFL.TKUI_D.F0002-003.HMN_typo_europa-h3.color": "$YPL.FFL.TKUI_C.colors.black"'>
          <code class="language-plaintext highlighter-rouge">-h3.color</code>
        </span>
      </td>
   </tr>
  </tbody>
</table>

<!-- H4 -->
<table class="type-01 headerNoUpperCase colBordered headFramed" id="F0002-004">
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
        <span data-toolclip='"YPL.FFL.TKUI_D.F0002-004.HMN_typo_europa-h4.familyName": "$YPL.FFL.TKUI_C.typo.europa.familyName.bold"'>
          <code class="language-plaintext highlighter-rouge">-h4.familyName</code>
        </span>
        <span data-toolclip='"YPL.FFL.TKUI_D.F0002-004.HMN_typo_europa-h4.size": "$YPL.FFL.TKUI_M.typo.europa.h4.size"'>
          <code class="language-plaintext highlighter-rouge">-h4.size</code>
        </span>
        <span data-toolclip='"YPL.FFL.TKUI_D.F0002-004.HMN_typo_europa-h4.leading": "$YPL.FFL.TKUI_M.typo.europa.h4.leading"'>
          <code class="language-plaintext highlighter-rouge">-h4.leading</code>
        </span>
        <span data-toolclip='"YPL.FFL.TKUI_D.F0002-004.HMN_typo_europa-h4.paragraphSpacing": "$YPL.FFl.TKUI_M.typo.europa.h4.paragraphSpacing"'>
          <code class="language-plaintext highlighter-rouge">-h4.paragraphSpacing</code>
        </span>
        <span data-toolclip='"YPL.FFL.TKUI_D.F0002-004.HMN_typo_europa-h4.tracking": "$YPL.FFL.TKUI_M.typo.europa.h4.tracking"'>
          <code class="language-plaintext highlighter-rouge">-h4.letterSpacing</code>
        </span>
        <span data-toolclip='"YPL.FFL.TKUI_D.F0002-004.HMN_typo_europa-h4.textAlignHorizontal": "LEFT"'>
          <code class="language-plaintext highlighter-rouge">-h4.textAlignHorizontal</code>
        </span>
        <span data-toolclip='"YPL.FFL.TKUI_D.F0002-004.HMN_typo_europa-h4.textCase": "ORIGINAL"'>
          <code class="language-plaintext highlighter-rouge">-h4.textCase</code>
        </span>
        <span data-toolclip='"YPL.FFL.TKUI_D.F0002-004.HMN_typo_europa-h4.textDecoration": "NONE"'>
          <code class="language-plaintext highlighter-rouge">-h4.textDecoration</code>
        </span>
        <span data-toolclip='"YPL.FFL.TKUI_D.F0002-004.HMN_typo_europa-h4.color": "$YPL.FFL.TKUI_C.colors.black"'>
          <code class="language-plaintext highlighter-rouge">-h4.color</code>
        </span>
      </td>
   </tr>
  </tbody>
</table>

<!-- H5 -->
<table class="type-01 headerNoUpperCase colBordered headFramed" id="F0002-005">
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
        <span data-toolclip='"YPL.FFL.TKUI_D.F0002-005.HMN_typo_europa-h5.familyName": "$YPL.FFL.TKUI_C.typo.europa.familyName.bold"'>
          <code class="language-plaintext highlighter-rouge">-h5.familyName</code>
        </span>
        <span data-toolclip='"YPL.FFL.TKUI_D.F0002-005.HMN_typo_europa-h5.size": "$YPL.FFL.TKUI_M.typo.europa.h5.size"'>
          <code class="language-plaintext highlighter-rouge">-h5.size</code>
        </span>
        <span data-toolclip='"YPL.FFL.TKUI_D.F0002-005.HMN_typo_europa-h5.leading": "$YPL.FFL.TKUI_M.typo.europa.h5.leading"'>
          <code class="language-plaintext highlighter-rouge">-h5.leading</code>
        </span>
        <span data-toolclip='"YPL.FFL.TKUI_D.F0002-005.HMN_typo_europa-h5.paragraphSpacing": "$YPL.FFl.TKUI_M.typo.europa.h5.paragraphSpacing"'>
          <code class="language-plaintext highlighter-rouge">-h5.paragraphSpacing</code>
        </span>
        <span data-toolclip='"YPL.FFL.TKUI_D.F0002-005.HMN_typo_europa-h5.tracking": "$YPL.FFL.TKUI_M.typo.europa.h5.tracking"'>
          <code class="language-plaintext highlighter-rouge">-h5.letterSpacing</code>
        </span>
        <span data-toolclip='"YPL.FFL.TKUI_D.F0002-005.HMN_typo_europa-h5.textAlignHorizontal": "LEFT"'>
          <code class="language-plaintext highlighter-rouge">-h5.textAlignHorizontal</code>
        </span>
        <span data-toolclip='"YPL.FFL.TKUI_D.F0002-005.HMN_typo_europa-h5.textCase": "ORIGINAL"'>
          <code class="language-plaintext highlighter-rouge">-h5.textCase</code>
        </span>
        <span data-toolclip='"YPL.FFL.TKUI_D.F0002-005.HMN_typo_europa-h5.textDecoration": "NONE"'>
          <code class="language-plaintext highlighter-rouge">-h5.textDecoration</code>
        </span>
        <span data-toolclip='"YPL.FFL.TKUI_D.F0002-005.HMN_typo_europa-h5.color": "$YPL.FFL.TKUI_C.colors.black"'>
          <code class="language-plaintext highlighter-rouge">-h5.color</code>
        </span>
      </td>
   </tr>
  </tbody>
</table>

<!-- H6 -->
<table class="type-01 headerNoUpperCase colBordered headFramed" id="F0002-006">
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
        <span data-toolclip='"YPL.FFL.TKUI_D.F0002-006.HMN_typo_europa-h6.familyName": "$YPL.FFL.TKUI_C.typo.europa.familyName.bold"'>
          <code class="language-plaintext highlighter-rouge">-h6.familyName</code>
        </span>
        <span data-toolclip='"YPL.FFL.TKUI_D.F0002-006.HMN_typo_europa-h6.size": "$YPL.FFL.TKUI_M.typo.europa.h6.size"'>
          <code class="language-plaintext highlighter-rouge">-h6.size</code>
        </span>
        <span data-toolclip='"YPL.FFL.TKUI_D.F0002-006.HMN_typo_europa-h6.leading": "$YPL.FFL.TKUI_M.typo.europa.h6.leading"'>
          <code class="language-plaintext highlighter-rouge">-h6.leading</code>
        </span>
        <span data-toolclip='"YPL.FFL.TKUI_D.F0002-006.HMN_typo_europa-h6.paragraphSpacing": "$YPL.FFl.TKUI_M.typo.europa.h6.paragraphSpacing"'>
          <code class="language-plaintext highlighter-rouge">-h6.paragraphSpacing</code>
        </span>
        <span data-toolclip='"YPL.FFL.TKUI_D.F0002-006.HMN_typo_europa-h6.tracking": "$YPL.FFL.TKUI_M.typo.europa.h6.tracking"'>
          <code class="language-plaintext highlighter-rouge">-h6.letterSpacing</code>
        </span>
        <span data-toolclip='"YPL.FFL.TKUI_D.F0002-006.HMN_typo_europa-h6.textAlignHorizontal": "LEFT"'>
          <code class="language-plaintext highlighter-rouge">-h6.textAlignHorizontal</code>
        </span>
        <span data-toolclip='"YPL.FFL.TKUI_D.F0002-006.HMN_typo_europa-h6.textCase": "ORIGINAL"'>
          <code class="language-plaintext highlighter-rouge">-h6.textCase</code>
        </span>
        <span data-toolclip='"YPL.FFL.TKUI_D.F0002-006.HMN_typo_europa-h6.textDecoration": "NONE"'>
          <code class="language-plaintext highlighter-rouge">-h6.textDecoration</code>
        </span>
        <span data-toolclip='"YPL.FFL.TKUI_D.F0002-006.HMN_typo_europa-h6.color": "$YPL.FFL.TKUI_C.colors.black"'>
          <code class="language-plaintext highlighter-rouge">-h6.color</code>
        </span>
      </td>
   </tr>
  </tbody>
</table>

<!-- H7 -->
<table class="type-01 headerNoUpperCase colBordered headFramed" id="F0002-007">
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
        <span data-toolclip='"YPL.FFL.TKUI_D.F0002-007.HMN_typo_europa-h7.familyName": "$YPL.FFL.TKUI_C.typo.europa.familyName.bold"'>
          <code class="language-plaintext highlighter-rouge">-h7.familyName</code>
        </span>
        <span data-toolclip='"YPL.FFL.TKUI_D.F0002-007.HMN_typo_europa-h7.size": "$YPL.FFL.TKUI_M.typo.europa.h7.size"'>
          <code class="language-plaintext highlighter-rouge">-h7.size</code>
        </span>
        <span data-toolclip='"YPL.FFL.TKUI_D.F0002-007.HMN_typo_europa-h7.leading": "$YPL.FFL.TKUI_M.typo.europa.h7.leading"'>
          <code class="language-plaintext highlighter-rouge">-h7.leading</code>
        </span>
        <span data-toolclip='"YPL.FFL.TKUI_D.F0002-007.HMN_typo_europa-h7.paragraphSpacing": "$YPL.FFl.TKUI_M.typo.europa.h7.paragraphSpacing"'>
          <code class="language-plaintext highlighter-rouge">-h7.paragraphSpacing</code>
        </span>
        <span data-toolclip='"YPL.FFL.TKUI_D.F0002-007.HMN_typo_europa-h7.tracking": "$YPL.FFL.TKUI_M.typo.europa.h7.tracking"'>
          <code class="language-plaintext highlighter-rouge">-h7.letterSpacing</code>
        </span>
        <span data-toolclip='"YPL.FFL.TKUI_D.F0002-007.HMN_typo_europa-h7.textAlignHorizontal": "LEFT"'>
          <code class="language-plaintext highlighter-rouge">-h7.textAlignHorizontal</code>
        </span>
        <span data-toolclip='"YPL.FFL.TKUI_D.F0002-007.HMN_typo_europa-h7.textCase": "ORIGINAL"'>
          <code class="language-plaintext highlighter-rouge">-h7.textCase</code>
        </span>
        <span data-toolclip='"YPL.FFL.TKUI_D.F0002-007.HMN_typo_europa-h7.textDecoration": "NONE"'>
          <code class="language-plaintext highlighter-rouge">-h7.textDecoration</code>
        </span>
        <span data-toolclip='"YPL.FFL.TKUI_D.F0002-007.HMN_typo_europa-h7.color": "$YPL.FFL.TKUI_C.colors.black"'>
          <code class="language-plaintext highlighter-rouge">-h7.color</code>
        </span>
      </td>
   </tr>
  </tbody>
</table>

<!-- H8 -->
<table class="type-01 headerNoUpperCase colBordered headFramed" id="F0002-008">
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
        <span data-toolclip='"YPL.FFL.TKUI_D.F0002-008.HMN_typo_europa-h8.familyName": "$YPL.FFL.TKUI_C.typo.europa.familyName.bold"'>
          <code class="language-plaintext highlighter-rouge">-h8.familyName</code>
        </span>
        <span data-toolclip='"YPL.FFL.TKUI_D.F0002-008.HMN_typo_europa-h8.size": "$YPL.FFL.TKUI_M.typo.europa.h8.size"'>
          <code class="language-plaintext highlighter-rouge">-h8.size</code>
        </span>
        <span data-toolclip='"YPL.FFL.TKUI_D.F0002-008.HMN_typo_europa-h8.leading": "$YPL.FFL.TKUI_M.typo.europa.h8.leading"'>
          <code class="language-plaintext highlighter-rouge">-h8.leading</code>
        </span>
        <span data-toolclip='"YPL.FFL.TKUI_D.F0002-008.HMN_typo_europa-h8.paragraphSpacing": "$YPL.FFl.TKUI_M.typo.europa.h8.paragraphSpacing"'>
          <code class="language-plaintext highlighter-rouge">-h8.paragraphSpacing</code>
        </span>
        <span data-toolclip='"YPL.FFL.TKUI_D.F0002-008.HMN_typo_europa-h8.tracking": "$YPL.FFL.TKUI_M.typo.europa.h8.tracking"'>
          <code class="language-plaintext highlighter-rouge">-h8.letterSpacing</code>
        </span>
        <span data-toolclip='"YPL.FFL.TKUI_D.F0002-008.HMN_typo_europa-h8.textAlignHorizontal": "LEFT"'>
          <code class="language-plaintext highlighter-rouge">-h8.textAlignHorizontal</code>
        </span>
        <span data-toolclip='"YPL.FFL.TKUI_D.F0002-008.HMN_typo_europa-h8.textCase": "ORIGINAL"'>
          <code class="language-plaintext highlighter-rouge">-h8.textCase</code>
        </span>
        <span data-toolclip='"YPL.FFL.TKUI_D.F0002-008.HMN_typo_europa-h8.textDecoration": "NONE"'>
          <code class="language-plaintext highlighter-rouge">-h8.textDecoration</code>
        </span>
        <span data-toolclip='"YPL.FFL.TKUI_D.F0002-008.HMN_typo_europa-h8.color": "$YPL.FFL.TKUI_C.colors.black"'>
          <code class="language-plaintext highlighter-rouge">-h8.color</code>
        </span>
      </td>
   </tr>
  </tbody>
</table>

## Paragraphs

<!-- Regular -->
<table class="type-01 headerNoUpperCase colBordered headFramed" id="F0002-101">
  <thead>
    <tr>
      <th>
        <p>Regular Paragraph • F0002-101</p>
        <span class="Europa-ed-r" style="font-size: 16px; line-height: 19.2px; letter-spacing: -0.02em; color: #000000;">Praesent commodo cursus magna, vel scelerisque nisl consectetur et. <br> Sed posuere consectetur est at lobortis. Vestibulum id ligula porta felis euismod semper.</span>
      </th>
    </tr>
  </thead>
  <tbody>
   <tr>
      <td>
        <span data-toolclip='"YPL.FFL.TKUI_D.F0002-101.HMN_typo_europa-p_regular.familyName": "$YPL.FFL.TKUI_C.typo.europa.familyName.bold"'>
          <code class="language-plaintext highlighter-rouge">-p_regular.familyName</code>
        </span>
        <span data-toolclip='"YPL.FFL.TKUI_D.F0002-101.HMN_typo_europa-p_regular.size": "$YPL.FFL.TKUI_M.typo.europa.p.regular.size"'>
          <code class="language-plaintext highlighter-rouge">-p_regular.size</code>
        </span>
        <span data-toolclip='"YPL.FFL.TKUI_D.F0002-101.HMN_typo_europa-p_regular.leading": "$YPL.FFL.TKUI_M.typo.europa.p.regular.leading"'>
          <code class="language-plaintext highlighter-rouge">-p_regular.leading</code>
        </span>
        <span data-toolclip='"YPL.FFL.TKUI_D.F0002-101.HMN_typo_europa-p_regular.paragraphSpacing": "$YPL.FFl.TKUI_M.typo.europa.p.regular.paragraphSpacing"'>
          <code class="language-plaintext highlighter-rouge">-p_regular.paragraphSpacing</code>
        </span>
        <span data-toolclip='"YPL.FFL.TKUI_D.F0002-101.HMN_typo_europa-p_regular.tracking": "$YPL.FFL.TKUI_M.typo.europa.p.regular.tracking'>
          <code class="language-plaintext highlighter-rouge">-p_regular.letterSpacing</code>
        </span>
        <span data-toolclip='"YPL.FFL.TKUI_D.F0002-101.HMN_typo_europa-p_regular.textAlignHorizontal": "LEFT"'>
          <code class="language-plaintext highlighter-rouge">-p_regular.textAlignHorizontal</code>
        </span>
        <span data-toolclip='"YPL.FFL.TKUI_D.F0002-101.HMN_typo_europa-p_regular.textCase": "ORIGINAL"'>
          <code class="language-plaintext highlighter-rouge">-p_regular.textCase</code>
        </span>
        <span data-toolclip='"YPL.FFL.TKUI_D.F0002-101.HMN_typo_europa-p_regular.textDecoration": "NONE"'>
          <code class="language-plaintext highlighter-rouge">-p_regular.textDecoration</code>
        </span>
        <span data-toolclip='"YPL.FFL.TKUI_D.F0002-101.HMN_typo_europa-p_regular.color": "$YPL.FFL.TKUI_C.colors.black"'>
          <code class="language-plaintext highlighter-rouge">-p_regular.color</code>
        </span>
      </td>
   </tr>
  </tbody>
</table>

<!-- Strong -->
<table class="type-01 headerNoUpperCase colBordered headFramed" id="F0002-102">
  <thead>
    <tr>
      <th>
        <p>Strong Paragraph • F0002-102</p>
        <span class="Europa-ed-b" style="font-size: 16px; line-height: 19.2px; letter-spacing: -0.02em; color: #000000;">Praesent commodo cursus magna, vel scelerisque nisl consectetur et. <br> Sed posuere consectetur est at lobortis. Vestibulum id ligula porta felis euismod semper.</span>
      </th>
    </tr>
  </thead>
  <tbody>
   <tr>
      <td>
        <span data-toolclip='"YPL.FFL.TKUI_D.F0002-102.HMN_typo_europa-p_strong.familyName": "$YPL.FFL.TKUI_C.typo.europa.familyName.bold"'>
          <code class="language-plaintext highlighter-rouge">-p_strong.familyName</code>
        </span>
        <span data-toolclip='"YPL.FFL.TKUI_D.F0002-102.HMN_typo_europa-p_strong.size": "$YPL.FFL.TKUI_M.typo.europa.p.strong.size"'>
          <code class="language-plaintext highlighter-rouge">-p_strong.size</code>
        </span>
        <span data-toolclip='"YPL.FFL.TKUI_D.F0002-102.HMN_typo_europa-p_strong.leading": "$YPL.FFL.TKUI_M.typo.europa.p.strong.leading"'>
          <code class="language-plaintext highlighter-rouge">-p_strong.leading</code>
        </span>
        <span data-toolclip='"YPL.FFL.TKUI_D.F0002-102.HMN_typo_europa-p_strong.paragraphSpacing": "$YPL.FFl.TKUI_M.typo.europa.p.strong.paragraphSpacing"'>
          <code class="language-plaintext highlighter-rouge">-p_strong.paragraphSpacing</code>
        </span>
        <span data-toolclip='"YPL.FFL.TKUI_D.F0002-102.HMN_typo_europa-p_strong.tracking": "$YPL.FFL.TKUI_M.typo.europa.p.strong.tracking'>
          <code class="language-plaintext highlighter-rouge">-p_strong.letterSpacing</code>
        </span>
        <span data-toolclip='"YPL.FFL.TKUI_D.F0002-102.HMN_typo_europa-p_strong.textAlignHorizontal": "LEFT"'>
          <code class="language-plaintext highlighter-rouge">-p_strong.textAlignHorizontal</code>
        </span>
        <span data-toolclip='"YPL.FFL.TKUI_D.F0002-102.HMN_typo_europa-p_strong.textCase": "ORIGINAL"'>
          <code class="language-plaintext highlighter-rouge">-p_strong.textCase</code>
        </span>
        <span data-toolclip='"YPL.FFL.TKUI_D.F0002-102.HMN_typo_europa-p_strong.textDecoration": "NONE"'>
          <code class="language-plaintext highlighter-rouge">-p_strong.textDecoration</code>
        </span>
        <span data-toolclip='"YPL.FFL.TKUI_D.F0002-102.HMN_typo_europa-p_strong.color": "$YPL.FFL.TKUI_C.colors.black"'>
          <code class="language-plaintext highlighter-rouge">-p_strong.color</code>
        </span>
      </td>
   </tr>
  </tbody>
</table>

<!-- Regular -->
<table class="type-01 headerNoUpperCase colBordered headFramed" id="F0002-103">
  <thead>
    <tr>
      <th>
        <p>Regular Small Paragraph • F0002-103</p>
        <span class="Europa-ed-r" style="font-size: 14px; line-height: 16.8px; letter-spacing: -0.02em; color: #000000;">Praesent commodo cursus magna, vel scelerisque nisl consectetur et. <br> Sed posuere consectetur est at lobortis. Vestibulum id ligula porta felis euismod semper.</span>
      </th>
    </tr>
  </thead>
  <tbody>
   <tr>
      <td>
        <span data-toolclip='"YPL.FFL.TKUI_D.F0002-103.HMN_typo_europa-p_s_regular.familyName": "$YPL.FFL.TKUI_C.typo.europa.familyName.bold"'>
          <code class="language-plaintext highlighter-rouge">-p_s_regular.familyName</code>
        </span>
        <span data-toolclip='"YPL.FFL.TKUI_D.F0002-103.HMN_typo_europa-p_s_regular.size": "$YPL.FFL.TKUI_M.typo.europa.sp.regular.size"'>
          <code class="language-plaintext highlighter-rouge">-p_s_regular.size</code>
        </span>
        <span data-toolclip='"YPL.FFL.TKUI_D.F0002-103.HMN_typo_europa-p_s_regular.leading": "$YPL.FFL.TKUI_M.typo.europa.sp.regular.leading"'>
          <code class="language-plaintext highlighter-rouge">-p_s_regular.leading</code>
        </span>
        <span data-toolclip='"YPL.FFL.TKUI_D.F0002-103.HMN_typo_europa-p_s_regular.paragraphSpacing": "$YPL.FFl.TKUI_M.typo.europa.sp.regular.paragraphSpacing"'>
          <code class="language-plaintext highlighter-rouge">-p_s_regular.paragraphSpacing</code>
        </span>
        <span data-toolclip='"YPL.FFL.TKUI_D.F0002-103.HMN_typo_europa-p_s_regular.tracking": "$YPL.FFL.TKUI_M.typo.europa.sp.regular.tracking'>
          <code class="language-plaintext highlighter-rouge">-p_s_regular.letterSpacing</code>
        </span>
        <span data-toolclip='"YPL.FFL.TKUI_D.F0002-103.HMN_typo_europa-p_s_regular.textAlignHorizontal": "LEFT"'>
          <code class="language-plaintext highlighter-rouge">-p_s_regular.textAlignHorizontal</code>
        </span>
        <span data-toolclip='"YPL.FFL.TKUI_D.F0002-103.HMN_typo_europa-p_s_regular.textCase": "ORIGINAL"'>
          <code class="language-plaintext highlighter-rouge">-p_s_regular.textCase</code>
        </span>
        <span data-toolclip='"YPL.FFL.TKUI_D.F0002-103.HMN_typo_europa-p_s_regular.textDecoration": "NONE"'>
          <code class="language-plaintext highlighter-rouge">-p_s_regular.textDecoration</code>
        </span>
        <span data-toolclip='"YPL.FFL.TKUI_D.F0002-103.HMN_typo_europa-p_s_regular.color": "$YPL.FFL.TKUI_C.colors.black"'>
          <code class="language-plaintext highlighter-rouge">-p_s_regular.color</code>
        </span>
      </td>
   </tr>
  </tbody>
</table>

<!-- Strong -->
<table class="type-01 headerNoUpperCase colBordered headFramed" id="F0002-104">
  <thead>
    <tr>
      <th>
        <p>Strong Small Paragraph • F0002-104</p>
        <span class="Europa-ed-b" style="font-size: 14px; line-height: 16.8px; letter-spacing: -0.02em; color: #000000;">Praesent commodo cursus magna, vel scelerisque nisl consectetur et. <br> Sed posuere consectetur est at lobortis. Vestibulum id ligula porta felis euismod semper.</span>
      </th>
    </tr>
  </thead>
  <tbody>
   <tr>
      <td>
        <span data-toolclip='"YPL.FFL.TKUI_D.F0002-104.HMN_typo_europa-p_s_strong.familyName": "$YPL.FFL.TKUI_C.typo.europa.familyName.bold"'>
          <code class="language-plaintext highlighter-rouge">-p_s_strong.familyName</code>
        </span>
        <span data-toolclip='"YPL.FFL.TKUI_D.F0002-104.HMN_typo_europa-p_s_strong.size": "$YPL.FFL.TKUI_M.typo.europa.sp.strong.size"'>
          <code class="language-plaintext highlighter-rouge">-p_s_strong.size</code>
        </span>
        <span data-toolclip='"YPL.FFL.TKUI_D.F0002-104.HMN_typo_europa-p_s_strong.leading": "$YPL.FFL.TKUI_M.typo.europa.sp.strong.leading"'>
          <code class="language-plaintext highlighter-rouge">-p_s_strong.leading</code>
        </span>
        <span data-toolclip='"YPL.FFL.TKUI_D.F0002-104.HMN_typo_europa-p_s_strong.paragraphSpacing": "$YPL.FFl.TKUI_M.typo.europa.sp.strong.paragraphSpacing"'>
          <code class="language-plaintext highlighter-rouge">-p_s_strong.paragraphSpacing</code>
        </span>
        <span data-toolclip='"YPL.FFL.TKUI_D.F0002-104.HMN_typo_europa-p_s_strong.tracking": "$YPL.FFL.TKUI_M.typo.europa.sp.strong.tracking'>
          <code class="language-plaintext highlighter-rouge">-p_s_strong.letterSpacing</code>
        </span>
        <span data-toolclip='"YPL.FFL.TKUI_D.F0002-104.HMN_typo_europa-p_s_strong.textAlignHorizontal": "LEFT"'>
          <code class="language-plaintext highlighter-rouge">-p_s_strong.textAlignHorizontal</code>
        </span>
        <span data-toolclip='"YPL.FFL.TKUI_D.F0002-104.HMN_typo_europa-p_s_strong.textCase": "ORIGINAL"'>
          <code class="language-plaintext highlighter-rouge">-p_s_strong.textCase</code>
        </span>
        <span data-toolclip='"YPL.FFL.TKUI_D.F0002-104.HMN_typo_europa-p_s_strong.textDecoration": "NONE"'>
          <code class="language-plaintext highlighter-rouge">-p_s_strong.textDecoration</code>
        </span>
        <span data-toolclip='"YPL.FFL.TKUI_D.F0002-104.HMN_typo_europa-p_s_strong.color": "$YPL.FFL.TKUI_C.colors.black"'>
          <code class="language-plaintext highlighter-rouge">-p_s_strong.color</code>
        </span>
      </td>
   </tr>
  </tbody>
</table>

## Captions

<!-- Regular -->
<table class="type-01 headerNoUpperCase colBordered headFramed" id="F0002-301">
  <thead>
    <tr>
      <th>
        <p>Regular Caption • F0002-301</p>
        <span class="Europa-ed-r" style="font-size: 12px; line-height: 18px; letter-spacing: -0.02em; color: #000000;">Lorem ipsum</span>
      </th>
    </tr>
  </thead>
  <tbody>
   <tr>
      <td>
        <span data-toolclip='"YPL.FFL.TKUI_D.F0002-301.HMN_typo_europa-caption_regular.familyName": "$YPL.FFL.TKUI_C.typo.europa.familyName.regular"'>
          <code class="language-plaintext highlighter-rouge">-caption_regular.familyName</code>
        </span>
        <span data-toolclip='"YPL.FFL.TKUI_D.F0002-301.HMN_typo_europa-caption_regular.size": "$YPL.FFL.TKUI_M.typo.europa.caption.regular.size"'>
          <code class="language-plaintext highlighter-rouge">-caption_regular.size</code>
        </span>
        <span data-toolclip='"YPL.FFL.TKUI_D.F0002-301.HMN_typo_europa-caption_regular.leading": "$YPL.FFL.TKUI_M.typo.europa.caption.regular.leading"'>
          <code class="language-plaintext highlighter-rouge">-caption_regular.leading</code>
        </span>
        <span data-toolclip='"YPL.FFL.TKUI_D.F0002-301.HMN_typo_europa-caption_regular.paragraphSpacing": "$YPL.FFl.TKUI_M.typo.europa.caption.regular.paragraphSpacing"'>
          <code class="language-plaintext highlighter-rouge">-caption_regular.paragraphSpacing</code>
        </span>
        <span data-toolclip='"YPL.FFL.TKUI_D.F0002-301.HMN_typo_europa-caption_regular.tracking": "$YPL.FFL.TKUI_M.typo.europa.caption.regular.tracking"'>
          <code class="language-plaintext highlighter-rouge">-caption_regular.letterSpacing</code>
        </span>
        <span data-toolclip='"YPL.FFL.TKUI_D.F0002-301.HMN_typo_europa-caption_regular.textAlignHorizontal": "LEFT"'>
          <code class="language-plaintext highlighter-rouge">-caption_regular.textAlignHorizontal</code>
        </span>
        <span data-toolclip='"YPL.FFL.TKUI_D.F0002-301.HMN_typo_europa-caption_regular.textCase": "ORIGINAL"'>
          <code class="language-plaintext highlighter-rouge">-caption_regular.textCase</code>
        </span>
        <span data-toolclip='"YPL.FFL.TKUI_D.F0002-301.HMN_typo_europa-caption_regular.textDecoration": "NONE"'>
          <code class="language-plaintext highlighter-rouge">-caption_regular.textDecoration</code>
        </span>
        <span data-toolclip='"YPL.FFL.TKUI_D.F0002-301.HMN_typo_europa-caption_regular.color": "$YPL.FFL.TKUI_C.colors.black"'>
          <code class="language-plaintext highlighter-rouge">-caption_regular.color</code>
        </span>
      </td>
   </tr>
  </tbody>
</table>

<!-- Strong -->
<table class="type-01 headerNoUpperCase colBordered headFramed" id="F0002-302">
  <thead>
    <tr>
      <th>
        <p>Strong Caption • F0002-302</p>
        <span class="Europa-ed-b" style="font-size: 12px; line-height: 18px; letter-spacing: -0.02em; color: #000000;">Lorem ipsum</span>
      </th>
    </tr>
  </thead>
  <tbody>
   <tr>
      <td>
        <span data-toolclip='"YPL.FFL.TKUI_D.F0002-302.HMN_typo_europa-caption_strong.familyName": "$YPL.FFL.TKUI_C.typo.europa.familyName.bold"'>
          <code class="language-plaintext highlighter-rouge">-caption_strong.familyName</code>
        </span>
        <span data-toolclip='"YPL.FFL.TKUI_D.F0002-302.HMN_typo_europa-caption_strong.size": "$YPL.FFL.TKUI_M.typo.europa.caption.strong.size"'>
          <code class="language-plaintext highlighter-rouge">-caption_strong.size</code>
        </span>
        <span data-toolclip='"YPL.FFL.TKUI_D.F0002-302.HMN_typo_europa-caption_strong.leading": "$YPL.FFL.TKUI_M.typo.europa.caption.strong.leading"'>
          <code class="language-plaintext highlighter-rouge">-caption_strong.leading</code>
        </span>
        <span data-toolclip='"YPL.FFL.TKUI_D.F0002-302.HMN_typo_europa-caption_strong.paragraphSpacing": "$YPL.FFl.TKUI_M.typo.europa.caption.strong.paragraphSpacing"'>
          <code class="language-plaintext highlighter-rouge">-caption_strong.paragraphSpacing</code>
        </span>
        <span data-toolclip='"YPL.FFL.TKUI_D.F0002-302.HMN_typo_europa-caption_strong.tracking": "$YPL.FFL.TKUI_M.typo.europa.caption.strong.tracking"'>
          <code class="language-plaintext highlighter-rouge">-caption_strong.letterSpacing</code>
        </span>
        <span data-toolclip='"YPL.FFL.TKUI_D.F0002-302.HMN_typo_europa-caption_strong.textAlignHorizontal": "LEFT"'>
          <code class="language-plaintext highlighter-rouge">-caption_strong.textAlignHorizontal</code>
        </span>
        <span data-toolclip='"YPL.FFL.TKUI_D.F0002-302.HMN_typo_europa-caption_strong.textCase": "ORIGINAL"'>
          <code class="language-plaintext highlighter-rouge">-caption_strong.textCase</code>
        </span>
        <span data-toolclip='"YPL.FFL.TKUI_D.F0002-302.HMN_typo_europa-caption_strong.textDecoration": "NONE"'>
          <code class="language-plaintext highlighter-rouge">-caption_strong.textDecoration</code>
        </span>
        <span data-toolclip='"YPL.FFL.TKUI_D.F0002-302.HMN_typo_europa-caption_strong.color": "$YPL.FFL.TKUI_C.colors.black"'>
          <code class="language-plaintext highlighter-rouge">-caption_strong.color</code>
        </span>
      </td>
   </tr>
  </tbody>
</table>

## Eyebrows

<!-- Regular -->
<table class="type-01 headerNoUpperCase colBordered headFramed" id="F0002-401">
  <thead>
    <tr>
      <th>
        <p>Eyebrow • F0002-401</p>
        <span class="Europa-ed-b" style="font-size: 12px; line-height: 18px; letter-spacing: 0.1em; color: #000000; text-transform: uppercase;">Dolar sit amet</span>
      </th>
    </tr>
  </thead>
  <tbody>
   <tr>
      <td>
        <span data-toolclip='"YPL.FFL.TKUI_D.F0002-401.HMN_typo_europa-eyebrow.familyName": "$YPL.FFL.TKUI_C.typo.europa.familyName.regular"'>
          <code class="language-plaintext highlighter-rouge">-eyebrow.familyName</code>
        </span>
        <span data-toolclip='"YPL.FFL.TKUI_D.F0002-401.HMN_typo_europa-eyebrow.size": "$YPL.FFL.TKUI_M.typo.europa.eyebrow.regular.size"'>
          <code class="language-plaintext highlighter-rouge">-eyebrow.size</code>
        </span>
        <span data-toolclip='"YPL.FFL.TKUI_D.F0002-401.HMN_typo_europa-eyebrow.leading": "$YPL.FFL.TKUI_M.typo.europa.eyebrow.regular.leading"'>
          <code class="language-plaintext highlighter-rouge">-eyebrow.leading</code>
        </span>
        <span data-toolclip='"YPL.FFL.TKUI_D.F0002-401.HMN_typo_europa-eyebrow.paragraphSpacing": "$YPL.FFl.TKUI_M.typo.europa.eyebrow.regular.paragraphSpacing"'>
          <code class="language-plaintext highlighter-rouge">-eyebrow.paragraphSpacing</code>
        </span>
        <span data-toolclip='"YPL.FFL.TKUI_D.F0002-401.HMN_typo_europa-eyebrow.tracking": "$YPL.FFL.TKUI_M.typo.europa.eyebrow.regular.tracking"'>
          <code class="language-plaintext highlighter-rouge">-eyebrow.letterSpacing</code>
        </span>
        <span data-toolclip='"YPL.FFL.TKUI_D.F0002-401.HMN_typo_europa-eyebrow.textAlignHorizontal": "LEFT"'>
          <code class="language-plaintext highlighter-rouge">-eyebrow.textAlignHorizontal</code>
        </span>
        <span data-toolclip='"YPL.FFL.TKUI_D.F0002-401.HMN_typo_europa-eyebrow.textCase": "ORIGINAL"'>
          <code class="language-plaintext highlighter-rouge">-eyebrow.textCase</code>
        </span>
        <span data-toolclip='"YPL.FFL.TKUI_D.F0002-401.HMN_typo_europa-eyebrow.textDecoration": "NONE"'>
          <code class="language-plaintext highlighter-rouge">-eyebrow.textDecoration</code>
        </span>
        <span data-toolclip='"YPL.FFL.TKUI_D.F0002-401.HMN_typo_europa-eyebrow.color": "$YPL.FFL.TKUI_C.colors.black"'>
          <code class="language-plaintext highlighter-rouge">-eyebrow.color</code>
        </span>
      </td>
   </tr>
  </tbody>
</table>

<!-- Small -->
<table class="type-01 headerNoUpperCase colBordered headFramed" id="F0002-402">
  <thead>
    <tr>
      <th>
        <p>Small Eyebrow • F0002-402</p>
        <span class="Europa-ed-b" style="font-size: 10px; line-height: 14px; letter-spacing: 0.1em; color: #000000; text-transform: uppercase;">Dolar sit amet</span>
      </th>
    </tr>
  </thead>
  <tbody>
   <tr>
      <td>
        <span data-toolclip='"YPL.FFL.TKUI_D.F0002-402.HMN_typo_europa-eyebrow_small.familyName": "$YPL.FFL.TKUI_C.typo.europa.familyName.bold"'>
          <code class="language-plaintext highlighter-rouge">-eyebrow_small.familyName</code>
        </span>
        <span data-toolclip='"YPL.FFL.TKUI_D.F0002-402.HMN_typo_europa-eyebrow_small.size": "$YPL.FFL.TKUI_M.typo.europa.eyebrow_small.size"'>
          <code class="language-plaintext highlighter-rouge">-eyebrow_small.size</code>
        </span>
        <span data-toolclip='"YPL.FFL.TKUI_D.F0002-402.HMN_typo_europa-eyebrow_small.leading": "$YPL.FFL.TKUI_M.typo.europa.eyebrow_small.leading"'>
          <code class="language-plaintext highlighter-rouge">-eyebrow_small.leading</code>
        </span>
        <span data-toolclip='"YPL.FFL.TKUI_D.F0002-402.HMN_typo_europa-eyebrow_small.paragraphSpacing": "$YPL.FFl.TKUI_M.typo.europa.eyebrow_small.paragraphSpacing"'>
          <code class="language-plaintext highlighter-rouge">-eyebrow_small.paragraphSpacing</code>
        </span>
        <span data-toolclip='"YPL.FFL.TKUI_D.F0002-402.HMN_typo_europa-eyebrow_small.tracking": "$YPL.FFL.TKUI_M.typo.europa.eyebrow_small.tracking"'>
          <code class="language-plaintext highlighter-rouge">-eyebrow_small.letterSpacing</code>
        </span>
        <span data-toolclip='"YPL.FFL.TKUI_D.F0002-402.HMN_typo_europa-eyebrow_small.textAlignHorizontal": "LEFT"'>
          <code class="language-plaintext highlighter-rouge">-eyebrow_small.textAlignHorizontal</code>
        </span>
        <span data-toolclip='"YPL.FFL.TKUI_D.F0002-402.HMN_typo_europa-eyebrow_small.textCase": "ORIGINAL"'>
          <code class="language-plaintext highlighter-rouge">-eyebrow_small.textCase</code>
        </span>
        <span data-toolclip='"YPL.FFL.TKUI_D.F0002-402.HMN_typo_europa-eyebrow_small.textDecoration": "NONE"'>
          <code class="language-plaintext highlighter-rouge">-eyebrow_small.textDecoration</code>
        </span>
        <span data-toolclip='"YPL.FFL.TKUI_D.F0002-402.HMN_typo_europa-eyebrow_small.color": "$YPL.FFL.TKUI_C.colors.black"'>
          <code class="language-plaintext highlighter-rouge">-eyebrow_small.color</code>
        </span>
      </td>
   </tr>
  </tbody>
</table>
