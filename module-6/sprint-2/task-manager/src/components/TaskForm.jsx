import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { addTask, updateTask } from '../features/tasksSlice';
import { useAuth } from '../context/AuthContext';

function TaskForm() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { currentUser } = useAuth();
  const tasks = useSelector(state => state.tasks.tasks);
  
  const isEditMode = !!id;
  const taskToEdit = tasks.find(task => task.id === id);

  const [formData, setFormData] = useState({
    title: taskToEdit?.title || '',
    description: taskToEdit?.description || '',
    dueDate: taskToEdit?.dueDate || new Date().toISOString().split('T')[0],
    priority: taskToEdit?.priority || 'Medium',
    completed: taskToEdit?.completed || false,
    userId: currentUser?.uid || ''
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (isEditMode) {
        await dispatch(updateTask({ id, taskData: formData })).unwrap();
      } else {
        await dispatch(addTask({ ...formData, userId: currentUser.uid })).unwrap();
      }
      navigate('/');
    } catch (error) {
      console.error('Failed to save task:', error);
    }
  };

  return (
    <div className="task-form">
      <h2>{isEditMode ? 'Edit Task' : 'Add New Task'}</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Title</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Description</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>Due Date</label>
          <input
            type="date"
            name="dueDate"
            value={formData.dueDate}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Priority</label>
          <select
            name="priority"
            value={formData.priority}
            onChange={handleChange}
          >
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
          </select>
        </div>

        <div className="form-group checkbox">
          <label>
            <input
              type="checkbox"
              name="completed"
              checked={formData.completed}
              onChange={handleChange}
            />
            Completed
          </label>
        </div>

        <button type="submit" className="submit-btn">
          {isEditMode ? 'Update Task' : 'Add Task'}
        </button>
      </form>
    </div>
  );
}

export default TaskForm;