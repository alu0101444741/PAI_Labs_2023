//
// This is only a SKELETON file for the 'Pascals Triangle' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export function rows(rows) {
  let rowsNumber = rows;
  let actualRow = [1];
  let prevRow = [];
  let result = [];
  
  for (let i = 0 ; i < rows; ++i) {
    prevRow = [...actualRow];
    for (let j = 0; j < (i+1); ++j) {
      if (j-1 < 0) {
        actualRow[j] = prevRow[j];
      }
      else if (j >= prevRow.length) {
        actualRow[j] = prevRow[j-1];
      }
      else {
        actualRow[j] = prevRow[j-1] + prevRow[j];
      }
    }
    result.push([...actualRow]);
  }
  return(result);
}

