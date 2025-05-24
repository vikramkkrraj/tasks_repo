export const validateTask = (req, res, next) => {
  const { title, description, priority } = req.body;

  if (!title || !description || !priority) {
    return res.status(400).json({ message: 'Incomplete Data Received' });
  }

  const validPriorities = ['low', 'medium', 'high'];
  if (!validPriorities.includes(priority)) {
    return res.status(400).json({ message: 'Invalid priority value. Must be one of: low, medium, high' });
  }

  next();
};
