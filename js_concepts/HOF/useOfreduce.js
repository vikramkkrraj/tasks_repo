const products = ["electronics", "clothing", "electronics", "toys", "clothing", "toys", "toys"];

const electronicsCount = products.reduce((acc , product) => {
    if(product === "electronics") {
        acc++;
    }
    return acc;
},0);
console.log(electronicsCount); // 2

const clothingCount = products.reduce((acc , product) => {
    if(product === "clothing") {
        acc++;
    }
    return acc;
},0);

const toysCount = products.reduce((acc , product) => {
    if(product === "toys") {
        acc++;
    }
    return acc;
},0);

const productwithCount = {};
products.forEach((product) => {
    if(product == "electronics") {
        productwithCount[product] = electronicsCount;
    }else if(product == "clothing") {
        productwithCount[product] = clothingCount;
    }else if(product == "toys") {
        productwithCount[product] = toysCount;
    }
})
console.log(productwithCount); // { electronics: 2, clothing: 2, toys: 3 }

// Sorting the object based on the count in decreasing order
const arr = Object.entries(productwithCount).sort((a,b) => b[1] - a[1]);
console.log(arr); // [ [ 'toys', 3 ], [ 'electronics', 2 ], [ 'clothing', 2 ] ]
console.log(arr[0][1]); // 3