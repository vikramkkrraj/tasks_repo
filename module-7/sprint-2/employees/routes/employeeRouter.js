import express from 'express';
import { addEmployee, deleteEmp, getAllEmployees, updateEmp } from '../controllers/employeeControllers.js';
import { roleChecker } from '../middlewares/roleCheckMiddleware.js';

const router = express.Router();

router.get("/employees", getAllEmployees);
router.post("/employees", roleChecker(['admin']),addEmployee);
router.put("/employees/:id", roleChecker(['admin', 'hr']), updateEmp);
router.delete("/employees/:id", roleChecker(['admin']), deleteEmp);

export default router;