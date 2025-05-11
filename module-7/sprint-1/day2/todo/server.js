import express from "express";
import todoRoutes from "./routes/todoRoutes.js";

const app = express();
const PORT = 3000;

app.use(express.json());
app.use("/todos", todoRoutes);

app.use((req, res) => {
  res.status(404).json({ error: "404 Not Found" });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
