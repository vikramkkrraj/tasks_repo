function outerFunction(){
    let outerVariable = 'I am outerFunction Variable!';
    
    function innerFunction(){
        console.log(outerVariable);
    }
    return innerFunction;
};

const myFunction = outerFunction();
myFunction(); // Output: I am outside!  