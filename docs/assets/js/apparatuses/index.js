// -----------------------------------------------
// PASTA APPARATUSES: DIMENSIONS
// -----------------------------------------------
// Description: Functions that generate the necessary dimension tokens.
// Authors: Manuel Colom · manuel.colom@yummly.com, Dillon Schultz · dillon.schultz@yummly.com
// ToDo: refactor and make this less hacky
//
// Copyright (c) 2022 Yummly, Inc.
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in all
// copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
// SOFTWARE.
// -----------------------------------------------

// BREAKPOINTS ===================================

/**
 * @description Generates all breakpoint tokens as choices using a set of constant values.
 * @param {Object} breakpointChoices - The object containing naming options for the prefix of each token.
 */
function getBreakpoints(breakpointChoices) {
  return parseChoices(breakpointChoices);
}
// ===============================================

// FACTORS =======================================

/**
 * @description Generates all factor tokens as choices using a set of constant values.
 * @param {Object} factorChoices - The object containing naming options for the prefix of each token.
 */
function getFactors(factorChoices) {
  return parseChoices(factorChoices);
}
// ===============================================

// SCALES ========================================
/**
 * @description Calculates the geometric scale.
 * @param {Number} base - The base value.
 * @param {Number} ratio - The ratio value.
 * @param {Number} baseIndex - The base index.
 * @param {Number} currentIndex - The current index.
 * @returns {Number}
 */
function geoA(base, ratio, baseIndex, currentIndex) {
  return Math.round(base * ratio ** ((200 + currentIndex - baseIndex) / 100));
}

/**
 * @description Calculates the geometric scale.
 * @param {Number} base - The base value.
 * @param {Number} baseIndex - The base index.
 * @param {Number} currentIndex - The current index.
 * @returns {Number}
 */
function arithA(base, baseIndex, currentIndex) {
  return base * (8 + (currentIndex - baseIndex)/100);
}

/**
 * @description Calculates the geometric scale.
 * @param {Number} base - The base value.
 * @param {Number} ratio - The ratio value.
 * @param {Number} currentIndex - The current index.
 * @returns {Number}
 */
function arithB(base, ratio, currentIndex) {
  return (Math.round(base * ratio**2) + (Math.round(base * ratio**2))*((currentIndex - 500)/100))*1.5
}

/**
 * @description Generates a scale from a minimum index to a maximum index using a scaling algorithm.
 * @param {Object} scaleChoices - The object containing naming options for the prefix of each token.
 */
function generateDimensionScale(scaleChoices) {
  const { value, description, type, kingdom, category, group } = scaleChoices;
  const { base, ratio, baseIndex, scaleStems } = value;

  let modifiedValue = {};
  let val = {};

  // Set the min and max amount of exposed indexes.
  let min = 100;
  let max = 1100;

  scaleStems.forEach(stem => {
    if (stem === 'arithA') {
      max = 1600;
    } else if (stem === 'arithB') {
      min = 800;
      max = 2000;
    }

    for (let index = min; index < max + 1; index += 100) {
      let scaleVal = 0;

      switch (stem) {
        case 'geoA':
          scaleVal = geoA(base, ratio, baseIndex, index);
          val = {
            ...val,
            [index]: {
              'value': scaleVal,
              description,
              type,
              group
            }
          }
          break;

        case 'arithA':
          scaleVal = arithA(base, baseIndex, index);
          val = {
            ...val,
            [index]: {
              'value': scaleVal,
              description,
              type,
              group
            }
          }
          break;

        case 'arithB':
          scaleVal = arithB(base, ratio, index);
          val = {
            ...val,
            [index]: {
              'value': scaleVal,
              description,
              type,
              group
            }
          }
          break;

        default:
          scaleVal = geoA(base, ratio, baseIndex, index);
          val = {
            ...val,
            [index]: {
              'value': scaleVal,
              description,
              type,
              group
            }
          }
          break;
      }

      modifiedValue = {
        ...modifiedValue,
        [stem]: {
          ...val
        }
      }
    }
  });

  return {
    tokenValues: modifiedValue,
    kingdom,
    category
  }
};
// ===============================================

