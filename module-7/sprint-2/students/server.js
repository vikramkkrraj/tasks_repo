import express from 'express';
import path from 'path';
import fs from 'fs';

const app = express();
const PORT = 3000;

// middleware
app.use(express.json());

// file path
const filePath = path.resolve('./db.json');

// to read the data
const readData = () => {
    const data = fs.readFileSync(filePath, "utf-8");
    return JSON.parse(data);
}
// write the data
const writeData = (data) => {
    fs.writeFileSync(filePath, JSON.stringify(data))
}


// GET -> students data
app.get("/students", (req,res) => {
    const { students } = readData();
    if(!students || students.length == 0) {
        return res.status(404).json({ message : "No Students found"});
    }
    res.status(200).json({
        message : "sucess ",
        students
    })
});

// GET -> fetch student by ID
app.get("/student/:id", (req,res) => {
    const { students } = readData();
    const student = students.find((student) => student.id == Number(req.params.id));
    if(!student) {
        return res.status(404).json({ message : "No Student Found!" });
    };
    res.status(200).json({
        message : "success",
        student
    })
})

// POST -> Add Student
app.post("/students", (req,res) => {
    
    const { students } = readData();
    const { name, course, batch} = req.body;
    if(!name || !course || !batch) {
        return res.status(400).json( { message : "Missing required feilds"});
    };
   
    const id = students.length + 1;
    students.push( { name, course, batch, id});
    writeData({students});
    res.status(201).json({ message : "New Student Added Successfully"});

})

// PUT -> update student data by ID
app.put("/students/:id", (req,res) => {
    const { students } = readData();
    const student = students.find(student => student.id == Number(req.params.id));
    if(!student) {
        return res.status(404).json( { message : "No Student Found"});
    };
    const { name, course, batch} = req.body;
    student.name = name;
    student.course = course;
    student.batch = batch;

    writeData({ students });
    return res.status(200).json( { message : "Student Data Updated Successfully"});

})

// DELETE -> student data by ID
app.delete("/students/:id" , (req,res) => {
    const { students } = readData();
    console.log(typeof req.params.id)
    const student = students.find(student => student.id ===Number(req.params.id));
    if(!student){
        return res.status(404).json({ message : "Student Not Found"});
    }
    const newstudents = students.filter((student) => student.id != Number(req.params.id));
    writeData({students : newstudents });
    res.status(200).json( { message : "Student Data Deleted"});
})

// GET -> students by the same course

app.get("/students/search", (req,res) => {
    const { course } = req.query;
    if (!course) {
        return res.status(400).json({ message: "Course query parameter is required" });
    }
    const { students } = readData();
    console.log(students);

    const filteredStudents = students.filter((student) => student.course.toLowerCase() == course.toLowerCase())

    if(filteredStudents.length == 0) {
        return res.status(400).json({ message : "No Student Found" });
    }
    res.status(200).json({
        message : "successs",
        filteredStudents,
    })
})

app.listen(PORT , ()=> {
    console.log(`Server is Listening at port ${PORT}`);
})
