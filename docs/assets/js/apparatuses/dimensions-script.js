async function getDimensionTokens() {
  const allTokens = await readTokensFile();

  const dimensionTokens = {
    "breakpoints": {},
    "sizes": {},
    "spaces": {},
    "factors": {},
    "scales": {},
  };

  Object.entries(allTokens).forEach(([key, value]) => {
    if (key.includes('breakpoint')) {
      dimensionTokens.breakpoints[key] = value;
    } else if (key.includes('size') && !key.includes('TKUI_D') && !key.includes('TKUI_M')) {
      dimensionTokens.sizes[key] = value;
    } else if (key.includes('space')) {
      dimensionTokens.spaces[key] = value;
    } else if (key.includes('factor')) {
      dimensionTokens.factors[key] = value;
    } else if (key.includes('scale')) {
      dimensionTokens.scales[key] = value;
    }
  });

  return dimensionTokens;
}

async function getFigmaDimensionTokens() {
  const allTokens = await readFigmaTokensFile();

  const flattenTokens = flatten(allTokens);

  const dimensionTokens = {
    "breakpoints": {},
    "sizes": {},
    "spaces": {},
    "factors": {},
    "scales": {},
  };

  Object.entries(flattenTokens).forEach(([key, value]) => {
    if (key.includes('breakpoint')) {
      dimensionTokens.breakpoints[key] = value;
      dimensionTokens.breakpoints = unflatten(dimensionTokens.breakpoints);
    } else if (key.includes('size') && !key.includes('TKUI_D') && !key.includes('TKUI_M')) {
      dimensionTokens.sizes[key] = value;
      dimensionTokens.sizes = unflatten(dimensionTokens.sizes);
    } else if (key.includes('space')) {
      dimensionTokens.spaces[key] = value;
      dimensionTokens.spaces = unflatten(dimensionTokens.spaces);
    } else if (key.includes('factor')) {
      dimensionTokens.factors[key] = value;
      dimensionTokens.factors = unflatten(dimensionTokens.factors);
    } else if (key.includes('scale')) {
      dimensionTokens.scales[key] = value;
      dimensionTokens.scales = unflatten(dimensionTokens.scales);
    }
  });

  return dimensionTokens;
}

async function buildOutputTable(tableType) {
  const tableEl = document.querySelector(`.output-table#${tableType}`);
  const tableBody = tableEl.querySelector('tbody');
  const columns = [...tableEl.querySelectorAll('thead tr th')];

  const dimensionTokens = await getDimensionTokens();

  Object.entries(dimensionTokens[tableType]).forEach(([key, value]) => {
    const tr = document.createElement('tr');
    const splitKey = key.split('.');

    const indexKey = splitKey[5];
    const strippedValueKey = splitKey[splitKey.length - 2];

    columns.forEach(col => {
      const td = document.createElement('td');
      col.id === 'unit' ? td.textContent = tableType === 'scales' || tableType === 'sizes' ? `${splitKey[4]}.${indexKey}`: strippedValueKey : col.id === 'value' ? td.textContent = value : td.innerHTML = `<span data-toolclip="${key}: ${value}"><code>${key}</code></span>`;

      tr.appendChild(td);
    });

    tableBody.appendChild(tr);
  });
}

async function buildOutputTables() {
  const dimensionTokens = await getDimensionTokens();

  Object.keys(dimensionTokens).forEach(key => {
    buildOutputTable(key);
  }
  );
}

async function initCopyTokensButtons() {
  const allCopyAreas = [...document.querySelectorAll('.copyTokensButtons')];
  const rawTokens = await getDimensionTokens();
  const figmaTokens = await getFigmaDimensionTokens();

  allCopyAreas.forEach(area => {
    const copyCategory = area.id;

    const rawButton = area.querySelector('.raw');
    const figmaButton = area.querySelector('.figma');

    if (copyCategory === 'all') {
      rawButton.addEventListener('click', () => {
        handleCopyToClipboard(rawTokens);
      });

      figmaButton.addEventListener('click', () => {
        handleCopyToClipboard(figmaTokens);
      });
    } else {
      rawButton.addEventListener('click', () => {
        handleCopyToClipboard(rawTokens[copyCategory]);
      });

      figmaButton.addEventListener('click', () => {
        handleCopyToClipboard(figmaTokens[copyCategory]);
      });
    }
  });

  handleToolClips();
}

buildOutputTables();
initCopyTokensButtons();