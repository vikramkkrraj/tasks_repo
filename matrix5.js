function reverseUTraversal(matrix) {
    let N = matrix.length;
    let str = ""

    // Traverse the leftmost column from bottom to top
    for (let i = N - 1; i >= 0; i--) {
        str = str + matrix[i][0] + " ";
    }

    // Traverse the top row from left to right, starting from the second element
    for (let j = 1; j < N; j++) {
        str = str + matrix[0][j] + " ";
    }

    // Traverse the rightmost column from top to bottom, starting from the second element
    for (let i = 1; i < N; i++) {
        str = str + matrix[i][N - 1] + " ";
    }

    for (let j = N - 2; j > 0; j--) {
        str += (matrix[N - 1][j]);
    }

    return str;
}

// Sample Input
let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

console.log(reverseUTraversal(matrix)); // Output: [7, 4, 1, 2, 3, 6, 9]
