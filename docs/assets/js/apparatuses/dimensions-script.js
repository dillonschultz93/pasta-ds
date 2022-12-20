async function getDimensionTokens() {

  const allTokens = await readTokensFile();
  const dimensionTokens = {
    "breakpoints": {},
    "sizes": {},
    "spaces": {},
    "factors": {},
    "scales": {},
    "radii": {}, // 221203 ADDON
    "borderWidths": {} // 221203 ADDON    
  };

  Object.entries(allTokens).forEach(([key, value]) => {
    if (key.includes('breakpoint')) {
      dimensionTokens.breakpoints[key] = value;
    } else if (key.includes('sizes') && !key.includes('TKUI_D') && !key.includes('TKUI_M') && !key.includes('typo')) {
      dimensionTokens.sizes[key] = value;
    } else if (key.includes('spaces')) {
      dimensionTokens.spaces[key] = value;
    } else if (key.includes('factors')) {
      dimensionTokens.factors[key] = value;
      // console.log(key);  // 221203 ADDON
    } else if (key.includes('scales') && !key.includes('radii')) { // 221203 AMEND
      dimensionTokens.scales[key] = value;
    } else if (key.includes('radii')) { // 221203 ADDON
      dimensionTokens.radii[key] = value;
    } else if (key.includes('borderWidths')) { // 221203 ADDON
      dimensionTokens.borderWidths[key] = value;
    } 
  });

  // console.log(dimensionTokens); // 221203  
  return dimensionTokens;
}


// FIXME what's this  ??? ↓
// async function getFigmaDimensionTokens() {
//   const allTokens = await readFigmaTokensFile();

//   const flattenTokens = flatten(allTokens);

//   const dimensionTokens = {
//     "breakpoints": {},
//     "sizes": {},
//     "spaces": {},
//     "factors": {},
//     "scales": {},
//   };

//   Object.entries(flattenTokens).forEach(([key, value]) => {
//     if (key.includes('breakpoint')) {
//       dimensionTokens.breakpoints[key] = value;
//       dimensionTokens.breakpoints = unflatten(dimensionTokens.breakpoints);
//     } else if (key.includes('size') && !key.includes('TKUI_D') && !key.includes('TKUI_M')) {
//       dimensionTokens.sizes[key] = value;
//       dimensionTokens.sizes = unflatten(dimensionTokens.sizes);
//     } else if (key.includes('space')) {
//       dimensionTokens.spaces[key] = value;
//       dimensionTokens.spaces = unflatten(dimensionTokens.spaces);
//     } else if (key.includes('factor')) {
//       dimensionTokens.factors[key] = value;
//       dimensionTokens.factors = unflatten(dimensionTokens.factors);
//     } else if (key.includes('scale')) {
//       dimensionTokens.scales[key] = value;
//       dimensionTokens.scales = unflatten(dimensionTokens.scales);
//     }
//   });

//   return dimensionTokens;
// }


function cutStemsAtIndex(string, delimiter,index) {
    stems = string.split(delimiter).slice(index),
    result = stems.join(delimiter); // those.that
    return result;
}


async function buildOutputTable(tableType) {
  const tableEl = document.querySelector(`.output-table#${tableType}`);
  const tableBody = tableEl.querySelector('tbody');
  const columns = [...tableEl.querySelectorAll('thead tr th')];
  let valueResolved = "";

  const dimensionTokens = await getDimensionTokens();

  Object.entries(dimensionTokens[tableType]).forEach(([key, value]) => {
    const tr = document.createElement('tr');
    const splitKey = key.split('.');
    const indexKey = splitKey[5];

    const strippedValueKey = splitKey[splitKey.length - 2];

    columns.forEach(col => {

    // reaches for resolved value ↓ 
    let valueSTR = value.toString();
    if (valueSTR.includes("scales")) {
        valueResolved = " · " + dimensionTokens.scales[valueSTR];
        valueSTR = cutStemsAtIndex(valueSTR,".",4);
    } else if (valueSTR.includes("sizes")) {
        valueResolved = " · " + dimensionTokens.sizes[valueSTR];
        valueSTR = cutStemsAtIndex(valueSTR,".",4);
    } else {
      valueResolved = "";
    };

      const td = document.createElement('td');
      col.id === 'unit' ? td.textContent = tableType === 'scales' || tableType === 'sizes' ? `${indexKey}.${splitKey[6]}`: strippedValueKey : col.id === 'value' ? td.textContent = `${valueSTR} ${valueResolved}` : td.innerHTML = `<span data-toolclip="${key}: ${value}"><code>${key}</code></span>`;
      tr.appendChild(td);
    });

    tableBody.appendChild(tr);
  });
}

async function buildOutputTables() {
  const dimensionTokens = await getDimensionTokens();
  // console.log(dimensionTokens); // 221203
  Object.keys(dimensionTokens).forEach(key => {
      buildOutputTable(key);
    }
  );
}



// 221203 REMOVED ↓
// async function initCopyTokensButtons() {
//   const allCopyAreas = [...document.querySelectorAll('.copyTokensButtons')];
//   const rawTokens = await getDimensionTokens();
//   const figmaTokens = await getFigmaDimensionTokens();

//   allCopyAreas.forEach(area => {
//     const copyCategory = area.id;

//     const rawButton = area.querySelector('.raw');
//     const figmaButton = area.querySelector('.figma');

//     if (copyCategory === 'all') {
//       rawButton.addEventListener('click', () => {
//         handleCopyToClipboard(rawTokens);
//       });

//       figmaButton.addEventListener('click', () => {
//         handleCopyToClipboard(figmaTokens);
//       });
//     } else {
//       rawButton.addEventListener('click', () => {
//         handleCopyToClipboard(rawTokens[copyCategory]);
//       });

//       figmaButton.addEventListener('click', () => {
//         handleCopyToClipboard(figmaTokens[copyCategory]);
//       });
//     }
//   });

//   handleToolClips();
// }



buildOutputTables();

// 221203 REMOVED ↓
// initCopyTokensButtons();