import Task from '../models/task.model.js';

export const createTask = async (req, res) => {
  try {
    const { title, description, priority, dueDate } = req.body;
    const task = new Task({ title, description, priority, dueDate });
    await task.save();
    res.status(201).json(task);
  } catch (error) {
    if (error.code === 11000) {
      return res.status(400).json({ message: 'Title must be unique' });
    }
    res.status(500).json({ message: 'Server Error' });
  }
};

export const getTasks = async (req, res) => {
  try {
    const { priority, isCompleted } = req.query;
    const filter = {};
    if (priority) filter.priority = priority;
    if (isCompleted !== undefined) filter.isCompleted = isCompleted === 'true';
    const tasks = await Task.find(filter);
    res.json(tasks);
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};

export const updateTask = async (req, res) => {
  try {
    const { id } = req.params;
    const updates = req.body;

    if (updates.priority && !['low', 'medium', 'high'].includes(updates.priority)) {
      return res.status(400).json({ message: 'Invalid priority value' });
    }

    if (updates.isCompleted === true) {
      updates.completionDate = new Date();
    }

    const updatedTask = await Task.findByIdAndUpdate(id, updates, { new: true });

    if (!updatedTask) {
      return res.status(404).json({ message: 'Task not found' });
    }

    res.json(updatedTask);
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};

export const deleteTasks = async (req, res) => {
  try {
    const { priority } = req.query;
    if (!priority) {
      return res.status(400).json({ message: 'Priority query required' });
    }

    const result = await Task.deleteMany({ priority });
    res.json({ deletedCount: result.deletedCount });
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};
