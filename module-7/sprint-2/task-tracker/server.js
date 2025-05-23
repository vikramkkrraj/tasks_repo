import express from 'express';
import fs from 'fs';

const app = express();

app.use(express.json());

const readData = () => {
    const data = fs.readFileSync("./tasks.json", "utf-8");
    return JSON.parse(data);
}

const writeData = (data) => {
    fs.writeFileSync("./tasks.json",JSON.stringify(data));
}

// GET /tasks → Returns all tasks
app.get("/tasks", (req,res) => {
    const { tasks } = readData();
    res.status(200).json({ message : "success", tasks});
})

// POST /tasks → Adds a task
app.post("/tasks", (req,res) => {
    const { title, description, tag, priority, status } = req.body;
    if(!title || !description || !tag || !priority) {
        return res.status(400).json({ message : "all fields are required"});
    };
    const { tasks } = readData();
    const id = tasks.length + 1;
    writeData({ tasks : [...tasks , {...req.body, id}]});
    res.status(201).json( {
        message : "Task Added Successfully",
    })
})

// PUT /tasks/:id → Updates a task
app.put("/tasks/:id", (req,res) => {
    const { tasks } = readData();
    const task = tasks.find(task => task.id == Number(req.params.id));
    if(!task) {
        return res.status(404).json({ message : "Task Not Found"});
    };
    task.title = req.body.title;
    task.description = req.body.description;
    task.tag = req.body.tag;
    task.priority = req.body.priority;
    task.status = req.body.status;

    writeData({ tasks})

    res.status(200).json({ 
        message : "Data is updated Successfully"
    });
})

// DELETE /tasks/:id → Deletes a task
app.delete("/tasks/:id", (req,res) => {
    const { tasks } = readData();
    const task = tasks.find((task) => task.id == Number(req.params.id));
    if(!task){
        return res.status(404).json({ message : "Task Not Found"});
    };
    const newTasks = tasks.filter((task) => task.id != Number(req.params.id));
    
    writeData({ tasks : newTasks });
    res.status(200).json({
        message : "Task Deleted Successfuly"
    })
})

// GET /tasks/filter?tag=frontend → Returns tasks matching the tag
app.get("/tasks/filter", (req,res) => {
    const { tasks } = readData();
    const filteredTasks = tasks.filter((task) => task.tag == req.query.tag);
    if(!filteredTasks) {
        return res.status(404).json({ message : "Task Not Found"});
    };
    res.status(200).json({
        message : 'success',
        filteredTasks
    })
})

app.listen(3000, ()=> {
    console.log("Server listening at port 3000");
})