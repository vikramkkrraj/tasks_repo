function setTimeoutGreeting(obj){
    setTimeout ( function () {
        console.log(`Hello, ${this.name}`)
    }.bind(obj),1000)
}
const person = {name : "Alice"};
setTimeoutGreeting(person);