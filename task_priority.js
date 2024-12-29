const todo = [ "reading news paper", "attending lecture", "complete Assignment", "cooking" ,"having meal"];

todo.shift();
// console.log(todo);
todo.unshift("have breakfast");
todo.unshift("morning walk");
// console.log(todo);
todo[todo.length-1] = "listening music"

console.log(todo);


