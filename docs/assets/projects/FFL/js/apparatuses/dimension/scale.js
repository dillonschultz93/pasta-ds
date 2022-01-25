// -----------------------------------------------
// PASTA APPARATUS: SCALE
// -----------------------------------------------
// Description: Functions that generate the necessary scale tokens.
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

import { prefixBuilder } from '../../../../../js/pasta-utilities/pasta-token_naming.js';

// ------------------------------------------------
// SCALING ALGORITHMS
// ------------------------------------------------

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
// ------------------------------------------------

/**
 * @description Generates a scale from a minimum index to a maximum index using a scaling algorithm.
 * @param {string} scaleStem - The token stem name of the scale being generated.
 * @param {Number} base - The base value that the algorithm runs off of.
 * @param {Number} ratio - The ratio in which the algorithm will scale.
 * @param {Number} baseIndex - The base index.
 * @param {Number} min - The minimum range.
 * @param {Number} max - The maximum range.
 * @returns {Array<Object>}
 */
function generateNewScale(scaleStem, base, ratio, baseIndex) {
  // Create a new object with the key matching the scale stem and initialize it with the scale stem as the named property.
  let initObj = {};
  initObj[scaleStem] = {};

  // Set the min and max amount of exposed indexes.
  let min = 100;
  let max = 1100;

  // TODO Figure out a way to set the min and max outside of this function, but for now this is fine.
  if (scaleStem === 'arithA') {
    max = 1600
  } else if (scaleStem === 'arithB') {
    min = 800;
    max = 2000;
  }

  for (let index = min; index < max + 1; index += 100) {
    // Create a new variable to hold the scale value.
    let scaleVal = 0;

    switch (scaleStem) {
      case 'geoA':
        scaleVal = geoA(base, ratio, baseIndex, index);
        break;

      case 'arithA':
        scaleVal = arithA(base, baseIndex, index);
        break;

      case 'arithB':
        scaleVal = arithB(base, ratio, index);
        break;

      default:
        scaleVal = geoA(base, ratio, baseIndex, index);
        break;
    }

    initObj[scaleStem][index.toString()] = scaleVal;
  };

  return initObj;
};

/**
 * @description Generates all scale tokens using a set of algorithms based off of the scale options that are passed as a parameter.
 * @param {Array<string>} scales - An array of the enumerated scales.
 * @param {Object} scaleOptions - The object with all of the scale options like base, baseIndex, and ratio.
 * @param {Object} namingOptions - The object containing naming options for the prefix of each token.
 * @param {string} description - A string representing the description of the token. This is specifically for the Figma Tokens plugin.
 * @param {string} type - The type or category that the token falls into. This is specifically for the Figma Tokens plugin.
 */
export function generateAllScaleTokens(scales, scaleOptions, namingOptions, description, type) {
  // Collect the prefix string.
  const prefix = prefixBuilder(namingOptions);

  // Destructure the values from the scale options object.
  const { base, ratio, baseIndex } = scaleOptions;

  const scalesOutput = {};

  // Loop through each scale and generate scales based off of their stem.
  scales.forEach(scale => {
    const rawTokenGroup = generateNewScale(scale, base, ratio, baseIndex);

    Object.entries(rawTokenGroup).forEach(tokenGroup => {
      const [ group, tokens ] = tokenGroup;

      Object.entries(tokens).forEach(token => {
        const [index, value] = token;

        scalesOutput[`${prefix}.scales.${group}.${index}`] = {
          value,
          description,
          type
        };
      });
    });
  });

  return scalesOutput;
}