const factorial = (n) => {
    if(n < 0 || isNaN(n)) {
        return "Invalid input";
    }
   
    if(n == 0) return 1;
    

    return n*factorial(n-1);
    // return fact;
}
console.log(factorial(5)); // 120
console.log(factorial(0)); // 1
console.log(factorial(-1)); // Invalid input
console.log(factorial("a")); // Invalid input