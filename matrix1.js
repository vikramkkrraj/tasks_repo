let arr = [
    [1,2],
    [3,4],
    [5,6]
]

let N = arr.length;
let M = arr[0].length;
console.log(N, M);

for(let i=0; i<N ; i++){
    let str = "";
    for(let j=0; j<M ; j++){
        str += arr[i][j] + " ";
    }
    console.log(str);
}