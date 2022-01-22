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

/**
 * @description A function that creates a JSON string from a token object.
 * @param {Object} tokenObj - The token object with all apparatus tokens.
 * @returns {string} A JSON string.
 */
export function rawTokens(tokenObj) {
  let rawToken = {};

  Object.entries(tokenObj).forEach(token => {
    const [key, value] = token;

    rawToken[key] = {};

    if (value.value) {
      rawToken[key] = value.value;
    } else {
      Object.entries(value).forEach(item => {
        const [nestedKey, nestedValue] = item;

        rawToken[key][nestedKey] = nestedValue.value;
      });
    }
  });

  return JSON.stringify(rawToken, null, 2);
}

/**
 * @description A function that creates a JSON string formatted to be copied into the Figma Tokens plugin.
 * @param {Object} tokenObj - The token object with all apparatus tokens.
 * @param {string} description - The description of the token.
 * @param {string} type - The type of token enumerated to a string.
 * @returns A JSON string.
 */
export function figmaTokens(tokenObj) {
  let figmaToken = {};

  Object.entries(tokenObj).forEach(token => {
    const [key, value] = token;

    figmaToken[key] = value;
  });

  return JSON.stringify(figmaToken, null, 2);
}