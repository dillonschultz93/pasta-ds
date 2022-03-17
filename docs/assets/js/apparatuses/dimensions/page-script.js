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

// Destructure super choices
const { dimensions } = superChoices
const { breakpoints, factors, scale, spaces, staticSizes } = dimensions;

// Generate tokens and store by category
const tokensByCategory = {
  breakpoints: {
    raw: generateTokens(nomenclatureOptions, getBreakpoints(breakpoints)),
    figma: generateTokens(nomenclatureOptions, getBreakpoints(breakpoints))
  },
  factors: {
    raw: generateTokens(nomenclatureOptions, getFactors(factors)),
    figma: generateTokens(nomenclatureOptions, getFactors(factors))
  },
  scales: {
    raw: generateTokens(nomenclatureOptions, generateDimensionScale(scale)),
    figma: generateTokens(nomenclatureOptions, generateDimensionScale(scale))
  },
  spaces: {
    raw: generateTokens(nomenclatureOptions, getSpaces(spaces)),
    figma: generateTokens(nomenclatureOptions, getSpaces(spaces))
  },
  staticSizes: {
    raw: generateTokens(nomenclatureOptions, getStaticSizes(staticSizes)),
    figmaTokens: generateTokens(nomenclatureOptions, getStaticSizes(staticSizes))
  }
}

// Collect all DOM selectors
const allTables = [...document.querySelectorAll('.output-table')];
const allCopyTokensButtons = [...document.querySelectorAll('.copy-token-btn')];

allTables.forEach(table => buildOutputTable(table, tokensByCategory));
allCopyTokensButtons.forEach(button => {
  button.addEventListener('click', () => handleCopyTokensToClipboard(button, tokensByCategory));
});
