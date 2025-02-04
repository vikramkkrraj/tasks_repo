 // inherit the properties from one constructor function to antoher;

// use of call method;
// const obj1 = {
//   name : "Alice",
//   age : 26,
//   details : function (para1, para2) {
//     console.log(`${this.name} ${this.age} ${para1} ${para2}` );
//   },
// }

// const obj2 = {
//   name : 'guddu kumar',
//   age : 30,
  
  // first method
  // display(para1 , para2) {
  //   obj1.details.call(this, para1,para2);
  // }
// }

// way to call with first method
// console.log(obj2.display("hello", "there"));

// Second method
// console.log(obj1.details.call(obj2, "hello" ,"there"));









// 
// function sayHello(name){
//   console.log(this.name);
// }

// const obj1 = { name : 'Alice' , 
//   // sayHello : function () {
//   //   console.log(this.name);}
  
// };
// const obj2 = { name : "guddu" , 
// // sayHello () {
// //   console.log(this.name)}
//   } ;

// // obj1.sayHello();
// // obj2.sayHello();

// sayHello.call(obj1);
// sayHello.call(obj2);










// Factory function 

// function factory (name , age , place) {
//   const user = {};
//   user.name = name;
//   user.age = age;
//   user.place = place;
  
//   user.display = function (){ // this method is binded to static object
//     console.log(`${user.name} ${user.age} ${user.place}`);
//   };
  
//   user.details = function() { // this method is open to get binded with any object
//     console.log(`${this.name}, ${this.age},${this.place}`)
//   }
  
//   return user;
// }

// const obj1 = factory('Alice',30,"Bihar");
// // console.log(obj1);
// // obj1.display();

// const obj2 = {
//   name : 'Bob',
//   age : 31,
//   place : "delhi",
// }

// obj1.display.call(obj2);
// obj1.details.call(obj2);










// other way to write same thing

// function factory1(name,age,place){
 
//   return {
//      name,     // -> name : name; using ES6 shorthand   
//      age,
//      place,
    
//     display : function() {
//       console.log(`${name} ${age} ${place}`);  //by not using "this" keyword this method can not be binded with any other Object;
//     },
    
//     details : function() {  // details function is not only binded to this object, but it can open to bind with any other object ("this")
//       console.log(`${this.name}, ${age} , ${this.place}`)
//     }
    
//   }
// }
// const obj1 = factory1("Alice" ,30,"Bihar");
// console.log(obj1);
// obj1.display();

// const obj2 = {
//   name : 'Bob',
//   age : 31,
//   place : "delhi",
// }

// obj1.display.call(obj2);
// obj1.details.call(obj2);








// use call method in constructor function 
// function Person(name,age) {
//   this.name = name;
//   this.age = age;
// }

// function Employee(name,age , jobTitle) {
//   Person.call(this, name,age) 
//     this.jobTitle = jobTitle;
  
// }

// const emp = new Employee('Alice',30,"SDE");
// console.log(emp);








// inherit properties and methods using call methods

// function Person(name,age) {
//   this.name = name;
//   this.age = age;
  
//   this.greet = function () {
//     console.log(`Hello ${this.name}`);
//   }
// }

// function Employee(name,age,jobTitle) {
//   Person.call(this,name, age);
//   this.jobTitle = jobTitle;
  
// }


// over shadowing the properties and over ridding the methods
// function Employee(name,age,jobTitle) {
//   Person.call(this,name, age);
//   this.jobTitle = jobTitle;
  
//   this.name = name; // over shadowing (properties called shadowing)
  
//   this.greet = function(){
//     console.log('hello there!'); // over riding the methods
//   }
// }


// const p1 = new Person('Alice',30);
// console.log(p1);

// const emp1 = new Employee("Bob", 30,"SDE");
// console.log(emp1);
// emp1.greet();








// inherit properties by making object and methods by prototype
// function Person(name,age) {
//   this.name = name;
//   this.age = age;
// }

// Person.prototype.greet = function() {
//   console.log(`Hello, my name is ${this.name}`);
// }

// function Employee(name,age, jobTitle){
//   let emp = new Person(name,age);
//   this.name = emp.name;
//   this.age = emp.age;
//   this.jobTitle = jobTitle;
// }

// Inherit methods from Person
// Employee.prototype = Object.create(Person.prototype);


// console.log(Employee.prototype.constructor);

// It replaces the Employee.prototype object with a new object that inherits from Person.prototype.
// But in the process, it also removes the default constructor reference to Employee and instead points it to Person.
// Employee.prototype.constructor = Employee;

// to check this  and do this before initializing
// console.log(Employee.prototype.constructor);


// const emp1 = new Employee('Alice',30, "SDE");
// console.log(emp1);
// emp1.greet();


/*NOTE Is it necessary?

Employee.prototype.constructor = Employee;

No, it's not strictly necessary for functionality. 
The code will still work because JavaScript does not require the constructor property for object instantiation. 
However, it is a good practice because:
*/