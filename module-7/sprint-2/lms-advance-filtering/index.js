const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require('./routes/userRoutes');
const courseRoutes = require('./routes/courseRoutes');
const errorHandler = require('./middleware/errorHandler');

const app = express();
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/lmsAdvanced')
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('Connection error:', err));

app.use('/users', userRoutes);
app.use('/courses', courseRoutes);
app.use(errorHandler);

app.listen(3000, () => console.log('Server running on port 3000'));
