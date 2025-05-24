import mongoose from 'mongoose';

const taskSchema = new mongoose.Schema({
  title: { type: String, required: true, unique: true },
  description: { type: String, required: true },
  priority: { type: String, required: true, enum: ['low', 'medium', 'high'] },
  isCompleted: { type: Boolean, default: false },
  completionDate: { type: Date },
  dueDate: { type: Date }
});

export default mongoose.model('Task', taskSchema);
