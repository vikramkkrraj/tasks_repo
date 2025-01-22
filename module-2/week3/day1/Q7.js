function multiplyNumbers(num1, num2){
    function multiply(x,y){
        return x*y;
    }

    return multiply.apply(null, [num1,num2]);
}

const result = multiplyNumbers(10,20);
console.log(result)