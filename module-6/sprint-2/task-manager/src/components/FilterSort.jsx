import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setFilter, setSort } from '../features/tasksSlice';

function FilterSort() {
  const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = useState('');
  const [debouncedTerm, setDebouncedTerm] = useState(searchTerm);

  useEffect(() => {
    const timer = setTimeout(() => setDebouncedTerm(searchTerm), 500);
    return () => clearTimeout(timer);
  }, [searchTerm]);

  useEffect(() => {
    dispatch(setFilter(debouncedTerm ? `search:${debouncedTerm}` : 'all'));
  }, [debouncedTerm, dispatch]);

  const handleStatusFilter = (status) => {
    dispatch(setFilter(status));
  };

  const handlePriorityFilter = (priority) => {
    dispatch(setFilter(`priority:${priority}`));
  };

  const handleSort = (sortBy, sortOrder) => {
    dispatch(setSort({ sortBy, sortOrder }));
  };

  return (
    <div className="filter-sort">
      <div className="search-box">
        <input
          type="text"
          placeholder="Search tasks..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="filter-group">
        <span>Filter by:</span>
        <button onClick={() => handleStatusFilter('all')}>All</button>
        <button onClick={() => handleStatusFilter('completed')}>Completed</button>
        <button onClick={() => handleStatusFilter('active')}>Active</button>
      </div>

      <div className="filter-group">
        <span>Priority:</span>
        <button onClick={() => handlePriorityFilter('High')}>High</button>
        <button onClick={() => handlePriorityFilter('Medium')}>Medium</button>
        <button onClick={() => handlePriorityFilter('Low')}>Low</button>
      </div>

      <div className="sort-group">
        <span>Sort by:</span>
        <button onClick={() => handleSort('dueDate', 'asc')}>Date (Oldest)</button>
        <button onClick={() => handleSort('dueDate', 'desc')}>Date (Newest)</button>
        <button onClick={() => handleSort('priority', 'desc')}>Priority (High-Low)</button>
        <button onClick={() => handleSort('priority', 'asc')}>Priority (Low-High)</button>
      </div>
    </div>
  );
}

export default FilterSort;