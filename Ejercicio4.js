function spiralPrint(matrix) {
    const rows = matrix.length; // Número de filas de la matriz
    const columns = matrix[0].length; // Número de columnas de la matriz
    let top = 0; // Índice de la fila superior
    let bottom = rows - 1; // Índice de la fila inferior
    let left = 0; // Índice de la columna izquierda
    let right = columns - 1; // Índice de la columna derecha
    let result = []; // Array para almacenar los elementos impresos
  
    while (top <= bottom && left <= right) {
      // Imprimir fila superior
      for (let i = left; i <= right; i++) {
        result.push(matrix[top][i]);
      }
      top++;
  
      // Imprimir columna derecha
      for (let i = top; i <= bottom; i++) {
        result.push(matrix[i][right]);
      }
      right--;
  
      if (top <= bottom) {
        // Imprimir fila inferior
        for (let i = right; i >= left; i--) {
          result.push(matrix[bottom][i]);
        }
        bottom--;
      }
  
      if (left <= right) {
        // Imprimir columna izquierda
        for (let i = bottom; i >= top; i--) {
          result.push(matrix[i][left]);
        }
        left++;
      }
    }
  
    return result; // Devolver los elementos impresos en forma de array
  }
  
  console.log(
    spiralPrint([
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9], 
      [7, 8, 9], 
      [7, 8, 9], 
      [7, 8, 9], 
      [7, 8, 9], 
      [7, 8, 9], 
      [7, 8, 9],
    ])
  );
  
  
  
  
  
  
  
  
  
  
  