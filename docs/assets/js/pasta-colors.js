const colorStructures = document.querySelectorAll(".colorStructure");
const colorBackgroundWidgets = document.querySelectorAll(".colorBackgroundSelections > div > .colorWidget");


// replaces uppercase letter with lower case preceded with separartor
function parseCamelCase(string, separartor) {
  regReplacer = separartor + "$1";
  const result = string.replace(/([A-Z])/g, regReplacer);
  return result; // not tested yet
}

// returns luminances to meet AA + AAA

function wcagLumMatch(brighterColor, darkerColor) {

  // swap colors if their luminance is inverted
  // console.log("—————");
  // console.log("—— brighterColorg  › " + brighterColor);
  // console.log("—— darkerColor  › " + darkerColor);
  // if ( chroma(darkerColor).luminance() > chroma(brighterColor).luminance() ) {
  //   console.log("brighter luminance = " + chroma(brighterColor).luminance());
  //   console.log("darker luminance = " + chroma(darkerColor).luminance());
  //   [brighterColor, darkerColor] = [darkerColor, brighterColor]; // swap variables
  //   console.log("Colors swapted");
  // }

  // calculates "stoichiometric" luminances to meet AA & AAA criteria

  const lumBrightAALg = 3 * chroma(darkerColor).luminance() + 0.175;
  // const lumBrightAAbool = (lumBrightAA <= 1);
  const lumDarkAALg = (chroma(brighterColor).luminance() - 0.175) / 3;
  // const lumDarkAAbool = (lumDarkAA >= 0);
  const lumBrightAA = 4.5 * chroma(darkerColor).luminance() + 0.175;
  // const lumBrightAAbool = (lumBrightAA <= 1);
  const lumDarkAA = (chroma(brighterColor).luminance() - 0.175) / 4.5;
  // const lumDarkAAbool = (lumDarkAA >= 0);
  const lumBrightAAA = 7 * chroma(darkerColor).luminance() + 0.175;
  // const lumBrightAAAbool = (lumBrightAAA <= 1);
  const lumDarkAAA = (chroma(brighterColor).luminance() - 0.175) / 7;
  // const lumDarkAAAbool = (lumDarkAA >= 0);

  var wcagMatch = {
    brightAALgLuminance: lumBrightAA,
    darkAALgLuminance: lumDarkAA,
    brightAALuminance: lumBrightAA,
    darkAALuminance: lumDarkAA,
    brightAAALuminance: lumBrightAAA,
    darkAAALuminance: lumDarkAAA
  };
  // console.log(wcagMatch);
  return wcagMatch;
}


