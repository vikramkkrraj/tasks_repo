//  Constructor function Product
function Product(name, price, quantity) {
    this.name = name;
    this.price = price;
    this.quantity = quantity;
}

// Add a method to Product prototype
Product.prototype.getDetails = function () {
    return `Product: ${this.name}, Price: $${this.price}, Quantity: ${this.quantity}`;
};

// Constructor for Electronics (inherits from Product)
function Electronics(name, price, quantity, brand, model) {
    Product.call(this, name, price, quantity); 
    this.brand = brand;
    this.model = model;
}


Electronics.prototype = Object.create(Product.prototype);


// Add methods specific to Electronics
Electronics.prototype.powerOn = function () {
    console.log(`${this.brand} ${this.model} is now ON.`);
};

Electronics.prototype.powerOff = function () {
    console.log(`${this.brand} ${this.model} is now OFF.`);
};

// Constructor for Clothing (inherits from Product)
function Clothing(name, price, quantity, size, material) {
    Product.call(this, name, price, quantity);
    this.size = size;
    this.material = material;
}

// Set up prototype inheritance
Clothing.prototype = Object.create(Product.prototype);
Clothing.prototype.constructor = Clothing;

// Add method specific to Clothing
Clothing.prototype.getClothingInfo = function () {
    return `Clothing: ${this.name}, Size: ${this.size}, Material: ${this.material}`;
};

// Constructor for Books (inherits from Product)
function Book(name, price, quantity, author, genre) {
    Product.call(this, name, price, quantity);
    this.author = author;
    this.genre = genre;
}

//prototype inheritance
Book.prototype = Object.create(Product.prototype);


// Add method specific to Books
Book.prototype.getBookInfo = function () {
    return `Book: ${this.name}, Author: ${this.author}, Genre: ${this.genre}`;
};

// Demonstration
const laptop = new Electronics("Laptop", 1200, 10, "Dell", "XPS 15");
const tshirt = new Clothing("T-Shirt", 25, 50, "L", "Cotton");
const novel = new Book("The Great Gatsby", 15, 100, "F. Scott Fitzgerald", "Classic");

// Testing functionalities
console.log(laptop.getDetails()); // Product: Laptop, Price: $1200, Quantity: 10
laptop.powerOn(); // Dell XPS 15 is now ON.
laptop.powerOff(); // Dell XPS 15 is now OFF.

console.log(tshirt.getDetails()); // Product: T-Shirt, Price: $25, Quantity: 50
console.log(tshirt.getClothingInfo()); // Clothing: T-Shirt, Size: L, Material: Cotton

console.log(novel.getDetails()); // Product: The Great Gatsby, Price: $15, Quantity: 100
console.log(novel.getBookInfo()); // Book: The Great Gatsby, Author: F. Scott Fitzgerald, Genre: Classic
