const express = require('express');
const mongoose = require('mongoose');
const vehicleRoutes = require('./routes/vehicleRoutes');
const errorHandler = require('./middleware/errorHandler');

const app = express();
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/vehicleTrips')
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

app.use('/vehicles', vehicleRoutes);
app.use(errorHandler);

app.listen(3000, () => console.log('Server running on port 3000'));
