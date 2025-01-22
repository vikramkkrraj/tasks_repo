function Person(name, age) {
    this.name = name;
    this.age = age;

    this.displayInfo = function () {
        console.log(`Name: ${this.name}, Age: ${this.age}`);
    };
}


const person = new Person("Alice", 30);

const boundDisplayInfo = person.displayInfo.bind(person);

boundDisplayInfo(); // Output: Name: Alice, Age: 30
