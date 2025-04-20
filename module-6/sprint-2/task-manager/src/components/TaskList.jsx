import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { 
  fetchTasks, 
  deleteTask, 
  setCurrentPage,
  selectPaginatedTasks,
  selectTotalPages
} from '../features/tasksSlice';
import { useAuth } from '../context/AuthContext';
import Pagination from './Pagination';
import FilterSort from './FilterSort';

function TaskList() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { currentUser } = useAuth();
  
  const status = useSelector(state => state.tasks.status);
  const error = useSelector(state => state.tasks.error);
  const currentPage = useSelector(state => state.tasks.currentPage);
  const paginatedTasks = useSelector(selectPaginatedTasks);
  const totalPages = useSelector(selectTotalPages);

  useEffect(() => {
    if (currentUser) {
      dispatch(fetchTasks(currentUser.uid));
    }
  }, [dispatch, currentUser]);

  const handlePageChange = (page) => {
    dispatch(setCurrentPage(page));
  };

  if (status === 'loading') return <div className="loading">Loading...</div>;
  if (error) return <div className="error">Error: {error}</div>;
  if (!paginatedTasks) return <div className="no-tasks">No tasks available</div>;

  return (
    <div className="task-list">
      <FilterSort />
      
      <div className="tasks-container">
        {paginatedTasks.length > 0 ? (
          paginatedTasks.map(task => {
            if (!task) return null;
            
            const safePriority = task.priority || 'Medium';
            const formattedDate = task.dueDate 
              ? new Date(task.dueDate).toLocaleDateString() 
              : 'No date';

            return (
              <div key={task.id} className={`task-card ${task.completed ? 'completed' : ''}`}>
                <h3>{task.title || 'Untitled Task'}</h3>
                <p>{task.description || 'No description'}</p>
                <div className="task-meta">
                  <span className={`priority ${safePriority.toLowerCase()}`}>
                    {safePriority}
                  </span>
                  <span>Due: {formattedDate}</span>
                  <span>{task.completed ? '✅ Completed' : '🟡 Pending'}</span>
                </div>
                <div className="task-actions">
                  <button onClick={() => navigate(`/edit/${task.id}`)}>Edit</button>
                  <button onClick={() => dispatch(deleteTask(task.id))}>Delete</button>
                </div>
              </div>
            );
          })
        ) : (
          <div className="no-tasks">No tasks found</div>
        )}
      </div>

      {totalPages > 1 && (
        <Pagination 
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      )}
    </div>
  );
}

export default TaskList;