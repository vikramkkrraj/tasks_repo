function createCar(make, model,year){
    const car = {};
    car.make = make;
    car.model = model;
    car.year = year;
    car.describeCar = function (){
        console.log(`This car is a ${this.year} ${this.make} ${this.model}`);
    };
    return car;
}

const car = createCar("Toyota", "Camry",2022);
car.describeCar();
