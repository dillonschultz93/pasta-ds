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

// A utility function that parses the contents of each config option
function parseChoices(choiceObject) {
  const { choice = choiceObject.options || choiceObject.value, description, type, kingdom, category, group } = choiceObject;

  let modifiedValue = {};

  if (typeof choice === 'object') {
    Object.entries(choice).forEach(([k, v]) => {
      modifiedValue = {
        ...modifiedValue,
        [k]: {
          ...v,
          description,
          type,
          group
        }
      }
    });
  } else {
    modifiedValue = {
      "value": choice,
      description,
      type,
      group
    }
  }

  return {
    tokenValues: modifiedValue,
    kingdom,
    category
  }
}

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
 * @description Flattens the raw nested token object into a single object.
 * @param {Object} rawTokens - The token object in an object format.
 */
function flatten(rawTokens) {
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

function unflatten(flatTokens) {
  if (Object(flatTokens) !== flatTokens || Array.isArray(flatTokens))
        return flatTokens;
    var regex = /\.?([^.\[\]]+)|\[(\d+)\]/g,
        output = {};
    for (var p in flatTokens) {
        var cur = output,
            prop = "",
            m;
        while (m = regex.exec(p)) {
            cur = cur[prop] || (cur[prop] = (m[2] ? [] : {}));
            prop = m[2] || m[1];
        }
        cur[prop] = flatTokens[p];
    }
    return output[""] || output;
}

/**
 * @description Resolves the override options and deep merges them into the overall token object.
 * @param {Object} preresolvedTokens - Object of tokens that need to be resolved
 * @param {Object} overrideOptions - Object of override options from the config.
 */
function resolveOverrides(preresolvedTokens, overrideOptions) {
  const overrides = unflatten(overrideOptions);

  return compileTokens([preresolvedTokens, overrides]);
}

/**
 * @description Generates a set of tokens.
 * @param {Object} nomenclatureOptions - An object that contains the properties for namespace, project, and kingdom.
 * @param {*} category - A string representing the category the tokens are in.
 * @param {*} data - Any type that represents the value of the token.
 */
 function generateTokens(nomenclatureOptions, data) {
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

function flattenTokens(rawTokens) {
  const data = flatten(rawTokens);
  let parsedData = {};
  
  // Parse out the value of the token and delete entries that don't have the 'value' property
  Object.entries(data).forEach(([key, value]) => {
    const splitKeys = key.split('.');
    const isValuePropKey = splitKeys[splitKeys.length - 1] === 'value';

    if (!isValuePropKey) {
      delete data[key];
    } else {
      let newKey = key.split('.').slice(0, -1).join('.');

      parsedData = {
        ...parsedData,
        [newKey]: value
      }
    }
  });

  return parsedData;
}

function compileTokens(tokensArray) {
  return tokensArray.reduce(deepMerge, {});
}
