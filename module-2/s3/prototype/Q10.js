// Car Constructor function 
function Car(make, model, year, isAvailable = true) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.isAvailable = isAvailable;
}

// Customer Constructor function 
function Customer(name) {
    this.name = name;
    this.rentedCars = [];
}

// Add method to rent a car
Customer.prototype.rentCar = function(car) {
    if (car.isAvailable) {
        car.isAvailable = false;
        this.rentedCars.push(car);
        console.log(`${this.name} has rented the ${car.make} ${car.model}.`);
    } else {
        console.log(`Sorry, the ${car.make} ${car.model} is already rented.`);
    }
};

// Add method to return a car
Customer.prototype.returnCar = function(car) {
    if (this.rentedCars.includes(car)) {
        setTimeout(() => {
            car.isAvailable = true;
            this.rentedCars = this.rentedCars.filter(c => c !== car);
            console.log(`${this.name} has returned the ${car.make} ${car.model}.`);
        }, 2000); 
    } else {
        console.log(`${this.name} has not rented this car.`);
    }
};

// Constructor function for PremiumCustomer (inherits from Customer)
function PremiumCustomer(name, discountRate) {
    Customer.call(this, name);
    this.discountRate = discountRate;
}

// prototype inheritance
PremiumCustomer.prototype = Object.create(Customer.prototype);


// Function to calculate rental price
function calculateRentalPrice(carType, days, customer) {
    const basePrice = 50; // Base price per day
    let typeMultiplier = 1;

    if (carType === "SUV") typeMultiplier = 1.5;
    if (carType === "Sedan") typeMultiplier = 1.2;

    let price = basePrice * typeMultiplier * days;

    // Apply discount if customer is a PremiumCustomer
    if (customer instanceof PremiumCustomer) {
        price *= (1 - customer.discountRate / 100);
    }

    console.log(`Total rental price for ${days} days: $${price.toFixed(2)}`);
    return price;
}

// Function to handle car maintenance
function Maintenance(car, delay) {
    console.log(`The ${car.make} ${car.model} is under maintenance.`);
    setTimeout(() => {
        car.isAvailable = true;
        console.log(`The ${car.make} ${car.model} is now available after maintenance.`);
    }, delay);
}

// Demonstration
const car1 = new Car("Toyota", "Corolla", 2020);
const car2 = new Car("Honda", "Civic", 2021);
const car3 = new Car("Ford", "Explorer", 2019);

const customer1 = new Customer("Alice");
const premiumCustomer1 = new PremiumCustomer("Bob", 10); // 10% discount

// Renting cars
customer1.rentCar(car1);
premiumCustomer1.rentCar(car2);
premiumCustomer1.rentCar(car1); // Should display "already rented"

// Calculate rental price
calculateRentalPrice("SUV", 3, premiumCustomer1); // Premium discount applied
calculateRentalPrice("Sedan", 5, customer1); // No discount

// Returning cars
customer1.returnCar(car1);
premiumCustomer1.returnCar(car2);

// Maintenance demonstration
Maintenance(car3, 3000);
