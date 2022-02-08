// -----------------------------------------------
// PASTA APPARATUS: LEADING
// -----------------------------------------------
// Description: Functions that generate the necessary leading/line height tokens.
// Authors: Manuel Colom · manuel.colom@yummly.com, Dillon Schultz · dillon.schultz@yummly.com
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

// Import the polynomial regression class.
import PolynomialRegression from '../../../../../js/pasta-utilities/pasta-math-regression.js';

/**
 * @description Creates a model and terms to assist in generating tracking values.
 * @param {Array<object>} leadingChoices - An array of objects with the x and y key value pairs.
 * @param {Number} degree - An integer that represents the order/degree of the regression.
 * @returns Returns the model constructed from the initial data and order, and an array of regression terms.
 */
function regressionTerms(trackingChoices, degree) {
  const model = new PolynomialRegression(trackingChoices, degree);

  return [model, model.getTerms()];
}

/**
 * @description A function that gets the predicted leading value based off of a desired font size.
 * @param {Number} fontSize - An integer that represents the font size.
 * @returns Returns a floating point number rounded to the nearest hundredths place.
 */
export function getLeading (fontSize) {
  const LEADING_CHOICES = [
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

  const [model, terms] = regressionTerms(LEADING_CHOICES, 4);

  return Math.round(100 * model.predictY(terms, fontSize)) / 100;
}