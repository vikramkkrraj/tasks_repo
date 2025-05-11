import express from 'express';
import ticketRoutes from './routes/ticketRoutes.js';

const app = express();
const PORT = 3000;

app.use(express.json());
app.use('/tickets', ticketRoutes);

app.use((req, res) => {
  res.status(404).json({ error: "404 Not Found" });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
