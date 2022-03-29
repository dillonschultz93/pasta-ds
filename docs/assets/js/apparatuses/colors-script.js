const allColorTables = [...document.querySelectorAll('.color-pallette-table')];

function buildColorPalletteTable(table, allTokens) {
  const tableBody = table.querySelector('tbody');
  const columns = [...table.querySelectorAll('thead tr th')];
  const hue = table.id;

  let filteredTokens = {};

  const flattendByGroup = flattenTokens(allTokens, 'group');
  const flattendedByValue = flattenTokens(allTokens);

  Object.entries(flattendByGroup).forEach(([key, value]) => {
    if (value === 'colors') {
      if (key.includes(hue)) {
        filteredTokens = {
          ...filteredTokens,
          [key]: flattendedByValue[key]
        };
      }
    }
  });

  const data = filteredTokens;

  Object.entries(data).forEach(([k, v]) => {
    const splitKeys = k.split('.');
    const index = splitKeys[splitKeys.length - 1];

    const tr = document.createElement('tr');

    columns.forEach(column => {
      const cell = document.createElement('td');

      switch (column.textContent) {
        case 'index':
          cell.textContent = index;
          break;

        case 'token':
          cell.innerHTML = `<span data-toolclip="${v}"><code class="language-plaintext highlighter-rouge">${k}</code></span>`;
          cell.addEventListener('click', () => handleCopyToClipboard(k));
          break;
      
        default:
          cell.innerHTML = `<span class="tableColorChip" style="background-color: ${v}"></span>`;
          break;
      }

      tr.appendChild(cell);
    });

    tableBody.appendChild(tr);
  });
}

allColorTables.forEach(table => buildColorPalletteTable(table, allTokens));
