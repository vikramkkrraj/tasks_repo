function createInventoryItem(name,category,price){
        return {

            name ,
            category ,
            price,

            describeItem(){
                console.log(`Item : ${this.name}, Category : ${this.category} , Price : ${this.price}`);

            }

        }
}

function addItemDiscount(inventoryItem ,discountPercent){
    return {
        ...inventoryItem,
        discountPercent,
        discountPrice : inventoryItem.price * (1-discountPercent/100),

        applyDiscount(){
            console.log(`Discount Price for ${this.name} : ${this.discountPrice}`)
        }
    }
}

const item = createInventoryItem("Laptop", "Electronics", 1500);
item.describeItem();
// Output: Item: Laptop, Category: Electronics, Price: 1500

const discountedItem = addItemDiscount(item, 10);
discountedItem.applyDiscount();
// Output: Discounted Price for Laptop: 1350
