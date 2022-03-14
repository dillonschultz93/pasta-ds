// -----------------------------------------------
// PASTA DOCUMENTATION UTILITIES
// -----------------------------------------------
// Description: all generic functions required by other Pasta scripts
// Authors: Manuel Colom · manuel.colom@yummly.com, Dillon Schultz · dillon.schultz@yummly.com
// ToDo: refactor and make this less hacky
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
 * @description A function that builds the contents/<tbody> of the scales table.
 * @param {string} tableID - The id attribute of the table.
 * @param {Array<Number>} indexValues - An array of token indexes.
 * @param {Number} baseIndex - The base index of the scales.
 * @param {Object} scales - The object of key value pairs of each scale.
 * @param {Array<Number>} choices - An array of values that are currently used on the product.
 */
function buildScaleTable(tableID, indexValues, baseIndex, scales, choices) {
  const tableBody = document.querySelector(`#${tableID} tbody`);
  const tableHeaders = [...document.querySelector(`#${tableID} thead tr`).children];

  // Generate the initial rows of the table.
  indexValues.forEach(item => {
    // Create a <tr> element and <td> element.
    const row = document.createElement('tr');

    // Assign the <tr> and <td> the value of the index.
    row.id = item;

    tableHeaders.forEach(heading => {
      const cell = document.createElement('td');

      cell.className = heading.id;

      // Style the cell that has the base index.
      if (cell.className === 'index') {
        item === baseIndex ? cell.innerHTML = `<strong>•  ${item}</strong>` : cell.textContent = item;
      } else {
        scales[`YPL.FFL.TKUI_M.scales.${cell.className}.${item}`] ? cell.textContent = scales[`YPL.FFL.TKUI_M.scales.${cell.className}.${item}`] : cell.textContent = '-';

        if (scales[`YPL.FFL.TKUI_M.scales.${cell.className}.${item}`]) {
          choices.includes(scales[`YPL.FFL.TKUI_M.scales.${cell.className}.${item}`]) ? cell.className = 'textbold' : cell.className = 'textfaded';
        } else {
          cell.className = 'textfaded';
        }
      }

      row.appendChild(cell);
    });

    // Append the <td> to the <tr> and append the <tr> to the <tbody>
    tableBody.appendChild(row);
  });
};

/**
 * @description - A function that builds the contents of the scales output table.
 * @param {string} tableID - The id attribute of the <table> element.
 * @param {Object} allTokens - The object representing all scale tokens.
 * @todo Refactor so that it scales to the amount of header columns rather than relying on always expecting three columns.
 */
function buildOutputTable(tableElement, tokens) {
  const tableBody = tableElement.querySelector('tbody');
  const columns = [...tableElement.querySelectorAll('thead tr th')];
  const category = tableElement.dataset.choiceCategory;
  
  const data = flattenTokens(tokens[category].raw);

  Object.entries(data).forEach(([key, value]) => {
    const splitKeys = key.split('.');
    const index = splitKeys[splitKeys.length - 1];

    const tr = document.createElement('tr');

    columns.forEach((column, i) => {
      const cell = document.createElement('td');

      switch (i) {
        case 0:
          cell.textContent = index;
          break;

        case 1:
          cell.textContent = value;
          break;

        case 2:
          cell.innerHTML = `<span data-toolclip="${key}"><code class="language-plaintext highlighter-rouge">Token Key</code></span>`;
          cell.addEventListener('click', () => handleCopyToClipboard(key));
          break;

        default:
          break;
      }

      tr.appendChild(cell);
    });

    tableBody.appendChild(tr);
  });
};

//TODO Create a fallback function just in case the user's browser doesn't support the clipboard API.
const fallbackCopyToClipboard = () => {
  console.log('Not supported');
}

// Helper function that copies the content passed into the user's clipboard.
function copyToClipboard(content) {
  if (!navigator.clipboard) {
    fallbackCopyToClipboard();
    return;
  }

  navigator.clipboard.writeText(content).then(() => {
    console.log('copied to clipboard');
  }).catch(error => console.warn(error));
}

/**
 * @description A function that handles the copying of JSON to the user's clipboard.
 * @param {string} format - The format of the tokens.
 * @param {Object} tokens - The object of the tokens.
 */
function handleCopyToClipboard(content) {
  typeof content === 'object' ? copyToClipboard(JSON.stringify(content, null, 2)) : copyToClipboard(content)
}

function handleCopyTokensToClipboard(buttonElement, tokens) {
  const id = buttonElement.id;
  const tokenFormat = [...id.split('-')].pop();
  const tokenCategory = [...id.split('-')].shift();

  if (tokenCategory === 'all') {
    const allCategories = [];

    Object.entries(tokens).forEach(([key, value]) => {
      Object.entries(value).forEach(([k, v]) => {
        k === tokenFormat ? allCategories.push(v) : null;
      });
    });

    handleCopyToClipboard(compileTokens(allCategories))
  } else {
    handleCopyToClipboard(tokens[tokenCategory][tokenFormat]);
  }
}
