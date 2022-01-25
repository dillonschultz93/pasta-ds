import { copyToClipboard } from "../pasta-utilities/pasta-doc-utilities.js";

// TODO This should not be hard coded in the future
const CSS = `
  .wip {
    display: block;
  }
`.trim();

const IOS = `
struct Pasta {
  struct Choices {
    struct Scales {
      static var geoA400: CGFloat = 8
      static var geoA900: CGFloat = 256
      static var geoA1000: CGFloat = 512
      static var arithA100: CGFloat = 10
      static var arithA200: CGFloat = 12
      static var arithA600: CGFloat = 24
      static var arithA1000: CGFloat = 28
      static var arithC900: CGFloat = 60

    }
    struct Typo {
      struct Face {
        static var bold = "Europa-Bold"
      }
    }

    struct Colors {
      static let darkModeTrim = Colors.springGreen
      static var white = "ffffff"
      static let gray300 = "bababa"
      static let orange = "e05f1f"
      static let springGreen = "00ee66"
      static let orangeFlame = "ff5221c"
      static let MD_dark_z100_backgrd = "2e2e2e"
      static let MD_dark_z400_backgrd = "151515"
    }
  }
}
`.trim();

const ANDROID = ``.trim();

const FIGMA_TOKENS = `
{
  "TKUI_D": {
    "background": {
      "color": {
        "value": "$TKUI_C.colors.dark.200",
        "type": "color"
      }
    },
    "navBar": {
      "bgColor": {
        "value": "$TKUI_C.colors.dark.200",
        "type": "color"
      },
      "systemInfo": {
        "color": {
          "value": "$TKUI_C.colors.white",
          "type": "color"
        }
      },
      "searchField": {
        "color": {
          "value": "$TKUI_C.colors.gray.700",
          "type": "color"
        }
      },
      "searchIcon": {
        "color": {
          "value": "$TKUI_C.colors.gray.400",
          "type": "color"
        }
      },
      "searchText": {
        "color": {
          "value": "$TKUI_C.colors.white",
          "type": "color"
        }
      },
      "searchReset": {
        "glyphColor": {
          "value": "$TKUI_C.colors.gray.700",
          "type": "color"
        },
        "bgColor": {
          "value": "$TKUI_C.colors.gray.400",
          "type": "color"
        }
      },
      "searchCancel": {
        "color": {
          "value": "$TKUI_C.colors.springGreen",
          "type": "color"
        }
      }
    },
    "bottomNav": {
      "icon": {
        "idle": {
          "color": {
            "value": "$TKUI_C.colors.gray.500",
            "type": "color"
          }
        },
        "selected": {
          "color": {
            "value": "$TKUI_C.colors.springGreen",
            "type": "color"
          }
        }
      },
      "bgColor": {
        "value": "$TKUI_C.colors.dark.400",
        "type": "color"
      },
      "swipper": {
        "color": {
          "value": "$TKUI_C.colors.gray.700",
          "type": "color"
        }
      }
    },
    "cardRecipeLarge": {
      "buttonIcon": {
        "glyphColor": {
          "value": "$TKUI_C.colors.black",
          "type": "color"
        },
        "bgColor": {
          "value": "$TKUI_C.colors.springGreen",
          "type": "color"
        }
      },
      "eyebrow": {
        "color": {
          "value": "$TKUI_C.colors.springGreen",
          "type": "color"
        }
      },
      "rating": {
        "icon": {
          "color": {
            "value": "$TKUI_C.colors.springGreen",
            "type": "color"
          }
        }
      }
    }
  }
}
`.trim();

// Collect all playground copy buttons
const playgroundRows = [...document.querySelectorAll('.playground-details-row')];

playgroundRows.forEach(row => {
  const copyButton = row.firstElementChild.querySelector('.btn');
  const detailsEl = row.querySelector('.playground-details');
  const codeEl = detailsEl.querySelector('code');

  switch (codeEl.dataset.lang) {
    case 'css':
      codeEl.textContent = CSS;
      copyButton.addEventListener('click', () => {
        copyToClipboard(CSS);
      });
      break;

    case 'json':
      row.id === 'ios' ? codeEl.textContent = IOS : codeEl.textContent = FIGMA_TOKENS;
      copyButton.addEventListener('click', () => {
        copyToClipboard(row.id === 'ios' ? IOS : FIGMA_TOKENS);
      });
      break;

    case 'xml':
      codeEl.textContent = ANDROID;
      copyButton.addEventListener('click', () => {
        copyToClipboard(ANDROID);
      });

    default:
      break;
  }
});
