function ExmployeePerfomanceEvaluationSys(arr) {
    
    const filter = arr.filter((item) => item.tasksCompleted > 5);
    // console.log(filter);

    const map = filter.map((item) => {
        
        if(item.rating > 4.5){
            item.performance = "Excellent";
        }else if(item.rating >= 3 && item.rating <=4.5){
            item.performance = "Good";
        }else {
            item.performance = "Needs Improvement";
        }

        return item;
    })
    const sotedEmployees = map.sort((a,b) => {
        const performanceRating = {
            "Excellent": 3,
            "Good": 2,
            "Needs Improvement": 1
        }
        return performanceRating[b.performance] - performanceRating[a.performance]; 
    });

    // console.log(sotedEmployees);
    const finalsotedEmployees = sotedEmployees.map((item) => {
        return {name: item.name, performance: item.performance};
    })

    return finalsotedEmployees;
}

const input = [
    { name: "Alice", tasksCompleted: 8, rating: 4.7 },
    { name: "Bob", tasksCompleted: 4, rating: 4.0 },
    { name: "Charlie", tasksCompleted: 6, rating: 3.5 },
    { name: "David", tasksCompleted: 10, rating: 4.9 },
    { name: "Eve", tasksCompleted: 7, rating: 2.8 }
  ]


console.log(ExmployeePerfomanceEvaluationSys(input));

//  output : [
//     { name: 'Alice', performance: 'Excellent' },
//     { name: 'David', performance: 'Excellent' },
//     { name: 'Charlie', performance: 'Good' },
//     { name: 'Eve', performance: 'Needs Improvement' }
//   ]
  