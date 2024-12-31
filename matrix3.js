let arr = [
    [1,2,3,4,5],
    [6,7,8,9,1],
    [3,2,5,4,6],
    [7,8,9,1,2]
]
let N = arr.length;
let M = arr[0].length;
let str = "";

for (let i = 0; i < N; i++) {
    if (i % 2 == 0) {
        for (let j = M-1; j >=0 ; j--) {
            str += arr[i][j] + " ";
        }
    }else{
        for (let j = 0; j < M; j++) {
            str += arr[i][j] + " ";
    }
}
}
console.log(str);
