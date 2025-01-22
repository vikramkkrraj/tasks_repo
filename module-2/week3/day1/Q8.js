function personInfo(name, age){
    return `I am ${this.name} and ${this.age} old`;
}
const obj = { name : "Alice", age : 25 };

console.log(personInfo.call(obj));
