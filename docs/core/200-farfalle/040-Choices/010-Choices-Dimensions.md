---
project_name: Farfalle # title case
project_id: FFL # 3-letter code  (✨ CHANGE ME ✨ )
title: Dimensions # title case (⚠️ DO NOT TOUCH ME ⚠️ )
permalink: farfalle/choices/dimensions # lowercase + use hyphens › https://tinyurl.com/27kmc4rb (✨ CHANGE ME ✨ )
grand_parent: Farfalle # title case (✨ CHANGE ME ✨ )
parent: Choices # title case (⚠️ DO NOT TOUCH ME ⚠️ )
layout: default
nav_order: 10
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
<script defer src="{{ site.baseurl }}/assets/js/apparatuses/{{ page.title | downcase }}-script.js"></script>

# Dimensions `{{ page.project_id }}`
{: .no_toc}

- TOC
{:toc}

<hr>

{% include copy-all-tokens-section.html title="Dimension" %}

## Scales

Scales are Mathematic functions that allow us to derivate all our sizes from a limited number of Super Choices:

<section class="flex-1_1_1-cols inputsWrapper">
      <div>
        <label for="base">Base</label><br>
        <input class="scalingInputs" type="number" id="base" name="base" min="1">
      </div>
      <div>
        <label for="ratio">Ratio</label><br>
        <input class="scalingInputs" type="number" id="ratio" name="ratio" min="1">
      </div>
      <div>
        <label for="baseIndex">Base Index</label><br>
        <input class="scalingInputs" type="number" id="baseIndex" name="baseIndex" min="100" step="100">
      </div>
</section>

To translate the complexity of our designs build before our design system we use 3 scales: a power of 2 geometric scale which encompasses **[1,2,4,8,16,32,64,128 …].** We use an arithmetic scale A that feeds the arithmetic scale B. All these scales take a base 100 index as input.

<table class="type-02" id="dimension-scales-table">
  <thead>
    <tr>
      <th id="index">Index</th>
      <th id="geoA">Geometric</th>
      <th id="arithA">Arithmetic A</th>
      <th id="arithB">Arithmetic B</th>
    </tr>
  </thead>
  <tbody>
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
functionArithC(index) = (Math.round(base * ratio**2) + (Math.round(base * ratio**2))*((index - 500)/100))*1.5;{% endhighlight %}

**All Math Outputs**

<section>
  <details id="allScalesOutput" class="YPL-apparatusBaby">
    <summary>See all</summary>
    {% include output-table.html choiceType="dimensions" choiceCategory="scales" %}
  </details>
</section>

{% include copy-all-tokens-section.html section="scales" %}

## Spaces

Tokens that are used to set margin, gutters, and padding.

**All Space Outputs**

<section>
  {% include output-table.html unit="space" choiceType="dimensions" choiceCategory="spaces" %}
</section>

{% include copy-all-tokens-section.html section="spaces" %}

## Static Sizes

This Sizes are always expressed in pixel (px unit) and are used to set attributes that doesn’t scale when the UI scales, ie: button border-width. Their function is to provide proper pixel hinting.

**All Static Size Outputs**

<section>
  {% include output-table.html unit="size" choiceType="dimensions" choiceCategory="staticSizes" %}
</section>

{% include copy-all-tokens-section.html section="staticSizes" %}

## Factors

Factors are multipliers use to scale specific items in the UI. Mainly text they also can help to address the scale required by different platforms and resolution.
To facilitate their usage we use aliases from the get go.

<!-- TODO Add a new row  -->

|  | Description | Alias |
| --- | --- | --- |
| **All Text except Controls** | This factor is required by all Text that are not inside Controls | `F1` |
| **Controls Text size** | This factor is required by all Text that are not inside Controls | `F2` |
| **Controls size without Text** | This factor is required by all inner dimensions of all Controls except their Text| `F3` |
| **Controls** | This factor is required by all dimensions of all Controls including Text | `F4` |
| **Text size · WCAG 1.4.4 AA** | This tokens serves as a reference: all UI Text elements should be tested to meet the WCAG [Success Criterion 1.4.4 Level AA](https://www.w3.org/TR/WCAG21/#x1-4-4-resize-text) which means if their size is multiplied they should not break the general layout or eclipse information | `F5` |

**All Factor Outputs**

<section>
  {% include output-table.html unit="factor" choiceType="dimensions" choiceCategory="factors" %}
</section>

{% include copy-all-tokens-section.html section="factors" %}

## Breakpoints/Viewports

### Web
Breakpoints are points where web content responds according to the device width. We have exposed a few common breakpoints as tokens here.

<!-- TODO Expose tokens for iOS and Android Viewports -->

|                                       | Breakpoint prefix | Minimum width |
|---------------------------------------|-------------------|---------------|
| **Mobile phone devices**              | sm                | 640px         |
| **Tablet computer devices**           | md                | 768px         |
| **Small desktop or laptop computers** | lg                | 1024px        |
| **Typical desktop computer**          | xl                | 1280px        |
| **Large desktop screen**              | xxl               | 1536px        |

**All Breakpoint Outputs**

<section>
  {% include output-table.html unit="breakpoint" choiceType="dimensions" choiceCategory="breakpoints" %}
</section>

{% include copy-all-tokens-section.html section="breakpoints" %}

<hr>

### iOS [WIP]
{: .no_toc}
Instead of using exact values of width like web media queries require; exposing a set of orientation tokens can be a proposed solution to handle the viewport challenge. [Apple's Human Interface Guidelines](https://developer.apple.com/design/human-interface-guidelines/ios/visual-design/adaptivity-and-layout/#device-size-classes) explain this a little more eloquently.

#### Proposal
{: .no_toc}
To expose two tokens specifically for iOS `YPL.FFL.TKUI_C.breakpoints.iOS.regular` and `YPL.FFL.TKUI_C.breakpoints.iOS.compact`

<hr>

### Android [WIP]
{: .no_toc}
