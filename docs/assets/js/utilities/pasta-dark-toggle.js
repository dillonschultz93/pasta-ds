// -----------------------------------------------
// PASTA APPARATUS: Dark Mode Toggle
// -----------------------------------------------
// Description: Functions that allow to toggle all marked images (with specific class) to their dark mode variants and vice versa.
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


//
// GENERIC FUNCTIONS
//

// COOKIE MANAGEMENT

function testIfCookieExist(cname) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let cookieArray = decodedCookie.split(';');
  for(let i = 0; i <cookieArray.length; i++) {
    let cookieItem = cookieArray[i];
    while (cookieItem.charAt(0) == ' ') {
      cookieItem = cookieItem.substring(1);
    }
    if (cookieItem.indexOf(name) == 0) {
      return true;
    }
  }
  return false;
}

function setCookie(cname, cvalue, exdays) {
  const d = new Date();
  d.setTime(d.getTime() + (exdays*24*60*60*1000));
  let expires = "expires="+ d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let cookieArray = decodedCookie.split(';');
  for(let i = 0; i <cookieArray.length; i++) {
    let cookieItem = cookieArray[i];
    while (cookieItem.charAt(0) == ' ') {
      cookieItem = cookieItem.substring(1);
    }
    if (cookieItem.indexOf(name) == 0) {
      return cookieItem.substring(name.length, cookieItem.length);
    }
  }
  return false;
}

function cookieStringToBoolean(cname) {
  if (getCookie(cname)=="true") {
    return true;
  } else {
    return false
  }
}


//
// DARK MODE TOGGLE
//

let darkenables = document.getElementsByClassName('darkenabled');

function switchImagesToDark() {
  console.log("inside switchImagesToDark");
  for (var i = 0; i < darkenables.length; i++) {
    darkenables[i].classList.toggle("dark_mode");
    let imageURL = darkenables[i].src;
    darkenables[i].src =  [imageURL.slice(0,imageURL.length-4),"--dark",imageURL.slice(imageURL.length-4,imageURL.length)].join("");
  }
}

function switchImagesToBright() {
  console.log("inside switchImagesToBright");
  for (var i = 0; i < darkenables.length; i++) {
    darkenables[i].classList.toggle("dark_mode");
    let imageURL = darkenables[i].src;
    darkenables[i].src = imageURL.replace("--dark","");
  }
}

function ToggleDark() {
  console.log("Inside ToggleDark");
  if(cookieStringToBoolean("darkModeOn")) {
    console.log("darkMOdeOff");
    switchImagesToBright();
    setCookie("darkModeOn","false",30);
  } else {
    console.log("darkMOdeOn");
    switchImagesToDark();
    setCookie("darkModeOn","true",30);
  }
}


//
// Component Status Widget
//

const statusContributorItems = document.querySelectorAll("[data-status-category]");

function setPageStatusWidget () {

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





// INJECT LISTENERS

document.getElementById('mode-dark-light').addEventListener("change",ToggleDark, false);


// INIT

// dark mode
function darkModeCookieInit() {
  if (!testIfCookieExist("darkModeOn")) {
    console.log("• cookie doesn't exist");
    setCookie("darkModeOn","false",30);
  } else {
    if(getCookie("darkModeOn")=="false"){
      console.log("• cookie = false");
    } else {
      console.log("• cookie = true");
      document.getElementById("mode-dark-light").checked = true;
      switchImagesToDark();
    }
  }
}

document.addEventListener("DOMContentLoaded",darkModeCookieInit,false);

// status widget
setPageStatusWidget();


// add a "Toast" node to body

var toastNodeParent = document.createElement('div');
var toastNode = document.createElement('div');

toastNode.dataset.toastContent = 'copied to clipboard';

document.body.appendChild(toastNodeParent);
toastNodeParent.appendChild(toastNode);
