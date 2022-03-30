// Collect all DOM selectors
const allDimensionInputs = [...document.querySelectorAll('.scalingInputs')];

let dimensionChoices = { ...superChoices.dimensions.scale };

const values = generateDimensionScale(dimensionChoices).tokenValues;

allDimensionInputs.forEach(input => {
  const id = input.id;

  input.value = dimensionChoices.value[id];

  input.addEventListener('change', e => {
    const changedChoice = e.target;

    dimensionChoices.value[changedChoice.id] = parseInt(changedChoice.value);

    console.log(dimensionChoices);

    let newValues = generateDimensionScale(dimensionChoices).tokenValues;

    buildDimensionScaleTable(dimensionChoices, newValues, 2000);
  });
});

function buildDimensionScaleTable(choices, tokenValues, maxIndex) {
  const tableEl = document.querySelector('#dimension-scales-table');
  const tableBody = tableEl.querySelector('tbody');
  const columns = [...tableEl.querySelectorAll('thead tr th')];

  tableBody.innerHTML = '';

  const indexColArr = [...Array((maxIndex - 100) / 100 + 1)].map((_, i) => 100 + 100 * i);

  indexColArr.forEach(item => {
    const tr = document.createElement('tr');

    columns.forEach(col => {
      const td = document.createElement('td');
      
      if (col.id === 'index') {
        td.innerHTML = item === choices.value.baseIndex ? `<span class="textbold">• ${item}</span>` : item;
      } else {
        td.innerHTML = tokenValues[col.id][item] ? tokenValues[col.id][item].value : '<span class="textfaded">-</span>';
      }

      tr.appendChild(td);
    });

    tableBody.appendChild(tr);
  });
}

buildDimensionScaleTable(dimensionChoices, values, 2000);