// Color Table Structure updates
function updateColorStructureTable(theColorStructure, newColor) {

  // will collect our tokens
  var tokensArray = [];
  var tokensScsstring = "";
  var tokensFigmaString = "";

  // grabs darker light-mode background color
  const lightBg = document.querySelector('[data-tokenInfix="MD_light"] [data-tokenSuffix="dark"] .colorPicker').value;
  // grabs brighter dark-mode background color
  const darkBg = document.querySelector('[data-tokenInfix="MD_dark"] [data-tokenSuffix="bright"] .colorPicker').value;

  console.log("—— lightBg › " + lightBg);
  console.log("—— darkBg  › " + darkBg);

  //
  // color chip
  theColorStructure.querySelector('[data-tokenSuffix="controlFill.whiteText.AA"] .colorChip').style.backgroundColor = chroma(newColor).luminance(wcagLumMatch(lightBg, newColor).darkAALuminance);
  // HEX
  theColorStructure.querySelector('[data-tokenSuffix="controlFill.whiteText.AA"] .colorHEXvalue').innerHTML = chroma(newColor).luminance(wcagLumMatch(lightBg,newColor).darkAALuminance);
  // LCH
  theColorStructure.querySelector('[data-tokenSuffix="controlFill.whiteText.AA"] .colorLCHvalue').innerHTML = chroma(newColor).luminance(wcagLumMatch(lightBg,newColor).darkAALuminance).css('lch');
  // Push Token
  tokensArray.push(["TKUI_SC.colors." + "controlFill.whiteText.AA",chroma(newColor).luminance(wcagLumMatch(lightBg,newColor).darkAALuminance).hex()]);

  //
  // color chip
  theColorStructure.querySelector('[data-tokenSuffix="controlFill.whiteText.AAA"] .colorChip').style.backgroundColor = chroma(newColor).luminance(wcagLumMatch(lightBg,newColor).darkAAALuminance);
  // HEX
  theColorStructure.querySelector('[data-tokenSuffix="controlFill.whiteText.AAA"] .colorHEXvalue').innerHTML = chroma(newColor).luminance(wcagLumMatch(lightBg,newColor).darkAAALuminance);
  // LCH
  theColorStructure.querySelector('[data-tokenSuffix="controlFill.whiteText.AAA"] .colorLCHvalue').innerHTML = chroma(newColor).luminance(wcagLumMatch(lightBg,newColor).darkAAALuminance).css('lch');
  // Push Token
  tokensArray.push(["TKUI_SC.colors." + "controlFill.whiteText.AAA",chroma(newColor).luminance(wcagLumMatch(lightBg,newColor).darkAALuminance).hex()]);

  //
  // color chip
  theColorStructure.querySelector('[data-tokenSuffix="controlFill.blackText.AA"] .colorChip').style.backgroundColor = chroma(newColor).luminance(wcagLumMatch(newColor,darkBg).brightAALuminance);
  // HEX
  theColorStructure.querySelector('[data-tokenSuffix="controlFill.blackText.AA"] .colorHEXvalue').innerHTML = chroma(newColor).luminance(wcagLumMatch(newColor,darkBg).brightAALuminance);
  // LCH
  theColorStructure.querySelector('[data-tokenSuffix="controlFill.blackText.AA"] .colorLCHvalue').innerHTML = chroma(newColor).luminance(wcagLumMatch(newColor,darkBg).brightAALuminance).css('lch');
  // Push Token
  tokensArray.push(["TKUI_SC.colors." + "controlFill.blackText.AA",chroma(newColor).luminance(wcagLumMatch(newColor,darkBg).brightAALuminance).hex()]);


  //
  // color chip
  theColorStructure.querySelector('[data-tokenSuffix="controlFill.blackText.AAA"] .colorChip').style.backgroundColor = chroma(newColor).luminance(wcagLumMatch(newColor,darkBg).brightAAALuminance);
  // HEX
  theColorStructure.querySelector('[data-tokenSuffix="controlFill.blackText.AAA"] .colorHEXvalue').innerHTML = chroma(newColor).luminance(wcagLumMatch(newColor,darkBg).brightAAALuminance);
  // LCH
  theColorStructure.querySelector('[data-tokenSuffix="controlFill.blackText.AAA"] .colorLCHvalue').innerHTML = chroma(newColor).luminance(wcagLumMatch(newColor,darkBg).brightAAALuminance).css('lch');
  // Push Token
  tokensArray.push(["TKUI_SC.colors." + "controlFill.blackText.AAA",chroma(newColor).luminance(wcagLumMatch(newColor,darkBg).brightAAALuminance).hex()]);


  //
  // color chip
  theColorStructure.querySelector('[data-tokenSuffix="text.large.AA"] .colorChip').style.backgroundColor = chroma(newColor).luminance(wcagLumMatch(newColor,lightBg).darkAALgLuminance);
  // HEX
  theColorStructure.querySelector('[data-tokenSuffix="text.large.AA"] .colorHEXvalue').innerHTML = chroma(newColor).luminance(wcagLumMatch(newColor,lightBg).darkAALgLuminance);
  // LCH
  theColorStructure.querySelector('[data-tokenSuffix="text.large.AA"] .colorLCHvalue').innerHTML = chroma(newColor).luminance(wcagLumMatch(newColor,lightBg).darkAALgLuminance).css('lch');
  // Push Token
  tokensArray.push(["TKUI_SC.colors." + "text.large.AA",chroma(newColor).luminance(wcagLumMatch(newColor,lightBg).darkAALgLuminance).hex()]);


  //
  // color chip
  theColorStructure.querySelector('[data-tokenSuffix="text.large.AAA"] .colorChip').style.backgroundColor = chroma(newColor).luminance(wcagLumMatch(newColor,lightBg).darkAAALuminance);
  // HEX
  theColorStructure.querySelector('[data-tokenSuffix="text.large.AAA"] .colorHEXvalue').innerHTML = chroma(newColor).luminance(wcagLumMatch(newColor,lightBg).darkAAALuminance);
  // LCH
  theColorStructure.querySelector('[data-tokenSuffix="text.large.AAA"] .colorLCHvalue').innerHTML = chroma(newColor).luminance(wcagLumMatch(newColor,lightBg).darkAAALuminance).css('lch');
  // Push Token
  tokensArray.push(["TKUI_SC.colors." + "text.large.AAA",chroma(newColor).luminance(wcagLumMatch(newColor,lightBg).darkAAALuminance).hex()]);

  //
  // color chip
  theColorStructure.querySelector('[data-tokenSuffix="text.standard.AA"] .colorChip').style.backgroundColor = chroma(newColor).luminance(wcagLumMatch(newColor,lightBg).darkAALuminance);
  // HEX
  theColorStructure.querySelector('[data-tokenSuffix="text.standard.AA"] .colorHEXvalue').innerHTML = chroma(newColor).luminance(wcagLumMatch(newColor,lightBg).darkAALuminance);
  // LCH
  theColorStructure.querySelector('[data-tokenSuffix="text.standard.AA"] .colorLCHvalue').innerHTML = chroma(newColor).luminance(wcagLumMatch(newColor,lightBg).darkAALuminance).css('lch');
  // Push Token
  tokensArray.push(["TKUI_SC.colors." + "text.standard.AA",chroma(newColor).luminance(wcagLumMatch(newColor,lightBg).darkAALuminance).hex()]);

  //
  // color chip
  theColorStructure.querySelector('[data-tokenSuffix="text.standard.AAA"] .colorChip').style.backgroundColor = chroma(newColor).luminance(wcagLumMatch(newColor,lightBg).darkAAALuminance);
  // HEX
  theColorStructure.querySelector('[data-tokenSuffix="text.standard.AAA"] .colorHEXvalue').innerHTML = chroma(newColor).luminance(wcagLumMatch(newColor,lightBg).darkAAALuminance);
  // LCH
  theColorStructure.querySelector('[data-tokenSuffix="text.standard.AAA"] .colorLCHvalue').innerHTML = chroma(newColor).luminance(wcagLumMatch(newColor,lightBg).darkAAALuminance).css('lch');
  // Push Token
  tokensArray.push(["TKUI_SC.colors." + "text.standard.AAA",chroma(newColor).luminance(wcagLumMatch(newColor,lightBg).darkAAALuminance).hex()]);

  // feeding code section

  tokensArray.forEach (token => {
    tokensScsstring = tokensScsstring + "$YPL-FFL-" + token[0].replace(/\./g,"-") + ": " + token[1] + "\n";
  });
  theColorStructure.querySelector(".tokensCodeScss").innerHTML = tokensScsstring;

  tokensArray.forEach (token => {
    tokensScsstring = tokensScsstring + token[0] + ": " + token[1] + "\n";
  });


}




