const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
  title: { type: String, required: true },
  instructor: { type: String, required: true },
  duration: { type: Number, required: true }, // in hours
  maxCapacity: { type: Number, required: true },
  schedule: {
    startDate: { type: Date, required: true },
    endDate: { type: Date, required: true },
    days: [{ type: String }]
  }
});

module.exports = mongoose.model('Course', courseSchema);
