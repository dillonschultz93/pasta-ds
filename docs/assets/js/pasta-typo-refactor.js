// GENERIC FUNCTIONS:
console.log("tokens global var:");
console.log(tokens);


// returns min and max values from a key-values (coordinates) object
function findMinMax(coordObj,targetKey) {
  let min = coordObj[0][targetKey], max = coordObj[0][targetKey];
  for (let i = 1, len=coordObj.length; i < len; i++) {
    let v = coordObj[i][targetKey];
    min = (v < min) ? v : min;
    max = (v > max) ? v : max;
  }
  return [min, max];
}
// returns index for a given value from a key-values (coordinates) object
function findKeyIndex(coordObj,targetKey,targetValue) {
  let index = 0;
  for (let i = 0, len=coordObj.length; i < len; i++) {
    index = i;
    if (coordObj[i][targetKey] == targetValue) {
        break
    }
  }
  return index;
}
// return polynomial result using x and an array of its terms in order x^0 → x^n
function regress(x, terms) {
    var r = 0;
    var t = 1;
    for (var i in terms) {
      r += terms[i] * t;
      t *= x;
    }
    return r;
}

// BUILD HTML TABLE out of data
function buildPastaHTMlTable  (grandParentID_str, data_ArrayLikeObj, tableID_str = "", tableClasses_str = "", tdChildrenAndClass_obj = {}) {
  // initiate:
  // wrapper/parent div
  let theTableParent = document.createElement("div");
  theTableParent.classList.add("table-wrapper");
  // table
  let theTable = document.createElement("table");
  // attributes
  let extraClasses = "";
  tableClasses_str === undefined ? (extraClasses = "") : (extraClasses = tableClasses_str);   // check if extra classes are passed
  theTable.classList.add("generated" + extraClasses); // we inject at least the "generated" class
  tableID_str === "" ? (void(0)) : (theTable.id = tableID_str); // inject ID if exists

  // building the rows:
  [...data_ArrayLikeObj].forEach((item, index) => {
    theTable.insertRow();
    // building the TDs:
    Object.entries(item).forEach(([key, value], entryIndex) => {
      // console.log(`${entryIndex}: ${key} = ${value}`);
      let newCell = theTable.rows[theTable.rows.length - 1].insertCell();
      let theChild = newCell;
      // if children data-object exists and the Col index matches one children/td.key
      if (typeof(tdChildrenAndClass_obj) !== "undefined" && (entryIndex+1).toString() in tdChildrenAndClass_obj) {
        if (typeof tdChildrenAndClass_obj[(entryIndex+1).toString()].tag !== "undefined") {
          // creates a child
          theChild = document.createElement(tdChildrenAndClass_obj[entryIndex+1].tag);
          newCell.appendChild(theChild);
        }
        theChild.textContent = item[key];
        if (typeof tdChildrenAndClass_obj[entryIndex+1].class !== "undefined") {
          // a class key.value exists adds it to either the TD or its child (if exists)
          theChild.classList.add(tdChildrenAndClass_obj[entryIndex+1].class);
        }
      } else {
        newCell.textContent = item[key];
      }
    });
   });
 // building headers:
 // this has to come after the rows Cf. https://www.valentinog.com/blog/html-table/
 let theHeader = theTable.createTHead();
 let theHeaderRow = theHeader.insertRow(0);
 for (var key in data_ArrayLikeObj[1]) {
  let th = document.createElement("th");
  th.textContent = key;
  theHeaderRow.appendChild(th);
 };
 // inject:
 theTableParent.appendChild(theTable);
 document.getElementById(grandParentID_str).appendChild(theTableParent);
}



// Fetching global variable from the current Pasta Liquid page
const bodyGlobals = document.getElementsByTagName('body')[0];
// … to feed ↓

// GLOBALS
pastaGlobals = {
  "nameSpace": "YPL",
  // fetched (page dependent):
  "projectId": bodyGlobals.dataset.pastaProjectId,
  // globals
  // Naming Stems for UI Tokens:
  "nameStem_tk_UI_superChoice": "TKUI_SC",
  "nameStem_tk_UI_superMath": "TKUI_SM",
  "nameStem_tk_UI_math": "TKUI_M",
  "nameStem_tk_UI_choice": "TKUI_C",
  "nameStem_tk_UI_alias": "TKUI_A",
  "nameStem_tk_UI_decision": "TKUI_D",
  // Naming Stems for Content Tokens:
  "nameStem_tk_C_superChoice": "TK_C_SC",
  "nameStem_tk_C_superMath": "TK_C_SM",
  "nameStem_tk_C_math": "TK_C_M",
  "nameStem_tk_C_choice": "TK_C_C",
  "nameStem_tk_C_alias": "TK_C_A",
  "nameStem_tk_C_decision": "TK_C_D",
};


