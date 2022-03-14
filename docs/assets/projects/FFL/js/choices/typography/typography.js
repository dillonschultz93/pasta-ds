// -----------------------------------------------
// PASTA TYPOGRAPHY SCRIPT
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

import { getFontFamily, getLeading, getTracking } from '../../apparatuses/typography/index.js';
import { buildOutputTable, handleCopyToClipboard } from '../../../../../js/pasta-utilities/pasta-doc-utilities.js';
import { rawTokens, flattenTokens } from '../../../../../js/pasta-utilities/pasta-token-generation.js';

const TRACKING_DATA = [
	{ x: 10, y: 1 },
	{ x: 12, y: 1.2 },
	{ x: 14, y: 0.49 },
	{ x: 18, y: 0 },
	{ x: 20, y: 0 },
	{ x: 24, y: -0.24 },
	{ x: 28, y: -0.28 },
	{ x: 32, y: -0.64 },
	{ x: 48, y: -0.96 },
	{ x: 96, y: -2.88 },
];

const TYPOGRAPHY_CHOICES = JSON.parse(localStorage.getItem('typography'));

const TYPE_SCALE = [10, 12, 14, 16, 18, 20, 24, 32, 48, 64, 96];

const TYPE_SPECIMEN = [14, 16, 18, 20, 24, 28, 32, 40, 48];

const NOMENCLATURE_OPTIONS = {
  fontFamily: {
    namespace: 'YPL',
    project: 'FFL',
    kingdom: 'TKUI_M'
  },
};

let allTokens = {
  fontFamily: {},
};

// FONT FAMILY
allTokens.fontFamily = rawTokens(NOMENCLATURE_OPTIONS.fontFamily, 'fontFamily', TYPOGRAPHY_CHOICES.fontFamily);

buildOutputTable('fontFamily-table', flattenTokens(allTokens.fontFamily));

// LEADING

// TRACKING STUFF ↓

const handpickedTrackingData = {
  series: [
    {
      name: 'Handpicked Tracking',
      data: TRACKING_DATA,
      className: 'handpicked-tracking'
    }
  ]
}

const trackingApparatusOutputData = {
	series: [
		{
			name: 'Pasta apparatus',
			data: TYPE_SCALE.map((item) => ({ x: item, y: getTracking(item, 32) })),
      className: 'apparatus-tracking'
		},
	],
};

new Chartist.Line('#tracking-apparatus-output', trackingApparatusOutputData, {
	showArea: false,
	showLine: true,
	showPoint: false,
	fullWidth: true,
	axisX: {
		type: Chartist.FixedScaleAxis,
		ticks: TYPE_SCALE,
	},
	axisY: {
		labelInterpolationFnc: function (value, index) {
			return (value * 10) % 2 === 0 ? value : null;
		},
	},
	chartPadding: {
		right: 28,
		bottom: 80,
		left: 0,
	},
	plugins: [
		Chartist.plugins.ctAxisTitle({
			axisX: {
				axisTitle: 'Y: Tracking · X: Font Size · Unit: Pt',
				axisClass: 'ct-axis-title',
				offset: {
					x: 0,
					y: 45,
				},
				textAnchor: 'middle',
			},
		}),
		// Chartist.plugins.legend(),
	],
});

new Chartist.Line('#hand-picked-tracking-points', handpickedTrackingData, {
	showArea: false,
	showLine: false,
	showPoint: true,
	fullWidth: true,
	axisX: {
		type: Chartist.FixedScaleAxis,
		ticks: TYPE_SCALE,
	},
	axisY: {
		labelInterpolationFnc: function (value, index) {
			return (value * 10) % 2 === 0 ? value : null;
		},
	},
	chartPadding: {
		right: 28,
		bottom: 80,
		left: 0,
	},
  plugins: [
		Chartist.plugins.ctAxisTitle({
			axisX: {
				axisTitle: 'Y: Tracking · X: Font Size · Unit: Pt',
				axisClass: 'ct-axis-title',
				offset: {
					x: 0,
					y: 45,
				},
				textAnchor: 'middle',
			},
		}),
		// Chartist.plugins.legend(),
	],
});

const generateTrackingTable = () => {
  const table = document.querySelector('#typo-tracking-table');
  const tbody = table.querySelector('tbody');


  TYPE_SPECIMEN.forEach(item => {
    const detailRow = document.createElement('tr');
    const exampleRow = document.createElement('tr');
    const sizeCell = document.createElement('td');
    const trackingCell = document.createElement('td');
    const exampleCell = document.createElement('td');

    const letterSpacing = getTracking(item, 32);



    sizeCell.className = 'noBorder';
    sizeCell.textContent = `Size: ${item}`;

    trackingCell.className = 'noBorder';
    trackingCell.textContent = `Tracking: ${letterSpacing}`;

    exampleCell.colSpan = 3;
    exampleCell.innerHTML = `<span class="Europa-ed-r" style="font-size: ${item}px; letter-spacing: ${letterSpacing}px;">Heading & Friends</span>`

    detailRow.appendChild(sizeCell);
    detailRow.appendChild(trackingCell);

    exampleRow.appendChild(exampleCell);

    tbody.appendChild(detailRow);
    tbody.appendChild(exampleRow);
  });
}

generateTrackingTable();
