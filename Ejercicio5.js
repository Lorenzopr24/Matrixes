function spiralPrint(matriz, codigo) {
    const filas = matriz.length;
    const columnas = matriz[0].length;
    let posicion = 0;
    let x = 0,
      y = 0,
      restoY = 0,
      restoX = 0,
      valorSuma = 1,
      vx = 1,
      vy = 0,
      m = 0;
    let id = 1,
      idx = 1;
    let enter = columnas;
  
    for (let b = 0; b < filas + columnas - 1; b++) {
      for (let a = 0; a < enter; a++) {
        if (m === 2) {
          x += vx;
          y += vy;
        }
        matriz[y][x] = codigo[posicion];
        m = 2;
        posicion++;
      }
      if (id === 1) {
        restoY++;
        vy = valorSuma;
        vx = 0;
        enter = filas - restoY;
        id = 0;
      } else if (id === 0) {
        restoX++;
        if (idx === 1) {
          valorSuma = -1;
          idx = 0;
        } else if (idx === 0) {
          valorSuma = 1;
          idx = 1;
        }
        vy = 0;
        vx = valorSuma;
        enter = columnas - restoX;
        id = 1;
      }
    }
  
    return matriz;
  }
  
  function createArr(arrSpiral) {
    const filas = Math.ceil(Math.sqrt(arrSpiral.length));
    const columnas = Math.ceil(arrSpiral.length / filas);
    const matriz = [];
    for (let i = 0; i < filas; i++) {
      const fila = [];
      for (let j = 0; j < columnas; j++) {
        fila.push(0);
      }
      matriz.push(fila);
    }
  
    return spiralPrint(matriz, arrSpiral);
  }
  
  let matriz = [1, 2, 3, 6, 9, 8, 7, 4, 5]; // No funciona con una matriz irregular
  
  console.log(createArr(matriz));