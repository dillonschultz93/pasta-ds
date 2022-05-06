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

// const COPY_EVENT = new Event('copy-to-clipboard');

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

  let filteredTokens = {};

  const flattendByGroup = flattenTokens(tokens, 'group');
  const flattendedByValue = flattenTokens(tokens);

  Object.entries(flattendByGroup).forEach(([key, value]) => {
    if (value === category) {
      filteredTokens = {
        ...filteredTokens,
        [key]: flattendedByValue[key]
      };
    }
  });
  
  const data = filteredTokens;

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
          break;

        default:
          break;
      }

      tr.appendChild(cell);
    });

    tableBody.appendChild(tr);
  });
};

// //TODO Create a fallback function just in case the user's browser doesn't support the clipboard API.
// const fallbackCopyToClipboard = () => {
//   console.log('Not supported');
// }

// // Helper function that copies the content passed into the user's clipboard.
// function copyToClipboard(content) {
//   if (!navigator.clipboard) {
//     fallbackCopyToClipboard();
//     return;
//   }

//   navigator.clipboard.writeText(content).then(() => {
//     console.log('Copied to clipboard');
//     // Emit event to show the user the content has been copied.
//     document.dispatchEvent(COPY_EVENT);
//   }).catch(error => console.warn(error));
// }

// /**
//  * @description A function that handles the copying of JSON to the user's clipboard.
//  * @param {string} format - The format of the tokens.
//  * @param {Object} tokens - The object of the tokens.
//  */
// function handleCopyToClipboard(content) {
//   typeof content === 'object' ? copyToClipboard(JSON.stringify(content, null, 2)) : copyToClipboard(content)
// }

function handleCopyTokensToClipboard(buttonElement, tokens) {
  const id = buttonElement.id;
  
  if (id) {
    const tokenFormat = [...id.split('-')].pop();
    const tokenCategory = [...id.split('-')].shift();

    let filteredRawTokens = {};
    let filteredFigmaTokens = {}

    const flattenedByGroup = flattenTokens(tokens, 'group');
    const flattenedByType = flattenTokens(tokens, 'type');
    const flattenedByDescription = flattenTokens(tokens, 'description');
    const flattenedByValue = flattenTokens(tokens);

    Object.entries(flattenedByGroup).forEach(([key, value]) => {
      if (value === tokenCategory) {
        if (tokenFormat === 'raw') {
          filteredRawTokens = {
            ...filteredRawTokens,
            [key]: flattenedByValue[key]
          };
        } else {
          filteredFigmaTokens = {
            ...filteredFigmaTokens,
            [key]: {
              'value': flattenedByValue[key],
              'description': flattenedByDescription[key],
              'type': flattenedByType[key],
              'group': flattenedByGroup[key]
            }
          };

          filteredFigmaTokens = unflatten(filteredFigmaTokens);
        }
      }
    });

    if (tokenCategory === 'all') {
      switch (tokenFormat) {
        case 'raw':
          handleCopyToClipboard(flattenTokens(tokens));
          return;

        case 'figma':
          handleCopyToClipboard(tokens);
          return;
      
        default:
          handleCopyToClipboard(tokens);
          return;
      }
    } else {
      switch (tokenFormat) {
        case 'raw':
          handleCopyToClipboard(filteredRawTokens);
          return;
        case 'figma':
          handleCopyToClipboard(filteredFigmaTokens);
          return;
        default:
          handleCopyToClipboard(filteredFigmaTokens);
          return;
      }
    }
  } else {
    handleCopyToClipboard(tokens);
  }
}

function setPageStatusWidget () {
  const statusContributorItems = document.querySelectorAll("[data-status-category]");

  if (statusContributorItems.length > 0) {
    let numberOfContributors = 0;
    let numberOfTodos = 0;
    let toolTipStr = "";
    let radioNames = new Set();
    let statusCategories = new Set();
    let radioCurrentValue = "";
    let categoryDetails = {};

    for (let i = 0; i < statusContributorItems.length; ++i) {

      // categories
      let currentCategory = statusContributorItems[i].dataset.statusCategory;

      // init category
      if (!statusCategories.has(currentCategory)) {
            statusCategories.add(currentCategory);
            categoryDetails[currentCategory] = {
              total: 0,
              todo: 0
            };
      };

      // RADIO ↓
      if (statusContributorItems[i].type == "radio") { // radio
        if (!radioNames.has(statusContributorItems[i].name)) {
          radioNames.add(statusContributorItems[i].name);
          if (statusContributorItems[i].checked && statusContributorItems[i].value == "pending") {
            numberOfTodos += 1;
            categoryDetails[currentCategory].todo += 1;
          };
          // categories
          if (statusCategories.has(currentCategory)) {
            categoryDetails[currentCategory].total += 1;
          };
        } else {
          if (statusContributorItems[i].checked && statusContributorItems[i].value == "pending") {
            numberOfTodos += 1;
            categoryDetails[currentCategory].todo += 1;
          };
        };
      // CHECKBOXES ↓
      } else {
        if (!statusContributorItems[i].checked) {
          numberOfTodos += 1;
          categoryDetails[currentCategory].todo += 1;
        };
        numberOfContributors += 1;
        // categories
        if (statusCategories.has(currentCategory)) {
          categoryDetails[currentCategory].total += 1;
        };
      }
    }
    numberOfContributors = numberOfContributors + radioNames.size;

    let progressWidget = document.getElementById("statusWidget");

    let toolTipString = "";
    for(var item in categoryDetails) {
      toolTipString += item + ": " + Math.round(100*((categoryDetails[item].total - categoryDetails[item].todo)/categoryDetails[item].total)) + "%, ";
    };
    let progressStatus = (numberOfContributors-numberOfTodos)/numberOfContributors;
    let progressStatusPercent = Math.round(progressStatus*100);
    let statusColor = "#2b84fb";
    // Injections:
    if (progressStatus < 0.5) {
      statusColor = "#FF2F3B";
      progressWidget.nextSibling.style.color = statusColor;
    }
    progressWidget.style.backgroundImage = 'linear-gradient(to right, ' + statusColor + ', ' + statusColor + ' ' + progressStatusPercent + '%, rgba(0, 0, 0, 0) ' + progressStatusPercent + '%, rgba(0, 0, 0, 0) 100%)';
    progressWidget.parentElement.dataset.tooltipped = toolTipString;
    progressWidget.nextSibling.innerHTML = progressStatusPercent + "%";
  }
}

// status widget
setPageStatusWidget();

// Copy to clipboard toast
// function createToast() {
//   const toastNode = document.createElement('div');
//   toastNode.classList.add('toast');
//   toastNode.innerHTML = `<span>Copied to clipboard!</span>`;

//   document.addEventListener('copy-to-clipboard', () => {
//     console.log('show toast');
//     toastNode.classList.toggle('shown');
//     setTimeout(() => {
//       toastNode.classList.toggle('shown');
//     }, 2000);
//   })

//   document.body.appendChild(toastNode);
// }

// createToast();

// TOOL CLIP HANDLER
const allToolClipButtons = [...document.querySelectorAll('span[data-toolclip]')];

if (allToolClipButtons.length > 0) {
  // Set up all toolclip buttons
  allToolClipButtons.forEach(button => {
    const data = button.dataset.toolclip;
    button.addEventListener('click', () => handleCopyToClipboard(data));
  });
}
