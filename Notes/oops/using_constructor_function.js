/*

OOP (Object-Oriented Programming) is a programming paradigm based on the concept of objects, 
which contain properties (attributes) and methods (behavior).


OOP Principles
The four core principles of OOP are:
✅ Encapsulation → Bundling data & methods inside objects
✅ Abstraction → Hiding unnecessary details & exposing only what's needed
✅ Inheritance → Allowing one class (or constructor) to inherit from another
✅ Polymorphism → Allowing different objects to be treated in a similar way

*/


// 1️⃣ Encapsulation (Bundling properties & methods together in an object)
// function Person(name,age) {
//   // private variables(Not truly private, but conventionally hidden);
//   let _name = name;
//   let _age = age;
  
//   // public method to access private variables
//   this.getName = function (){
//     return _name;
//   };
  
//   this.getAge = function() {
//     return _age;
//   };
  
//   this.setAge = function(newAge) {
//     if(newAge > 0){
//       _age = newAge;
//     } else console.log("Age must be positive!");
//   }
  
// }
// const person1 = new Person("Alica", 30);
// console.log(person1);  
// console.log(person1.name) // -> undefined
// console.log(person1.getName()); /// -> Alice
// person1.setAge(40)
// console.log(person1.getAge()) // -> 40 



/*
2️⃣ Abstraction (Hiding implementation details & exposing only relevant features)
Abstraction helps to simplify complex logic by exposing only necessary functionality.
*/

// function BankAccount(owner , balance){
//   let _balance = balance;
//   this.owner = owner;
  
//   this.disposite = function (amount) {
//     if(amount > 0) {
//       _balance += amount;
//       console.log(`Deposited $${amount}`);
//     }
//   };
  
//   this.withdraw = function (amount){
//     if(amount > 0 && _balance >= amount) {
//       _balance -= amount;
//       console.log(`withdrew $${amount}`);
//     }else {
//       console.log("Insufficient funds");
//     }
//   };
  
//   this.getBalance = function() {
//     return `Account balance is : $${_balance}`
//   }
  
// }

// const account = new BankAccount("Alice", 1000);
// console.log(account)
// account.disposite(1000);
// account.withdraw(500)
// console.log(account.getBalance());



/*
3️⃣ Inheritance (Creating a child class from a parent class)
Inheritance allows one object type to inherit properties and methods from another.
*/

// function Animal(name) {
//     this.name = name;
// }

// Animal.prototype.makeSound = function() {
//     return `${this.name} makes a sound.`;
// };

// // Child constructor (inherits from Animal)
// function Dog(name, breed) {
//     Animal.call(this, name); // Call the parent constructor
//     this.breed = breed;
// }

// // Inherit prototype methods
// Dog.prototype = Object.create(Animal.prototype);
// Dog.prototype.constructor = Dog;

// // Additional method for Dog
// Dog.prototype.bark = function() {
//     return `${this.name} (a ${this.breed}) barks loudly!`;
// };

// const dog = new Dog("Buddy", "Golden Retriever");
// console.log(dog.makeSound()); // Buddy makes a sound.
// console.log(dog.bark());      // Buddy (a Golden Retriever) barks loudly!




/*
4️⃣ Polymorphism (Overriding methods in child classes)
Polymorphism allows methods to have different behaviors in derived classes.
*/

// function Animal(name) {
//     this.name = name;
// }

// Animal.prototype.makeSound = function() {
//     return `${this.name} makes a generic sound.`;
// };

// // Dog inherits from Animal and overrides makeSound()
// function Dog(name, breed) {
//     Animal.call(this, name);
//     this.breed = breed;
// }

// Dog.prototype = Object.create(Animal.prototype);
// Dog.prototype.constructor = Dog;

// Dog.prototype.makeSound = function() {
//     return `${this.name} (a ${this.breed}) barks!`;
// };

// // Cat inherits from Animal and overrides makeSound()
// function Cat(name, color) {
//     Animal.call(this, name);
//     this.color = color;
// }

// Cat.prototype = Object.create(Animal.prototype);
// Cat.prototype.constructor = Cat;

// Cat.prototype.makeSound = function() {
//     return `${this.name} (a ${this.color} cat) meows!`;
// };

// // Testing Polymorphism
// const dog1 = new Dog("Max", "Labrador");
// const cat1 = new Cat("Whiskers", "black");

// console.log(dog1.makeSound()); // Max (a Labrador) barks!
// console.log(cat1.makeSound()); // Whiskers (a black cat) meows!