// ————————————————————————————————————————————————————————————————————
// OBJECTS · REFACTOR
// ————————————————————————————————————————————————————————————————————


//
// TYPOGRAPHY INSTANCE OBJECT
//
function typoInstance(instanceName) {
  this.name = instanceName; // string: 3-letter Pasta Project ID
};
Object.defineProperty(typoInstance, "family", {
  // string
  set: function family(nameString) {
    this._family = nameString;
  },
  get: function family() {
    return this._family;
  }
});
Object.defineProperty(typoInstance, "size", {
  // string
  set: function size(nameString) {
    this._size = nameString;
  },
  get: function size() {
    return this._size;
  }
});
Object.defineProperty(typoInstance, "weight", {
  // predefined value: 100, 200, 300, 400, 500, 600, 700, 800, 900
  set: function weight(predefinedInteger) {
    this._weight = predefinedInteger;
  },
  get: function weight() {
    return this._weight;
  }
});
Object.defineProperty(typoInstance, "tracking", {
  // string
  set: function tracking(nameString) {
    this._tracking = nameString;
  },
  get: function tracking() {
    return this._tracking;
  }
});
Object.defineProperty(typoInstance, "leadingRatio", {
  // decimal
  set: function leadingRatio(decimal) {
    this._leadingRatio = decimal;
  },
  get: function leadingRatio() {
    return this._leadingRatio;
  }
});
Object.defineProperty(typoInstance, "leading", {
  // decimal
  set: function leading(decimal) {
    this._leading = decimal;
  },
  get: function leading() {
    return this._leading;
  }
});
Object.defineProperty(typoInstance, "hAlign", {
  // https://www.figma.com/plugin-docs/api/TextNode/#textalignhorizontal
  set: function hAlign(predefinedStr) {
    this._hAlign = predefinedStr;
  },
  get: function hAlign() {
    return this._hAlign;
  }
});
Object.defineProperty(typoInstance, "vAlign", {
  // https://www.figma.com/plugin-docs/api/TextNode/#textalignvertical
  set: function vAlign(predefinedStr) {
    this._vAlign = predefinedStr;
  },
  get: function vAlign() {
    return this._vAlign;
  }
});
Object.defineProperty(typoInstance, "textCase", {
  // https://www.figma.com/plugin-docs/api/TextCase/
  // figma  ›  "ORIGINAL"  | "UPPER"   |   "LOWER"   | "TITLE"
  // css    ›  none        | uppercase |   lowercase | capitalize
  set: function textCase(predefinedStr) {
    this._textCase = predefinedStr;
  },
  get: function textCase() {
    return this._textCase;
  }
});
Object.defineProperty(typoInstance, "textDecoration", {
  // https://www.figma.com/plugin-docs/api/TextDecoration/
  // Figma   "NONE" | "UNDERLINE" | "STRIKETHROUGH"
  // css     none |  underline | line-through
  set: function textDecoration(predefinedStr) {
    this._textDecoration = predefinedStr;
  },
  get: function textDecoration() {
    return this._textDecoration;
  }
});
Object.defineProperty(typoInstance, "direction", {
  // https://www.figma.com/plugin-docs/api/TextDecoration/
  // css     LTR |  RTL
  set: function direction(predefinedStr) {
    this._direction = predefinedStr;
  },
  get: function direction() {
    return this._direction;
  }
});


// tests
let myH1 = new typoInstance("H1");
myH1.textCase = "UPPER";
let feedTest = {
  "tracking" : 0.2,
  "hAlign" : "LEFT",
  "size" : 16,
}
myH1 = feedTest;
myH1.leadingRatio = 1.2;
console.log(myH1);
console.log(myH1.leadingRatio);


