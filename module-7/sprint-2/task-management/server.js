import dotenv from 'dotenv/config';
import express from 'express';
import morgan from 'morgan';
import { connectDB } from './database/db.js';
import { router } from './routes/task.router.js';

const app = express();

// listner
connectDB()

// middleware 
app.use(express.json());
app.use(morgan('dev'))

// routes
app.use("/api/v1/task", router);


app.listen(process.env.PORT|| 4000 , () => {
    console.log(`Server running at the port ${process.env.PORT}`);
    
})
