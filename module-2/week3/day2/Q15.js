// registerUser function 
function registerUser(cb){
    setTimeout(() => {
        console.log("Registering user...");
        const success = true // simulate sucess or failure
        if(success) {
            cb();
        }else {
            cb("failed to register user");
        }
    }, 1000);
}

// sendVerification function
function sendVerification(cb){
    setTimeout(() => {
        console.log("Sending verification email....");
        const success = true // flag to simulate
        if(success){
            cb();
        } 
        else {
            cb("failed to send verification mail");
        }
    }, 1000);
}

// loginUser function 
function loginUser(cb){
    setTimeout(() => {
        console.log("Logging...");
        const success = true 
        if(success){
            cb()
        }
        else {
            cb("failed to login")
        }
    }, 1000);
}

// displayWelcomeMessage function
function displayWelcomeMessage(cb){
    setTimeout(() => {
        console.log("Welcome to the Platform");
        cb();
    }, 1000);
}

// code flow with execution of callback;

registerUser((err) => {
    if(err){
        console.error(err);
        return // stop the flow
    }
    sendVerification((err) => {
        if(err) {
            console.error(err);
            return // stop the flow
        }
        loginUser(err => {
            if(err) {
                console.error(err);
                return ; // stop the flow or further execution   
            }
            displayWelcomeMessage(err => {
                if(err) {
                    console.error(err);
                    return ;
                }
                console.log("workflow is completed!")
            })
        })
    })
})