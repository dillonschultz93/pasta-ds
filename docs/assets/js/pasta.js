// populates color tables

var colorTables = document.getElementsByClassName('colorTable');
var row_data_colorvalue = "";

for (var i = 0; i < colorTables.length; i++) {
    for (var j = 0; j < colorTables[i].rows.length; j++) {
        // console.log(colorTables[i].rows.length);
        row_data_colorvalue = colorTables[i].rows[j].dataset.colorvalue;
        if (row_data_colorvalue !== undefined) {
            colorTables[i].rows[j].cells[1].innerHTML = row_data_colorvalue;
            // console.log(row_data_colorvalue);
            colorTables[i].rows[j].cells[2].innerHTML = '<span class="tableColorChip" alt="' + row_data_colorvalue + '"></span>';
            colorTables[i].rows[j].cells[2].childNodes[0].style.backgroundColor = row_data_colorvalue;
        }
    }
}
