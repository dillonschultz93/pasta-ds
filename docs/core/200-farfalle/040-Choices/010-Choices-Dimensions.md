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
        "figma": {
          "type": "other"
        },
        "kingdom": "TKUI_C",
        "category": "breakpoints",
        "apparatusTags": ["breakpoints"],
        "UIDs": {}
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
        "figma": {
          "type": "other"
        },
        "kingdom": "TKUI_C",
        "category": "factors",
        "apparatusTags": ["factors"],
        "UIDs": {}
      },
      "scale": {
        "value": {
          "base": 2,
          "ratio": 2,
          "baseIndex": 400,
          "scaleStems": ["geoA" , "arithA", "arithB"]
        },
        "description": "",
        "figma": {
          "type": "other"
        },
        "kingdom": "TKUI_M",
        "category": "scales",
        "apparatusTags": ["scales"],
        "UIDs": {}
      },
      "spaces": {
        "options": {
          "none": {
            "value": 0
          },
          "xs": {
            "value": "{YPL.FFL.TKUI_M.scales.arithA.200.value}"
          },
          "s": {
            "value": "{YPL.FFL.TKUI_M.scales.arithA.400.value}"
          },
          "sm": {
            "value": "{YPL.FFL.TKUI_M.scales.arithA.600.value}"
          },
          "m": {
            "value": "{YPL.FFL.TKUI_M.scales.arithA.800.value}"
          },
          "ml": {
            "value": "{YPL.FFL.TKUI_M.scales.arithA.1000.value}"
          },
          "l": {
            "value": "{YPL.FFL.TKUI_M.scales.arithA.1200.value}"
          },
          "xl": {
            "value": "{YPL.FFL.TKUI_M.scales.arithA.1600.value}"
          },
          "xxl": {
            "value": "{YPL.FFL.TKUI_M.scales.arithA.1800.value}"
          }
        },
        "description": "",
        "figma": {
          "type": "spacing"
        },
        "kingdom": "TKUI_C",
        "category": "spaces",
        "apparatusTags": ["spaces"],
        "UIDs": {}
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
              "value": "{YPL.FFL.TKUI_M.scales.arithA.100.value}"
            },
            "200": {
              "value": "{YPL.FFL.TKUI_M.scales.arithA.200.value}"
            },
            "300": {
              "value": "{YPL.FFL.TKUI_M.scales.arithA.300.value}"
            },
            "400": {
              "value": "{YPL.FFL.TKUI_M.scales.arithA.400.value}"
            },
            "500": {
              "value": "{YPL.FFL.TKUI_M.scales.arithA.500.value}"
            },
            "600": {
              "value": "{YPL.FFL.TKUI_M.scales.arithA.600.value}"
            },
            "700": {
              "value": "{YPL.FFL.TKUI_M.scales.arithA.700.value}"
            },
            "800": {
              "value": "{YPL.FFL.TKUI_M.scales.arithA.800.value}"
            },
            "900": {
              "value": "{YPL.FFL.TKUI_M.scales.arithA.900.value}"
            },
            "1000": {
              "value": "{YPL.FFL.TKUI_M.scales.arithA.1000.value}"
            },
            "1100": {
              "value": "{YPL.FFL.TKUI_M.scales.arithA.1100.value}"
            },
            "1200": {
              "value": "{YPL.FFL.TKUI_M.scales.arithA.1200.value}"
            },
            "1300": {
              "value": "{YPL.FFL.TKUI_M.scales.arithA.1300.value}"
            },
            "1400": {
              "value": "{YPL.FFL.TKUI_M.scales.arithA.1400.value}"
            },
            "1500": {
              "value": "{YPL.FFL.TKUI_M.scales.arithA.1500.value}"
            },
            "1600": {
              "value": "{YPL.FFL.TKUI_M.scales.arithA.1600.value}"
            }
          },
          "macro": {
            "100": {
              "value": "{YPL.FFL.TKUI_M.scales.arithB.100.value}"
            },
            "200": {
              "value": "{YPL.FFL.TKUI_M.scales.arithB.200.value}"
            },
            "300": {
              "value": "{YPL.FFL.TKUI_M.scales.arithB.300.value}"
            },
            "400": {
              "value": "{YPL.FFL.TKUI_M.scales.arithB.700.value}"
            },
            "500": {
              "value": "{YPL.FFL.TKUI_M.scales.arithB.1200.value}"
            },
            "600": {
              "value": "{YPL.FFL.TKUI_M.scales.arithB.1500.value}"
            },
            "700": {
              "value": "{YPL.FFL.TKUI_M.scales.arithB.2600.value}"
            },
            "800": {
              "value": "{YPL.FFL.TKUI_M.scales.arithB.2800.value}"
            },
            "900": {
              "value": "{YPL.FFL.TKUI_M.scales.arithB.3100.value}"
            },
            "1000": {
              "value": "{YPL.FFL.TKUI_M.scales.arithB.4700.value}"
            },
            "1100": {
              "value": "{YPL.FFL.TKUI_M.scales.arithB.6300.value}"
            }
          }
        },
        "description": "",
        "figma": {
          "type": "sizing"
        },
        "kingdom": "TKUI_C",
        "category": "sizes",
        "apparatusTags": ["staticSizes"],
        "UIDs": {}
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
      "figma": {
        "type": "other"
      },
      "apparatusTags": ["scales"],
      "UIDs": {}
    },
    "YPL.FFL.TKUI_C.sizes.micro.1700": {
      "value": "{YPL.FFL.TKUI_M.scales.arithA.2000.value}",
      "description": "",
      "figma": {
        "type": "sizing"
      },
      "apparatusTags": ["sizes"],
      "UIDs": {}
    },
    "YPL.FFL.TKUI_C.percents.s": {
      "value": 0.33,
      "description": "",
      "figma": {
        "type": "sizing"
      },
      "apparatusTags": ["percents"],
      "UIDs": {}
    },
    "YPL.FFL.TKUI_C.percents.m": {
      "value": 0.50,
      "description": "",
      "figma": {
        "type": "sizing"
      },
      "apparatusTags": ["percents"],
      "UIDs": {}
    },
    "YPL.FFL.TKUI_C.percents.ml": {
      "value": 0.66,
      "description": "",
      "figma": {
        "type": "sizing"
      },
      "apparatusTags": ["percents"],
      "UIDs": {}
    },
    "YPL.FFL.TKUI_C.percents.l": {
      "value": 0.75,
      "description": "",
      "figma": {
        "type": "sizing"
      },
      "apparatusTags": ["percents"],
      "UIDs": {}
    },
    "YPL.FFL.TKUI_C.percents.xl": {
      "value": 0.85,
      "description": "",
      "figma": {
        "type": "sizing"
      },
      "apparatusTags": ["percents"],
      "UIDs": {}
    },
    "YPL.FFL.TKUI_C.percents.full": {
      "value": 1,
      "description": "",
      "figma": {
        "type": "sizing"
      },
      "apparatusTags": ["percents"],
      "UIDs": {}
    },
    "YPL.TEST.textSizeFactor": {
      "value": 1,
      "description": "Inject this factor into Typography Sizes Choices. It's used to blow font sizes up to test compliancy with WCAG 1.4.4 · Remove it once in β release",
      "type":{
        "figma":  "test"
      }
    },
    "YPL.FFL.TKUI_C.colors.white": {
      "value": "#ffffff",
      "description": "",
      "figma": {
        "type": "color"
      },
      "apparatusTags": ["colors"],
      "UIDs": {}
    },
    "YPL.FFL.TKUI_C.colors.black": {
      "value": "#000000",
      "description": "",
      "figma": {
        "type": "color"
      },
      "apparatusTags": ["colors"],
      "UIDs": {}
    },
    "YPL.FFL.TKUI_C.colors.grey.100": {
      "value": "#f5f5f5",
      "description": "",
      "figma": {
        "type": "color"
      },
      "apparatusTags": ["colors"],
      "UIDs": {}
    },
    "YPL.FFL.TKUI_C.colors.grey.200": {
      "value": "#E3E3E3",
      "description": "",
      "figma": {
        "type": "color"
      },
      "apparatusTags": ["colors"],
      "UIDs": {}
    },
    "YPL.FFL.TKUI_C.colors.grey.300": {
      "value": "#BABABA",
      "description": "",
      "figma": {
        "type": "color"
      },
      "apparatusTags": ["colors"],
      "UIDs": {}
    },
    "YPL.FFL.TKUI_C.colors.grey.500": {
      "value": "#707070",
      "description": "",
      "figma": {
        "type": "color"
      },
      "apparatusTags": ["colors"],
      "UIDs": {}
    },
    "YPL.FFL.TKUI_C.colors.grey.700": {
      "value": "#4A4A4A",
      "description": "",
      "figma": {
        "type": "color"
      },
      "apparatusTags": ["colors"],
      "UIDs": {}
    },
    "YPL.FFL.TKUI_C.colors.grey.900": {
      "value": "#242424",
      "description": "",
      "figma": {
        "type": "color"
      },
      "apparatusTags": ["colors"],
      "UIDs": {}
    },
    "YPL.FFL.TKUI_C.colors.teal.300": {
      "value": "#4BB9B3",
      "description": "",
      "figma": {
        "type": "color"
      },
      "apparatusTags": ["colors"],
      "UIDs": {}
    },
    "YPL.FFL.TKUI_C.colors.teal.400": {
      "value": "#3A9691",
      "description": "",
      "figma": {
        "type": "color"
      },
      "apparatusTags": ["colors"],
      "UIDs": {}
    },
    "YPL.FFL.TKUI_C.colors.teal.500": {
      "value": "#2C726E",
      "description": "",
      "figma": {
        "type": "color"
      },
      "apparatusTags": ["colors"],
      "UIDs": {}
    },
    "YPL.FFL.TKUI_C.colors.orange.300": {
      "value": "#E77F4B",
      "description": "",
      "figma": {
        "type": "color"
      },
      "apparatusTags": ["colors"],
      "UIDs": {}
    },
    "YPL.FFL.TKUI_C.colors.orange.400": {
      "value": "#E05F1F",
      "description": "",
      "figma": {
        "type": "color"
      },
      "apparatusTags": ["colors"],
      "UIDs": {}
    },
    "YPL.FFL.TKUI_C.colors.orange.500": {
      "value": "#B44B18",
      "description": "",
      "figma": {
        "type": "color"
      },
      "apparatusTags": ["colors"],
      "UIDs": {}
    },
    "YPL.FFL.TKUI_C.gradients.overlay.black.BL_TR": {
      "value": "linear-gradient(64deg, {YPL.FFL.TKUI_C.colors.black.value} 0%, {YPL.FFL.TKUI_C.colors.black.value} 100%)",
      "description": "",
      "figma": {
        "type": "color"
      },
      "apparatusTags": ["gradients"],
      "UIDs": {}
    },
    "YPL.FFL.TKUI_C.gradients.overlay.black.TL_BR": {
      "value": "linear-gradient(116deg, {YPL.FFL.TKUI_C.colors.black.value} 0%, {YPL.FFL.TKUI_C.colors.black.value} 100%)",
      "description": "",
      "figma": {
        "type": "color"
      },
      "apparatusTags": ["gradients"],
      "UIDs": {}
    },
    "YPL.FFL.TKUI_C.typo.europa.familyName.light": {
      "value": "Europa-Light",
      "description": "",
      "figma": {
        "type": "fontFamilies"
      },
      "apparatusTags": ["typo"],
      "UIDs": {}
    },
    "YPL.FFL.TKUI_C.typo.europa.familyName.regular": {
      "value": "Europa-Regular",
      "description": "",
      "figma": {
        "type": "fontFamilies"
      },
      "apparatusTags": ["typo"],
      "UIDs": {}
    },
    "YPL.FFL.TKUI_C.typo.europa.familyName.bold": {
      "value": "Europa-Bold",
      "description": "",
      "figma": {
        "type": "fontFamilies"
      },
      "apparatusTags": ["typo"],
      "UIDs": {}
    },
    "YPL.FFL.TKUI_C.typo.europa.leadingRatio.s": {
      "value": 1.2,
      "description": "",
      "figma": {
        "type": "lineHeights"
      },
      "apparatusTags": ["typo"],
      "UIDs": {}
    },
    "YPL.FFL.TKUI_C.typo.europa.leadingRatio.m": {
      "value": 1.4,
      "description": "",
      "figma": {
        "type": "lineHeights"
      },
      "apparatusTags": ["typo"],
      "UIDs": {}
    },
    "YPL.FFL.TKUI_C.typo.europa.leadingRatio.l": {
      "value": 1.5,
      "description": "",
      "figma": {
        "type": "lineHeights"
      },
      "apparatusTags": ["typo"],
      "UIDs": {}
    },
    "YPL.FFL.TKUI_M.typo.europa.eyebrow.regular.size": {
      "value": "{YPL.FFL.TKUI_C.sizes.micro.600.value} * {YPL.TEST.textSizeFactor.value}",
      "description": "",
      "figma": {
        "type": "fontSizes"
      },
      "apparatusTags": ["typo"],
      "UIDs": {}
    },
    "YPL.FFL.TKUI_M.typo.europa.eyebrow.small.size": {
      "value": "{YPL.FFL.TKUI_C.sizes.micro.500.value} * {YPL.TEST.textSizeFactor.value}",
      "description": "",
      "figma": {
        "type": "fontSizes"
      },
      "apparatusTags": ["typo"],
      "UIDs": {}
    },
    "YPL.FFL.TKUI_M.typo.europa.caption.regular.size": {
      "value": "{YPL.FFL.TKUI_C.sizes.micro.600.value} * {YPL.TEST.textSizeFactor.value}",
      "description": "",
      "figma": {
        "type": "fontSizes"
      },
      "apparatusTags": ["typo"],
      "UIDs": {}
    },
    "YPL.FFL.TKUI_M.typo.europa.caption.strong.size": {
      "value": "{YPL.FFL.TKUI_C.sizes.micro.600.value} * {YPL.TEST.textSizeFactor.value}",
      "description": "",
      "figma": {
        "type": "fontSizes"
      },
      "apparatusTags": ["typo"],
      "UIDs": {}
    },
    "YPL.FFL.TKUI_M.typo.europa.ps.regular.size": {
      "value": "{YPL.FFL.TKUI_C.sizes.micro.700.value} * {YPL.TEST.textSizeFactor.value}",
      "description": "",
      "figma": {
        "type": "fontSizes"
      },
      "apparatusTags": ["typo"],
      "UIDs": {}
    },
    "YPL.FFL.TKUI_M.typo.europa.ps.strong.size": {
      "value": "{YPL.FFL.TKUI_C.sizes.micro.700.value} * {YPL.TEST.textSizeFactor.value}",
      "description": "",
      "figma": {
        "type": "fontSizes"
      },
      "apparatusTags": ["typo"],
      "UIDs": {}
    },
    "YPL.FFL.TKUI_M.typo.europa.p.regular.size": {
      "value": "{YPL.FFL.TKUI_C.sizes.micro.800.value} * {YPL.TEST.textSizeFactor.value}",
      "description": "",
      "figma": {
        "type": "fontSizes"
      },
      "apparatusTags": ["typo"],
      "UIDs": {}
    },
    "YPL.FFL.TKUI_M.typo.europa.p.strong.size": {
      "value": "{YPL.FFL.TKUI_C.sizes.micro.800.value} * {YPL.TEST.textSizeFactor.value}",
      "description": "",
      "figma": {
        "type": "fontSizes"
      },
      "apparatusTags": ["typo"],
      "UIDs": {}
    },
    "YPL.FFL.TKUI_M.typo.europa.h8.size": {
      "value": "{YPL.FFL.TKUI_C.sizes.micro.700.value} * {YPL.TEST.textSizeFactor.value}",
      "description": "",
      "figma": {
        "type": "fontSizes"
      }, 
      "apparatusTags": ["typo"],
      "UIDs": {}
    },
    "YPL.FFL.TKUI_M.typo.europa.h7.size": {
      "value": "{YPL.FFL.TKUI_C.sizes.micro.900.value} * {YPL.TEST.textSizeFactor.value}",
      "description": "",
      "figma": {
        "type": "fontSizes"
      }, 
      "apparatusTags": ["typo"],
      "UIDs": {}
    },
    "YPL.FFL.TKUI_M.typo.europa.h6.size": {
      "value": "{YPL.FFL.TKUI_C.sizes.micro.1000.value} * {YPL.TEST.textSizeFactor.value}",
      "description": "",
      "figma": {
        "type": "fontSizes"
      }, 
      "apparatusTags": ["typo"],
      "UIDs": {}
    },
    "YPL.FFL.TKUI_M.typo.europa.h5.size": {
      "value": "{YPL.FFL.TKUI_C.sizes.micro.1200.value} * {YPL.TEST.textSizeFactor.value}",
      "description": "",
      "figma": {
        "type": "fontSizes"
      }, 
      "apparatusTags": ["typo"],
      "UIDs": {}
    },
    "YPL.FFL.TKUI_M.typo.europa.h4.size": {
      "value": "{YPL.FFL.TKUI_C.sizes.micro.1400.value} * {YPL.TEST.textSizeFactor.value}",
      "description": "",
      "figma": {
        "type": "fontSizes"
      }, 
      "apparatusTags": ["typo"],
      "UIDs": {}
    },
    "YPL.FFL.TKUI_M.typo.europa.h3.size": {
      "value": "{YPL.FFL.TKUI_C.sizes.micro.1600.value} * {YPL.TEST.textSizeFactor.value}",
      "description": "",
      "figma": {
        "type": "fontSizes"
      }, 
      "apparatusTags": ["typo"],
      "UIDs": {}
    },
    "YPL.FFL.TKUI_M.typo.europa.h2.size": {
      "value": "{YPL.FFL.TKUI_C.sizes.micro.1700.value} * {YPL.TEST.textSizeFactor.value}",
      "description": "",
      "figma": {
        "type": "fontSizes"
      }, 
      "apparatusTags": ["typo"],
      "UIDs": {}
    },
    "YPL.FFL.TKUI_M.typo.europa.h1.size": {
      "value": "{YPL.FFL.TKUI_C.sizes.macro.200.value} * {YPL.TEST.textSizeFactor.value}",
      "description": "",
      "figma": {
        "type": "fontSizes"
      },
      "apparatusTags": ["typo"],
      "UIDs": {}
    },
    "YPL.FFL.TKUI_M.typo.europa.eyebrow.regular.leading": {
      "value": 18,
      "description": "FIXME",
      "figma": {
        "type": "lineHeights"
      },
      "apparatusTags": ["typo"],
      "UIDs": {}
    },
    "YPL.FFL.TKUI_M.typo.europa.eyebrow.small.leading": {
      "value": 14,
      "description": "FIXME",
      "figma": {
        "type": "lineHeights"
      },
      "apparatusTags": ["typo"],
      "UIDs": {}
    },
    "YPL.FFL.TKUI_M.typo.europa.caption.regular.leading": {
      "value": 18,
      "description": "FIXME",
      "figma": {
        "type": "lineHeights"
      },
      "apparatusTags": ["typo"],
      "UIDs": {}
    },
    "YPL.FFL.TKUI_M.typo.europa.caption.strong.leading": {
      "value": 18,
      "description": "FIXME",
      "figma": {
        "type": "lineHeights"
      },
      "apparatusTags": ["typo"],
      "UIDs": {}
    },
    "YPL.FFL.TKUI_M.typo.europa.ps.regular.leading": {
      "value": "{YPL.FFL.TKUI_C.sizes.micro.700.value} * {YPL.FFL.TKUI_C.typo.europa.leadingRatio.s.value}",
      "description": "",
      "figma": {
        "type": "lineHeights"
      },
      "apparatusTags": ["typo"],
      "UIDs": {}
    },
    "YPL.FFL.TKUI_M.typo.europa.ps.strong.leading": {
      "value": "{YPL.FFL.TKUI_C.sizes.micro.700.value} * {YPL.FFL.TKUI_C.typo.europa.leadingRatio.s.value}",
      "description": "",
      "figma": {
        "type": "lineHeights"
      },
      "apparatusTags": ["typo"],
      "UIDs": {}
    },
    "YPL.FFL.TKUI_M.typo.europa.p.regular.leading": {
      "value": "{YPL.FFL.TKUI_C.sizes.micro.800.value} * {YPL.FFL.TKUI_C.typo.europa.leadingRatio.s.value}",
      "description": "",
      "figma": {
        "type": "lineHeights"
      },
      "apparatusTags": ["typo"],
      "UIDs": {}
    },
    "YPL.FFL.TKUI_M.typo.europa.p.strong.leading": {
      "value": "{YPL.FFL.TKUI_C.sizes.micro.800.value} * {YPL.FFL.TKUI_C.typo.europa.leadingRatio.s.value}",
      "description": "",
      "figma": {
        "type": "lineHeights"
      },
      "apparatusTags": ["typo"],
      "UIDs": {}
    },
    "YPL.FFL.TKUI_M.typo.europa.h8.leading": {
      "value": "{YPL.FFL.TKUI_C.sizes.micro.700.value} * {YPL.FFL.TKUI_C.typo.europa.leadingRatio.s.value}",
      "description": "",
      "figma": {
        "type": "lineHeights"
      }, 
      "apparatusTags": ["typo"],
      "UIDs": {}
    },
    "YPL.FFL.TKUI_M.typo.europa.h7.leading": {
      "value": "{YPL.FFL.TKUI_C.sizes.micro.900.value} * {YPL.FFL.TKUI_C.typo.europa.leadingRatio.s.value}",
      "description": "",
      "figma": {
        "type": "lineHeights"
      }, 
      "apparatusTags": ["typo"],
      "UIDs": {}
    },
    "YPL.FFL.TKUI_M.typo.europa.h6.leading": {
      "value": "{YPL.FFL.TKUI_C.sizes.micro.1000.value} * {YPL.FFL.TKUI_C.typo.europa.leadingRatio.s.value}",
      "description": "",
      "figma": {
        "type": "lineHeights"
      }, 
      "apparatusTags": ["typo"],
      "UIDs": {}
    },
    "YPL.FFL.TKUI_M.typo.europa.h5.leading": {
      "value": "{YPL.FFL.TKUI_C.sizes.micro.1200.value} * {YPL.FFL.TKUI_C.typo.europa.leadingRatio.s.value}",
      "description": "",
      "figma": {
        "type": "lineHeights"
      }, 
      "apparatusTags": ["typo"],
      "UIDs": {}
    },
    "YPL.FFL.TKUI_M.typo.europa.h4.leading": {
      "value": "{YPL.FFL.TKUI_C.sizes.micro.1400.value} * {YPL.FFL.TKUI_C.typo.europa.leadingRatio.s.value}",
      "description": "",
      "figma": {
        "type": "lineHeights"
      }, 
      "apparatusTags": ["typo"],
      "UIDs": {}
    },
    "YPL.FFL.TKUI_M.typo.europa.h3.leading": {
      "value": "{YPL.FFL.TKUI_C.sizes.micro.1600.value} * {YPL.FFL.TKUI_C.typo.europa.leadingRatio.s.value}",
      "description": "",
      "figma": {
        "type": "lineHeights"
      }, 
      "apparatusTags": ["typo"],
      "UIDs": {}
    },
    "YPL.FFL.TKUI_M.typo.europa.h2.leading": {
      "value": 41.6,
      "description": "FIXME",
      "figma": {
        "type": "lineHeights"
      }, 
      "apparatusTags": ["typo"],
      "UIDs": {}
    },
    "YPL.FFL.TKUI_M.typo.europa.h1.leading": {
      "value": 50.4,
      "description": "FIXME",
      "figma": {
        "type": "lineHeights"
      },
      "apparatusTags": ["typo"],
      "UIDs": {}
    },
    "YPL.FFL.TKUI_M.typo.europa.eyebrow.regular.paragraphSpacing": {
      "value": 0,
      "description": "FIXME",
      "figma": {
        "type": "paragraphSpacing"
      },
      "apparatusTags": ["typo"],
      "UIDs": {}
    },
    "YPL.FFL.TKUI_M.typo.europa.eyebrow.small.paragraphSpacing": {
      "value": 0,
      "description": "FIXME",
      "figma": {
        "type": "paragraphSpacing"
      },
      "apparatusTags": ["typo"],
      "UIDs": {}
    },
    "YPL.FFL.TKUI_M.typo.europa.caption.regular.paragraphSpacing": {
      "value": 0,
      "description": "FIXME",
      "figma": {
        "type": "paragraphSpacing"
      },
      "apparatusTags": ["typo"],
      "UIDs": {}
    },
    "YPL.FFL.TKUI_M.typo.europa.caption.strong.paragraphSpacing": {
      "value": 0,
      "description": "FIXME",
      "figma": {
        "type": "paragraphSpacing"
      },
      "apparatusTags": ["typo"],
      "UIDs": {}
    },
    "YPL.FFL.TKUI_M.typo.europa.ps.regular.paragraphSpacing": {
      "value": 7.56,
      "description": "FIXME",
      "figma": {
        "type": "paragraphSpacing"
      },
      "apparatusTags": ["typo"],
      "UIDs": {}
    },
    "YPL.FFL.TKUI_M.typo.europa.ps.strong.paragraphSpacing": {
      "value": 7.56,
      "description": "FIXME",
      "figma": {
        "type": "paragraphSpacing"
      },
      "apparatusTags": ["typo"],
      "UIDs": {}
    },
    "YPL.FFL.TKUI_M.typo.europa.p.regular.paragraphSpacing": {
      "value": 8.64,
      "description": "FIXME",
      "figma": {
        "type": "paragraphSpacing"
      },
      "apparatusTags": ["typo"],
      "UIDs": {}
    },
    "YPL.FFL.TKUI_M.typo.europa.p.strong.paragraphSpacing": {
      "value": 8.64,
      "description": "FIXME",
      "figma": {
        "type": "paragraphSpacing"
      },
      "apparatusTags": ["typo"],
      "UIDs": {}
    },
    "YPL.FFL.TKUI_M.typo.europa.h8.paragraphSpacing": {
      "value": 7.56,
      "description": "FIXME",
      "figma": {
        "type": "paragraphSpacing"
      }, 
      "apparatusTags": ["typo"],
      "UIDs": {}
    },
    "YPL.FFL.TKUI_M.typo.europa.h7.paragraphSpacing": {
      "value": 9.72,
      "description": "FIXME",
      "figma": {
        "type": "paragraphSpacing"
      }, 
      "apparatusTags": ["typo"],
      "UIDs": {}
    },
    "YPL.FFL.TKUI_M.typo.europa.h6.paragraphSpacing": {
      "value": 10.8,
      "description": "FIXME",
      "figma": {
        "type": "paragraphSpacing"
      }, 
      "apparatusTags": ["typo"],
      "UIDs": {}
    },
    "YPL.FFL.TKUI_M.typo.europa.h5.paragraphSpacing": {
      "value": 12.96,
      "description": "FIXME",
      "figma": {
        "type": "paragraphSpacing"
      }, 
      "apparatusTags": ["typo"],
      "UIDs": {}
    },
    "YPL.FFL.TKUI_M.typo.europa.h4.paragraphSpacing": {
      "value": 15.12,
      "description": "FIXME",
      "figma": {
        "type": "paragraphSpacing"
      }, 
      "apparatusTags": ["typo"],
      "UIDs": {}
    },
    "YPL.FFL.TKUI_M.typo.europa.h3.paragraphSpacing": {
      "value": 17.28,
      "description": "FIXME",
      "figma": {
        "type": "paragraphSpacing"
      }, 
      "apparatusTags": ["typo"],
      "UIDs": {}
    },
    "YPL.FFL.TKUI_M.typo.europa.h2.paragraphSpacing": {
      "value": 23.12,
      "description": "FIXME",
      "figma": {
        "type": "paragraphSpacing"
      }, 
      "apparatusTags": ["typo"],
      "UIDs": {}
    },
    "YPL.FFL.TKUI_M.typo.europa.h1.paragraphSpacing": {
      "value": 22.68,
      "description": "FIXME",
      "figma": {
        "type": "paragraphSpacing"
      },
      "apparatusTags": ["typo"],
      "UIDs": {}
    },
    "YPL.FFL.TKUI_M.typo.europa.eyebrow.regular.tracking": {
      "value": "10%",
      "description": "FIXME",
      "figma": {
        "type": "letterSpacing"
      },
      "apparatusTags": ["typo"],
      "UIDs": {}
    },
    "YPL.FFL.TKUI_M.typo.europa.eyebrow.small.tracking": {
      "value": "10%",
      "description": "FIXME",
      "figma": {
        "type": "letterSpacing"
      },
      "apparatusTags": ["typo"],
      "UIDs": {}
    },
    "YPL.FFL.TKUI_M.typo.europa.caption.regular.tracking": {
      "value": "-2%",
      "description": "FIXME",
      "figma": {
        "type": "letterSpacing"
      },
      "apparatusTags": ["typo"],
      "UIDs": {}
    },
    "YPL.FFL.TKUI_M.typo.europa.caption.strong.tracking": {
      "value": "-2%",
      "description": "FIXME",
      "figma": {
        "type": "letterSpacing"
      },
      "apparatusTags": ["typo"],
      "UIDs": {}
    },
    "YPL.FFL.TKUI_M.typo.europa.ps.regular.tracking": {
      "value": "-2%",
      "description": "FIXME",
      "figma": {
        "type": "letterSpacing"
      },
      "apparatusTags": ["typo"],
      "UIDs": {}
    },
    "YPL.FFL.TKUI_M.typo.europa.ps.strong.tracking": {
      "value": "-2%",
      "description": "FIXME",
      "figma": {
        "type": "letterSpacing"
      },
      "apparatusTags": ["typo"],
      "UIDs": {}
    },
    "YPL.FFL.TKUI_M.typo.europa.p.regular.tracking": {
      "value": "-2%",
      "description": "FIXME",
      "figma": {
        "type": "letterSpacing"
      },
      "apparatusTags": ["typo"],
      "UIDs": {}
    },
    "YPL.FFL.TKUI_M.typo.europa.p.strong.tracking": {
      "value": "-2%",
      "description": "FIXME",
      "figma": {
        "type": "letterSpacing"
      },
      "apparatusTags": ["typo"],
      "UIDs": {}
    },
    "YPL.FFL.TKUI_M.typo.europa.h8.tracking": {
      "value": "3.5%",
      "description": "FIXME",
      "figma": {
        "type": "letterSpacing"
      }, 
      "apparatusTags": ["typo"],
      "UIDs": {}
    },
    "YPL.FFL.TKUI_M.typo.europa.h7.tracking": {
      "value": "0%",
      "description": "FIXME",
      "figma": {
        "type": "letterSpacing"
      }, 
      "apparatusTags": ["typo"],
      "UIDs": {}
    },
    "YPL.FFL.TKUI_M.typo.europa.h6.tracking": {
      "value": "0%",
      "description": "FIXME",
      "figma": {
        "type": "letterSpacing"
      }, 
      "apparatusTags": ["typo"],
      "UIDs": {}
    },
    "YPL.FFL.TKUI_M.typo.europa.h5.tracking": {
      "value": "-1%",
      "description": "FIXME",
      "figma": {
        "type": "letterSpacing"
      }, 
      "apparatusTags": ["typo"],
      "UIDs": {}
    },
    "YPL.FFL.TKUI_M.typo.europa.h4.tracking": {
      "value": "-1%",
      "description": "FIXME",
      "figma": {
        "type": "letterSpacing"
      }, 
      "apparatusTags": ["typo"],
      "UIDs": {}
    },
    "YPL.FFL.TKUI_M.typo.europa.h3.tracking": {
      "value": "-2%",
      "description": "FIXME",
      "figma": {
        "type": "letterSpacing"
      }, 
      "apparatusTags": ["typo"],
      "UIDs": {}
    },
    "YPL.FFL.TKUI_M.typo.europa.h2.tracking": {
      "value": "-2%",
      "description": "FIXME",
      "figma": {
        "type": "letterSpacing"
      }, 
      "apparatusTags": ["typo"],
      "UIDs": {}
    },
    "YPL.FFL.TKUI_M.typo.europa.h1.tracking": {
      "value": "-2%",
      "description": "FIXME",
      "figma": {
        "type": "letterSpacing"
      },
      "apparatusTags": ["typo"],
      "UIDs": {}
    },
    "YPL.FFL.TKUI_D.F0002-401.HMN_typo_europa-eyebrow.familyName": {
      "value": "{YPL.FFL.TKUI_C.typo.europa.familyName.regular.value}",
      "description": "",
      "figma": {
        "type": "fontFamilies"
      },
      "apparatusTags": ["typo"],
      "UIDs": {}
    },
    "YPL.FFL.TKUI_D.F0002-401.HMN_typo_europa-eyebrow.size": {
      "value": "{YPL.FFL.TKUI_M.typo.europa.eyebrow.regular.size.value}",
      "description": "",
      "figma": {
        "type": "fontSizes"
      },
      "apparatusTags": ["typo"],
      "UIDs": {}
    },
    "YPL.FFL.TKUI_D.F0002-401.HMN_typo_europa-eyebrow.leading": {
      "value": "{YPL.FFL.TKUI_M.typo.europa.eyebrow.regular.leading.value}",
      "description": "",
      "figma": {
        "type": "lineHeights"
      },
      "apparatusTags": ["typo"],
      "UIDs": {}
    },
    "YPL.FFL.TKUI_D.F0002-401.HMN_typo_europa-eyebrow.paragraphSpacing": {
      "value": "{YPL.FFl.TKUI_M.typo.europa.eyebrow.regular.paragraphSpacing.value}",
      "description": "",
      "figma": {
        "type": "paragraphSpacing"
      },
      "apparatusTags": ["typo"],
      "UIDs": {}
    },
    "YPL.FFL.TKUI_D.F0002-401.HMN_typo_europa-eyebrow.tracking": {
      "value": "{YPL.FFL.TKUI_M.typo.europa.eyebrow.regular.tracking.value}",
      "description": "",
      "figma": {
        "type": "letterSpacing"
      },
      "apparatusTags": ["typo"],
      "UIDs": {}
    },
    "YPL.FFL.TKUI_D.F0002-401.HMN_typo_europa-eyebrow.textAlignHorizontal": {
      "value": "LEFT",
      "description": "",
      "figma": {
        "type": "other"
      },
      "apparatusTags": ["typo"],
      "UIDs": {}
    },
    "YPL.FFL.TKUI_D.F0002-401.HMN_typo_europa-eyebrow.textCase": {
      "value": "ORIGINAL",
      "description": "",
      "figma": {
        "type": "other"
      },
      "apparatusTags": ["typo"],
      "UIDs": {}
    },
    "YPL.FFL.TKUI_D.F0002-401.HMN_typo_europa-eyebrow.textDecoration": {
      "value": "NONE",
      "description": "",
      "figma": {
        "type": "other"
      },
      "apparatusTags": ["typo"],
      "UIDs": {}
    },
    "YPL.FFL.TKUI_D.F0002-401.HMN_typo_europa-eyebrow.color": {
      "value": "{YPL.FFL.TKUI_C.colors.black.value}",
      "description": "",
      "figma": {
        "type": "other"
      },
      "apparatusTags": ["typo"],
      "UIDs": {}
    },
    "YPL.FFL.TKUI_D.F0002-402.HMN_typo_europa-eyebrow_small.familyName": {
      "value": "{YPL.FFL.TKUI_C.typo.europa.familyName.bold.value}",
      "description": "",
      "figma": {
        "type": "fontFamilies"
      },
      "apparatusTags": ["typo"],
      "UIDs": {}
    },
    "YPL.FFL.TKUI_D.F0002-402.HMN_typo_europa-eyebrow_small.size": {
      "value": "{YPL.FFL.TKUI_M.typo.europa.eyebrow.small.size.value}",
      "description": "",
      "figma": {
        "type": "fontSizes"
      },
      "apparatusTags": ["typo"],
      "UIDs": {}
    },
    "YPL.FFL.TKUI_D.F0002-402.HMN_typo_europa-eyebrow_small.leading": {
      "value": "{YPL.FFL.TKUI_M.typo.europa.eyebrow.small.leading.value}",
      "description": "",
      "figma": {
        "type": "lineHeights"
      },
      "apparatusTags": ["typo"],
      "UIDs": {}
    },
    "YPL.FFL.TKUI_D.F0002-402.HMN_typo_europa-eyebrow_small.paragraphSpacing": {
      "value": "{YPL.FFl.TKUI_M.typo.europa.eyebrow.small.paragraphSpacing.value}",
      "description": "",
      "figma": {
        "type": "paragraphSpacing"
      },
      "apparatusTags": ["typo"],
      "UIDs": {}
    },
    "YPL.FFL.TKUI_D.F0002-402.HMN_typo_europa-eyebrow_small.tracking": {
      "value": "{YPL.FFL.TKUI_M.typo.europa.eyebrow.small.tracking.value}",
      "description": "",
      "figma": {
        "type": "letterSpacing"
      },
      "apparatusTags": ["typo"],
      "UIDs": {}
    },
    "YPL.FFL.TKUI_D.F0002-402.HMN_typo_europa-eyebrow_small.textAlignHorizontal": {
      "value": "LEFT",
      "description": "",
      "figma": {
        "type": "other"
      },
      "apparatusTags": ["typo"],
      "UIDs": {}
    },
    "YPL.FFL.TKUI_D.F0002-402.HMN_typo_europa-eyebrow_small.textCase": {
      "value": "ORIGINAL",
      "description": "",
      "figma": {
        "type": "other"
      },
      "apparatusTags": ["typo"],
      "UIDs": {}
    },
    "YPL.FFL.TKUI_D.F0002-402.HMN_typo_europa-eyebrow_small.textDecoration": {
      "value": "NONE",
      "description": "",
      "figma": {
        "type": "other"
      },
      "apparatusTags": ["typo"],
      "UIDs": {}
    },
    "YPL.FFL.TKUI_D.F0002-402.HMN_typo_europa-eyebrow_small.color": {
      "value": "{YPL.FFL.TKUI_C.colors.black.value}",
      "description": "",
      "figma": {
        "type": "other"
      },
      "apparatusTags": ["typo"],
      "UIDs": {}
    },
    "YPL.FFL.TKUI_D.F0002-301.HMN_typo_europa-caption_regular.familyName": {
      "value": "{YPL.FFL.TKUI_C.typo.europa.familyName.regular.value}",
      "description": "",
      "figma": {
        "type": "fontFamilies"
      },
      "apparatusTags": ["typo"],
      "UIDs": {}
    },
    "YPL.FFL.TKUI_D.F0002-301.HMN_typo_europa-caption_regular.size": {
      "value": "{YPL.FFL.TKUI_M.typo.europa.caption.regular.size.value}",
      "description": "",
      "figma": {
        "type": "fontSizes"
      },
      "apparatusTags": ["typo"],
      "UIDs": {}
    },
    "YPL.FFL.TKUI_D.F0002-301.HMN_typo_europa-caption_regular.leading": {
      "value": "{YPL.FFL.TKUI_M.typo.europa.caption.regular.leading.value}",
      "description": "",
      "figma": {
        "type": "lineHeights"
      },
      "apparatusTags": ["typo"],
      "UIDs": {}
    },
    "YPL.FFL.TKUI_D.F0002-301.HMN_typo_europa-caption_regular.paragraphSpacing": {
      "value": "{YPL.FFl.TKUI_M.typo.europa.caption.regular.paragraphSpacing.value}",
      "description": "",
      "figma": {
        "type": "paragraphSpacing"
      },
      "apparatusTags": ["typo"],
      "UIDs": {}
    },
    "YPL.FFL.TKUI_D.F0002-301.HMN_typo_europa-caption_regular.tracking": {
      "value": "{YPL.FFL.TKUI_M.typo.europa.caption.regular.tracking.value}",
      "description": "",
      "figma": {
        "type": "letterSpacing"
      },
      "apparatusTags": ["typo"],
      "UIDs": {}
    },
    "YPL.FFL.TKUI_D.F0002-301.HMN_typo_europa-caption_regular.textAlignHorizontal": {
      "value": "LEFT",
      "description": "",
      "figma": {
        "type": "other"
      },
      "apparatusTags": ["typo"],
      "UIDs": {}
    },
    "YPL.FFL.TKUI_D.F0002-301.HMN_typo_europa-caption_regular.textCase": {
      "value": "ORIGINAL",
      "description": "",
      "figma": {
        "type": "other"
      },
      "apparatusTags": ["typo"],
      "UIDs": {}
    },
    "YPL.FFL.TKUI_D.F0002-301.HMN_typo_europa-caption_regular.textDecoration": {
      "value": "NONE",
      "description": "",
      "figma": {
        "type": "other"
      },
      "apparatusTags": ["typo"],
      "UIDs": {}
    },
    "YPL.FFL.TKUI_D.F0002-301.HMN_typo_europa-caption_regular.color": {
      "value": "{YPL.FFL.TKUI_C.colors.black.value}",
      "description": "",
      "figma": {
        "type": "other"
      },
      "apparatusTags": ["typo"],
      "UIDs": {}
    },
    "YPL.FFL.TKUI_D.F0002-302.HMN_typo_europa-caption_strong.familyName": {
      "value": "{YPL.FFL.TKUI_C.typo.europa.familyName.bold.value}",
      "description": "",
      "figma": {
        "type": "fontFamilies"
      },
      "apparatusTags": ["typo"],
      "UIDs": {}
    },
    "YPL.FFL.TKUI_D.F0002-302.HMN_typo_europa-caption_strong.size": {
      "value": "{YPL.FFL.TKUI_M.typo.europa.caption.strong.size.value}",
      "description": "",
      "figma": {
        "type": "fontSizes"
      },
      "apparatusTags": ["typo"],
      "UIDs": {}
    },
    "YPL.FFL.TKUI_D.F0002-302.HMN_typo_europa-caption_strong.leading": {
      "value": "{YPL.FFL.TKUI_M.typo.europa.caption.strong.leading.value}",
      "description": "",
      "figma": {
        "type": "lineHeights"
      },
      "apparatusTags": ["typo"],
      "UIDs": {}
    },
    "YPL.FFL.TKUI_D.F0002-302.HMN_typo_europa-caption_strong.paragraphSpacing": {
      "value": "{YPL.FFl.TKUI_M.typo.europa.caption.strong.paragraphSpacing.value}",
      "description": "",
      "figma": {
        "type": "paragraphSpacing"
      },
      "apparatusTags": ["typo"],
      "UIDs": {}
    },
    "YPL.FFL.TKUI_D.F0002-302.HMN_typo_europa-caption_strong.tracking": {
      "value": "{YPL.FFL.TKUI_M.typo.europa.caption.strong.tracking.value}",
      "description": "",
      "figma": {
        "type": "letterSpacing"
      },
      "apparatusTags": ["typo"],
      "UIDs": {}
    },
    "YPL.FFL.TKUI_D.F0002-302.HMN_typo_europa-caption_strong.textAlignHorizontal": {
      "value": "LEFT",
      "description": "",
      "figma": {
        "type": "other"
      },
      "apparatusTags": ["typo"],
      "UIDs": {}
    },
    "YPL.FFL.TKUI_D.F0002-302.HMN_typo_europa-caption_strong.textCase": {
      "value": "ORIGINAL",
      "description": "",
      "figma": {
        "type": "other"
      },
      "apparatusTags": ["typo"],
      "UIDs": {}
    },
    "YPL.FFL.TKUI_D.F0002-302.HMN_typo_europa-caption_strong.textDecoration": {
      "value": "NONE",
      "description": "",
      "figma": {
        "type": "other"
      },
      "apparatusTags": ["typo"],
      "UIDs": {}
    },
    "YPL.FFL.TKUI_D.F0002-302.HMN_typo_europa-caption_strong.color": {
      "value": "{YPL.FFL.TKUI_C.colors.black.value}",
      "description": "",
      "figma": {
        "type": "other"
      },
      "apparatusTags": ["typo"],
      "UIDs": {}
    },
    "YPL.FFL.TKUI_D.F0002-103.HMN_typo_europa-p_s_regular.familyName": {
      "value": "{YPL.FFL.TKUI_C.typo.europa.familyName.regular.value}",
      "description": "",
      "figma": {
        "type": "fontFamilies"
      },
      "apparatusTags": ["typo"],
      "UIDs": {}
    },
    "YPL.FFL.TKUI_D.F0002-103.HMN_typo_europa-p_s_regular.size": {
      "value": "{YPL.FFL.TKUI_M.typo.europa.ps.regular.size.value}",
      "description": "",
      "figma": {
        "type": "fontSizes"
      },
      "apparatusTags": ["typo"],
      "UIDs": {}
    },
    "YPL.FFL.TKUI_D.F0002-103.HMN_typo_europa-p_s_regular.leading": {
      "value": "{YPL.FFL.TKUI_M.typo.europa.ps.regular.leading.value}",
      "description": "",
      "figma": {
        "type": "lineHeights"
      },
      "apparatusTags": ["typo"],
      "UIDs": {}
    },
    "YPL.FFL.TKUI_D.F0002-103.HMN_typo_europa-p_s_regular.paragraphSpacing": {
      "value": "{YPL.FFl.TKUI_M.typo.europa.ps.regular.paragraphSpacing.value}",
      "description": "",
      "figma": {
        "type": "paragraphSpacing"
      },
      "apparatusTags": ["typo"],
      "UIDs": {}
    },
    "YPL.FFL.TKUI_D.F0002-103.HMN_typo_europa-p_s_regular.tracking": {
      "value": "{YPL.FFL.TKUI_M.typo.europa.ps.regular.tracking.value}",
      "description": "",
      "figma": {
        "type": "letterSpacing"
      },
      "apparatusTags": ["typo"],
      "UIDs": {}
    },
    "YPL.FFL.TKUI_D.F0002-103.HMN_typo_europa-p_s_regular.textAlignHorizontal": {
      "value": "LEFT",
      "description": "",
      "figma": {
        "type": "other"
      },
      "apparatusTags": ["typo"],
      "UIDs": {}
    },
    "YPL.FFL.TKUI_D.F0002-103.HMN_typo_europa-p_s_regular.textCase": {
      "value": "ORIGINAL",
      "description": "",
      "figma": {
        "type": "other"
      },
      "apparatusTags": ["typo"],
      "UIDs": {}
    },
    "YPL.FFL.TKUI_D.F0002-103.HMN_typo_europa-p_s_regular.textDecoration": {
      "value": "NONE",
      "description": "",
      "figma": {
        "type": "other"
      },
      "apparatusTags": ["typo"],
      "UIDs": {}
    },
    "YPL.FFL.TKUI_D.F0002-103.HMN_typo_europa-p_s_regular.color": {
      "value": "{YPL.FFL.TKUI_C.colors.black.value}",
      "description": "",
      "figma": {
        "type": "other"
      },
      "apparatusTags": ["typo"],
      "UIDs": {}
    },
    "YPL.FFL.TKUI_D.F0002-104.HMN_typo_europa-p_s_strong.familyName": {
      "value": "{YPL.FFL.TKUI_C.typo.europa.familyName.bold.value}",
      "description": "",
      "figma": {
        "type": "fontFamilies"
      },
      "apparatusTags": ["typo"],
      "UIDs": {}
    },
    "YPL.FFL.TKUI_D.F0002-104.HMN_typo_europa-p_s_strong.size": {
      "value": "{YPL.FFL.TKUI_M.typo.europa.ps.strong.size.value}",
      "description": "",
      "figma": {
        "type": "fontSizes"
      },
      "apparatusTags": ["typo"],
      "UIDs": {}
    },
    "YPL.FFL.TKUI_D.F0002-104.HMN_typo_europa-p_s_strong.leading": {
      "value": "{YPL.FFL.TKUI_M.typo.europa.ps.strong.leading.value}",
      "description": "",
      "figma": {
        "type": "lineHeights"
      },
      "apparatusTags": ["typo"],
      "UIDs": {}
    },
    "YPL.FFL.TKUI_D.F0002-104.HMN_typo_europa-p_s_strong.paragraphSpacing": {
      "value": "{YPL.FFl.TKUI_M.typo.europa.ps.strong.paragraphSpacing.value}",
      "description": "",
      "figma": {
        "type": "paragraphSpacing"
      },
      "apparatusTags": ["typo"],
      "UIDs": {}
    },
    "YPL.FFL.TKUI_D.F0002-104.HMN_typo_europa-p_s_strong.tracking": {
      "value": "{YPL.FFL.TKUI_M.typo.europa.ps.strong.tracking.value}",
      "description": "",
      "figma": {
        "type": "letterSpacing"
      },
      "apparatusTags": ["typo"],
      "UIDs": {}
    },
    "YPL.FFL.TKUI_D.F0002-104.HMN_typo_europa-p_s_strong.textAlignHorizontal": {
      "value": "LEFT",
      "description": "",
      "figma": {
        "type": "other"
      },
      "apparatusTags": ["typo"],
      "UIDs": {}
    },
    "YPL.FFL.TKUI_D.F0002-104.HMN_typo_europa-p_s_strong.textCase": {
      "value": "ORIGINAL",
      "description": "",
      "figma": {
        "type": "other"
      },
      "apparatusTags": ["typo"],
      "UIDs": {}
    },
    "YPL.FFL.TKUI_D.F0002-104.HMN_typo_europa-p_s_strong.textDecoration": {
      "value": "NONE",
      "description": "",
      "figma": {
        "type": "other"
      },
      "apparatusTags": ["typo"],
      "UIDs": {}
    },
    "YPL.FFL.TKUI_D.F0002-104.HMN_typo_europa-p_s_strong.color": {
      "value": "{YPL.FFL.TKUI_C.colors.black.value}",
      "description": "",
      "figma": {
        "type": "other"
      },
      "apparatusTags": ["typo"],
      "UIDs": {}
    },
    "YPL.FFL.TKUI_D.F0002-101.HMN_typo_europa-p_regular.familyName": {
      "value": "{YPL.FFL.TKUI_C.typo.europa.familyName.regular.value}",
      "description": "",
      "figma": {
        "type": "fontFamilies"
      },
      "apparatusTags": ["typo"],
      "UIDs": {}
    },
    "YPL.FFL.TKUI_D.F0002-101.HMN_typo_europa-p_regular.size": {
      "value": "{YPL.FFL.TKUI_M.typo.europa.p.regular.size.value}",
      "description": "",
      "figma": {
        "type": "fontSizes"
      },
      "apparatusTags": ["typo"],
      "UIDs": {}
    },
    "YPL.FFL.TKUI_D.F0002-101.HMN_typo_europa-p_regular.leading": {
      "value": "{YPL.FFL.TKUI_M.typo.europa.p.regular.leading.value}",
      "description": "",
      "figma": {
        "type": "lineHeights"
      },
      "apparatusTags": ["typo"],
      "UIDs": {}
    },
    "YPL.FFL.TKUI_D.F0002-101.HMN_typo_europa-p_regular.paragraphSpacing": {
      "value": "{YPL.FFl.TKUI_M.typo.europa.p.regular.paragraphSpacing.value}",
      "description": "",
      "figma": {
        "type": "paragraphSpacing"
      },
      "apparatusTags": ["typo"],
      "UIDs": {}
    },
    "YPL.FFL.TKUI_D.F0002-101.HMN_typo_europa-p_regular.tracking": {
      "value": "{YPL.FFL.TKUI_M.typo.europa.p.regular.tracking.value}",
      "description": "",
      "figma": {
        "type": "letterSpacing"
      },
      "apparatusTags": ["typo"],
      "UIDs": {}
    },
    "YPL.FFL.TKUI_D.F0002-101.HMN_typo_europa-p_regular.textAlignHorizontal": {
      "value": "LEFT",
      "description": "",
      "figma": {
        "type": "other"
      },
      "apparatusTags": ["typo"],
      "UIDs": {}
    },
    "YPL.FFL.TKUI_D.F0002-101.HMN_typo_europa-p_regular.textCase": {
      "value": "ORIGINAL",
      "description": "",
      "figma": {
        "type": "other"
      },
      "apparatusTags": ["typo"],
      "UIDs": {}
    },
    "YPL.FFL.TKUI_D.F0002-101.HMN_typo_europa-p_regular.textDecoration": {
      "value": "NONE",
      "description": "",
      "figma": {
        "type": "other"
      },
      "apparatusTags": ["typo"],
      "UIDs": {}
    },
    "YPL.FFL.TKUI_D.F0002-101.HMN_typo_europa-p_regular.color": {
      "value": "{YPL.FFL.TKUI_C.colors.black.value}",
      "description": "",
      "figma": {
        "type": "other"
      },
      "apparatusTags": ["typo"],
      "UIDs": {}
    },
    "YPL.FFL.TKUI_D.F0002-102.HMN_typo_europa-p_strong.familyName": {
      "value": "{YPL.FFL.TKUI_C.typo.europa.familyName.bold.value}",
      "description": "",
      "figma": {
        "type": "fontFamilies"
      },
      "apparatusTags": ["typo"],
      "UIDs": {}
    },
    "YPL.FFL.TKUI_D.F0002-102.HMN_typo_europa-p_strong.size": {
      "value": "{YPL.FFL.TKUI_M.typo.europa.p.strong.size.value}",
      "description": "",
      "figma": {
        "type": "fontSizes"
      },
      "apparatusTags": ["typo"],
      "UIDs": {}
    },
    "YPL.FFL.TKUI_D.F0002-102.HMN_typo_europa-p_strong.leading": {
      "value": "{YPL.FFL.TKUI_M.typo.europa.p.strong.leading.value}",
      "description": "",
      "figma": {
        "type": "lineHeights"
      },
      "apparatusTags": ["typo"],
      "UIDs": {}
    },
    "YPL.FFL.TKUI_D.F0002-102.HMN_typo_europa-p_strong.paragraphSpacing": {
      "value": "{YPL.FFl.TKUI_M.typo.europa.p.strong.paragraphSpacing.value}",
      "description": "",
      "figma": {
        "type": "paragraphSpacing"
      },
      "apparatusTags": ["typo"],
      "UIDs": {}
    },
    "YPL.FFL.TKUI_D.F0002-102.HMN_typo_europa-p_strong.tracking": {
      "value": "{YPL.FFL.TKUI_M.typo.europa.p.strong.tracking.value}",
      "description": "",
      "figma": {
        "type": "letterSpacing"
      },
      "apparatusTags": ["typo"],
      "UIDs": {}
    },
    "YPL.FFL.TKUI_D.F0002-102.HMN_typo_europa-p_strong.textAlignHorizontal": {
      "value": "LEFT",
      "description": "",
      "figma": {
        "type": "other"
      },
      "apparatusTags": ["typo"],
      "UIDs": {}
    },
    "YPL.FFL.TKUI_D.F0002-102.HMN_typo_europa-p_strong.textCase": {
      "value": "ORIGINAL",
      "description": "",
      "figma": {
        "type": "other"
      },
      "apparatusTags": ["typo"],
      "UIDs": {}
    },
    "YPL.FFL.TKUI_D.F0002-102.HMN_typo_europa-p_strong.textDecoration": {
      "value": "NONE",
      "description": "",
      "figma": {
        "type": "other"
      },
      "apparatusTags": ["typo"],
      "UIDs": {}
    },
    "YPL.FFL.TKUI_D.F0002-102.HMN_typo_europa-p_strong.color": {
      "value": "{YPL.FFL.TKUI_C.colors.black.value}",
      "description": "",
      "figma": {
        "type": "other"
      },
      "apparatusTags": ["typo"],
      "UIDs": {}
    },
    "YPL.FFL.TKUI_D.F0002-001.HMN_typo_europa-h1.familyName": {
      "value": "{YPL.FFL.TKUI_C.typo.europa.familyName.bold.value}",
      "description": "",
      "figma": {
        "type": "fontFamilies"
      },
      "apparatusTags": ["typo"],
      "UIDs": {}
    },
    "YPL.FFL.TKUI_D.F0002-001.HMN_typo_europa-h1.size": {
      "value": "{YPL.FFL.TKUI_M.typo.europa.h1.size.value}",
      "description": "",
      "figma": {
        "type": "fontSizes"
      },
      "apparatusTags": ["typo"],
      "UIDs": {}
    },
    "YPL.FFL.TKUI_D.F0002-001.HMN_typo_europa-h1.leading": {
      "value": "{YPL.FFL.TKUI_M.typo.europa.h1.leading.value}",
      "description": "",
      "figma": {
        "type": "lineHeights"
      },
      "apparatusTags": ["typo"],
      "UIDs": {}
    },
    "YPL.FFL.TKUI_D.F0002-001.HMN_typo_europa-h1.paragraphSpacing": {
      "value": "{YPL.FFl.TKUI_M.typo.europa.h1.paragraphSpacing.value}",
      "description": "",
      "figma": {
        "type": "paragraphSpacing"
      },
      "apparatusTags": ["typo"],
      "UIDs": {}
    },
    "YPL.FFL.TKUI_D.F0002-001.HMN_typo_europa-h1.tracking": {
      "value": "{YPL.FFL.TKUI_M.typo.europa.h1.tracking.value}",
      "description": "",
      "figma": {
        "type": "letterSpacing"
      },
      "apparatusTags": ["typo"],
      "UIDs": {}
    },
    "YPL.FFL.TKUI_D.F0002-001.HMN_typo_europa-h1.textAlignHorizontal": {
      "value": "LEFT",
      "description": "",
      "figma": {
        "type": "other"
      },
      "apparatusTags": ["typo"],
      "UIDs": {}
    },
    "YPL.FFL.TKUI_D.F0002-001.HMN_typo_europa-h1.textCase": {
      "value": "ORIGINAL",
      "description": "",
      "figma": {
        "type": "other"
      },
      "apparatusTags": ["typo"],
      "UIDs": {}
    },
    "YPL.FFL.TKUI_D.F0002-001.HMN_typo_europa-h1.textDecoration": {
      "value": "NONE",
      "description": "",
      "figma": {
        "type": "other"
      },
      "apparatusTags": ["typo"],
      "UIDs": {}
    },
    "YPL.FFL.TKUI_D.F0002-001.HMN_typo_europa-h1.color": {
      "value": "{YPL.FFL.TKUI_C.colors.black.value}",
      "description": "",
      "figma": {
        "type": "other"
      },
      "apparatusTags": ["typo"],
      "UIDs": {}
    },
    "YPL.FFL.TKUI_D.F0002-002.HMN_typo_europa-h2.familyName": {
      "value": "{YPL.FFL.TKUI_C.typo.europa.familyName.bold.value}",
      "description": "",
      "figma": {
        "type": "fontFamilies"
      },
      "apparatusTags": ["typo"],
      "UIDs": {}
    },
    "YPL.FFL.TKUI_D.F0002-002.HMN_typo_europa-h2.size": {
      "value": "{YPL.FFL.TKUI_M.typo.europa.h2.size.value}",
      "description": "",
      "figma": {
        "type": "fontSizes"
      },
      "apparatusTags": ["typo"],
      "UIDs": {}
    },
    "YPL.FFL.TKUI_D.F0002-002.HMN_typo_europa-h2.leading": {
      "value": "{YPL.FFL.TKUI_M.typo.europa.h2.leading.value}",
      "description": "",
      "figma": {
        "type": "lineHeights"
      },
      "apparatusTags": ["typo"],
      "UIDs": {}
    },
    "YPL.FFL.TKUI_D.F0002-002.HMN_typo_europa-h2.paragraphSpacing": {
      "value": "{YPL.FFl.TKUI_M.typo.europa.h2.paragraphSpacing.value}",
      "description": "",
      "figma": {
        "type": "paragraphSpacing"
      },
      "apparatusTags": ["typo"],
      "UIDs": {}
    },
    "YPL.FFL.TKUI_D.F0002-002.HMN_typo_europa-h2.tracking": {
      "value": "{YPL.FFL.TKUI_M.typo.europa.h2.tracking.value}",
      "description": "",
      "figma": {
        "type": "letterSpacing"
      },
      "apparatusTags": ["typo"],
      "UIDs": {}
    },
    "YPL.FFL.TKUI_D.F0002-002.HMN_typo_europa-h2.textAlignHorizontal": {
      "value": "LEFT",
      "description": "",
      "figma": {
        "type": "other"
      },
      "apparatusTags": ["typo"],
      "UIDs": {}
    },
    "YPL.FFL.TKUI_D.F0002-002.HMN_typo_europa-h2.textCase": {
      "value": "ORIGINAL",
      "description": "",
      "figma": {
        "type": "other"
      },
      "apparatusTags": ["typo"],
      "UIDs": {}
    },
    "YPL.FFL.TKUI_D.F0002-002.HMN_typo_europa-h2.textDecoration": {
      "value": "NONE",
      "description": "",
      "figma": {
        "type": "other"
      },
      "apparatusTags": ["typo"],
      "UIDs": {}
    },
    "YPL.FFL.TKUI_D.F0002-002.HMN_typo_europa-h2.color": {
      "value": "{YPL.FFL.TKUI_C.colors.black.value}",
      "description": "",
      "figma": {
        "type": "other"
      },
      "apparatusTags": ["typo"],
      "UIDs": {}
    },
    "YPL.FFL.TKUI_D.F0002-003.HMN_typo_europa-h3.familyName": {
      "value": "{YPL.FFL.TKUI_C.typo.europa.familyName.bold.value}",
      "description": "",
      "figma": {
        "type": "fontFamilies"
      },
      "apparatusTags": ["typo"],
      "UIDs": {}
    },
    "YPL.FFL.TKUI_D.F0002-003.HMN_typo_europa-h3.size": {
      "value": "{YPL.FFL.TKUI_M.typo.europa.h3.size.value}",
      "description": "",
      "figma": {
        "type": "fontSizes"
      },
      "apparatusTags": ["typo"],
      "UIDs": {}
    },
    "YPL.FFL.TKUI_D.F0002-003.HMN_typo_europa-h3.leading": {
      "value": "{YPL.FFL.TKUI_M.typo.europa.h3.leading.value}",
      "description": "",
      "figma": {
        "type": "lineHeights"
      },
      "apparatusTags": ["typo"],
      "UIDs": {}
    },
    "YPL.FFL.TKUI_D.F0002-003.HMN_typo_europa-h3.paragraphSpacing": {
      "value": "{YPL.FFl.TKUI_M.typo.europa.h3.paragraphSpacing.value}",
      "description": "",
      "figma": {
        "type": "paragraphSpacing"
      },
      "apparatusTags": ["typo"],
      "UIDs": {}
    },
    "YPL.FFL.TKUI_D.F0002-003.HMN_typo_europa-h3.tracking": {
      "value": "{YPL.FFL.TKUI_M.typo.europa.h3.tracking.value}",
      "description": "",
      "figma": {
        "type": "letterSpacing"
      },
      "apparatusTags": ["typo"],
      "UIDs": {}
    },
    "YPL.FFL.TKUI_D.F0002-003.HMN_typo_europa-h3.textAlignHorizontal": {
      "value": "LEFT",
      "description": "",
      "figma": {
        "type": "other"
      },
      "apparatusTags": ["typo"],
      "UIDs": {}
    },
    "YPL.FFL.TKUI_D.F0002-003.HMN_typo_europa-h3.textCase": {
      "value": "ORIGINAL",
      "description": "",
      "figma": {
        "type": "other"
      },
      "apparatusTags": ["typo"],
      "UIDs": {}
    },
    "YPL.FFL.TKUI_D.F0002-003.HMN_typo_europa-h3.textDecoration": {
      "value": "NONE",
      "description": "",
      "figma": {
        "type": "other"
      },
      "apparatusTags": ["typo"],
      "UIDs": {}
    },
    "YPL.FFL.TKUI_D.F0002-003.HMN_typo_europa-h3.color": {
      "value": "{YPL.FFL.TKUI_C.colors.black.value}",
      "description": "",
      "figma": {
        "type": "other"
      },
      "apparatusTags": ["typo"],
      "UIDs": {}
    },
    "YPL.FFL.TKUI_D.F0002-004.HMN_typo_europa-h4.familyName": {
      "value": "{YPL.FFL.TKUI_C.typo.europa.familyName.bold.value}",
      "description": "",
      "figma": {
        "type": "fontFamilies"
      },
      "apparatusTags": ["typo"],
      "UIDs": {}
    },
    "YPL.FFL.TKUI_D.F0002-004.HMN_typo_europa-h4.size": {
      "value": "{YPL.FFL.TKUI_M.typo.europa.h4.size.value}",
      "description": "",
      "figma": {
        "type": "fontSizes"
      },
      "apparatusTags": ["typo"],
      "UIDs": {}
    },
    "YPL.FFL.TKUI_D.F0002-004.HMN_typo_europa-h4.leading": {
      "value": "{YPL.FFL.TKUI_M.typo.europa.h4.leading.value}",
      "description": "",
      "figma": {
        "type": "lineHeights"
      },
      "apparatusTags": ["typo"],
      "UIDs": {}
    },
    "YPL.FFL.TKUI_D.F0002-004.HMN_typo_europa-h4.paragraphSpacing": {
      "value": "{YPL.FFl.TKUI_M.typo.europa.h4.paragraphSpacing.value}",
      "description": "",
      "figma": {
        "type": "paragraphSpacing"
      },
      "apparatusTags": ["typo"],
      "UIDs": {}
    },
    "YPL.FFL.TKUI_D.F0002-004.HMN_typo_europa-h4.tracking": {
      "value": "{YPL.FFL.TKUI_M.typo.europa.h4.tracking.value}",
      "description": "",
      "figma": {
        "type": "letterSpacing"
      },
      "apparatusTags": ["typo"],
      "UIDs": {}
    },
    "YPL.FFL.TKUI_D.F0002-004.HMN_typo_europa-h4.textAlignHorizontal": {
      "value": "LEFT",
      "description": "",
      "figma": {
        "type": "other"
      },
      "apparatusTags": ["typo"],
      "UIDs": {}
    },
    "YPL.FFL.TKUI_D.F0002-004.HMN_typo_europa-h4.textCase": {
      "value": "ORIGINAL",
      "description": "",
      "figma": {
        "type": "other"
      },
      "apparatusTags": ["typo"],
      "UIDs": {}
    },
    "YPL.FFL.TKUI_D.F0002-004.HMN_typo_europa-h4.textDecoration": {
      "value": "NONE",
      "description": "",
      "figma": {
        "type": "other"
      },
      "apparatusTags": ["typo"],
      "UIDs": {}
    },
    "YPL.FFL.TKUI_D.F0002-004.HMN_typo_europa-h4.color": {
      "value": "{YPL.FFL.TKUI_C.colors.black.value}",
      "description": "",
      "figma": {
        "type": "other"
      },
      "apparatusTags": ["typo"],
      "UIDs": {}
    },
    "YPL.FFL.TKUI_D.F0002-005.HMN_typo_europa-h5.familyName": {
      "value": "{YPL.FFL.TKUI_C.typo.europa.familyName.bold.value}",
      "description": "",
      "figma": {
        "type": "fontFamilies"
      },
      "apparatusTags": ["typo"],
      "UIDs": {}
    },
    "YPL.FFL.TKUI_D.F0002-005.HMN_typo_europa-h5.size": {
      "value": "{YPL.FFL.TKUI_M.typo.europa.h5.size.value}",
      "description": "",
      "figma": {
        "type": "fontSizes"
      },
      "apparatusTags": ["typo"],
      "UIDs": {}
    },
    "YPL.FFL.TKUI_D.F0002-005.HMN_typo_europa-h5.leading": {
      "value": "{YPL.FFL.TKUI_M.typo.europa.h5.leading.value}",
      "description": "",
      "figma": {
        "type": "lineHeights"
      },
      "apparatusTags": ["typo"],
      "UIDs": {}
    },
    "YPL.FFL.TKUI_D.F0002-005.HMN_typo_europa-h5.paragraphSpacing": {
      "value": "{YPL.FFl.TKUI_M.typo.europa.h5.paragraphSpacing.value}",
      "description": "",
      "figma": {
        "type": "paragraphSpacing"
      },
      "apparatusTags": ["typo"],
      "UIDs": {}
    },
    "YPL.FFL.TKUI_D.F0002-005.HMN_typo_europa-h5.tracking": {
      "value": "{YPL.FFL.TKUI_M.typo.europa.h5.tracking.value}",
      "description": "",
      "figma": {
        "type": "letterSpacing"
      },
      "apparatusTags": ["typo"],
      "UIDs": {}
    },
    "YPL.FFL.TKUI_D.F0002-005.HMN_typo_europa-h5.textAlignHorizontal": {
      "value": "LEFT",
      "description": "",
      "figma": {
        "type": "other"
      },
      "apparatusTags": ["typo"],
      "UIDs": {}
    },
    "YPL.FFL.TKUI_D.F0002-005.HMN_typo_europa-h5.textCase": {
      "value": "ORIGINAL",
      "description": "",
      "figma": {
        "type": "other"
      },
      "apparatusTags": ["typo"],
      "UIDs": {}
    },
    "YPL.FFL.TKUI_D.F0002-005.HMN_typo_europa-h5.textDecoration": {
      "value": "NONE",
      "description": "",
      "figma": {
        "type": "other"
      },
      "apparatusTags": ["typo"],
      "UIDs": {}
    },
    "YPL.FFL.TKUI_D.F0002-005.HMN_typo_europa-h5.color": {
      "value": "{YPL.FFL.TKUI_C.colors.black.value}",
      "description": "",
      "figma": {
        "type": "other"
      },
      "apparatusTags": ["typo"],
      "UIDs": {}
    },
    "YPL.FFL.TKUI_D.F0002-006.HMN_typo_europa-h6.familyName": {
      "value": "{YPL.FFL.TKUI_C.typo.europa.familyName.bold.value}",
      "description": "",
      "figma": {
        "type": "fontFamilies"
      },
      "apparatusTags": ["typo"],
      "UIDs": {}
    },
    "YPL.FFL.TKUI_D.F0002-006.HMN_typo_europa-h6.size": {
      "value": "{YPL.FFL.TKUI_M.typo.europa.h6.size.value}",
      "description": "",
      "figma": {
        "type": "fontSizes"
      },
      "apparatusTags": ["typo"],
      "UIDs": {}
    },
    "YPL.FFL.TKUI_D.F0002-006.HMN_typo_europa-h6.leading": {
      "value": "{YPL.FFL.TKUI_M.typo.europa.h6.leading.value}",
      "description": "",
      "figma": {
        "type": "lineHeights"
      },
      "apparatusTags": ["typo"],
      "UIDs": {}
    },
    "YPL.FFL.TKUI_D.F0002-006.HMN_typo_europa-h6.paragraphSpacing": {
      "value": "{YPL.FFl.TKUI_M.typo.europa.h6.paragraphSpacing.value}",
      "description": "",
      "figma": {
        "type": "paragraphSpacing"
      },
      "apparatusTags": ["typo"],
      "UIDs": {}
    },
    "YPL.FFL.TKUI_D.F0002-006.HMN_typo_europa-h6.tracking": {
      "value": "{YPL.FFL.TKUI_M.typo.europa.h6.tracking.value}",
      "description": "",
      "figma": {
        "type": "letterSpacing"
      },
      "apparatusTags": ["typo"],
      "UIDs": {}
    },
    "YPL.FFL.TKUI_D.F0002-006.HMN_typo_europa-h6.textAlignHorizontal": {
      "value": "LEFT",
      "description": "",
      "figma": {
        "type": "other"
      },
      "apparatusTags": ["typo"],
      "UIDs": {}
    },
    "YPL.FFL.TKUI_D.F0002-006.HMN_typo_europa-h6.textCase": {
      "value": "ORIGINAL",
      "description": "",
      "figma": {
        "type": "other"
      },
      "apparatusTags": ["typo"],
      "UIDs": {}
    },
    "YPL.FFL.TKUI_D.F0002-006.HMN_typo_europa-h6.textDecoration": {
      "value": "NONE",
      "description": "",
      "figma": {
        "type": "other"
      },
      "apparatusTags": ["typo"],
      "UIDs": {}
    },
    "YPL.FFL.TKUI_D.F0002-006.HMN_typo_europa-h6.color": {
      "value": "{YPL.FFL.TKUI_C.colors.black.value}",
      "description": "",
      "figma": {
        "type": "other"
      },
      "apparatusTags": ["typo"],
      "UIDs": {}
    },
    "YPL.FFL.TKUI_D.F0002-007.HMN_typo_europa-h7.familyName": {
      "value": "{YPL.FFL.TKUI_C.typo.europa.familyName.bold.value}",
      "description": "",
      "figma": {
        "type": "fontFamilies"
      },
      "apparatusTags": ["typo"],
      "UIDs": {}
    },
    "YPL.FFL.TKUI_D.F0002-007.HMN_typo_europa-h7.size": {
      "value": "{YPL.FFL.TKUI_M.typo.europa.h7.size.value}",
      "description": "",
      "figma": {
        "type": "fontSizes"
      },
      "apparatusTags": ["typo"],
      "UIDs": {}
    },
    "YPL.FFL.TKUI_D.F0002-007.HMN_typo_europa-h7.leading": {
      "value": "{YPL.FFL.TKUI_M.typo.europa.h7.leading.value}",
      "description": "",
      "figma": {
        "type": "lineHeights"
      },
      "apparatusTags": ["typo"],
      "UIDs": {}
    },
    "YPL.FFL.TKUI_D.F0002-007.HMN_typo_europa-h7.paragraphSpacing": {
      "value": "{YPL.FFl.TKUI_M.typo.europa.h7.paragraphSpacing.value}",
      "description": "",
      "figma": {
        "type": "paragraphSpacing"
      },
      "apparatusTags": ["typo"],
      "UIDs": {}
    },
    "YPL.FFL.TKUI_D.F0002-007.HMN_typo_europa-h7.tracking": {
      "value": "{YPL.FFL.TKUI_M.typo.europa.h7.tracking.value}",
      "description": "",
      "figma": {
        "type": "letterSpacing"
      },
      "apparatusTags": ["typo"],
      "UIDs": {}
    },
    "YPL.FFL.TKUI_D.F0002-007.HMN_typo_europa-h7.textAlignHorizontal": {
      "value": "LEFT",
      "description": "",
      "figma": {
        "type": "other"
      },
      "apparatusTags": ["typo"],
      "UIDs": {}
    },
    "YPL.FFL.TKUI_D.F0002-007.HMN_typo_europa-h7.textCase": {
      "value": "ORIGINAL",
      "description": "",
      "figma": {
        "type": "other"
      },
      "apparatusTags": ["typo"],
      "UIDs": {}
    },
    "YPL.FFL.TKUI_D.F0002-007.HMN_typo_europa-h7.textDecoration": {
      "value": "NONE",
      "description": "",
      "figma": {
        "type": "other"
      },
      "apparatusTags": ["typo"],
      "UIDs": {}
    },
    "YPL.FFL.TKUI_D.F0002-007.HMN_typo_europa-h7.color": {
      "value": "{YPL.FFL.TKUI_C.colors.black.value}",
      "description": "",
      "figma": {
        "type": "other"
      },
      "apparatusTags": ["typo"],
      "UIDs": {}
    },
    "YPL.FFL.TKUI_D.F0002-008.HMN_typo_europa-h8.familyName": {
      "value": "{YPL.FFL.TKUI_C.typo.europa.familyName.bold.value}",
      "description": "",
      "figma": {
        "type": "fontFamilies"
      },
      "apparatusTags": ["typo"],
      "UIDs": {}
    },
    "YPL.FFL.TKUI_D.F0002-008.HMN_typo_europa-h8.size": {
      "value": "{YPL.FFL.TKUI_M.typo.europa.h8.size.value}",
      "description": "",
      "figma": {
        "type": "fontSizes"
      },
      "apparatusTags": ["typo"],
      "UIDs": {}
    },
    "YPL.FFL.TKUI_D.F0002-008.HMN_typo_europa-h8.leading": {
      "value": "{YPL.FFL.TKUI_M.typo.europa.h8.leading.value}",
      "description": "",
      "figma": {
        "type": "lineHeights"
      },
      "apparatusTags": ["typo"],
      "UIDs": {}
    },
    "YPL.FFL.TKUI_D.F0002-008.HMN_typo_europa-h8.paragraphSpacing": {
      "value": "{YPL.FFl.TKUI_M.typo.europa.h8.paragraphSpacing.value}",
      "description": "",
      "figma": {
        "type": "paragraphSpacing"
      },
      "apparatusTags": ["typo"],
      "UIDs": {}
    },
    "YPL.FFL.TKUI_D.F0002-008.HMN_typo_europa-h8.tracking": {
      "value": "{YPL.FFL.TKUI_M.typo.europa.h8.tracking.value}",
      "description": "",
      "figma": {
        "type": "letterSpacing"
      },
      "apparatusTags": ["typo"],
      "UIDs": {}
    },
    "YPL.FFL.TKUI_D.F0002-008.HMN_typo_europa-h8.textAlignHorizontal": {
      "value": "LEFT",
      "description": "",
      "figma": {
        "type": "other"
      },
      "apparatusTags": ["typo"],
      "UIDs": {}
    },
    "YPL.FFL.TKUI_D.F0002-008.HMN_typo_europa-h8.textCase": {
      "value": "ORIGINAL",
      "description": "",
      "figma": {
        "type": "other"
      },
      "apparatusTags": ["typo"],
      "UIDs": {}
    },
    "YPL.FFL.TKUI_D.F0002-008.HMN_typo_europa-h8.textDecoration": {
      "value": "NONE",
      "description": "",
      "figma": {
        "type": "other"
      },
      "apparatusTags": ["typo"],
      "UIDs": {}
    },
    "YPL.FFL.TKUI_D.F0002-008.HMN_typo_europa-h8.color": {
      "value": "{YPL.FFL.TKUI_C.colors.black.value}",
      "description": "",
      "figma": {
        "type": "other"
      },
      "apparatusTags": ["typo"],
      "UIDs": {}
    },
    "YPL.FFL.TKUI_D.P0001.HMN_posterCard.width": {
      "value": "{YPL.FFL.TKUI_C.percents.full.value}",
      "description": "",
      "figma": {
        "type": "other"
      },
      "apparatusTags": [],
      "UIDs": {}
    },
    "YPL.FFL.TKUI_D.P0001.HMN_posterCard.height": {
      "value": "{YPL.FFL.TKUI_C.sizes.macro.700.value}",
      "description": "",
      "figma": {
        "type": "other"
      },
      "apparatusTags": [],
      "UIDs": {}
    },
    "YPL.FFL.TKUI_D.P0001.HMN_posterCard.margin": {
      "value": "{YPL.FFL.TKUI_C.spaces.l.value}",
      "description": "",
      "figma": {
        "type": "other"
      },
      "apparatusTags": [],
      "UIDs": {}
    },
    "YPL.FFL.TKUI_D.P0001.HMN_posterCard.fringeBottom": {
      "value": "{YPL.FFL.TKUI_C.spaces.l.value}",
      "description": "",
      "figma": {
        "type": "other"
      },
      "apparatusTags": [],
      "UIDs": {}
    },
    "YPL.FFL.TKUI_D.P0001.HMN_posterCard.padding": {
      "value": "{YPL.FFL.TKUI_C.spaces.l.value}",
      "description": "",
      "figma": {
        "type": "other"
      },
      "apparatusTags": [],
      "UIDs": {}
    },
    "YPL.FFL.TKUI_D.P0001.HMN_posterCard.radius": {
      "value": "{YPL.FFL.TKUI_C.sizes.micro.200.value}",
      "description": "",
      "figma": {
        "type": "other"
      },
      "apparatusTags": [],
      "UIDs": {}
    },
    "YPL.FFL.TKUI_D.P0001.HMN_posterCard.blockCopy.width": {
      "value": "{YPL.FFL.TKUI_C.percents.full.value}",
      "description": "",
      "figma": {
        "type": "other"
      },
      "apparatusTags": [],
      "UIDs": {}
    },
    "YPL.FFL.TKUI_D.P0001.HMN_posterCard.blockCopy.slack": {
      "value": "{YPL.FFL.TKUI_C.sizes.macro.500.value}",
      "description": "",
      "figma": {
        "type": "other"
      },
      "apparatusTags": [],
      "UIDs": {}
    },
    "YPL.FFL.TKUI_D.P0001.HMN_posterCard.blockHeader.height": {
      "value": "{YPL.FFL.TKUI_C.spaces.l.value}",
      "description": "",
      "figma": {
        "type": "other"
      },
      "apparatusTags": [],
      "UIDs": {}
    },
    "YPL.FFL.TKUI_D.P0001.HMN_posterCard.blockFooter.height": {
      "value": "{YPL.FFL.TKUI_C.spaces.e.value}",
      "description": "",
      "figma": {
        "type": "other"
      },
      "apparatusTags": [],
      "UIDs": {}
    },
    "YPL.FFL.TKUI_D.P0001.HMN_posterCard.gradient": {
      "value": "{YPL.FFL.TKUI_C.gradients.overlay.black.BL_TR.value}",
      "description": "",
      "figma": {
        "type": "other"
      },
      "apparatusTags": [],
      "UIDs": {}
    },
    "YPL.FFL.TKUI_D.P0001.HMN_posterCard.bgImage.fillMode": {
      "value": "FILL",
      "description": "",
      "figma": {
        "type": "other"
      },
      "apparatusTags": [],
      "UIDs": {}
    },
    "YPL.FFL.TKUI_D.P0001.HMN_posterCard.heading.color": {
      "value": "{YPL.FFL.TKUI_C.colors.white.value}",
      "description": "",
      "figma": {
        "type": "other"
      },
      "apparatusTags": [],
      "UIDs": {}
    },
    "YPL.FFL.TKUI_D.P0001.HMN_posterCard.eyebrow.color": {
      "value": "{YPL.FFL.TKUI_C.colors.grey.300.value}",
      "description": "",
      "figma": {
        "type": "other"
      },
      "apparatusTags": [],
      "UIDs": {}
    },
    "YPL.FFL.TKUI_D.P0001.HMN_posterCard.heading.margin": {
      "value": "negativeOf(YPL.FFL.TKUI_C.spaces.xs)",
      "description": "",
      "figma": {
        "type": "other"
      },
      "apparatusTags": [],
      "UIDs": {}
    },
    "YPL.FFL.TKUI_D.P0001.HMN_posterCard.heading.fringeBottom": {
      "value": "negativeOf(YPL.FFL.TKUI_C.spaces.xs)",
      "description": "",
      "figma": {
        "type": "other"
      },
      "apparatusTags": [],
      "UIDs": {}
    },
    "YPL.FFL.TKUI_D.P0001.HMN_posterCard.blockCopy.chip.margin": {
      "value": "{YPL.FFL.TKUI_C.spaces.s.value}",
      "description": "",
      "figma": {
        "type": "other"
      },
      "apparatusTags": [],
      "UIDs": {}
    },
    "YPL.FFL.TKUI_D.P0001.HMN_posterCard.blockCopy.chip.fringeBottom": {
      "value": "{YPL.FFL.TKUI_C.spaces.s.value}",
      "description": "",
      "figma": {
        "type": "other"
      },
      "apparatusTags": [],
      "UIDs": {}
    },
    "YPL.FFL.TKUI_D.P0001.HMN_posterCard.heading.paddingLeft": {
      "value": "{YPL.FFL.TKUI_C.spaces.xxl.value}",
      "description": "",
      "figma": {
        "type": "other"
      },
      "apparatusTags": [],
      "UIDs": {}
    },
    "YPL.FFL.TKUI_D.P0001.HMN_posterCard.blockFooter.eyebrow.paddingLeft": {
      "value": "{YPL.FFL.TKUI_C.spaces.sm.value}",
      "description": "",
      "figma": {
        "type": "other"
      },
      "apparatusTags": [],
      "UIDs": {}
    },
    "YPL.FFL.TKUI_D.P0001.HMN_posterCard.gradient.OPT_layout2": {
      "value": "{YPL.FFL.TKUI_C.gradients.overlay.black.TL_BR.value}",
      "description": "",
      "figma": {
        "type": "other"
      },
      "apparatusTags": [],
      "UIDs": {}
    },
    "YPL.FFL.TKUI_D.P0001.HMN_posterCard.blockCopy.paragraph.color": {
      "value": "{YPL.FFL.TKUI_C.colors.white.value}",
      "description": "",
      "figma": {
        "type": "other"
      },
      "apparatusTags": [],
      "UIDs": {}
    },
    "YPL.FFL.TKUI_D.P0001.HMN_posterCard.heading.margin.OPT_layout2": {
      "value": "{YPL.FFL.TKUI_C.sizes.micro.400.value}",
      "description": "",
      "figma": {
        "type": "other"
      },
      "apparatusTags": [],
      "UIDs": {}
    },
    "YPL.FFL.TKUI_D.P0001.HMN_posterCard.blockFooter.eyebrow.paddingLeft.OPT_layout2": {
      "value": "{YPL.FFL.TKUI_C.spaces.none.value}",
      "description": "",
      "figma": {
        "type": "other"
      },
      "apparatusTags": [],
      "UIDs": {}
    },
    "YPL.FFL.TKUI_D.P0001.HMN_posterCard.height.OPT_small": {
      "value": "{YPL.FFL.TKUI_C.sizes.macro.700.value}",
      "description": "",
      "figma": {
        "type": "other"
      },
      "apparatusTags": [],
      "UIDs": {}
    },
    "YPL.FFL.TKUI_D.P0001.HMN_posterCard.heading.size.OPT_small": {
      "value": "{YPL.FFL.TKUI_C.typo.europa.h7.size.value}",
      "description": "",
      "figma": {
        "type": "other"
      },
      "apparatusTags": [],
      "UIDs": {}
    },
    "YPL.FFL.TKUI_D.P0001.HMN_posterCard.heading.tracking.OPT_small": {
      "value": "{YPL.FFL.TKUI_C.typo.europa.h7.tracking.value}",
      "description": "",
      "figma": {
        "type": "other"
      },
      "apparatusTags": [],
      "UIDs": {}
    },
    "YPL.FFL.TKUI_D.P0001.HMN_posterCard.heading.leading.OPT_small": {
      "value": "{YPL.FFL.TKUI_C.typo.europa.h7.leading.value}",
      "description": "",
      "figma": {
        "type": "other"
      },
      "apparatusTags": [],
      "UIDs": {}
    },
    "YPL.FFL.TKUI_D.P0001.HMN_posterCard.heading.paragraphSpacing.OPT_small": {
      "value": "{YPL.FFL.TKUI_C.typo.europa.h7.paragraphSpacing.value}",
      "description": "",
      "figma": {
        "type": "other"
      },
      "apparatusTags": [],
      "UIDs": {}
    },
    "YPL.FFL.TKUI_D.P0001.HMN_posterCard.blockCopy.width.BRKP_m": {
      "value": "{YPL.FFL.TKUI_C.percents.ml.value}",
      "description": "",
      "figma": {
        "type": "other"
      },
      "apparatusTags": [],
      "UIDs": {}
    },
    "YPL.FFL.TKUI_D.P0001.HMN_posterCard.heading.size.BRKP_m": {
      "value": "{YPL.FFL.TKUI_C.typo.europa.h3.size.value}",
      "description": "",
      "figma": {
        "type": "other"
      },
      "apparatusTags": [],
      "UIDs": {}
    },
    "YPL.FFL.TKUI_D.P0001.HMN_posterCard.heading.tracking.BRKP_m": {
      "value": "{YPL.FFL.TKUI_C.typo.europa.h3.tracking.value}",
      "description": "",
      "figma": {
        "type": "other"
      },
      "apparatusTags": [],
      "UIDs": {}
    },
    "YPL.FFL.TKUI_D.P0001.HMN_posterCard.heading.leading.BRKP_m": {
      "value": "{YPL.FFL.TKUI_C.typo.europa.h3.leading.value}",
      "description": "",
      "figma": {
        "type": "other"
      },
      "apparatusTags": [],
      "UIDs": {}
    },
    "YPL.FFL.TKUI_D.P0001.HMN_posterCard.heading.paragraphSpacing.BRKP_m": {
      "value": "{YPL.FFL.TKUI_C.typo.europa.h3.paragraphSpacing.value}",
      "description": "",
      "figma": {
        "type": "other"
      },
      "apparatusTags": [],
      "UIDs": {}
    }
  }
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
<script defer src="{{ site.baseurl }}/assets/js/apparatuses/{{ page.title | downcase }}-script.js"></script>

# Dimensions
{: .no_toc}

- TOC
{:toc}

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

### iOS [WIP]
{: .no_toc}
Instead of using exact values of width like web media queries require; exposing a set of orientation tokens can be a proposed solution to handle the viewport challenge. [Apple's Human Interface Guidelines](https://developer.apple.com/design/human-interface-guidelines/ios/visual-design/adaptivity-and-layout/#device-size-classes) explain this a little more eloquently.

#### Proposal
{: .no_toc}
To expose two tokens specifically for iOS `YPL.FFL.TKUI_C.breakpoints.iOS.regular` and `YPL.FFL.TKUI_C.breakpoints.iOS.compact`

<hr>

### Android [WIP]
{: .no_toc}
