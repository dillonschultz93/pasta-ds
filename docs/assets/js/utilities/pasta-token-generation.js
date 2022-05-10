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
  const { choice = choiceObject.options || choiceObject.value, description, kingdom, category, apparatusTags, UIDs, dictionary } = choiceObject;

  let modifiedValue = {};

  if (typeof choice === 'object') {
    Object.entries(choice).forEach(([k, v]) => {
      modifiedValue = {
        ...modifiedValue,
        [k]: {
          ...v,
          description,
          apparatusTags,
          UIDs,
          dictionary
        }
      }
    });
  } else {
    modifiedValue = {
      "value": choice,
      description,
      type,
      apparatusTags,
      UIDs,
      dictionary
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
    if (value && typeof value === 'object' && !Array.isArray(value)) {
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

 const flattenRecursion = (currentItem, prop) => {
   if (Object(currentItem) !== currentItem) {
     output[prop] = currentItem;
   } else if (Array.isArray(currentItem)) {
     currentItem.forEach((item, index) => {
       flattenRecursion(item, prop + '[' + index + ']');
     });

     if (currentItem.length === 0) {
       output[prop] = [];
     }
   } else {
     let isEmpty = true;

     for (let p in currentItem) {
       isEmpty = false;

       flattenRecursion(currentItem[p], prop ? prop + '.' + p : p);
     }

     if (isEmpty && prop) {
       output[prop] = {};
     }
   }
 }

 flattenRecursion(rawTokens, '');

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
 * @description Creates an object that contains the category's token value(s).
 * @param {Object} nomenclatureOptions - An object that contains the properties for namespace, project, and kingdom.
 * @param {Object} data - The choice object from the config object.
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
    parsedData = {
      ...parsedData,
      [key]: value
    }
  });

  return parsedData;
}

function flattenTokenValues(rawTokens) {
  const data = flatten(rawTokens);
  let parsedData = {};
  
  // Parse out the value of the token and delete entries that don't have the 'value' property
  Object.entries(data).forEach(([key, value]) => {
    const splitKeys = key.split('.');
    const isValuePropKey = splitKeys[splitKeys.length - 1] === 'value';

    if (!isValuePropKey) {
      delete data[key];
    } else {
      parsedData = {
        ...parsedData,
        [key]: value
      }
    }
  });

  return parsedData;
}

function formatFigmaValues(value) {
  if (typeof value === 'string') {
    if (value.includes('.value}')) {
      return value.replaceAll('.value}', '}');
    } else {
      return value;
    }
  } else {
    return value;
  }
}

function figmaFormat(rawTokens) {
  const data = flatten(rawTokens);

  let parsedData = {};

  Object.entries(data).forEach(([key, value]) => {
    const splitKeys = key.split('.');
    const isFigmaPropKey = splitKeys[splitKeys.length - 2] === 'figma';

    if (isFigmaPropKey) {
      const newKey = `${splitKeys.slice(0, splitKeys.length - 3).join('.')}.${splitKeys[splitKeys.length - 1]}`;

      parsedData = {
        ...parsedData,
        [newKey]: formatFigmaValues(value)
      }
    } else {
      parsedData = {
        ...parsedData,
        [key]: formatFigmaValues(value)
      }
    }
  });

  return unflatten(parsedData);
}

function compileTokens(tokensArray) {
  return tokensArray.reduce(deepMerge, {});
}