//
// TYPOGRAPHY SET OBJECT
//
function TypographySet(typoSetID) {
  this.typoSetID = typoSetID; // string: Font-family-Set unique ID/Name that will be used as a term inside all related tokens names
};
Object.defineProperty(TypographySet, "fontNamesSet", {

  // object of weight and names, ie:
  //
  // {
  //   "200": {
  //     css: "europa-lightregular",
  //     figmaWeight: "Light",
  //     figma: "Europa-Light",
  //   },
  //   "400": {
  //     css: "europa-regularregular",
  //     figmaWeight: "Regular",
  //     figma: "Europa-Regular",
  //   },
  //   "700": {
  //     css: "europa-boldregular",
  //     figmaWeight: "Bold",
  //     figma: "Europa-Bold",
  //   }
  // }
  //
  // OR
  //
  // {
  //   "400": {
  //     css: "Roboto",
  //     figmaWeight: "Regular",
  //     figma: "Roboto",
  //   },
  //   "500": {
  //     css: "Roboto",
  //     figmaWeight: "Medium",
  //     figma: "Roboto",
  //   }
  // }

  set: function fontNamesSet(jsonOfWeighsNames) {
    this._fontNamesSet = jsonOfWeighsNames;
  },
  get: function fontNamesSet() {
    return this._fontNamesSet;
  }
});
Object.defineProperty(TypographySet, "sizesPicks", {
  // array of integers (or decimals) for all chosen/required font sizes
  set sizesPicks(arrayOfdecimals) {
    this._sizesPicks = arrayOfdecimals;
  },
  get sizesPicks() {
    return this._sizesPicks;
  }
});
Object.defineProperty(TypographySet, "leadingRatios", {
  // object of 3 pairs "tight", "regular", "loose" + leading ratio
  set leadingRatios(objectOf3pairs) {
    this._leadingRatios = objectOf3pairs;
  },
  get leadingRatios() {
    return this._leadingRatios;
  }
});
Object.defineProperty(TypographySet, "trackingRawData", {
 // object of {x:font-size, y:tracking} key-values pairs
  set trackingRawData(objectOfpairs) {
    this._trackingRawData = objectOfpairs;
  },
  get trackingRawData() {
    return this._trackingRawData;
  }
});
Object.defineProperty(TypographySet, "trackingPolynomATerms", {
  // array of terms of the polynomial function to approximate of lower sizes (x) of trackingRawData
  set trackingPolynomATerms(arrayOfFloats) {
    this._trackingPolynomATerms = arrayOfFloats;
  },
  get trackingPolynomATerms() {
    return this._trackingPolynomATerms;
  }
});
Object.defineProperty(TypographySet, "trackingPolynomBTerms", {
  // array of terms of the polynomial function to approximate the upper sizes (x) of trackingRawData
  set trackingPolynomBTerms(arrayOfFloats) {
    this._trackingPolynomBTerms = arrayOfFloats;
  },
  get trackingPolynomBTerms() {
    return this._trackingPolynomBTerms;
  }
});
Object.defineProperty(TypographySet, "trackingPolynomThreshold", {
  // font-size at which we want to switch from the polynomial A to the B
  set trackingPolynomThreshold(number) {
    this._trackingPolynomThreshold = number;
  },
  get trackingPolynomThreshold() {
    return this._trackingPolynomThreshold;
  }
});
Object.defineProperty(TypographySet, "trackingOverrides", {
  // array of manually overriden {size,tracking} key-values pairs
  set trackingOverrides(arrayOfpairs) {
    this._trackingOverrides = arrayOfpairs;
  },
  get trackingOverrides() {
    return this._trackingOverrides;
  }
});
Object.defineProperty(TypographySet, "trackingWeightStepUpCoef", {
  // decimal: tracking ratio applied to go to next-bolder +100 font-weight — default is 1, aka none
  set trackingWeightStepUpCoef(arrayOfpairs) {
    this._trackingWeightStepUpCoef = arrayOfpairs;
  },
  get trackingWeightStepUpCoef() {
    return this._trackingWeightStepUpCoef;
  }
});
Object.defineProperty(TypographySet, "decisions", {
  // object of typography decisions
  set decisions(arrayOftypoInstances) {
    this._decisions = arrayOftypoInstances;
  },
  get decisions() {
    return this._decisions;
  }
});
// METHODS
TypographySet.prototype.buildCHarts = function () {
  console.log("PROTO›››" + this.fontNamesSet);
};

//
// Refactor try
//

