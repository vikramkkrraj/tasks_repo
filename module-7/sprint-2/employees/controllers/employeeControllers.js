import { readData, writeData } from './../utils/readwrite.js';

export const getAllEmployees = (req,res) => {
        const { employees } = readData();
        if(employees.length==0){
            return res.status(200).json({ message : "No Employee"});
        };
        res.status(200).json({
            message : "success", 
            employees
        })
}

export const addEmployee = (req,res) => {
    const { employees } = readData();
    const id = employees.length + 1;
    writeData({ employees : [...employees , {...req.body, id }]});
    res.status(201).json({
        message : "Employee Added Successfully"
    })
}

export const updateEmp = (req,res) => {
    const { employees} = readData();
    const emp = employees.find((emp) => emp.id == Number(req.params.id));
    if(!emp) {
        return res.status(404).json({ message : "Employee not found"});
    };
    const { name , position, department , salary , status} = req.body;
    emp.name = name;
    emp.position = position;
    emp.department = department;
    emp.salary = salary;
    emp.status = status;
    writeData({ employees : [...employees]})
    res.status(200).json({ message : "Data Updated!"});
}

export const deleteEmp = (req,res) => {
    const { employees } = readData();
    const emp = employees.find((emp) => emp.id == Number(req.params.id));
    console.log(emp);
    if(!emp) {
        return res.status(404).json({ message: "Data not Found"});
    }
    const newEmp = employees.filter((emp) => emp.id !== Number(req.params.id));
    writeData({ employees : [...newEmp]});
    res.status(200).json({ message : "Data Deleted Successfully"});

}