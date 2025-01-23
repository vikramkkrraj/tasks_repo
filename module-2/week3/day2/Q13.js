function timer(duration, onComplete){
    setTimeout(() => {
        onComplete(`Time of ${duration} ms finished`)
    }, duration);
}

timer(5000,(message)=>{
    console.log(message);
})