// Color Pickers and Text Fields Widgets Updates

function updateColorsViaPick() {
  let colorPickerWrapper = this.querySelector(".colorPickerWrapper");
  let colorPicker = colorPickerWrapper.querySelector(".colorPicker");
  let colorInput = this.querySelector(".colorInput");
  let colorLabel = this.querySelector(".colorLabel");

  colorPickerWrapper.style.backgroundColor = colorPicker.value;
  colorInput.value = colorPicker.value;
  colorLabel.innerHTML = "Color name from Picker (soon)";
  updateColorStructureTable(this,colorPicker.value);


}

function updateColorsViaTextField() {
  let colorPickerWrapper = this.querySelector(".colorPickerWrapper");
  let colorPicker = colorPickerWrapper.querySelector(".colorPicker");
  let colorInput = this.querySelector(".colorInput");
  let colorLabel = this.querySelector(".colorLabel");

  colorPicker.value = colorInput.value;
  colorPickerWrapper.style.backgroundColor = colorPicker.value;
  colorLabel.innerHTML = "Color name via text input (soon)";
}

function updateBackgroundViaPick() {
  let colorPickerWrapper = this.querySelector(".colorPickerWrapper");
  let colorPicker = colorPickerWrapper.querySelector(".colorPicker");
  let colorInput = this.querySelector(".colorInput");
  // let colorLabel = this.querySelector(".colorLabel");
  colorPickerWrapper.style.backgroundColor = colorPicker.value;
  colorInput.value = colorPicker.value;
  // colorLabel.innerHTML = "TBD";
  // console.log(chroma(colorInput.value).css('hsl'));
}

