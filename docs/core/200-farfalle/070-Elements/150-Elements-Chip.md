---
project_name: Farfalle # title case
project_id: FFL # 3-letter code
title: Chip # title case
UID: E0001 # ["P","E","F"] + Hexa code/index
variants: [] # all variants index
permalink: farfalle/elements/chip # lowercase + use hyphens › https://tinyurl.com/27kmc4rb
grand_parent: Farfalle # title case
parent: Elements # title case
layout: default
nav_order: 150
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
    "YPL.FFL.TKUI_D.{{ page.UID }}.HMN_button.width": {
      "value": "YPL.FFL.TKUI_C.percents.full",
      "description": "",
      "type": "other",
      "group": ""
    },
    "YPL.FFL.TKUI_D.{{ page.UID }}.HMN_button.height": {
      "value": "YPL.FFL.TKUI_C.sizes.macro.700",
      "description": "",
      "type": "other",
      "group": ""
    },
    "YPL.FFL.TKUI_D.{{ page.UID }}.HMN_button.margin": {
      "value": "YPL.FFL.TKUI_C.spaces.l",
      "description": "",
      "type": "other",
      "group": ""
    },
    "YPL.FFL.TKUI_D.{{ page.UID }}.HMN_button.fringeBottom": {
      "value": "YPL.FFL.TKUI_C.spaces.l",
      "description": "",
      "type": "other",
      "group": ""
    },
    "YPL.FFL.TKUI_D.{{ page.UID }}.HMN_button.padding": {
      "value": "YPL.FFL.TKUI_C.spaces.l",
      "description": "",
      "type": "other",
      "group": ""
    },
    "YPL.FFL.TKUI_D.{{ page.UID }}.HMN_button.radius": {
      "value": "YPL.FFL.TKUI_C.sizes.micro.200",
      "description": "",
      "type": "other",
      "group": ""
    },
    "YPL.FFL.TKUI_D.{{ page.UID }}.HMN_button.blockCopy.width": {
      "value": "YPL.FFL.TKUI_C.percents.full",
      "description": "",
      "type": "other",
      "group": ""
    },
    "YPL.FFL.TKUI_D.{{ page.UID }}.HMN_button.blockCopy.slack": {
      "value": "YPL.FFL.TKUI_C.sizes.macro.500",
      "description": "",
      "type": "other",
      "group": ""
    },
    "YPL.FFL.TKUI_D.{{ page.UID }}.HMN_button.blockHeader.height": {
      "value": "YPL.FFL.TKUI_C.spaces.l",
      "description": "",
      "type": "other",
      "group": ""
    },
    "YPL.FFL.TKUI_D.{{ page.UID }}.HMN_button.blockFooter.height": {
      "value": "YPL.FFL.TKUI_C.spaces.e",
      "description": "",
      "type": "other",
      "group": ""
    },
    "YPL.FFL.TKUI_D.{{ page.UID }}.HMN_button.gradient": {
      "value": "YPL.FFL.TKUI_C.gradients.overlay.black.BL_TR",
      "description": "",
      "type": "other",
      "group": ""
    },
    "YPL.FFL.TKUI_D.{{ page.UID }}.HMN_button.bgImage.fillMode": {
      "value": "FILL",
      "description": "",
      "type": "other",
      "group": ""
    },
    "YPL.FFL.TKUI_D.{{ page.UID }}.HMN_button.heading.color": {
      "value": "YPL.FFL.TKUI_C.colors.white",
      "description": "",
      "type": "other",
      "group": ""
    },
    "YPL.FFL.TKUI_D.{{ page.UID }}.HMN_button.eyebrow.color": {
      "value": "YPL.FFL.TKUI_C.colors.grey.300",
      "description": "",
      "type": "other",
      "group": ""
    },
    "YPL.FFL.TKUI_D.{{ page.UID }}.HMN_button.heading.margin": {
      "value": "negativeOf(YPL.FFL.TKUI_C.spaces.xs)",
      "description": "",
      "type": "other",
      "group": ""
    },
    "YPL.FFL.TKUI_D.{{ page.UID }}.HMN_button.heading.fringeBottom": {
      "value": "negativeOf(YPL.FFL.TKUI_C.spaces.xs)",
      "description": "",
      "type": "other",
      "group": ""
    },
    "YPL.FFL.TKUI_D.{{ page.UID }}.HMN_button.blockCopy.chip.margin": {
      "value": "YPL.FFL.TKUI_C.spaces.s",
      "description": "",
      "type": "other",
      "group": ""
    },
    "YPL.FFL.TKUI_D.{{ page.UID }}.HMN_button.blockCopy.chip.fringeBottom": {
      "value": "YPL.FFL.TKUI_C.spaces.s",
      "description": "",
      "type": "other",
      "group": ""
    },
    "YPL.FFL.TKUI_D.{{ page.UID }}.HMN_button.heading.paddingLeft": {
      "value": "YPL.FFL.TKUI_C.spaces.xxl",
      "description": "",
      "type": "other",
      "group": ""
    },
    "YPL.FFL.TKUI_D.{{ page.UID }}.HMN_button.blockFooter.eyebrow.paddingLeft": {
      "value": "YPL.FFL.TKUI_C.spaces.sm",
      "description": "",
      "type": "other",
      "group": ""
    },
    "YPL.FFL.TKUI_D.{{ page.UID }}.HMN_button.gradient.OPT_layout2": {
      "value": "YPL.FFL.TKUI_C.gradients.overlay.black.TL_BR",
      "description": "",
      "type": "other",
      "group": ""
    },
    "YPL.FFL.TKUI_D.{{ page.UID }}.HMN_button.blockCopy.paragraph.color": {
      "value": "YPL.FFL.TKUI_C.colors.white.value",
      "description": "",
      "type": "other",
      "group": ""
    },
    "YPL.FFL.TKUI_D.{{ page.UID }}.HMN_button.heading.margin.OPT_layout2": {
      "value": "YPL.FFL.TKUI_C.sizes.micro.400.value",
      "description": "",
      "type": "other",
      "group": ""
    },
    "YPL.FFL.TKUI_D.{{ page.UID }}.HMN_button.blockFooter.eyebrow.paddingLeft.OPT_layout2": {
      "value": "YPL.FFL.TKUI_C.spaces.none",
      "description": "",
      "type": "other",
      "group": ""
    },
    "YPL.FFL.TKUI_D.{{ page.UID }}.HMN_button.height.OPT_small": {
      "value": "YPL.FFL.TKUI_C.sizes.macro.700.value",
      "description": "",
      "type": "other",
      "group": ""
    },
    "YPL.FFL.TKUI_D.{{ page.UID }}.HMN_button.heading.size.OPT_small": {
      "value": "YPL.FFL.TKUI_C.typo.europa.h7.size.value",
      "description": "",
      "type": "other",
      "group": ""
    },
    "YPL.FFL.TKUI_D.{{ page.UID }}.HMN_button.heading.tracking.OPT_small": {
      "value": "YPL.FFL.TKUI_C.typo.europa.h7.tracking.value",
      "description": "",
      "type": "other",
      "group": ""
    },
    "YPL.FFL.TKUI_D.{{ page.UID }}.HMN_button.heading.leading.OPT_small": {
      "value": "YPL.FFL.TKUI_C.typo.europa.h7.leading.value",
      "description": "",
      "type": "other",
      "group": ""
    },
    "YPL.FFL.TKUI_D.{{ page.UID }}.HMN_button.heading.paragraphSpacing.OPT_small": {
      "value": "YPL.FFL.TKUI_C.typo.europa.h7.paragraphSpacing.value",
      "description": "",
      "type": "other",
      "group": ""
    },
    "YPL.FFL.TKUI_D.{{ page.UID }}.HMN_button.blockCopy.width.BRKP_m": {
      "value": "YPL.FFL.TKUI_C.percents.ml.value",
      "description": "",
      "type": "other",
      "group": ""
    },
    "YPL.FFL.TKUI_D.{{ page.UID }}.HMN_button.heading.size.BRKP_m": {
      "value": "YPL.FFL.TKUI_C.typo.europa.h3.size.value",
      "description": "",
      "type": "other",
      "group": ""
    },
    "YPL.FFL.TKUI_D.{{ page.UID }}.HMN_button.heading.tracking.BRKP_m": {
      "value": "YPL.FFL.TKUI_C.typo.europa.h3.tracking.value",
      "description": "",
      "type": "other",
      "group": ""
    },
    "YPL.FFL.TKUI_D.{{ page.UID }}.HMN_button.heading.leading.BRKP_m": {
      "value": "YPL.FFL.TKUI_C.typo.europa.h3.leading.value",
      "description": "",
      "type": "other",
      "group": ""
    },
    "YPL.FFL.TKUI_D.{{ page.UID }}.HMN_button.heading.paragraphSpacing.BRKP_m": {
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


# Chip
{: .no_toc}

Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Sed posuere consectetur est at lobortis.

<table class="headTopBorder">
  <thead>
    <tr>
      <th>UID</th>
      <th>Ticket</th>
      <th>Owner</th>
      <th>Options</th>
      <th>Tokens</th>
      <th>Status</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>{{ page.project_id }}.{{ page.UID }}</code></td>
      <td><a href="https://github.com/yummly/pasta/issues/9">&#35;9</a></td>
      <td><a href="https://github.com/robert-ANML">Robert</a></td>
      <td><span data-toolclip='TBD'><code>TBD</code></span></td>
      <td><a href="{{ site.url }}/pasta/assets/projects/{{ page.project_id }}/tokens/">Folder&nbsp;→</a></td>
      <td><a href="#status"><span id="statusWidget"></span><span>0%</span></a></td>
    </tr>
    {% if page.variants.size > 0 %}
    <tr>
      <td colspan="6" class="pageHeaderVariantsRow">
        {% for item in page.variants %}<a href="#{{ page.UID }}-{{item}}"><code>-{{item | default: ""}}</code></a> {% endfor %}
      </td>
    </tr>
    {% endif %}
  </tbody>
</table>

![Preview]({{site.baseurl}}/assets/projects/{{page.project_id}}/images/YPL-DOC-FFL.E0001-preview_01.png){: .darkenabled}

<a href="https://www.figma.com/file/le9hbXPWmA55qUA7a7otgH/?node-id=1519%3A36181" class="btn iconed figmaBadge">To Figma →<a>

- TOC
{:toc}

## Layout

![Layout Blueprint]({{site.baseurl}}/assets/projects/{{page.project_id}}/images/YPL-DOC-FFL-E0001-bp_layout_01.png)

## Dependencies

![Dependencies Blueprint]({{site.baseurl}}/assets/projects/{{page.project_id}}/images/YPL-DOC-FFL-E0001-bp_dependencies_01.png)

### Instantiation

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
            <td><span data-toolclip='"YPL.FFL.{{ page.UID }}.HMN_chip.block.icon": "{YPL.FFL.F0003-XXX.HMN_icon}"'><code>FFL.F0003</code></span></td>
            <td><a href="{{site.baseurl}}/{{ page.project_name | downcase }}/primitives/icons" alt="Link to Icon page" class="btn">Icon →</a></td>
         </tr>
         <tr>
            <td>.label</td>
            <td><span data-toolclip='"YPL.FFL.{{ page.UID }}.HMN_chip.block.label": "{YPL.FFL.TKUI_D.F0002-401.HMN_typo_europa-eyebrow}"'><code>FFL.F0002-401</code></span></td>
            <td><a href="{{site.baseurl}}/{{ page.project_name | downcase }}/primitives/typography#F0002-401" alt="Link to Typography Primitives page" class="btn">Eyebrow →</a></td>
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
/// dependencies.

// .block
"YPL.FFL.{{ page.UID }}.HMN_chip.block.icon": "{YPL.FFL.F0003-XXX.HMN_icon}", // select icon here (for example "YPL.FFL.F0003-028")
"YPL.FFL.{{ page.UID }}.HMN_chip.block.label": "{YPL.FFL.F0002-401.HMN_typo_europa-eyebrow}",
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
          YPL.FFL.1.HMN_chip
           └─ .block
               └─ .icon (optional)
               └─ .label (optional)
     {% endhighlight %}
   </div>
 </section>

## Decisions

![Decisions Blueprint]({{site.baseurl}}/assets/projects/{{page.project_id}}/images/YPL-DOC-FFL-E0001-bp_decisions_01.png)


### Variations

###### Options

<br> <!--  FIXME -->

![Preview]({{site.baseurl}}/assets/projects/{{page.project_id}}/images/YPL-DOC-FFL.E0001-preview_02.png){: .darkenabled}


<table class="type-01 headerNoUpperCase colBordered headFramed">
  <!-- <caption>my caption</caption> -->
  <thead>
    <tr>
      <th>.OPT_iconOnly</th>
      <th>.OPT_notContained</th>
      <th>.OPT_accent</th>      
      <th>.OPT_inverse</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        <span data-toolclip='"YPL.FFL.TKUI_D.{{ page.UID }}.HMN_chip.block.icon.marginRight.OPT_iconOnly": "{YPL.FFL.TKUI_C.spaces.none.value}"'><code class="language-plaintext highlighter-rouge">.block.icon.marginRight</code></span>
        <span data-toolclip='"YPL.FFL.TKUI_D.{{ page.UID }}.HMN_chip.block.icon.marginRight.OPT_iconOnly": "{YPL.FFL.TKUI_C.spaces.none.value}"'><code class="language-plaintext highlighter-rouge">.block.icon.fringeRight</code></span>        
      </td>
      <td>
        <span data-toolclip='"YPL.FFL.TKUI_D.{{ page.UID }}.HMN_chip.bgColor.OPT_notContained": "{YPL.FFL.TKUI_C.colors.NONE.value}"'><code class="language-plaintext highlighter-rouge">.bgColor</code></span>
      </td>
      <td>
        <span data-toolclip='"YPL.FFL.TKUI_D.{{ page.UID }}.HMN_chip.block.label.color.OPT_accent": "{YPL.FFL.TKUI_C.colors.orange.400.value"'><code class="language-plaintext highlighter-rouge">.block.label.color</code></span> 
        <span data-toolclip='"YPL.FFL.TKUI_D.{{ page.UID }}.HMN_chip.block.icon.color.OPT_accent": "{YPL.FFL.TKUI_C.colors.orange.400.value}"'><code class="language-plaintext highlighter-rouge">.block.icon.color</code></span>    
      </td>
      <td>
        <span data-toolclip='"YPL.FFL.TKUI_D.{{ page.UID }}.HMN_chip.bgColor.OPT_inverse": "{YPL.FFL.TKUI_C.colors.grey.900.value}"'><code class="language-plaintext highlighter-rouge">.bgColor</code></span> 
        <span data-toolclip='"YPL.FFL.TKUI_D.{{ page.UID }}.HMN_chip.block.label.color.OPT_inverse": "{YPL.FFL.TKUI_C.colors.white.value}"'><code class="language-plaintext highlighter-rouge">.block.label.color</code></span> 
        <span data-toolclip='"YPL.FFL.TKUI_D.{{ page.UID }}.HMN_chip.block.icon.color.OPT_inverse": "{YPL.FFL.TKUI_C.colors.white.value}"'><code class="language-plaintext highlighter-rouge">.block.icon.color</code></span>                
      </td>
    </tr>
  </tbody>
</table>

###### Modes (N/A)
{: no_toc}


###### Breakpoints (N/A)
{: no_toc}

<!-- <table class="headerCentered headerNoUpperCase colBordered headFramed">
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
      <td><span class="dimmed">N/A</span></td>
      <td><span class="dimmed">N/A</span></td>
      <td><span class="dimmed">N/A</span></td>
      <td><span class="dimmed">N/A</span></td>
    </tr>
  </tbody>
</table> -->

## Tokens Playground

Playground · Pattern-siloed Tokens including all required Choices and Decisions:

<table>
    <tr class="playground-details-row" id="css">
        <td><button class="btn">CSS Tokens</button></td>
    </tr>
    <tr class="playground-details-row" id="ios">
        <td><button class="btn copy-token-btn">iOS Tokens</button></td>
    </tr>
    <tr class="playground-details-row" id="android">
        <td><button class="btn">Android Tokens</button></td>
    </tr>
    <tr class="playground-details-row" id="figma-tokens">
        <td><button class="btn">Figma Tokens</button></td>
    </tr>
</table>

<details>
<summary>Raw</summary>
{% highlight javascript %}
{
//////  DECISIONS - FFL.{{ page.UID }}

// macro layout

    "YPL.FFL.TKUI_D.{{ page.UID }}.HMN_chip.height": "{YPL.FFL.TKUI_C.sizes.micro.1200.value}",
    "YPL.FFL.TKUI_D.{{ page.UID }}.HMN_chip.paddingTop": "{YPL.FFL.TKUI_C.spaces.xs.value}",
    "YPL.FFL.TKUI_D.{{ page.UID }}.HMN_chip.paddingBottom": "{YPL.FFL.TKUI_C.spaces.xs.value}",
    "YPL.FFL.TKUI_D.{{ page.UID }}.HMN_chip.paddingLeft": "{YPL.FFL.TKUI_C.spaces.s.value}",
    "YPL.FFL.TKUI_D.{{ page.UID }}.HMN_chip.paddingRight": "{YPL.FFL.TKUI_C.spaces.s.value}",            
    "YPL.FFL.TKUI_D.{{ page.UID }}.HMN_chip.radius": "{YPL.FFL.TKUI_C.precents.m.value}", // 0.5   
    "YPL.FFL.TKUI_D.{{ page.UID }}.HMN_chip.radius": "{YPL.FFL.TKUI_C.sizes.micro.600.value}", // fallback 12pt
    // blocks
    "YPL.FFL.TKUI_D.{{ page.UID }}.HMN_chip.blockHeader.height": "{YPL.FFL.TKUI_C.sizes.micro.800.value}",

    // dependencies
    "YPL.FFL.TKUI_D.{{ page.UID }}.HMN_chip.block.icon": "{YPL.FFL.F0003-XXX.HMN_icon}", // select icon here (for example "YPL.FFL.F0003-028")
    "YPL.FFL.TKUI_D.{{ page.UID }}.HMN_chip.block.label": "{YPL.FFL.F0002-401.HMN_typo_europa-eyebrow}",

// colors & stuff

    "YPL.FFL.TKUI_D.{{ page.UID }}.HMN_chip.bgColor": "{YPL.FFL.TKUI_C.colors.white.value}"
    "YPL.FFL.TKUI_D.{{ page.UID }}.HMN_chip.block.label.color": "{YPL.FFL.TKUI_C.colors.black.value}",
    "YPL.FFL.TKUI_D.{{ page.UID }}.HMN_chip.block.icon.color": "{YPL.FFL.TKUI_C.colors.black.value}",

// micro layout

    "YPL.FFL.TKUI_D.{{ page.UID }}.HMN_chip.block.label.leading": "{YPL.FFL.TKUI_C.sizes.micro.800.value}", // TBD-FIXME
    "YPL.FFL.TKUI_D.{{ page.UID }}.HMN_chip.block.icon.width": "{YPL.FFL.TKUI_C.sizes.micro.800.value}", // TBD-FIXME
    "YPL.FFL.TKUI_D.{{ page.UID }}.HMN_chip.block.icon.height": "{YPL.FFL.TKUI_C.sizes.micro.800.value}", // TBD-FIXME
    "YPL.FFL.TKUI_D.{{ page.UID }}.HMN_chip.block.icon.marginRight": "{YPL.FFL.TKUI_C.spaces.xs.value}", 
    "YPL.FFL.TKUI_D.{{ page.UID }}.HMN_chip.block.icon.fringeRight": "{YPL.FFL.TKUI_C.spaces.xs.value}", 


// variations

    // options

      // .OPT_inverse
      "YPL.FFL.TKUI_D.{{ page.UID }}.HMN_chip.bgColor.OPT_inverse": "{YPL.FFL.TKUI_C.colors.grey.900.value}"
      "YPL.FFL.TKUI_D.{{ page.UID }}.HMN_chip.block.label.color.OPT_inverse": "{YPL.FFL.TKUI_C.colors.white.value}",
      "YPL.FFL.TKUI_D.{{ page.UID }}.HMN_chip.block.icon.color.OPT_inverse": "{YPL.FFL.TKUI_C.colors.white.value}",

      // .OPT_iconOnly
      "YPL.FFL.TKUI_D.{{ page.UID }}.HMN_chip.block.icon.marginRight.OPT_iconOnly": "{YPL.FFL.TKUI_C.spaces.none.value}",
      "YPL.FFL.TKUI_D.{{ page.UID }}.HMN_chip.block.icon.fringeRight.OPT_iconOnly": "{YPL.FFL.TKUI_C.spaces.none.value}",       

      // .OPT_notContained
      "YPL.FFL.TKUI_D.{{ page.UID }}.HMN_chip.bgColor.OPT_notContained": "{YPL.FFL.TKUI_C.colors.none.value}", // TBD

      // .OPT_accent      
      "YPL.FFL.TKUI_D.{{ page.UID }}.HMN_chip.block.label.color.OPT_accent": "{YPL.FFL.TKUI_C.colors.orange.400.value}",
      "YPL.FFL.TKUI_D.{{ page.UID }}.HMN_chip.block.icon.color.OPT_accent": "{YPL.FFL.TKUI_C.colors.orange.400.value}",      
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

 <section class="status-section">

   <h2 id="status">Status</h2>

   <h3 id="checklist-accessibility-section">Accessibility</h3>

   <table class="checklist-accessibility-details Last3ThCentered">
       <thead>
         <tr>
             <th>Criterion</th>
             <th>Description</th>
             <th>Pending</th>
             <th>Done</th>
             <th>N/A</th>
         </tr>
       </thead>
       <tbody>
         <tr>
             <td><a href="https://www.w3.org/TR/WCAG21/#text-alternatives">1.1.1</a></td>
             <td>Text Alternatives</td>
             <td><input type="radio"  data-status-category="accessibility" id="WCAG_1_1_1P" name="WCAG_1_1_1" value="pending" checked></td>
             <td><input type="radio"  data-status-category="accessibility" id="WCAG_1_1_1D" name="WCAG_1_1_1" value="done"></td>
             <td><input type="radio"  data-status-category="accessibility" id="WCAG_1_1_1N" name="WCAG_1_1_1" value="N/A"></td>
         </tr>
         <tr>
             <td><a href="https://www.w3.org/TR/WCAG21/#use-of-color">1.4.1</a></td>
             <td>Color not the only way to convey information</td>
             <td><input type="radio"  data-status-category="accessibility" id="WCAG_1_4_1P" name="WCAG_1_4_1" value="pending" checked></td>
             <td><input type="radio"  data-status-category="accessibility" id="WCAG_1_4_1D" name="WCAG_1_4_1" value="done"></td>
             <td><input type="radio"  data-status-category="accessibility" id="WCAG_1_4_1N" name="WCAG_1_4_1" value="N/A"></td>
         </tr>
         <tr>
             <td><a href="https://www.w3.org/TR/WCAG21/#contrast-minimum">1.4.3</a></td>
             <td>Text Color Contrast</td>
             <td><input type="radio"  data-status-category="accessibility" id="WCAG_1_4_3P" name="WCAG_1_4_3" value="pending" checked></td>
             <td><input type="radio"  data-status-category="accessibility" id="WCAG_1_4_3D" name="WCAG_1_4_3" value="done"></td>
             <td><input type="radio"  data-status-category="accessibility" id="WCAG_1_4_3N" name="WCAG_1_4_3" value="N/A"></td>
         </tr>
         <tr>
             <td><a href="https://www.w3.org/TR/WCAG21/#contrast-enhanced">1.4.6</a></td>
             <td>Text Color Contrast AAA</td>
             <td><input type="radio"  data-status-category="accessibility" id="WCAG_1_4_6P" name="WCAG_1_4_6" value="pending" checked></td>
             <td><input type="radio"  data-status-category="accessibility" id="WCAG_1_4_6D" name="WCAG_1_4_6" value="done"></td>
             <td><input type="radio"  data-status-category="accessibility" id="WCAG_1_4_6N" name="WCAG_1_4_6" value="N/A"></td>
         </tr>
         <tr>
             <td><a href="https://www.w3.org/TR/WCAG21/#non-text-contrast">1.4.11</a></td>
             <td>Fill Color Contrast</td>
             <td><input type="radio"  data-status-category="accessibility" id="WCAG_1_4_11P" name="WCAG_1_4_11" value="pending" checked></td>
             <td><input type="radio"  data-status-category="accessibility" id="WCAG_1_4_11D" name="WCAG_1_4_11" value="done"></td>
             <td><input type="radio"  data-status-category="accessibility" id="WCAG_1_4_11N" name="WCAG_1_4_11" value="N/A"></td>
         </tr>
         <tr>
             <td><a href="https://www.w3.org/TR/WCAG21/#resize-text">1.4.4</a></td>
             <td>200% Text Size</td>
             <td><input type="radio"  data-status-category="accessibility" id="WCAG_1_4_4P" name="WCAG_1_4_4" value="pending" checked></td>
             <td><input type="radio"  data-status-category="accessibility" id="WCAG_1_4_4D" name="WCAG_1_4_4" value="done"></td>
             <td><input type="radio"  data-status-category="accessibility" id="WCAG_1_4_4N" name="WCAG_1_4_4" value="N/A"></td>
         </tr>
         <tr>
             <td><a href="https://www.w3.org/TR/WCAG21/#text-spacing">1.4.12</a></td>
             <td>Text Spacing</td>
             <td><input type="radio"  data-status-category="accessibility" id="WCAG_1_4_12P" name="WCAG_1_4_12" value="pending" checked></td>
             <td><input type="radio"  data-status-category="accessibility" id="WCAG_1_4_12D" name="WCAG_1_4_12" value="done"></td>
             <td><input type="radio"  data-status-category="accessibility" id="WCAG_1_4_12N" name="WCAG_1_4_12" value="N/A"></td>
         </tr>
         <tr>
             <td><a href="https://www.w3.org/TR/WCAG21/#keyboard-no-exception">2.1.3</a></td>
             <td>Keyboard Operable</td>
             <td><input type="radio"  data-status-category="accessibility" id="WCAG_2_1_3P" name="WCAG_2_1_3" value="pending" checked></td>
             <td><input type="radio"  data-status-category="accessibility" id="WCAG_2_1_3D" name="WCAG_2_1_3" value="done"></td>
             <td><input type="radio"  data-status-category="accessibility" id="WCAG_2_1_3N" name="WCAG_2_1_3" value="N/A"></td>
         </tr>
       </tbody>
   </table>

   <h3 id="checklist-general">General</h3>

  <table id="checklist-ops">
      <thead>
          <tr>
              <th>Ops</th>
          </tr>
      </thead>
      <tbody>
          <tr>
              <td><input type="checkbox" data-status-category="ops" class="checklistItem" checked><strong>UID</strong></td>
          </tr>
          <tr>
              <td><input type="checkbox" data-status-category="ops" class="checklistItem" checked><strong>Github Ticket</strong></td>
          </tr>
          <tr>
              <td><input type="checkbox" data-status-category="ops" class="checklistItem"><strong>Figma Link(s)</strong></td>
          </tr>
          <tr>
              <td><input type="checkbox" data-status-category="ops" class="checklistItem" checked><strong>Design Owner</strong></td>
          </tr>
          <tr>
              <td><input type="checkbox" data-status-category="ops" class="checklistItem"><strong>Figma Document Link</strong><br>Inject Pasta URL inside the <a href="https://help.figma.com/hc/en-us/articles/360055203533-Use-the-Inspect-panel#View_component_details">Figma Component Details Panel</a></td>
          </tr>
      </tbody>
  </table>

  <table id="checklist-design">
      <thead>
          <tr>
              <th>Design</th>
          </tr>
      </thead>
      <tbody>
          <tr>
              <td>
                <input type="checkbox" data-status-category="design" class="checklistItem"><strong>Dark and Light Modes</strong><br>Works properly across both color Modes
              </td>
          </tr>
          <tr>
              <td>
                <input type="checkbox" data-status-category="design" class="checklistItem"><strong>All interactive states</strong><br>Includes all applicable interactive states: idle, over, pressed, focus, disabled, highlighted idle, highlighted disabled, etc.
              </td>
          </tr>
          <tr>
              <td>
                <input type="checkbox" data-status-category="design" class="checklistItem"> <strong>Document Variations</strong><br>Includes relevant options: variant, styles, sizes, orientations, optional iconography, decorations
              </td>
          </tr>
          <tr>
              <td>
                <input type="checkbox" data-status-category="design" class="checklistItem"><strong>All color Schemes</strong><br>Works properly across all color Schemes
              </td>
          </tr>
          <tr>
              <td>
               <input type="checkbox" data-status-category="design" class="checklistItem"><strong>Breakpoints and platform scales</strong><br>Includes a desktop scale (web desktop) and a mobile scale (iOS, Android)
             </td>
          </tr>
          <tr>
              <td>
                <input type="checkbox" data-status-category="design" class="checklistItem"><strong>"Yield point" behaviors</strong><br>Includes guidelines for behaviors at maximum strain, often around text size: wrapping, truncation, overflow, animation
              </td>
          </tr>
      </tbody>
  </table>

  <table id="checklist-content">
      <thead>
          <tr>
              <th>Content</th>
          </tr>
      </thead>
      <tbody>
          <tr>
              <td><input type="checkbox" data-status-category="content" class="checklistItem"><strong>Copy Writing guidelines</strong><br>Includes content standards or usage guidelines for how to write or format in-product content for the component</td>
          </tr>
          <tr>
              <td><input type="checkbox" data-status-category="content" class="checklistItem"><strong>Internationalization guidelines</strong><br>Works properly across various locales and includes guidelines for bi-directionality (RTL)</td>
          </tr>
          <tr>
              <td><input type="checkbox" data-status-category="content" class="checklistItem"><strong>Accessiblity Content</strong><br>Accessibility content has been addressed (WCAG 1.1.1)</td>
          </tr>
      </tbody>
  </table>

  <table id="checklist-tokens">
      <thead>
          <tr>
              <th>Tokens</th>
          </tr>
      </thead>
      <tbody>
          <tr>
              <td>
                <input type="checkbox" data-status-category="tokens" class="checklistItem" data-status-category="tokens" ><strong>Design tokens</strong><br>All Choices, all Decisions, thus all design attributes (color, typography, layout, animation, etc.) are available as design tokens for all plateforms
              </td>
          </tr>
          <tr>
              <td>
                <input type="checkbox" data-status-category="tokens" class="checklistItem"><strong>Tokens Reversibility</strong><br>The Artifact(s) UID has been injected inside all associated tokens (Choices)
              </td>
          </tr>
      </tbody>
  </table>

  <table id="checklist-implementation">
  <thead>
      <tr>
          <th>Implementation</th>
      </tr>
  </thead>
  <tbody>
      <tr>
          <td><input type="checkbox" data-status-category="implementation" class="checklistItem"><strong>Figma</strong><br>All Tokens have been injected inside Figma components and tested</td>
      </tr>
      <tr>
          <td><input type="checkbox" data-status-category="implementation" class="checklistItem"><strong>Pasta Release Version</strong><br><code>{{ page.project_id }}</code> <code>0.1.0</code></td>
      </tr>
      <tr>
          <td><input type="checkbox" data-status-category="implementation" class="checklistItem"><strong>iOS</strong><br>Component(s) have been implemented inside iOS component library</td>
      </tr>
      <tr>
          <td><input type="checkbox" data-status-category="implementation" class="checklistItem"><strong>Android</strong><br>Component(s) have been implemented inside iOS component library</td>
      </tr>
      <tr>
          <td><input type="checkbox" data-status-category="implementation" class="checklistItem"><strong>Web</strong><br>Component(s) have been implemented inside Web component library</td>
      </tr>
      <tr>
          <td><input type="checkbox" data-status-category="implementation" class="checklistItem"><strong>Analytics Log Snippets</strong><br>The analytics log snippets have been implemented</td>
      </tr>
  </tbody>
  </table>

</section>
