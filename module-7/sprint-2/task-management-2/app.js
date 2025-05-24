import express from 'express';
import connectDB from './config/db.js';
import taskRoutes from './routes/task.routes.js';

const app = express();

connectDB();
app.use(express.json());
app.use('/api', taskRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
