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
function handleToolClips() {
  const allToolClipButtons = [...document.querySelectorAll('span[data-toolclip]')];

  if (allToolClipButtons.length > 0) {
    // Set up all toolclip buttons
    allToolClipButtons.forEach(button => {
      const data = button.dataset.toolclip;
      button.addEventListener('click', () => {
        console.log('tool clip clicked');

        handleCopyToClipboard(data);
      });
    });
  }
}

handleToolClips();