let fflTypoDefault = new TypographySet("EuropaSetA");
fflTypoDefault.fontNamesSet = [
  [400,"europa-regularregular"],
  [200,"europa-lightregular"],
  [600,"europa-boldregular"]
];
fflTypoDefault.leadingRatios = { "tight": 1, "regular" : 1.15, "loose" : 1.4};
fflTypoDefault.sizesPicks = [8,10,12,14,16,20,28,32,48,64,96,240];
fflTypoDefault.trackingRawData = [
  {x:6, y:0.23}, {x:7, y:0.22}, {x:8, y:0.20}, {x:9, y:0.18}, {x:10, y:0.15}, {x:11, y:0.12}, {x:12, y:0.07}, {x:13, y:0.05}, {x:14, y:0.03}, {x:15, y:0.00}, {x:16, y:-0.03}, {x:17, y:-0.07}, {x:18, y:-0.11}, {x:19, y:-0.15}, {x:20, y:-0.20}, {x:21, y:-0.21}, {x:22, y:-0.23}, {x:23, y:-0.25}, {x:24, y:-0.26}, {x:25, y:-0.27}, {x:26, y:-0.29}, {x:27, y:-0.32}, {x:28, y:-0.33}, {x:29, y:-0.34}, {x:30, y:-0.37}, {x:31, y:-0.39},
  {x:32, y:-0.41},
  {x:33, y:-0.42}, {x:34, y:-0.45}, {x:35, y:-0.48}, {x:36, y:-0.49}, {x:38, y:-0.52}, {x:40, y:-0.55}, {x:42, y:-0.57}, {x:44, y:-0.62}, {x:46, y:-0.65}, {x:48, y:-0.68}, {x:50, y:-0.71}, {x:52, y:-0.74}, {x:54, y:-0.79}, {x:58, y:-0.85}, {x:62, y:-0.91}, {x:66, y:-0.97}, {x:70, y:-1.06}, {x:72, y:-1.09}, {x:80, y:-1.21}, {x:88, y:-1.33}, {x:96, y:-1.50}, {x:100, y:-1.56}, {x:120, y:-1.88}, {x:140, y:-2.26}, {x:160, y:-2.58}, {x:180, y:-2.99}, {x:200, y:-3.32}, {x:220, y:-3.76}, {x:240, y:-4.22}, {x:260, y:-4.57}];
fflTypoDefault.trackingPolynomATerms = [
   3.6894866758367006e-002,
   7.8695512950762964e-002,
  -9.8107273906328802e-003,
   3.5325210292512206e-004,
  -4.2861117001397037e-006
];
fflTypoDefault.trackingPolynomBTerms = [
   1.1064758750207103e-001,
  -1.6587029761428184e-002,
   3.2970227119601515e-006,
  -3.5282674297130305e-008
];
fflTypoDefault.trackingPolynomThreshold = 32;
fflTypoDefault.trackingOverrides = [[16,0.2],[96,-1.5]];
fflTypoDefault.trackingWeightStepUpCoef = 1.05;
fflTypoDefault.decisions = {
  "h1": {
    "size": "48",
    "weight": "700"
  },
  "h2": {
    "size": "40",
    "weight": "700"
  },
  "h3": {
    "size": "32",
    "weight": "700"
  },
  "h4": {
    "size": "28",
    "weight": "700"
  },
  "h5": {
    "size": "24",
    "weight": "700"
  },
  "h6": {
    "size": "20",
    "weight": "700"
  },
  "h7": {
    "size": "18",
    "weight": "700"
  },
  "h8": {
    "size": "14",
    "weight": "700"
  },
  "p.medium.bold": {
    "size": "16",
    "weight": "700"
  }
}


// ————————————————————————————————————————————————————————————————————
// PRE REFACTOR ↓
// ————————————————————————————————————————————————————————————————————

// declaration ↓

const projectId = "FFL";
const typo_family_id = "AppleNY";
const typo_tracking_raw_data = [
  {x:6, y:0.23}, {x:7, y:0.22}, {x:8, y:0.20}, {x:9, y:0.18}, {x:10, y:0.15}, {x:11, y:0.12}, {x:12, y:0.07}, {x:13, y:0.05}, {x:14, y:0.03}, {x:15, y:0.00}, {x:16, y:-0.03}, {x:17, y:-0.07}, {x:18, y:-0.11}, {x:19, y:-0.15}, {x:20, y:-0.20}, {x:21, y:-0.21}, {x:22, y:-0.23}, {x:23, y:-0.25}, {x:24, y:-0.26}, {x:25, y:-0.27}, {x:26, y:-0.29}, {x:27, y:-0.32}, {x:28, y:-0.33}, {x:29, y:-0.34}, {x:30, y:-0.37}, {x:31, y:-0.39},
  {x:32, y:-0.41},
  {x:33, y:-0.42}, {x:34, y:-0.45}, {x:35, y:-0.48}, {x:36, y:-0.49}, {x:38, y:-0.52}, {x:40, y:-0.55}, {x:42, y:-0.57}, {x:44, y:-0.62}, {x:46, y:-0.65}, {x:48, y:-0.68}, {x:50, y:-0.71}, {x:52, y:-0.74}, {x:54, y:-0.79}, {x:58, y:-0.85}, {x:62, y:-0.91}, {x:66, y:-0.97}, {x:70, y:-1.06}, {x:72, y:-1.09}, {x:80, y:-1.21}, {x:88, y:-1.33}, {x:96, y:-1.50}, {x:100, y:-1.56}, {x:120, y:-1.88}, {x:140, y:-2.26}, {x:160, y:-2.58}, {x:180, y:-2.99}, {x:200, y:-3.32}, {x:220, y:-3.76}, {x:240, y:-4.22}, {x:260, y:-4.57}];
