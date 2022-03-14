// -----------------------------------------------
// PASTA TOKEN GENERATION
// -----------------------------------------------
// Description: A collection of scripts that expose functions that format token key value pairs.
// Authors: Manuel Colom · manuel.colom@yummly.com, Dillon Schultz · dillon.schultz@yummly.com
// TODO:
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

// A utility function that deep merges multiple token objects.
function deepMerge(target, source) {
  Object.entries(source).forEach(([key, value]) => {
    if (value && typeof value === 'object') {
      deepMerge(target[key] = target[key] || {}, value);
      return;
    }

    target[key] = value;
  });

  return target;
}

/**
 * @description Creates an object that contains the category's token value(s).
 * @param {Object} nomenclatureOptions - An object that contains the properties for namespace, project, and kingdom.
 * @param {*} category - A string representing the category the tokens are in.
 * @param {*} data - Any type that represents the value of the token.
 */
function rawTokens(nomenclatureOptions, data) {
  // Destructure the nomenclature options and the incoming data.
  const { namespace, project } = nomenclatureOptions;
  const { tokenValues, kingdom, category } = data;

  let extractedValue = {};

  // Loop through the token values so that we can just assign the value property to the property category key.
  Object.entries(tokenValues).forEach(([key, val]) => {
    let nestedExtractedValue = {};

    // Check if there are nested token values and resolve those.
    if (!val.value) {
      Object.entries(val).forEach(([k, v]) => {
        nestedExtractedValue = {
          ...nestedExtractedValue,
          [k]: v.value
        }
      });
    }

    // Assign the token extracted value property to the proper category key.
    extractedValue = {
      ...extractedValue,
      [key]: val.value || nestedExtractedValue
    };
  });

  return {
    [namespace]: {
      [project]: {
        [kingdom]: {
          [category]: {...extractedValue}
        }
      }
    }
  }
}

/**
 * @description Creates an object that contains the category's token value(s).
 * @param {Object} nomenclatureOptions - An object that contains the properties for namespace, project, and kingdom.
 * @param {*} category - A string representing the category the tokens are in.
 * @param {*} data - Any type that represents the value of the token.
 */
 function figmaTokens(nomenclatureOptions, data) {
  const { namespace, project } = nomenclatureOptions;
  const { tokenValues, kingdom, category } = data;

  return {
    [namespace]: {
      [project]: {
        [kingdom]: {
          [category]: tokenValues
        }
      }
    }
  }
}

/**
 * @description Flattens the raw nested token object into a single object.
 * @param {Object} rawTokens - The token object in an object format.
 */
function flattenTokens(rawTokens) {
 const output = {};

 const flatten = (currentItem, prop) => {
   if (Object(currentItem) !== currentItem) {
     output[prop] = currentItem;
   } else if (Array.isArray(currentItem)) {
     currentItem.forEach((item, index) => {
       flatten(item, prop + '[' + index + ']');
     });

     if (currentItem.length === 0) {
       output[prop] = [];
     }
   } else {
     let isEmpty = true;

     for (let p in currentItem) {
       isEmpty = false;

       flatten(currentItem[p], prop ? prop + '.' + p : p);
     }

     if (isEmpty && prop) {
       output[prop] = {};
     }
   }
 }

 flatten(rawTokens, '');

 return output;
}

function compileTokens(tokensArray) {
  return tokensArray.reduce(deepMerge, {});
}
