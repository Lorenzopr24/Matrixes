function SumBorders(matrix){
let lan=matrix[0].length;
let lon=matrix.length;
let pan=(matrix[0].length)-1;
let pon=(matrix.length)-1;
let result=[];
let suma=(matrix[pon].length)-1;
let resta=(matrix.length)-2
for(let y=0;y<lon;y++){
    for(let x=0;x<lan;x++){
if(y===0){
result.push(matrix[y][x]);

}else if(y<pon && y>0 &&x===pan){
result.push(matrix[y][x]);

}else if(y===pon){
result.push(matrix[y][suma])
suma--;
}else if(y>pon && y>0 &&x===pan){
    result.push(matrix[y][x]);
}

    } 
return(result);
}

let matriz=[[1,2,3,4],
            [5,6,7,8],
            [9,10,11,12],
            [13,14,15,16]]

            console.log(SumBorders(matriz));