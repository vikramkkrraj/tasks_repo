import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import libraryRoutes from './routes/library.routes.js';

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());

// Routes
app.use('/library', libraryRoutes);

// Root route
app.get('/', (req, res) => {
  res.send('Library API is running');
});

// DB + Server
connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
});
