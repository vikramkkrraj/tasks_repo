import express from 'express';
import { logger } from './middlewares/loggerMiddleware.js';
import employeeRouter from './routes/employeeRouter.js';

const app = express();

app.use(express.json());
app.use(logger);
app.use("/employees", employeeRouter);

app.listen(3000, () => { 
    console.log("Server running at port 3000");
})