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
import { generateAllScaleTokens, generateAllSpaceTokens, generateAllStaticSizeTokens, generateFactorsTokens, generateBreakpointTokens } from '../../apparatuses/dimension/index.js';
import { buildScaleTable, buildOutputTable, handleCopyToClipboard } from '../../../../../js/pasta-utilities/pasta-doc-utilities.js';

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
const SCALE_OPTIONS = {
  base: 2,
  ratio: 2,
  baseIndex: 400,
  choices: [8,10,12,14,16,18,20,24,28,32,40,48,60,96,144,192,256,512],
};

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

function initScalesSection() {
  // Generate all scale tokens.
  allTokens.scale = generateAllScaleTokens(['geoA', 'arithA', 'arithB'], SCALE_OPTIONS, NOMENCLATURE_OPTIONS.scale, 'Pasta Apparatus: https://yummly.github.io/pasta/farfalle/tokens/dimensions', 'other');
  // // Generate a new table based on the scales.
  buildScaleTable('scales-table', SCALE_INDEX, SCALE_OPTIONS.baseIndex, allTokens.scale, SCALE_OPTIONS.choices);

  // // Generate a new detail summary view based on all of the formatted tokens.
  buildOutputTable('output-table', allTokens.scale);
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
        SCALE_OPTIONS[event.target.id] = parseInt(event.target.value);

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
    handleCopyToClipboard('raw', allTokens.scale);
  });

  scaleFigmaButton.addEventListener('click', () => {
    handleCopyToClipboard('figma', allTokens.scale);
  });
}
// // -----------------------------------------------

// // -----------------------------------------------
// // SPACES
// // -----------------------------------------------
function initSpacesSection() {
  allTokens.space = generateAllSpaceTokens(NOMENCLATURE_OPTIONS.space, 'Pasta Apparatus: https://yummly.github.io/pasta/farfalle/tokens/dimensions', 'spacing');

  buildOutputTable('spaces-table', allTokens.space);
}

function initSpacesEventListeners() {
  spacesRawJSONButton.addEventListener('click', () => {
    handleCopyToClipboard('raw', allTokens.space);
  });

  spacesFigmaButton.addEventListener('click', () => {
    handleCopyToClipboard('figma', allTokens.space);
  });
}
// // -----------------------------------------------

// // -----------------------------------------------
// // STATIC SIZES
// // -----------------------------------------------
function initStaticSizesSection() {
  allTokens.staticSize = generateAllStaticSizeTokens(NOMENCLATURE_OPTIONS.staticSize, 'Pasta Apparatus: https://yummly.github.io/pasta/farfalle/tokens/dimensions', 'sizing');
  buildOutputTable('static-sizes-table', allTokens.staticSize);
}

function initStaticSizesEventListeners() {
  staticSizesRawJSONButton.addEventListener('click', () => {
    handleCopyToClipboard('raw', allTokens.staticSize);
  });

  staticSizesFigmaButton.addEventListener('click', () => {
    handleCopyToClipboard('figma', allTokens.staticSize);
  });
}
// // -----------------------------------------------

// // -----------------------------------------------
// // FACTORS
// // -----------------------------------------------
function initFactorsSection() {
  allTokens.factor = generateFactorsTokens(NOMENCLATURE_OPTIONS.factor, 'Pasta Apparatus: https://yummly.github.io/pasta/farfalle/tokens/dimensions', 'other');
  buildOutputTable('factor-table', allTokens.factor);
}

function initFactorsEventListeners() {
  factorsRawJSONButton.addEventListener('click', () => {
    handleCopyToClipboard('raw', allTokens.factor);
  });

  factorsFigmaButton.addEventListener('click', () => {
    handleCopyToClipboard('figma', allTokens.factor);
  });
}
// // -----------------------------------------------

// // -----------------------------------------------
// // BREAKPOINTS
// // -----------------------------------------------
function initBreakpointSection() {
  allTokens.breakpoint = generateBreakpointTokens(NOMENCLATURE_OPTIONS.breakpoint, 'Pasta Apparatus: https://yummly.github.io/pasta/farfalle/tokens/dimensions', 'other');
  buildOutputTable('breakpoint-table', allTokens.breakpoint);
}

function initBreakpointEventListeners() {
  breakpointRawJSONButton.addEventListener('click', () => {
    handleCopyToClipboard('raw', allTokens.breakpoint);
  });

  breakpointFigmaButton.addEventListener('click', () => {
    handleCopyToClipboard('figma', allTokens.breakpoint);
  });
}
// -----------------------------------------------

function initAllDimensionsEventListeners() {
  allDimensionsRawJSONButton.addEventListener('click', () => {
    handleCopyToClipboard('raw', allTokens);
  });

  allDimensionsFigmaButton.addEventListener('click', () => {
    handleCopyToClipboard('figma', allTokens);
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