function updateBackgroundTextField() {
  let colorPickerWrapper = this.querySelector(".colorPickerWrapper");
  let colorPicker = colorPickerWrapper.querySelector(".colorPicker");
  let colorInput = this.querySelector(".colorInput");
  // let colorLabel = this.querySelector(".colorLabel");
  colorPicker.value = colorInput.value;
  colorPickerWrapper.style.backgroundColor = colorPicker.value;
  // colorLabel.innerHTML = "Via Text Input";
  // console.log(chroma(colorInput.value).css('hsl'));
}

// add eventListner to and update all color structures

for (i = 0; i < colorStructures.length; i++) {
  let colorPickerWrapper = colorStructures[i].querySelector(".colorPickerWrapper");
  let colorPicker = colorPickerWrapper.querySelector(".colorPicker");
  let colorInput = colorStructures[i].querySelector(".colorInput");
  let colorLabel = colorStructures[i].querySelector(".colorLabel");
  // init update once
  colorPickerWrapper.style.backgroundColor = colorPicker.value;
  colorInput.value = colorPicker.value;
  colorLabel.innerHTML = "Color name (soon)";
  console.log("—— colorPicker.value  › " + colorPicker.value);
  updateColorStructureTable(colorStructures[i],colorPicker.value)

  // eventListeners
  // binds the grand-parent aka colorStructures of the picker
  colorPicker.addEventListener('change',updateColorsViaPick.bind(colorStructures[i]), false);
  // binds the grand-parent aka colorStructures of the ext field
  colorInput.addEventListener('change',updateColorsViaTextField.bind(colorStructures[i]), false);
}

for (i = 0; i < colorBackgroundWidgets.length; i++) {
  let colorPickerWrapper = colorBackgroundWidgets[i].querySelector(".colorPickerWrapper");
  let colorPicker = colorPickerWrapper.querySelector(".colorPicker");
  let colorInput = colorBackgroundWidgets[i].querySelector(".colorInput");
  let colorLabel = colorBackgroundWidgets[i].querySelector(".colorLabel");
  // init update once
  colorPickerWrapper.style.backgroundColor = colorPicker.value;
  colorInput.value = colorPicker.value;
  // eventListeners
  // binds the grand-parent aka the colorWidget
  colorPicker.addEventListener('change',updateBackgroundViaPick.bind(colorBackgroundWidgets[i]), false);
  // binds the grand-parent aka the colorWidget
  colorInput.addEventListener('change',updateBackgroundTextField.bind(colorBackgroundWidgets[i]), false);
}
