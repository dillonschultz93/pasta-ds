// -----------------------------------------------
// PASTA SCRIPT
// -----------------------------------------------
// Description: all generic functions generally required by other Pasta scripts
// Authors: Manuel Colom · manuel.colom@yummly.com
// ToDo: refactor and make this less hacky
// -----------------------------------------------
const copyright = {
// Copyright (c) 2021 Yummly, Inc.
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
}

// console.log(tokens);
// Object.entries(tokens.colors).forEach((item, i) => {
//   console.log(item);
// });

// Fetching global variable from the current Pasta Liquid Page
// const bodyGlobals = document.getElementsByTagName('body')[0];
// const projectId = bodyGlobals.dataset.pastaProjectId;
// const pagePermalinkSuffix = bodyGlobals.dataset.pastaPagePermalink;
// const pastaBaseurl = bodyGlobals.dataset.pastaBaseurl;

window.allTokens = {};


// --------------
// SCALES
// --------------

window.scalesCluster = {
    "base": 2,
    "ratio": 2,
    "baseIndex": 400,
    "choices": [8,10,12,14,16,18,20,24,28,32,40,48,60,96,144,192,256,512],
    "scales": {}
}
// generate a scale from minIndex to maxIndex using equationEvalStr
console.warn("FIXME: generateNewScale() should be turned into a scalesCluster method");
function generateNewScale (scaleStem = "defaultScale", base = 2, ratio = 2, baseIndex = 400, equationEvalStr = "base * (8 + (index - baseIndex)/100)", minIndex = 100 , maxIndex = 900) {
  console.warn("FIXME: do not use eval()");
  // a global ↓ scaleCluster is required
  scalesCluster.scales[scaleStem] = {};
  for (var index = minIndex; index < maxIndex+1; index += 100) {
    // myArray.push(eval(equationEvalStr));
    scalesCluster.scales[scaleStem][index.toString()] = eval(equationEvalStr);
  }
  // console.log(myArray);
}
// generates all scales inside the scales cluster using the funtion above ↑
// functionGeoA
generateNewScale("geoA",scalesCluster.base,scalesCluster.ratio,scalesCluster.baseIndex,"Math.round(base * ratio**((200 + index - baseIndex)/100))",100,1100);
// functionArithA
generateNewScale("arithA",scalesCluster.base,scalesCluster.ratio,scalesCluster.baseIndex,"base * (8 + (index - baseIndex)/100)",100,1400);
// functionArithB
generateNewScale("arithB",scalesCluster.base,scalesCluster.ratio,scalesCluster.baseIndex,"Math.round(base * ratio**2) + (Math.round(base * ratio**2))*((index - 400)/100)",700,2000);
// functionArithC
generateNewScale("arithC",scalesCluster.base,scalesCluster.ratio,scalesCluster.baseIndex,"(Math.round(base * ratio**2) + (Math.round(base * ratio**2))*((index - 500)/100))*1.5",700,2000);


// returns an object of all Math tokens
function generateAllMathTokens(scalesCluster,tokenPrefix) {
  let tokenCluster = {} ;
  Object.entries(scalesCluster.scales).forEach(([scale, pairs]) => {
    Object.entries(pairs).forEach(([key, value]) => {
      tokenCluster[tokenPrefix + scale + "." + key] = value;
    });
  });
  return tokenCluster;
}
let allScalesTokens = generateAllMathTokens(scalesCluster,"YPL."+projectId+".TKUI_M.scales.");


// filters all Scales Math using scalesCluster.choices, and associates each with math token
const scalesChoices = {};
const { choices: choicesValues } = scalesCluster; // extracts the "choices" array from cluster object
// populates scalesChoices with of all chosen-values/tokens pairs
// creates a json string for raw tokens/value pairs
Object.entries(allScalesTokens).forEach((item, i) => {
  if (choicesValues.includes(item[1])) {
    scalesChoices[item[0]] = item[1];
  }
});
console.log(scalesChoices);

// spit out a HTML-table with all the Scales Math Tokens
function createDataForTable (allScalesTokens) {
  let tokensData = {} ;
  let index = 0;
  Object.entries(allScalesTokens).forEach(([key, value]) => {
    tokensData[index.toString()] = {
      "index": key.split(".")[key.split(".").length-1],
      "value (pt)": value,
      "token": key
    }
    index += 1;
  });
  return tokensData;
}
let dataForTable = createDataForTable(allScalesTokens);
let tableTDchildren = {
  "3": {
    "tag": "code"
  }
};
// inject Math Tabe in DOM
YPL_buildHTMlTable ("mathOutputCollector",dataForTable,"AllMathOutputs ","All Math Outputs Table", undefined,tableTDchildren);


// inject Raw Tokens in DOM Code
YPL_buildCodeSection ("RawTokensScalesCollector",YPL_generateRawTokens(scalesChoices),"ID-FigmaSpaceTokens");


