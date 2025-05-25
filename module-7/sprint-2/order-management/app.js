const express = require('express');
const mongoose = require('mongoose');
const orderRoutes = require('./routes/orderRoutes');

const app = express();
app.use(express.json());

// Connect MongoDB
mongoose.connect('mongodb://localhost:27017/orderDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

// Routes
app.use('/orders', orderRoutes);

// Start Server
app.listen(3000, () => {
  console.log('Server started on http://localhost:3000');
});
