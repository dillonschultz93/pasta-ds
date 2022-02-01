// -----------------------------------------------
// PASTA APPARATUS: SPACE
// -----------------------------------------------
// Description: Functions that generate the necessary space tokens.
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

/**
 * @description Generates all spacing tokens as choices using the scale tokens as values.
 * @param {Object} namingOptions - The object containing naming options for the prefix of each token.
 * @param {string} description - A string representing the description of the token. This is specifically for the Figma Tokens plugin.
 * @param {string} type - The type or category that the token falls into. This is specifically for the Figma Tokens plugin.
 */
export function generateAllSpaceTokens(namingOptions, description, type) {
  // Collect the prefix string
  const prefix = prefixBuilder(namingOptions);
  let spacesOutput = {};

  // TODO Define all of the undefined values.
  const spaces = {
    "xs": "$undefined",
    "s": "$YPL.FFL.TKUI_M.scales.geoA.400",
    "m": "$YPL.FFL.TKUI_M.scales.geoA.500",
    "l": "$YPL.FFL.TKUI_M.scales.geoA.600",
    "xl": "$undefined",
    "xxl": "$undefined"
  };

  Object.entries(spaces).forEach(space => {
    const [key, value] = space;

    spacesOutput[`${prefix}.spaces.${key}`] = {
      value,
      description,
      type
    };
  });

  return spacesOutput;
}