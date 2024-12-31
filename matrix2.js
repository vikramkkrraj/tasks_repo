let arr = [
    [1,2],
    [3,4],
    [5,6]
]

let N = arr.length;
let M = arr[0].length;

for (let i = 0; i < N; i++) {
    let sum = 0;
    for (let j = 0; j < M; j++) {
        sum = i+j;
    }
    console.log(i, sum);
}