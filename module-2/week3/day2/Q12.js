const id = setInterval(()=> {
    console.log("Loading...")
},1000);
// console.log(id);

setTimeout(() => {
    clearInterval(id);
}, 6000);