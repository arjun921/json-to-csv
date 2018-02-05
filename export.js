// Simple minimalist JSON array to CSV export.
// Source: https://github.com/arjun921/json-to-csv
// Data array being used has been included in a seperate myData.js file
// Call exportCsv and pass JSON array as argument to export as csv.

function escapeSpecialChars(value) { //exporter robust to comma's inside cells
  // value = ('' + value).replace(/,/g, "."); // uncomment to replace commas with "fullstops"
  value = ('"' + value + '"')
  return value
}

function exportCsv(eData) {
  var outputFile = window.prompt("Would you like to save it by a different file name? Defaults to \"Export\" if cancel clicked") || 'export';
  var header = '';
  for (x in eData[0]) {
    header += x + ',';
  }
  header += "\n";
  var tableBodyData = "";
  for (var i = 0; i < eData.length; i++) {
    var oneLine = eData[i];
    var onelineData = '';
    for (y in oneLine) {
      value = oneLine[y];
      onelineData += escapeSpecialChars(value) + ","
    }
    tableBodyData += onelineData + '\n'
  }
  outData = header + tableBodyData
  var hiddenElement = document.createElement('a');
  hiddenElement.href = 'data:attachment/text,' + encodeURI(outData);
  hiddenElement.download = outputFile + '.csv';
  hiddenElement.click();
}
