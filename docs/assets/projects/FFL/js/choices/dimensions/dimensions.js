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

// Import the necessary apparatuses and utilities
import { generateDimensionScale, generateSpaces, generateStaticSizes, generateFactors, generateBreakpoints } from '../../apparatuses/dimension/index.js';
import { buildScaleTable, buildOutputTable, handleCopyToClipboard } from '../../../../../js/pasta-utilities/pasta-doc-utilities.js';
import { compileTokens, rawTokens, flattenTokens, figmaTokens } from '../../../../../js/pasta-utilities/pasta-token-generation.js';

// Collect the DOM selectors
const scaleInputs = [...document.querySelectorAll('.scalingInputs')];
const scaleRawJSONButton = document.querySelector('#RawTokensScalesCollector button');
const scaleFigmaButton = document.querySelector('#FigmaTokensScalesCollector button');
const spacesRawJSONButton = document.querySelector('#RawTokensSpacesCollector button');
const spacesFigmaButton = document.querySelector('#FigmaTokensSpacesCollector button');
const staticSizesRawJSONButton = document.querySelector('#RawTokensStaticsizeCollector button');
const staticSizesFigmaButton = document.querySelector('#FigmaTokensStaticsizeCollector button');
const factorsRawJSONButton = document.querySelector('#RawTokensFactorsCollector button');
const factorsFigmaButton = document.querySelector('#FigmaTokensFactorsCollector button');
const breakpointRawJSONButton = document.querySelector('#RawTokensBreakpointCollector button');
const breakpointFigmaButton = document.querySelector('#FigmaTokensBreakpointCollector button');
const allDimensionsRawJSONButton = document.querySelector("#RawTokensDimensionsCollector");
const allDimensionsFigmaButton = document.querySelector("#FigmaTokensDimensionsCollector");

// -----------------------------------------------
// SCALES
// -----------------------------------------------
let allTokens = {
  scale: {},
  space: {},
  staticSize: {},
  factor: {},
  breakpoint: {}
}

// Set a constant options and state object.
const DIMENSION_CHOICES = JSON.parse(localStorage.getItem('dimensions'));

// Set a constant array of index values.
const SCALE_INDEX = [
  100,
  200,
  300,
  400,
  500,
  600,
  700,
  800,
  900,
  1000,
  1100,
  1200,
  1300,
  1400,
  1500,
  1600,
  1700,
  1800,
  1900,
  2000
];

const NOMENCLATURE_OPTIONS = {
  scale: {
    namespace: 'YPL',
    project: window.projectId,
    kingdom: 'TKUI_M'
  },
  space: {
    namespace: 'YPL',
    project: window.projectId,
    kingdom: 'TKUI_C'
  },
  staticSize: {
    namespace: 'YPL',
    project: window.projectId,
    kingdom: 'TKUI_C'
  },
  factor: {
    namespace: 'YPL',
    project: window.projectId,
    kingdom: 'TKUI_C'
  },
  breakpoint: {
    namespace: 'YPL',
    project: window.projectId,
    kingdom: 'TKUI_C'
  }
};

const state = {...DIMENSION_CHOICES.scale};

function initScalesSection() {
  // Generate all scale tokens.
  const generatedScales = compileTokens(['geoA', 'arithA', 'arithB'].map(stem => generateDimensionScale(stem, state.base, state.ratio, state.baseIndex)));

  allTokens.scale = rawTokens(NOMENCLATURE_OPTIONS.scale, 'scales', generatedScales);

  // // Generate a new table based on the scales.
  buildScaleTable('scales-table', SCALE_INDEX, state.baseIndex, flattenTokens(allTokens.scale), state.choices);

  // // Generate a new detail summary view based on all of the formatted tokens.
  buildOutputTable('output-table', flattenTokens(allTokens.scale));
};

function initScalesEventListeners() {
  // Add event listeners to all the scale inputs to make the table reactive to the inputs.
  scaleInputs.forEach(input => {
    input.addEventListener("input", event => {
      // If the value is less than the minimum value set on the input, then force the value to the minimum.
      if (event.target.value < event.target.min) {
        event.target.value = event.target.min;
      }

      // Only react to changes from the inputs if the value from the event isn't empty or null.
      if (event.target.value !== '') {
        // Collect the table body selector.
        const tableBody = document.querySelector('#scales-table tbody');
        const outputTableBody = document.querySelector('#output-table tbody');

        // Set the new state of the scale token.
        state[event.target.id] = parseInt(event.target.value);

        // Empty out the table body contents.
        tableBody.innerHTML = '';
        outputTableBody.innerHTML = '';

        // Initialize a new table body.
        initScalesSection();
      }

      return;
    });
  });

  scaleRawJSONButton.addEventListener('click', () => {
    handleCopyToClipboard(allTokens.scale);
  });

  scaleFigmaButton.addEventListener('click', () => {
    const figmaFormat = figmaTokens(allTokens.scale, 'https://https://yummly.github.io/pasta/farfalle/tokens/dimensions-refactor', 'other');
    handleCopyToClipboard(figmaFormat);
  });
}
// // -----------------------------------------------

