function spiralPrint(matrix) {
    let result = [];
  
    for (let y = 0; y < matrix.length; y++) {
      for (let x = 0; x < matrix[y].length; x++) {
        if(y===0){
       result.push(matrix[y][x]);

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
  
  console.log(spiralPrint(matriz));
  
  
  
  
  
  
  
  
  
  