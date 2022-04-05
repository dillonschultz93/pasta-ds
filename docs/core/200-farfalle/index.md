---
project_name: Farfalle # title case
project_id: FFL # 3-letter code 
project_version: 0.1.0 # semantic versioning
title: Farfalle # title case
permalink: farfalle # lowercase + use hyphens › https://tinyurl.com/27kmc4rb
has_children: true
layout: default
nav_order: 90
---

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

<!-- Library/Vendor scripts -->
<script defer src="{{ site.baseurl }}/assets/js/libs/chroma.min.js"></script>
<script defer src="{{ site.baseurl }}/assets/js/libs/name-that-color.js"></script>
<script type="text/javascript" src="{{site.baseurl}}/assets/js/libs/chartist.min.js"></script>
<script type="text/javascript" src="{{site.baseurl}}/assets/js/libs/chartist-plugin-legend.min.js"></script>
<script type="text/javascript" src="{{site.baseurl}}/assets/js/libs/chartist-plugin-axistitle.min.js"></script>
<script type="text/javascript" src="{{site.baseurl}}/assets/js/libs/chartist-plugin-zoom.min.js"></script>
<link rel="stylesheet" href="{{site.baseurl}}/assets/css/chartist.css">

<!-- Utility scripts -->
<script defer src="{{ site.baseurl }}/assets/js/utilities/pasta-token-generation.js"></script>

<!-- Inject Pasta Apparatus ad hoc script ↓ -->
<script defer src="{{ site.baseurl }}/assets/js/apparatuses/index.js"></script>
<script defer src="{{ site.baseurl }}/assets/js/apparatuses/page-script.js"></script>

# Farfalle `{{ page.project_id }} {{ page.project_version }}`

Yummly's elder project. Mainly the Mobile stuff.

{% include copy-all-tokens-section.html %}
