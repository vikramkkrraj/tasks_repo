import { Router } from 'express';
import { addTask, deleteTask, getAllTask, updateTask } from '../controllers/task.controllers.js';

export const router = Router();

router.route("/add-task").post( addTask );
router.route("/all-tasks").get(getAllTask);
router.route('/update-task/:id').patch(updateTask);
router.route("/delete-task/:id").delete(deleteTask);