// -----------------------------------------------
// PASTA SCRIPT
// -----------------------------------------------
// Description: all generic functions required by other Pasta scripts
// Authors: Manuel Colom · manuel.colom@yummly.com
// ToDo: refactor and make this less hacky
// Copyright (c) 2021 Yummly, Inc.
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
const apparatusDefaultClass = "YPL-apparatusBaby";

// basic function that returns a Key given a value
export function YPL_getKeyByValue(object, value) {
  return Object.keys(object).find(key => object[key] === value);
}

// generate a JSON string with RAW values of tokens — except for typo for now — needs update to allows sub-objects
export function YPL_generateRawTokens(rawTokens_object) {
  let jsonString = "{";
  Object.entries(rawTokens_object).forEach((item, i) => {
    jsonString += "\n   \"" + item[0] + "\": \"" + item[1] + "\","
  });
  jsonString = jsonString.slice(0, -1) + "\n}";
  return jsonString;
}
// generate a JSON string that is Figma-Tokens-Plugin compliant — except for typo for now — needs update to allows sub-objects
export function YPL_generateFigmaTokens(rawTokens_object,description_str,type_str) {
  let jsonString = "{";
  Object.entries(rawTokens_object).forEach((item, i) => {
    jsonString += "\n   \"" + item[0] + "\": {\n" + "      \"value\": \"" + item[1] + "\",\n      \"description\": \"" + description_str + "\",\n      \"type\": \"" + type_str + "\"\n   },"
  });
  jsonString = jsonString.slice(0, -1) + "\n}";
  return jsonString;
}



// build HTML table out of data with index as main keys · HTML collapsable Details as a parent option is activated by having collapsableSummary_str != ""
export function YPL_buildHTMlTable (grandParentID_str, data_object, eldestID_str = "", collapsableSummary_str = "", eldestClasses_str = "", tdChildrenAndClass_obj = {}) {
  // initiate:
  // wrapper/parent div
  let theTableParent = document.createElement("div");
  theTableParent.classList.add("table-wrapper");
  // table
  let theTable = document.createElement("table");

  // define CSS classes
  let extraClasses = "";
  eldestClasses_str === undefined ? (extraClasses = "") : (extraClasses = eldestClasses_str);   // check if extra classes are passed
  // loop
  Object.keys(data_object).forEach((item, i) => {
    // console.log(item);
    theTable.insertRow();
    // building the TDs:
    Object.entries(data_object[item]).forEach(([key, value], entryIndex) => {
      let newCell = theTable.rows[theTable.rows.length - 1].insertCell();
      let theChild = newCell;
      // if children data-object exists and the Col index matches one children/td.key
      if (typeof(tdChildrenAndClass_obj) !== "undefined" && (entryIndex+1).toString() in tdChildrenAndClass_obj) {
        if (typeof tdChildrenAndClass_obj[(entryIndex+1).toString()].tag !== "undefined") {
          // creates a child inside the TD
          theChild = document.createElement(tdChildrenAndClass_obj[entryIndex+1].tag);
          newCell.appendChild(theChild);
        }
        // theChild.textContent = item[key];
        theChild.textContent = value;
        if (typeof tdChildrenAndClass_obj[entryIndex+1].class !== "undefined") {
          // a class key.value exists adds it to either the TD or its child (if exists)
          theChild.classList.add(tdChildrenAndClass_obj[entryIndex+1].class);
        }
      } else {
        // newCell.textContent = item[key];
        newCell.textContent = value;
      }
    });
   });
 // building headers:
 // this has to come after the rows Cf. https://www.valentinog.com/blog/html-table/
 let theHeader = theTable.createTHead();
 let theHeaderRow = theHeader.insertRow(0);
  Object.entries(data_object[Object.keys(data_object)[0]]).forEach(([key, value]) => {
   let th = document.createElement("th");
   th.textContent = key;
   theHeaderRow.appendChild(th);
 });
 // inject:
 theTableParent.appendChild(theTable);

 if (collapsableSummary_str !== "") {
   let theCollapsable = document.createElement("details");

   // Inject ID and Extra Classes
   eldestID_str === "" ? (void(0)) : (theCollapsable.id = eldestID_str);
   theCollapsable.classList.add(apparatusDefaultClass + extraClasses);

   let theCollapsableSummary = document.createElement("summary");
   theCollapsableSummary.textContent = collapsableSummary_str;
   theCollapsable.appendChild(theCollapsableSummary);  theCollapsable.appendChild(theTableParent);
   document.getElementById(grandParentID_str).appendChild(theCollapsable);
 } else {

   // Inject ID and Extra Classes
   eldestID_str === "" ? (void(0)) : (theTableParent.id = eldestID_str);
   theTableParent.classList.add(apparatusDefaultClass + extraClasses);

   document.getElementById(grandParentID_str).appendChild(theTableParent);
 }
};
// build HTML Code/Figure · HTML collapsable Details as a parent option is activated by having collapsableSummary_str != ""
export function YPL_buildCodeSection (grandParentID_str, code_str, eldestID_str = "", collapsableSummary_str = "", eldestClasses_str = "") {
  let extraClasses = "";
  let theCodeWrapper = document.createElement("figure");
  theCodeWrapper.classList.add("highlight", "highlighter-rouge");
  let thePreTag = document.createElement("pre");
  theCodeWrapper.appendChild(thePreTag);
  let theCode = document.createElement("code");
  thePreTag.appendChild(theCode);

  eldestClasses_str === undefined ? (extraClasses = "") : (extraClasses = eldestClasses_str);   // check if extra classes are passed
  theCode.classList.add("language-json");
  theCode.setAttribute("data-lang", "json");
  theCode.textContent = code_str;


  if (collapsableSummary_str !== "") {
    let theCollapsable = document.createElement("details");
    // Inject ID and Extra Classes
    theCollapsable.classList.add(apparatusDefaultClass + extraClasses);
    eldestID_str === "" ? (void(0)) : (theCollapsable.id = eldestID_str);
    // build details children
    let theCollapsableSummary = document.createElement("summary");
    theCollapsableSummary.textContent = collapsableSummary_str;
    theCollapsable.appendChild(theCollapsableSummary);  theCollapsable.appendChild(theCodeWrapper);
    // Append
    document.getElementById(grandParentID_str).appendChild(theCollapsable);
  } else {
    // Inject ID and Extra Classes
    theCodeWrapper.classList.add(apparatusDefaultClass + extraClasses);
    eldestID_str === "" ? (void(0)) : (theCodeWrapper.id = eldestID_str);
    // Append
    document.getElementById(grandParentID_str).appendChild(theCodeWrapper);
  }
}


// Add a Copy to Clipboard Control to Code Nodes
function copyToClipboard() {
  const str = this.parentElement.innerText
  const el = document.createElement('textarea');
  el.value = str;
  el.setAttribute('readonly', '');
  el.style.position = 'absolute';
  el.style.left = '-9999px';
  document.body.appendChild(el);
  el.select();
  document.execCommand('copy');
  document.body.removeChild(el);
}
export function YPL_addCopyToClipboardToCodeNodes (pastaBaseURL) {
  const codeElements = document.querySelectorAll("pre > code");
  codeElements.forEach(element => {
    let copyButton = document.createElement('div');
    copyButton.classList.add("copyCodeButton");
    let icon = document.createElement("img");
    icon.src = pastaBaseURL + "/assets/images/YPL-icon-addToclipBoard.svg";
    copyButton.appendChild(icon);
    element.appendChild(copyButton);
    copyButton.addEventListener("click", copyToClipboard, false);
  });
  console.warn("FIXME: inject SVG element instead of image ↑");
}
