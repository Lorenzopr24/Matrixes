function PrimeSum(matrix){
let lan=matrix[0].length;
let lon=matrix.length;
let result=0;

for(let y=0;y<lon;y++){
    for(let x=0;x<lan;x++){
    if(matrix[y][x]%2&&3&&5&&7!==0){
result+=matrix[y][x]

    }

    }

}
return(result);
}

let matriz=[[2,3,4,5],
            [5,6,7,8],
            [5,6,7,3],
            [2,4,6,8]]

            console.log(PrimeSum(matriz));