import { isPrime } from "./isPrime.js";

const numbers = [2,10,17,21,29];

numbers.forEach((num) => {
    console.log(`${num} is ${isPrime(num) ? 'a prime' : 'not a prime'} number.`);;
})