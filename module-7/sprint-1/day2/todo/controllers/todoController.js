
import { getAllTodos, saveTodos } from "../models/todoModel.js";

export async function getTodos(req, res) {
  const todos = await getAllTodos();
  res.json(todos);
}

export async function addTodo(req, res) {
  const { title, completed } = req.body;
  if (!title) return res.status(400).json({ error: "Title is required" });

  const todos = await getAllTodos();
  const newTodo = {
    id: todos.length + 1,
    title,
    completed: completed ?? false,
  };
  todos.push(newTodo);
  await saveTodos(todos);
  res.status(201).json(newTodo);
}

export async function searchTodos(req, res) {
  const { q } = req.query;
  if (!q) return res.status(400).json({ error: "Search query is required" });

  const todos = await getAllTodos();
  const matches = todos.filter(todo =>
    todo.title.toLowerCase().includes(q.toLowerCase())
  );
  res.json(matches);
}

export async function updateTodo(req, res) {
  const id = parseInt(req.params.id);
  const { title, completed } = req.body;
  const todos = await getAllTodos();
  const index = todos.findIndex(todo => todo.id === id);
  if (index === -1) return res.status(404).json({ error: "Todo not found" });

  if (title !== undefined) todos[index].title = title;
  if (completed !== undefined) todos[index].completed = completed;
  await saveTodos(todos);
  res.json(todos[index]);
}

export async function deleteTodo(req, res) {
  const id = parseInt(req.params.id);
  let todos = await getAllTodos();
  const index = todos.findIndex(todo => todo.id === id);
  if (index === -1) return res.status(404).json({ error: "Todo not found" });

  const deleted = todos.splice(index, 1);
  await saveTodos(todos);
  res.json({ message: "Todo deleted", todo: deleted[0] });
}
