import { factorial } from "./factorial.js";

const numbers = [5,7,10];

numbers.forEach((num) => {
    console.log(`Factorial of ${num} is ${factorial(num)}`);
    
})