var typo_tracking_polyTerms_A = [
   3.6894866758367006e-002,
   7.8695512950762964e-002,
  -9.8107273906328802e-003,
   3.5325210292512206e-004,
  -4.2861117001397037e-006
];
var typo_tracking_polyThreshold = 32;
var typo_tracking_polyTerms_B = [
   1.1064758750207103e-001,
  -1.6587029761428184e-002,
   3.2970227119601515e-006,
  -3.5282674297130305e-008
];
var typo_tracking_weightStepUp_coef = 1.05;
var typo_picks = [8,10,12,14,16,20,24,32,40,48,64,96,240];
var typo_tracking_overrides = [[16,0.2],[96,-1.5]];

//
// manipulations ↓
//

var lowIndexes = typo_picks.filter(index => index <= typo_tracking_polyThreshold);
var highIndexes = typo_picks.filter(index => index > typo_tracking_polyThreshold);

// calculate tracking for low and high indexes/size fonts
var typo_tracking_choices_math = [
  ...lowIndexes.map(x => Math.round(((regress(x,typo_tracking_polyTerms_A) + Number.EPSILON) * 100)) / 100),
  ...highIndexes.map(x => Math.round(((regress(x,typo_tracking_polyTerms_B) + Number.EPSILON) * 100)) / 100)
];

// switch outputs values for overrides ↓
var typo_tracking_map = typo_picks.map(function (value, index) { return [value, typo_tracking_choices_math[index]]});
for (let override of typo_tracking_overrides) {
  let j = 0;
  for (let item of typo_tracking_map) {
    if (override[0] === item[0]) {
      typo_tracking_map[j][1] = override[1];
    }
    j += 1;
  }
}

// build HTML Tracking Table
let tableTDchildren = {
  "3": {
    "tag": "code"
  }
};
let tableTrackingInfo = [];  // font size | Tracking | Token
for (let entry of typo_tracking_map) {
  tableTrackingInfo.push(JSON.parse("{\"font size\": \"" + entry[0] + "\",\n\"tracking\": \"" + entry[1] + "\",\n" + "\"token\": " + "\"" + pastaGlobals.nameSpace + "." +  pastaGlobals.projectId + "." + pastaGlobals.nameStem_tk_UI_choice + ".typo" + ".typeFaceName" + ".tracking." + entry[0] + "\"}"));
}
console.log(tableTrackingInfo);
buildPastaHTMlTable ("main-content",tableTrackingInfo,"tracking",undefined,tableTDchildren);



var style = document.createElement("style");
style.type = "text/css";
style.id = "Pasta Tokens";
let styleArray = [];
// build HTML table
for (let row of typo_tracking_map) {
  let styleName = "." + projectId + "-TKSC_UI-typo-" + typo_family_id + "-letter_Spacing-" + row[0];
  styleArray.push(styleName + " { letter-spacing: " + row[1] + "pt; font-size: " + row[0] + "pt }");
}
style.innerHTML = styleArray.join("\n");
document.getElementsByTagName('head')[0].appendChild(style);


// building the Charts
highIndexes.unshift(typo_picks[0],typo_tracking_polyThreshold);

var thresholdIndex = findKeyIndex(typo_tracking_raw_data,"x",typo_tracking_polyThreshold);
var yMinAndMax = findMinMax(typo_tracking_raw_data,"y");
var xMinAndMax = findMinMax(typo_tracking_raw_data,"x");

