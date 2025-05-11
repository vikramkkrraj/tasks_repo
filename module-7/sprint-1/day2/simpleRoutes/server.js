import express from 'express';

const app = express();

app.get("/", (req,res) => {
    res.send("Hello There!");
})

app.get("/home", (req,res) => {
    res.send( "<h1>Welcome to Home Page. </h1>");
})

app.get("/aboutus", (req,res) => {
    res.json( {
        message : "Welcome to About us"
    })
})

app.get('/contactus' , (req,res) => {
    res.json({
        phone : "909090909",
        email : "vikram@gmail.com",
        address : "Bangalore"
    })
})
console.log('hello')
app.use ((req,res) => {
    res.status(404).send("404 not found");
})


app.listen(3000, () => {
    console.log("Server is running at port 3000");
})