import { getTracking } from '../../apparatuses/typography/tracking.js';
import { getLeading } from '../../apparatuses/typography/leading.js';

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

const LEADING_DATA = [
  { x: 14, y: 16.8 },
  { x: 16, y: 19.2 },
  { x: 18, y: 21.6 },
  { x: 20, y: 24 },
  { x: 24, y: 28.8 },
  { x: 28, y: 33.6 },
  { x: 32, y: 38.4 },
  { x: 40, y: 41.6 },
  { x: 48, y: 50.4 },
];

const TYPE_SCALE = [10, 12, 14, 16, 18, 20, 24, 32, 48, 64, 96];

const TYPE_SPECIMEN = [14, 16, 18, 20, 24, 28, 32, 40, 48];

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
			data: TYPE_SCALE.map((item) => ({ x: item, y: getTracking(item) })),
      className: 'apparatus-tracking'
		},
	],
};

const handpickedLeadingData = {
  series: [
    {
      name: 'Handpicked Leading',
      data: LEADING_DATA,
      className: 'handpicked-tracking'
    }
  ]
}

const leadingApparatusOutputData = {
	series: [
		{
			name: 'Pasta apparatus',
			data: TYPE_SPECIMEN.map((item) => ({ x: item, y: getLeading(item) })),
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

new Chartist.Line('#leading-apparatus-output', leadingApparatusOutputData, {
	showArea: false,
	showLine: true,
	showPoint: false,
	fullWidth: true,
	axisX: {
		type: Chartist.FixedScaleAxis,
		ticks: TYPE_SPECIMEN,
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

new Chartist.Line('#hand-picked-leading-points', handpickedLeadingData, {
	showArea: false,
	showLine: false,
	showPoint: true,
	fullWidth: true,
	axisX: {
		type: Chartist.FixedScaleAxis,
		ticks: TYPE_SPECIMEN,
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

    const letterSpacing = getTracking(item);



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