var poly_A_dotsAll = [];
var poly_A_dotsLow = [];
var poly_B_dotsAll = [];
var poly_B_dotsLow = [];

// to add extra room on top and bottom of the charts
const yIndexPaddingCoef = 1.05;

// creates 2 array of corrdinates to build the charts for the 2 polynomials
for (let i = typo_tracking_raw_data[0].x; i < typo_tracking_raw_data[typo_tracking_raw_data.length-1].x+1; i += 1) {

    var plotAY = regress(i,typo_tracking_polyTerms_A);
    if(plotAY <= yMinAndMax[1]*yIndexPaddingCoef && plotAY >= yMinAndMax[0]*yIndexPaddingCoef) {
      poly_A_dotsAll.push({x:i, y:plotAY});
      if (i <= typo_tracking_polyThreshold){
        poly_A_dotsLow.push({x:i, y:plotAY});
      };
    }

    var plotBY = regress(i,typo_tracking_polyTerms_B);
    if(plotBY <= yMinAndMax[1]*yIndexPaddingCoef && plotBY >= yMinAndMax[0]*yIndexPaddingCoef) {
      poly_B_dotsAll.push({x:i, y:plotBY});
      if (i <= typo_tracking_polyThreshold){
        poly_B_dotsLow.push({x:i, y:plotBY});
      };
    }

};

var graphAdata = {
  series: [
    {
      name: "Hand-picked",
      data: typo_tracking_raw_data.slice(0,thresholdIndex+1)
    },
    {
      name: ["Polynomial ",Object.keys(typo_tracking_polyTerms_B).length-1,"º"].join(""),
      data: poly_B_dotsLow
    },
    {
      name: ["Polynomial ",Object.keys(typo_tracking_polyTerms_A).length-1,"º"].join(""),
      data: poly_A_dotsLow
    }
  ]
};
var Aoptions = {
  high: findMinMax(typo_tracking_raw_data.slice(0,thresholdIndex))[1]*yIndexPaddingCoef,
  low: findMinMax(typo_tracking_raw_data.slice(0,thresholdIndex))[0]*yIndexPaddingCoef,
  showArea: false,
  showLine: true,
  showPoint: false,
  fullWidth: true,
  axisX: {
    type: Chartist.FixedScaleAxis,
    ticks: lowIndexes
  },
  axisY: {
    labelInterpolationFnc: function(value, index) {
      return value*10 % 2 === 0 ? value : null;
    }
  },
  chartPadding: {
     right: 28,
     bottom: 80,
     left: 0
 },
  plugins: [Chartist.plugins.ctAxisTitle({
    axisX: {
      axisTitle: 'y: tracking   x: font-size   ·  unit:Pt',
      axisClass: 'ct-axis-title',
      offset: {
        x: 0,
        y: 45
      },
      textAnchor: 'middle'
    }
  }),
      Chartist.plugins.legend()
  ]
};
new Chartist.Line('#typo_tracking_typo_name_1', graphAdata, Aoptions);

var graphBdata = {
  series: [
    {
      name: "Hand-picked",
      data: typo_tracking_raw_data
    },
    {
      name: ["Polynomial ",Object.keys(typo_tracking_polyTerms_A).length-1,"º"].join(""),
      data: poly_A_dotsAll
    },
    {
      name: ["Polynomial ",Object.keys(typo_tracking_polyTerms_B).length-1,"º"].join(""),
      data: poly_B_dotsAll
    }
  ]
};
var Boptions = {
  high: findMinMax(typo_tracking_raw_data)[1]*yIndexPaddingCoef,
  low: findMinMax(typo_tracking_raw_data)[0]*yIndexPaddingCoef,
  showArea: false,
  showLine: true,
  showPoint: false,
  fullWidth: true,
  axisX: {
    type: Chartist.FixedScaleAxis,
    ticks: highIndexes
  },
  axisY: {
    labelInterpolationFnc: function(value, index) {
      return value*10 % 2 === 0 ? value : null;
    }
  },
  chartPadding: {
     right: 28,
     bottom: 80,
     left: 0
 },
  plugins: [Chartist.plugins.ctAxisTitle({
    axisX: {
      axisTitle: 'y: tracking   x: font-size   ·  unit:Pt',
      axisClass: 'ct-axis-title',
      offset: {
        x: 0,
        y: 45
      },
      textAnchor: 'middle'
    }
  }),
      Chartist.plugins.legend()
  ]
};
new Chartist.Line('#typo_tracking_typo_name_2', graphBdata, Boptions);
