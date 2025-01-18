function inventoryMS(products){

    const filteredProducts = products.filter(item => item.stock <100);
    // console.log(filteredProducts);

    const mappedProduct = filteredProducts.map((item) => {
        item.toalReOrderCost = item.pricePerUnit * (100 - item.stock);
        return item;
    })

    // console.log(mappedProduct);
    const reorderCost = mappedProduct.reduce((acc,item) => {
           if(acc[item.category]){
            acc[item.category] += item.toalReOrderCost;
           }else{
            acc[item.category] = item.toalReOrderCost;
           }
           return acc;
    },{})

    // console.log(reorderCost);
    return reorderCost; 
}

const input = [
    { name: "Laptop", category: "Electronics", stock: 50, pricePerUnit: 1000 },
    { name: "Phone", category: "Electronics", stock: 150, pricePerUnit: 500 },
    { name: "T-shirt", category: "Clothing", stock: 40, pricePerUnit: 20 },
    { name: "Jeans", category: "Clothing", stock: 90, pricePerUnit: 40 },
    { name: "Watch", category: "Accessories", stock: 70, pricePerUnit: 150 }
]
console.log(inventoryMS(input));
  
//   Output: {
//     "Electronics": 50000,   // Laptop needs 50 more units * $1000 per unit
//     "Clothing": 2000,       // T-shirt needs 60 more units * $20 + Jeans needs 10 more units * $40
//     "Accessories": 4500     // Watch needs 30 more units * $150
//   }
  