// Generates Scales Figma Tokens
const figmaTokensJsonString = YPL_generateFigmaTokens(scalesChoices,"Pasta Apparatus: https://yummly.github.io/pasta/" + pagePermalinkSuffix,"other");
// inject in DOM
YPL_buildCodeSection ("FigmaTokensScalesCollector",figmaTokensJsonString,"YPL-FigmaTokensScales");



// --------------
// SPACES
// --------------

// window.spaces = [8,12,16,32,64];

window.spaces = {
  "xs"  : 4,
  "s"   : 8,
  "m"   : 16,
  "l"   : 32,
  "xl"  : 64,
  "xxl" : 128
}

let spacesTokens = {};
Object.entries(spaces).forEach(([key,value]) => {
  spacesTokens["YPL."+projectId+".TKUI_C.spaces." + key] = "$" + YPL_getKeyByValue(scalesChoices,value);
});
// inject Code in DOM
YPL_buildCodeSection ("RawTokensSpacesCollector",YPL_generateRawTokens(spacesTokens),"ID-FigmaSpaceTokens");


const figmaTokensSpaces = YPL_generateFigmaTokens(spacesTokens,"Pasta Apparatus: https://yummly.github.io/pasta/" + pagePermalinkSuffix,"spacing");
// inject Code in DOM
YPL_buildCodeSection ("FigmaTokensSpacesCollector",figmaTokensSpaces,"ID-FigmaSpaceTokens");


// --------------
// STATIC SIZES
// --------------


window.staticSizes = {
  "xs"  : 1,
  "s"   : 2,
  "m"   : 3,
  "l"   : 4
}

// creates raw tokens object
let staticSizesTokens = {};
Object.entries(staticSizes).forEach(([key,value]) => {
  staticSizesTokens["YPL."+projectId+".TKUI_C.sizes.static." + key] = value;
});
// inject Code in DOM
YPL_buildCodeSection ("RawTokensStaticSpacesCollector",YPL_generateRawTokens(staticSizesTokens),"RawTokensStaticSpacesCollector");

// create figma tokens
const figmaTokensStaticSizes = YPL_generateFigmaTokens(staticSizesTokens,"Pasta Apparatus: https://yummly.github.io/pasta/" + pagePermalinkSuffix,"sizing");
// inject Code in DOM
YPL_buildCodeSection ("FigmaTokensStaticSpacesCollector",figmaTokensStaticSizes,"FigmaTokensStaticSpacesCollector");

// --------------
// FACTORS
// --------------

window.factors = {
  "allText"  : 1,
  "allTextW_OButton"  : 1,
  "buttonText"  : 1,
  "buttonW_OText"   : 1,
  "buttonAll"   : 1,
  "WCAG_1_4_4_AA"   : 2
}

// creates raw tokens object
let factorsTokens = {};
Object.entries(factors).forEach(([key,value]) => {
  factorsTokens["YPL."+projectId+".TKUI_C.factors." + key] = value;
});
// inject Code in DOM
YPL_buildCodeSection ("RawTokensFactorsCollector",YPL_generateRawTokens(factorsTokens),"RawTokensFactorsCollector");

// create figma tokens
const figmaTokensFactors = YPL_generateFigmaTokens(factorsTokens,"Pasta Apparatus: https://yummly.github.io/pasta/" + pagePermalinkSuffix,"other");
// inject Code in DOM
YPL_buildCodeSection ("FigmaTokensFactorsCollector",figmaTokensFactors,"FigmaTokensFactorsCollector");

let factorsAliases = {}
let factorsKeys = Object.keys(factorsTokens);
let i = 1;
Object.entries(factorsTokens).forEach(([key,value]) => {
  factorsAliases["F"+i] = "$" + key;
  i += 1;
});
// creates raw tokens object
let factorsAliasesTokens = {};
Object.entries(factorsAliases).forEach(([key,value]) => {
  factorsAliasesTokens["YPL."+projectId+".TKUI_A." + key] = value;
});
// inject Code in DOM
YPL_buildCodeSection ("RawTokensFactorsAliasCollector",YPL_generateRawTokens(factorsAliasesTokens),"RawTokensFactorsAliasCollector");


// create figma tokens
const figmaTokensFactorsAliases = YPL_generateFigmaTokens(factorsAliasesTokens,"Pasta Apparatus: https://yummly.github.io/pasta/" + pagePermalinkSuffix,"other");
// inject Code in DOM
YPL_buildCodeSection ("FigmaTokensFactorsAliasCollector",figmaTokensFactorsAliases,"figmaTokensFactorsAliases");





// GENERAL LAST CALLS · After all the rest has been YPL_buildHTMlTable// Call general
YPL_addCopyToClipboardToCodeNodes(pastaBaseurl);
