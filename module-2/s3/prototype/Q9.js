function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.indroduce = function(){
  console.log(`Hi,my name is ${this.name} I am ${this.age} years old.`);
}

function Employee(name,age,jobTitle){
  Person.call(this, name, age);
  this.jobTitle = jobTitle;
}

Employee.prototype = Object.create(Person.prototype)

Employee.prototype.work = function (){
  console.log(`${this.name} is working as ${this.jobTitle}`);
}

;

const person1  = new Person("Alice",25);
const emp1 = new Employee("John",26, "SDE");
console.log(person1);
console.log(emp1)
person1.indroduce();
emp1.indroduce();
emp1.work();
