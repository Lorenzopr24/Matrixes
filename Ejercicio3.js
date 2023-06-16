function sumElems(matrix){
let maxy= matrix.length;
let result=0;  
let ram;
for(let y=0;y<maxy;y++){
   for(let x=0;x<matrix[y].length;x++){
 ram=matrix[y][x];
  if(ram>0&&ram%2===0&&ram%6===0&&ram<100){
   result+=ram;

  }
}
}
return result;
}

let matriz=[[1,2,3,4],[5,6,7,8],[9,10,11,12,6],[13,14,15,16]];

console.log(sumElems(matriz))