// // -----------------------------------------------
// // SPACES
// // -----------------------------------------------
function initSpacesSection() {
  // allTokens.space = generateSpaces(NOMENCLATURE_OPTIONS.space, 'Pasta Apparatus: https://yummly.github.io/pasta/farfalle/tokens/dimensions', 'spacing');
  const generatedSpaces = generateSpaces(DIMENSION_CHOICES.space);

  allTokens.space = rawTokens(NOMENCLATURE_OPTIONS.space, 'spaces', generatedSpaces);

  buildOutputTable('spaces-table', flattenTokens(allTokens.space));
}

function initSpacesEventListeners() {
  spacesRawJSONButton.addEventListener('click', () => {
    handleCopyToClipboard(allTokens.space);
  });

  spacesFigmaButton.addEventListener('click', () => {
    const figmaFormat = figmaTokens(allTokens.space, 'https://https://yummly.github.io/pasta/farfalle/tokens/dimensions-refactor', 'spacing');    handleCopyToClipboard('figma', allTokens.space);

    handleCopyToClipboard(figmaFormat);
  });
}
// // -----------------------------------------------

// // -----------------------------------------------
// // STATIC SIZES
// // -----------------------------------------------
function initStaticSizesSection() {
  const generatedStaticSizes = generateStaticSizes(DIMENSION_CHOICES.staticSize);
  
  allTokens.staticSize = rawTokens(NOMENCLATURE_OPTIONS.staticSize, 'staticSizes', generatedStaticSizes)
  
  buildOutputTable('static-sizes-table', flattenTokens(allTokens.staticSize));
}

function initStaticSizesEventListeners() {
  staticSizesRawJSONButton.addEventListener('click', () => {
    handleCopyToClipboard(allTokens.staticSize);
  });

  staticSizesFigmaButton.addEventListener('click', () => {
    const figmaFormat = figmaTokens(allTokens.staticSize, 'https://https://yummly.github.io/pasta/farfalle/tokens/dimensions-refactor', 'sizing');
    
    handleCopyToClipboard(figmaFormat);
  });
}
// // -----------------------------------------------

// // -----------------------------------------------
// // FACTORS
// // -----------------------------------------------
function initFactorsSection() {
  const generatedFactors = generateFactors(DIMENSION_CHOICES.factor);

  allTokens.factor = rawTokens(NOMENCLATURE_OPTIONS.factor, 'factors', generatedFactors);

  buildOutputTable('factor-table', flattenTokens(allTokens.factor));
}

function initFactorsEventListeners() {
  factorsRawJSONButton.addEventListener('click', () => {
    handleCopyToClipboard(allTokens.factor);
  });

  factorsFigmaButton.addEventListener('click', () => {
    const figmaFormat = figmaTokens(allTokens.factor, 'https://yummly.github.io/pasta/farfalle/tokens/dimensions', 'other');
    handleCopyToClipboard(figmaFormat);
  });
}
// // -----------------------------------------------

// // -----------------------------------------------
// // BREAKPOINTS
// // -----------------------------------------------
function initBreakpointSection() {
  const generatedBreakpoints = generateBreakpoints(DIMENSION_CHOICES.breakpoint);

  allTokens.breakpoint = rawTokens(NOMENCLATURE_OPTIONS.breakpoint, 'breakpoints', generatedBreakpoints);

  buildOutputTable('breakpoint-table', flattenTokens(allTokens.breakpoint));
}

function initBreakpointEventListeners() {
  breakpointRawJSONButton.addEventListener('click', () => {
    handleCopyToClipboard(allTokens.breakpoint);
  });

  breakpointFigmaButton.addEventListener('click', () => {
    const figmaFormat = figmaTokens(allTokens.breakpoint, 'https://yummly.github.io/pasta/farfalle/tokens/dimensions', 'other');

    handleCopyToClipboard(figmaFormat);
  });
}
// -----------------------------------------------

function initAllDimensionsEventListeners() {
  const compiledTokens = compileTokens(Object.values(allTokens));

  allDimensionsRawJSONButton.addEventListener('click', () => {
    handleCopyToClipboard(compiledTokens);
  });

  allDimensionsFigmaButton.addEventListener('click', () => {
    const figmaFormat = figmaTokens(compiledTokens, 'https://yummly.github.io/pasta/farfalle/tokens/dimensions', 'other')
    handleCopyToClipboard(figmaFormat);
  });
}

function initializeAll() {
  initScalesSection();
  initSpacesSection();
  initStaticSizesSection();
  initFactorsSection();
  initBreakpointSection();

  initScalesEventListeners();
  initSpacesEventListeners();
  initStaticSizesEventListeners();
  initFactorsEventListeners();
  initBreakpointEventListeners();
  initAllDimensionsEventListeners();
}

initializeAll();

