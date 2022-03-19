// -----------------------------------------------
// PASTA DIMENSION SCRIPT
// -----------------------------------------------
// Description: all generic functions generally required by other Pasta scripts
// Authors: Manuel Colom · manuel.colom@yummly.com, Dillon Schultz · dillon.schultz@yummly.com
// TODO: refactor and make this less hacky
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

// // Destructure super choices
const { dimensions, typography, color } = superChoices;

function createTokenSet(dimensions, typography, color) {
  const { breakpoints, factors, scale, spaces, staticSizes } = dimensions;
  const { fontFamily, leading, paragraphSpacing, trackingThreshold } = typography;
  const { primary, secondary } = color;

  // Create dimension set
  const breakpointSet = generateTokens(nomenclatureOptions, getBreakpoints(breakpoints));
  const factorsSet = generateTokens(nomenclatureOptions, getFactors(factors));
  const scaleSet = generateTokens(nomenclatureOptions, generateDimensionScale(scale));
  const spacesSet = generateTokens(nomenclatureOptions, getSpaces(spaces));
  const staticSizesSet = generateTokens(nomenclatureOptions, getStaticSizes(staticSizes));

  const dimensionSet = compileTokens([breakpointSet, factorsSet, scaleSet, spacesSet, staticSizesSet]);

  // Create typography set
  const fontFamilySet = generateTokens(nomenclatureOptions, getFontFamily(fontFamily));
  const leadingSet = generateTokens(nomenclatureOptions, getLeading(leading));
  const paragraphSpacingSet = generateTokens(nomenclatureOptions, getParagraphSpacing(paragraphSpacing));
  const trackingThresholdSet = generateTokens(nomenclatureOptions, getTrackingThreshold(trackingThreshold));

  const typographySet = compileTokens([fontFamilySet, leadingSet, paragraphSpacingSet, trackingThresholdSet]);

  // Create color set
  const primaryColorScaleSet = generateTokens(nomenclatureOptions, generateColorScale(primary));
  const secondaryColorScaleSet = generateTokens(nomenclatureOptions, generateColorScale(secondary));

  const colorSet = compileTokens([primaryColorScaleSet, secondaryColorScaleSet]);

  // Compile all sets down to a single token set
  return compileTokens([dimensionSet, typographySet, colorSet]);
}

function initChoices() {
  return createTokenSet(dimensions, typography, color);
}

function getTokens() {
  const preresolvedTokens = initChoices();

  return resolveOverrides(preresolvedTokens, overrideOptions);
}

const allTokens = getTokens();

// THIS IS WHERE WE ARE DOING DOM MANIPULATION

// Collect all DOM selectors
const allTables = [...document.querySelectorAll('.output-table')];
const allCopyTokensButtons = [...document.querySelectorAll('.copy-token-btn')];

// Set up all tables
allTables.forEach(table => buildOutputTable(table, allTokens));

// Set up all copy to clipboard buttons
allCopyTokensButtons.forEach(button => {
  button.addEventListener('click', () => handleCopyTokensToClipboard(button, allTokens));
});
