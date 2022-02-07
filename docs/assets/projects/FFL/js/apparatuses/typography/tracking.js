// -----------------------------------------------
// PASTA APPARATUS: TRACKING
// -----------------------------------------------
// Description: Functions that generate the necessary tracking/letter spacing tokens.
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
 * @description Generate the tracking/letter spacing tokens based off of an initial set of design choices of tracking.
 * @param {Array<object>} initialData - An array of objects with the x and y key value pairs.
 * @param {Number} degree - An integer that represents the order/degree of the regression.
 * @returns Returns the model constructed from the initial data and order, and an array of regression terms.
 */
function regressionTerms(trackingChoices, degree) {
  const model = new PolynomialRegression(trackingChoices, degree);

  return [model, model.getTerms()];
}

export function getTracking (fontSize) {
  const TRACKING_CHOICES = [
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

  const largerFontChoices = TRACKING_CHOICES.filter(choice => choice.x >= 32);
  const smallerFontChoices = TRACKING_CHOICES.filter(choice => choice.x <= 32);

  if (fontSize <= 32) {
    const [model, terms] = regressionTerms(smallerFontChoices, (smallerFontChoices.length - 1));

    return Math.round(100 * model.predictY(terms, fontSize)) / 100;
  } else {
    const [model, terms] = regressionTerms(largerFontChoices, (largerFontChoices.length - 1));

    return Math.round(100 * model.predictY(terms, fontSize)) / 100;
  }
}