// SPACES ========================================
/**
 * @description Generates all spacing tokens as choices using the scale tokens as values.
 * @param {Object} spaceChoices - The object containing spacing choices.
 */
function getSpaces(spaceChoices) {
  return parseChoices(spaceChoices);
}
// ===============================================

// STATIC SIZES ==================================
/**
 * @description Generates all static size tokens as choices using a set of constant values.
 * @param {Object} staticSizeChoices - The object containing naming options for the prefix of each token.
 */
function getStaticSizes(staticSizeChoices) {
  return parseChoices(staticSizeChoices);
}
// ===============================================

// -----------------------------------------------
// PASTA APPARATUS: TYPOGRAPHY
// -----------------------------------------------
// Description: Functions that generate the necessary font family tokens.
// Authors: Manuel Colom · manuel.colom@yummly.com, Dillon Schultz · dillon.schultz@yummly.com
//
// Copyright (c) 2022 Yummly, Inc.
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in all
// copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
// SOFTWARE.
// -----------------------------------------------

// FONT FAMILY ===================================

function getFontFamily(fontFamilyChoices) {
  return parseChoices(fontFamilyChoices);
}
// ===============================================

// LEADING =======================================
function getLeading(leadingChoices) {
  return parseChoices(leadingChoices);
}
// ===============================================

// PARAGRAPH SPACING =============================
function getParagraphSpacing(paragraphSpacingChoices) {
  return parseChoices(paragraphSpacingChoices);
}
// ===============================================

// TRACKING ======================================
function getTrackingThreshold(trackingThresholdChoices) {
  return parseChoices(trackingThresholdChoices);
}
// ===============================================

// -----------------------------------------------
// PASTA APPARATUS: COLOR
// -----------------------------------------------
// Description: Functions that generate the necessary breakpoint tokens.
// Authors: Manuel Colom · manuel.colom@yummly.com, Dillon Schultz · dillon.schultz@yummly.com
// ToDo: refactor and make this less hacky
//
// Copyright (c) 2022 Yummly, Inc.
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in all
// copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
// SOFTWARE.
// -----------------------------------------------

// COLOR SCALE ===================================
class ColorScale {
	constructor(hexColorValue, tokenDescription, tokenType, tokenGroup) {
		this.color = chroma(hexColorValue).lch();
		this.luminanceScale = {
			100: 90,
			200: 80,
			300: 70,
			400: 60,
			500: 50,
			600: 40,
			700: 30,
			800: 20,
			900: 10,
		};
    this.index = this.startingIndex();
    this.description = tokenDescription;
    this.type = tokenType;
    this.group = tokenGroup;

    ntc.init();
	}
	/**
	 * Decimal adjustment of a number.
	 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/floor
	 * @param {Number}  value The number.
	 * @param {Integer} exp   The exponent (the 10 logarithm of the adjustment base).
	 * @returns {Number} The adjusted value.
	 */
	static roundDown(value, exp) {
		// If the exp is undefined or zero...
		if (typeof exp === 'undefined' || +exp === 0) {
			return Math[type](value);
		}
		value = +value;
		exp = +exp;
		// If the value is not a number or the exp is not an integer...
		if (isNaN(value) || !(typeof exp === 'number' && exp % 1 === 0)) {
			return NaN;
		}
		// Shift
		value = value.toString().split('e');
		value = Math.floor(+(value[0] + 'e' + (value[1] ? +value[1] - exp : -exp)));
		// Shift back
		value = value.toString().split('e');
		return +(value[0] + 'e' + (value[1] ? +value[1] + exp : exp));
	}

