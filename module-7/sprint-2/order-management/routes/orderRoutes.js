const express = require('express');
const router = express.Router();
const Order = require('../models/Order');

// 1. Get all orders with order_status "shipped"
router.get('/shipped', async (req, res) => {
  const orders = await Order.find({ order_status: 'shipped' });
  res.json(orders);
});

// 2. Update total_amount of order_id:1 to 70000
router.put('/update-amount/:id', async (req, res) => {
  const order = await Order.updateOne({ order_id: parseInt(req.params.id) }, { $set: { total_amount: 70000 } });
  res.json(order);
});

// 3. Delete order with order_id:4
router.delete('/delete/:id', async (req, res) => {
  const result = await Order.deleteOne({ order_id: parseInt(req.params.id) });
  res.json(result);
});

// 4. Retrieve order with customer_name "Alice Johnson"
router.get('/customer/:name', async (req, res) => {
  const order = await Order.findOne({ customer_name: req.params.name });
  res.json(order);
});

// 5. Update order_status of order_id:2 to "delivered"
router.put('/update-status/:id', async (req, res) => {
  const order = await Order.updateOne({ order_id: parseInt(req.params.id) }, { $set: { order_status: 'delivered' } });
  res.json(order);
});

// 6. Get all orders with total_amount >= 15000
router.get('/amount/above/:amount', async (req, res) => {
  const orders = await Order.find({ total_amount: { $gte: parseInt(req.params.amount) } });
  res.json(orders);
});

module.exports = router;
