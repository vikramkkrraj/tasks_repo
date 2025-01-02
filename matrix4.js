
function generatePattern(N) {
    let result = "";
    for (let i = 0; i < N; i++) {
        for (let j = 0; j < N; j++) {
            if (i === 0 || i === N - 1 || j === 0 ) {
                result += "* ";
            } else {
                result += "  ";
            }
        }
        result += "\n";
    }
    console.log(result);
}

let N = 5;
generatePattern(N);
