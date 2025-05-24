import express from 'express';
import { createTask, getTasks, updateTask, deleteTasks } from '../controllers/task.controller.js';
import { validateTask } from '../middleware/task.middleware.js';

const router = express.Router();

router.post('/tasks', validateTask, createTask);
router.get('/tasks', getTasks);
router.patch('/tasks/:id', validateTask, updateTask);
router.delete('/tasks', deleteTasks);

export default router;
