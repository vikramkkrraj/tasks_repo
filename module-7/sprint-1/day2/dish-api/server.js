import express from 'express';
import fs from 'fs'
const app = express();
const PORT = 3000;

app.use(express.json());

const dbPath = './db.json';

// Utility to read from db.json
const readDB = () => {
  const data = fs.readFileSync(dbPath, 'utf-8');
  return JSON.parse(data);
};

// Utility to write to db.json
const writeDB = (data) => {
  fs.writeFileSync(dbPath, JSON.stringify(data, null, 2));
};

// POST /dishes → Add a new dish
app.post('/dishes', (req, res) => {
  const { id, name, price, category } = req.body;
  if (!id || !name || !price || !category) {
    return res.status(400).json({ error: "All fields are required" });
  }

  const db = readDB();
  const exists = db.dishes.find(d => d.id === id);
  if (exists) {
    return res.status(409).json({ error: "Dish with same ID already exists" });
  }

  db.dishes.push({ id, name, price, category });
  writeDB(db);
  res.status(201).json({ message: "Dish added successfully" });
});

// GET /dishes → Retrieve all dishes
app.get('/dishes', (req, res) => {
  const db = readDB();
  res.status(200).json(db.dishes);
});

// GET /dishes/:id → Retrieve a dish by ID
app.get('/dishes/:id', (req, res) => {
  const { id } = req.params;
  const db = readDB();
  const dish = db.dishes.find(d => d.id == id);

  if (!dish) {
    return res.status(404).json({ error: "Dish not found" });
  }

  res.status(200).json(dish);
});

// PUT /dishes/:id → Update a dish by ID
app.put('/dishes/:id', (req, res) => {
  const { id } = req.params;
  const { name, price, category } = req.body;
  const db = readDB();
  const index = db.dishes.findIndex(d => d.id == id);

  if (index === -1) {
    return res.status(404).json({ error: "Dish not found" });
  }

  db.dishes[index] = { id: Number(id), name, price, category };
  writeDB(db);
  res.status(200).json({ message: "Dish updated successfully" });
});

// DELETE /dishes/:id → Delete a dish by ID
app.delete('/dishes/:id', (req, res) => {
  const { id } = req.params;
  const db = readDB();
  const index = db.dishes.findIndex(d => d.id == id);

  if (index === -1) {
    return res.status(404).json({ error: "Dish not found" });
  }

  db.dishes.splice(index, 1);
  writeDB(db);
  res.status(200).json({ message: "Dish deleted successfully" });
});

// GET /dishes/get?name= → Search by name (case-insensitive partial match)
app.get('/dishes/get', (req, res) => {
  const { name } = req.query;
  if (!name) {
    return res.status(400).json({ error: "Name query param is required" });
  }

  const db = readDB();
  const results = db.dishes.filter(d =>
    d.name.toLowerCase().includes(name.toLowerCase())
  );

  if (results.length === 0) {
    return res.status(404).json({ message: "No dishes found" });
  }

  res.status(200).json(results);
});

// 404 Handler for undefined routes
app.use((req, res) => {
  res.status(404).json({ error: "404 Not Found" });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
