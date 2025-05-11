import express from 'express';
import { loggerMiddleware } from './middlewares/loggerMiddleware.js';
import adminRoutes from './routes/adminRoutes.js';
import readerRoutes from './routes/readerRoutes.js';

const app = express();
app.use(express.json());

app.use(loggerMiddleware);

app.use(adminRoutes);
app.use(readerRoutes);

app.use((req, res) => {
    res.status(404).json({ error: '404 Not Found' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
