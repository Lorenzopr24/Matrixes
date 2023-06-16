function sumBorders(matrix) {
    let result = 0;
  
    for (let y = 0; y < matrix.length; y++) {
      for (let x = 0; x < matrix[y].length; x++) {
        if (y === 0 || y === matrix.length - 1 || x === 0 || x === matrix[y].length - 1) {
          result+=matrix[y][x];
        }
      }
    }
  
    return result;
  }
  
  let matriz = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 16]
  ];
  
  console.log(sumBorders(matriz));