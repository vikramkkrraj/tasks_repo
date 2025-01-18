function createCounter(){
    let count = 0;

    return {
        increament: function(){
            count++;
            return count;
        },
        getCount: function(){
            return count;
        }
    }
}
const counter = createCounter();
console.log(counter.increament()); // 1
console.log(counter.increament()); // 2
console.log(counter.getCount()); // 2