	/**
	 * @description Utility function that creates the color scale for the color passed to the constructor.
	 * @returns Returns an object keyed to the color scale [100-900]
	 */
	createScale() {
		// Collect the predefined luminance scale, the color passed to the constructor, and initialize an empty object.
		const lightScale = { ...this.luminanceScale };
    const darkScale = { ...this.luminanceScale };
		const baseColorLight = this.color;
    const baseColorDark = [this.color[0] - 0.15, this.color[1], this.color[2]];
		const returnedLightScale = {};
    const returnedDarkScale = {};

		// Set the luminance value based on the calculated starting index.
		lightScale[this.index] = baseColorLight[0];

		// Loop through the copied luminance scale object...
		Object.entries(lightScale).forEach((item) => {
			const [key, value] = item;

			// ...and assign the key value pair to match the luminance value from the luminance scale, and the base color's chroma and hue.
			returnedLightScale[key] = chroma.lch(value, baseColorLight[1], baseColorLight[2]).hex();
		});

    Object.entries(darkScale).forEach((item) => {
			const [key, value] = item;

			// ...and assign the key value pair to match the luminance value from the luminance scale, and the base color's chroma and hue.
			returnedDarkScale[key] = chroma.lch(value, baseColorDark[1], baseColorDark[2]).hex();
		});

		return [returnedLightScale, returnedDarkScale];
	}

	/**
	 * @description Function that calculates the color scales base starting index.
	 * @returns Returns the index value as a whole number.
	 */
	startingIndex() {
		const luminanceValue = this.color[0];
		const brightestApproximate = ColorScale.roundDown(luminanceValue, 1);
		let index = 0;

		Object.entries(this.luminanceScale).forEach((luminance) => {
			const [key, value] = luminance;

			if (value === brightestApproximate) {
				index = key;
			}
		});

		return index;
	}

	/**
	 * @description A getter that returns the value from the scale creation utility.
	 */
	get scale() {
		return this.createScale();
	}

	/**
	 * @description A getter that returns the close approximation of the colors domain and name.
	 */
	colorName(mode) {
		// Get the domain color first. For example, red, orange, yellow, green, blue, indigo, violet.
		const scale = mode === 'dark' ? { ...this.createScale()[1] } : { ...this.createScale()[0] };

		let domain = '';
		let name = ntc.name(scale[400])[1].toLowerCase();

		const [h, s, l] = chroma(scale[400]).hsl();
		const hue = Math.floor(h);
    const saturation = Math.floor(s * 100);
    const lightness = Math.floor()

    if (saturation > 0 ) {
      if (hue >= 346 || hue <= 10) {
        domain = 'red';
      } else if (hue >= 11 && hue <= 50) {
        domain = 'orange';
      } else if (hue >= 51 && hue <= 60) {
        domain = 'yellow';
      } else if (hue >= 61 && hue <= 169) {
        domain = 'green';
      } else if (hue >= 170 && hue <= 200) {
        domain = 'cyan';
      } else if (hue >= 201 && hue <= 250) {
        domain = 'blue';
      } else if (hue >= 252 && hue <= 330) {
        domain = 'magenta';
      } else if (hue >= 331 && hue <= 346) {
        domain = 'pink';
      }
    } else {
      console.log("you're in the gray tones now, bby!");
      // TODO Calculate the
    }

    return {
      domain,
      name
    };
	}

  get lightScaleTokens() {
    const scaleObj = { ...this.scale[0] };
    const colorStemName = this.colorName('light');
    const { domain, name } = colorStemName;

    let modifiedValue = {}

    Object.entries(scaleObj).forEach(([key, value]) => {
      modifiedValue = {
        ...modifiedValue,
        [key]: {
          value,
          description: this.description,
          type: this.type,
          group: this.group
        }
      }
    });

    return {
      [domain]: {
        [name]: {
          ...modifiedValue
        }
      }
    }
  }

  get darkScaleTokens() {
    const scaleObj = { ...this.scale[0] };
    const colorStemName = this.colorName('dark');
    const { domain, name } = colorStemName;

    return {
      [domain]: {
        [name]: {
          ...scaleObj
        }
      }
    }
  }
}

function generateColorScale(hueChoices) {
  const { value, description, type, kingdom, category, group } = hueChoices;
  const tokenValues = new ColorScale(value, description, type, group).lightScaleTokens;

  return {
    tokenValues,
    kingdom,
    category
  }
}
// ===============================================