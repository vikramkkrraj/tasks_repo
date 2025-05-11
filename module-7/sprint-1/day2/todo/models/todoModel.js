import fs from 'fs/promises';
const dbPath = './db.json';

export async function getAllTodos() {
  const data = await fs.readFile(dbPath, 'utf-8');
  return JSON.parse(data);
}

export async function saveTodos(todos) {
  await fs.writeFile(dbPath, JSON.stringify(todos, null, 2));
}
