const express = require('express');
const mongoose = require('mongoose');
const User = require('./models/User');
const Address = require('./models/Address');

const app = express();
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/userAddressDB')
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

// Create User
app.post('/users', async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.status(201).json(user);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Add Address to User
app.post('/users/:userId/address', async (req, res) => {
  try {
    const address = await Address.create(req.body);
    await User.findByIdAndUpdate(req.params.userId, {
      $push: { addresses: address._id }
    });
    res.status(201).json(address);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Summary
app.get('/users/summary', async (req, res) => {
  try {
    const users = await User.find().populate('addresses');
    const totalUsers = users.length;
    const totalAddresses = users.reduce((sum, u) => sum + u.addresses.length, 0);
    const summary = users.map(u => ({ name: u.name, addressCount: u.addresses.length }));
    res.json({ totalUsers, totalAddresses, summary });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get User with Addresses
app.get('/users/:userId', async (req, res) => {
  try {
    const user = await User.findById(req.params.userId).populate('addresses');
    if (!user) return res.status(404).json({ error: 'User not found' });
    res.json(user);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Delete Address from User
app.delete('/users/:userId/address/:addressId', async (req, res) => {
  try {
    await Address.findByIdAndDelete(req.params.addressId);
    await User.findByIdAndUpdate(req.params.userId, {
      $pull: { addresses: req.params.addressId }
    });
    res.json({ message: 'Address deleted' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.listen(3000, () => console.log('Server running on port 3000'));
