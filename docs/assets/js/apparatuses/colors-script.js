async function getColorTokens() {
  const allTokens = await readTokensFile();

  const colorTokens = {
    "teal": {},
    "orange": {},
    "grey": {},
    "black_and_white": {},
  };

  Object.entries(allTokens).forEach(([key, value]) => {
    if (key.includes('teal')) {
      colorTokens.teal[key] = value;
    } else if (key.includes('orange')) {
      colorTokens.orange[key] = value;
    } else if (key.includes('grey')) {
      colorTokens.grey[key] = value;
    } else if (!key.includes('gradients') && key.includes('black') || key.includes('white')) {
      colorTokens.black_and_white[key] = value;
    }
  });

  return colorTokens;
}

async function getFigmaDimensionTokens() {
  const allTokens = await readFigmaTokensFile();

  const flattenTokens = flatten(allTokens);

  const colorTokens = {
    "teal": {},
    "orange": {},
    "grey": {},
    "black_and_white": {},
  };

  Object.entries(flattenTokens).forEach(([key, value]) => {
    if (key.includes('teal')) {
      colorTokens.teal[key] = value;
      colorTokens.teal = unflatten(colorTokens.teal);
    } else if (key.includes('orange')) {
      colorTokens.orange[key] = value;
      colorTokens.orange = unflatten(colorTokens.orange);
    } else if (key.includes('grey')) {
      colorTokens.grey[key] = value;
      colorTokens.grey = unflatten(colorTokens.grey);
    } else if (key.includes('black') || key.includes('white') && !key.includes('gradients')) {
      colorTokens.black_and_white[key] = value;
      colorTokens.black_and_white = unflatten(colorTokens.black_and_white);
    }
  });

  return colorTokens;
}

async function buildOutputTable(tableType) {
  const tableEl = document.querySelector(`.color-pallette-table#${tableType}`);
  const tableBody = tableEl.querySelector('tbody');
  const columns = [...tableEl.querySelectorAll('thead tr th')];

  const colorTokens = await getColorTokens();

  Object.entries(colorTokens[tableType]).forEach(([key, value]) => {
    const tr = document.createElement('tr');
    const splitKey = key.split('.');

    const indexKey = splitKey[splitKey.length - 2];
    const colorKey = splitKey[splitKey.length - 3];

    columns.forEach(col => {
      const td = document.createElement('td');
      col.id === 'unit' ? td.textContent = `${colorKey}.${indexKey}` : col.id === 'color' ? td.innerHTML = `<span class="tableColorChip" style="background-color: ${value}"></span>` : td.innerHTML = `<span data-toolclip="${key}: ${value}"><code>${key}</code></span>`;

      tr.appendChild(td);
    });

    tableBody.appendChild(tr);
  });
}

async function buildOutputTables() {
  const colorTokens = await getColorTokens();

  Object.keys(colorTokens).forEach(key => {
    buildOutputTable(key);
  }
  );
}

async function initCopyTokensButtons() {
  const allCopyAreas = [...document.querySelectorAll('.copyTokensButtons')];
  const rawTokens = await getColorTokens();
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