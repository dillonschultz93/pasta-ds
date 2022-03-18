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
  const { value, description, type, kingdom, category } = scaleChoices;
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
              type
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
              type
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
              type
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
              type
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