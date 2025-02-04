/*
OOP Principles Using Factory Functions in JavaScript
Factory functions are an alternative to constructor functions for implementing Object-Oriented Programming (OOP) in JavaScript. They return an object with properties and methods, providing a more flexible and composable approach to OOP.
*/


// 1️⃣ Encapsulation (Hiding Data)
// Encapsulation ensures that object data is private and can only be accessed through controlled methods.

// function createPerson(name, age) {
//   let _name = name; // private variable using closures
//   let _age = age;  // private variable using closures
  
//   const user = {};
//   user.getName = function(){
//     return _name;
//   };
 
//   user.getAge = function () {
//     return _age;
//   };
  
//   user.setAge = function(newAge) {
//     if(newAge > 0) {
//       _age = newAge;
//     }else console.log("Invalid age!");
//   }
  
//   return user;
  
// }

// const person = createPerson("Alice",30);
// console.log(person);
// console.log(person.getName());
// person.setAge(40);
// console.log(person.getAge());
// console.log(person.name); // -> undefined;




/*
2️⃣ Abstraction (Hiding Complexity)
Abstraction hides unnecessary details and provides a simple interface.
*/

// function createBankAccount(owner, balance) {
//     let _balance = balance; // Private variable

//     return {
//         deposit(amount) {
//             if (amount > 0) {
//                 _balance += amount;
//                 console.log(`Deposited $${amount}. New balance: $${_balance}`);
//             }
//         },
//         withdraw(amount) {
//             if (amount > 0 && amount <= _balance) {
//                 _balance -= amount;
//                 console.log(`Withdrew $${amount}. Remaining balance: $${_balance}`);
//             } else {
//                 console.log("Insufficient funds or invalid amount!");
//             }
//         },
//         getBalance() {
//             return `Account balance: $${_balance}`;
//         }
//     };
// }

// const account = createBankAccount("John Doe", 1000);
// console.log(account.getBalance()); // Account balance: $1000
// account.deposit(500);  // Deposited $500. New balance: $1500
// account.withdraw(2000); // Insufficient funds or invalid amount!


// ✅ Abstraction achieved by exposing only deposit(), withdraw(), and getBalance(), while _balance remains hidden.




/*
3️⃣ Inheritance (Using Composition)
Factory functions can inherit functionality by reusing existing functions.
*/

// function createPerson(name, age) {
//     let _name = name;
//     let _age = age;

//     return {
//         getName() {
//             return _name;
//         },
//         getAge() {
//             return _age;
//         }
//     };
// }

// function createEmployee(name, age, jobTitle) {
//     let person = createPerson(name, age); // Inherit properties from Person

//     return {
//         ...person, // Inherit all person methods
//         jobTitle,
//         describe() {
//             return `${person.getName()} is a ${jobTitle} and is ${person.getAge()} years old.`;
//         }
//     };
// }

// const emp1 = createEmployee("Bob", 25, "Software Engineer");
// console.log(emp1.describe()); // Bob is a Software Engineer and is 25 years old.
// console.log(emp1.getName());  // Bob (inherited from Person)

// ✅ Inheritance achieved using composition (...person spreads inherited methods).







/*
4️⃣ Polymorphism (Method Overriding)
Different objects can have the same method but behave differently.
*/

// function createAnimal(name) {
//     return {
//         name,
//         makeSound() {
//             return `${name} makes a generic sound.`;
//         }
//     };
// }

// function createDog(name, breed) {
//     let animal = createAnimal(name); // Inherit from Animal

//     return {
//         ...animal,
//         breed,
//         makeSound() { // Overriding method (Polymorphism)
//             return `${name} (a ${breed}) barks!`;
//         }
//     };
// }

// function createCat(name, color) {
//     let animal = createAnimal(name); // Inherit from Animal

//     return {
//         ...animal,
//         color,
//         makeSound() { // Overriding method (Polymorphism)
//             return `${name} (a ${color} cat) meows!`;
//         }
//     };
// }

// const dog = createDog("Max", "Labrador");
// const cat = createCat("Whiskers", "black");

// console.log(dog.makeSound()); // Max (a Labrador) barks!
// console.log(cat.makeSound()); // Whiskers (a black cat) meows!


// ✅ Polymorphism achieved by overriding makeSound() in createDog() and createCat().





// NOTE : 
/*

💡 Why Use Factory Functions Instead of Constructor Functions?
✅ No need for new keyword (avoids this issues).
✅ Better Composition (easier to mix & match behaviors).
✅ Encapsulation using Closures (truly private variables).

*/
