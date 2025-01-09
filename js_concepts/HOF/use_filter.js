function processStrudents(students){
    const newStudents = students.filter((student) => {
        return student.marks  > 60;
    })
    
    newStudents.sort((a,b) => {
        const nameA = a.name.toUpperCase(); // ignore upper and lowercase
        const nameB = b.name.toUpperCase();
  
        if(nameA < nameB){
          return 1;
        }
        if(nameA > nameB){
          return -1;
        }
        return 0;
    });
    // console.log(newStudents);

    const studentsNameofmarrksAbove60 = newStudents.map(student => student.name);

    console.log(studentsNameofmarrksAbove60); // [ 'Charlie', 'Bob' ]

    return studentsNameofmarrksAbove60;
}


console.log(processStrudents( [ 
    { name: "Alice", marks: 58 },
    { name: "Bob", marks: 85 },
    { name: "Charlie", marks: 92 },
    { name: "David", marks: 45 } ])) // [ 'Charlie', 'Bob' ]