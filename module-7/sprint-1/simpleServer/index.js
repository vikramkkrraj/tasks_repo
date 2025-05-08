import express from 'express';

const app = express();
const PORT = 3000;

app.get("/home", (req,res) => {
    res.send("This is Home Page");
})
app.get("/contactus", (req,res)=> {
    res.send('Contact us at contact@contact.com')
})

app.listen(PORT, ()=>{
    console.log(`Server is running on http://localhost:${PORT}`)
})