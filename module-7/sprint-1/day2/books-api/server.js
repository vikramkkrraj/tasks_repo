import express from 'express';
import fs from 'fs'
const app = express();
const PORT = 3000;

app.use(express.json());
const dbPath = './db.json';

// Helper: Read DB
const readDB = () => JSON.parse(fs.readFileSync(dbPath, 'utf-8'));

// Helper: Write DB
const writeDB = (data) => fs.writeFileSync(dbPath, JSON.stringify(data, null, 2));

// POST /books → Add a new book
app.post('/books', (req, res) => {
  const { id, title, author, year } = req.body;
  if (!id || !title || !author || !year) {
    return res.status(400).json({ error: "All fields (id, title, author, year) are required" });
  }

  const db = readDB();
  const exists = db.books.find(book => book.id === id);
  if (exists) return res.status(409).json({ error: "Book with this ID already exists" });

  db.books.push({ id, title, author, year });
  writeDB(db);
  res.status(201).json({ message: "Book added successfully" });
});

// GET /books → Retrieve all books
app.get('/books', (req, res) => {
  const db = readDB();
  res.status(200).json(db.books);
});

// GET /books/:id → Retrieve book by ID
app.get('/books/:id', (req, res) => {
  const db = readDB();
  const book = db.books.find(b => b.id == req.params.id);
  if (!book) return res.status(404).json({ error: "Book not found" });
  res.status(200).json(book);
});

// PUT /books/:id → Update book by ID
app.put('/books/:id', (req, res) => {
  const { title, author, year } = req.body;
  const db = readDB();
  const index = db.books.findIndex(b => b.id == req.params.id);
  if (index === -1) return res.status(404).json({ error: "Book not found" });

  db.books[index] = { id: Number(req.params.id), title, author, year };
  writeDB(db);
  res.status(200).json({ message: "Book updated successfully" });
});

// DELETE /books/:id → Delete book by ID
app.delete('/books/:id', (req, res) => {
  const db = readDB();
  const index = db.books.findIndex(b => b.id == req.params.id);
  if (index === -1) return res.status(404).json({ error: "Book not found" });

  db.books.splice(index, 1);
  writeDB(db);
  res.status(200).json({ message: "Book deleted successfully" });
});

// GET /books/search?author= OR ?title= → Search books by author or title
app.get('/books/search', (req, res) => {
  const { author, title } = req.query;
  const db = readDB();
  let results = db.books;

  if (author) {
    results = results.filter(b => b.author.toLowerCase().includes(author.toLowerCase()));
  }

  if (title) {
    results = results.filter(b => b.title.toLowerCase().includes(title.toLowerCase()));
  }

  if (results.length === 0) return res.status(404).json({ message: "No books found" });
  res.status(200).json(results);
});

// Handle undefined routes
app.use((req, res) => {
  res.status(404).json({ error: "404 Not Found" });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
