function task1(cb) {
    setTimeout(() => {
        console.log("Task 1 complete");
        cb();
    }, 1000);
}
function task2(cb){
    setTimeout(() => {
        console.log("Task 2 Completed");
        cb();
    }, 1000);
}

function task3(cb){
    setTimeout(() => {
        console.log('Task 3 completed');
        cb();
    }, 1000);
}

function task4(cb) {
    setTimeout(() => {
        console.log('Task 4 completed');
        cb();
    }, 1000);
}

task1((data) => {
    task2((data) => {
        task3((data) => {
            task4((data) => {
                console.log("All Tasks Completed");
            })
        })
    })
})