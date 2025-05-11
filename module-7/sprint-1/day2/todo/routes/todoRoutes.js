import express from "express";
import {
  getTodos,
  addTodo,
  searchTodos,
  updateTodo,
  deleteTodo
} from "../controllers/todoController.js";

const router = express.Router();

router.get("/", getTodos);
router.post("/", addTodo);
router.get("/search", searchTodos);
router.put("/:id", updateTodo);
router.delete("/:id", deleteTodo);

export default router;
