import React, { useReducer } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { filterLogs } from '../actions/logActions';

const initialState = {
  severity: '',
  developerId: '',
  startTime: '',
  endTime: ''
};

function filterReducer(state, action) {
  switch (action.type) {
    case 'SET_SEVERITY':
      return { ...state, severity: action.payload };
    case 'SET_DEVELOPER':
      return { ...state, developerId: action.payload };
    case 'SET_START_TIME':
      return { ...state, startTime: action.payload };
    case 'SET_END_TIME':
      return { ...state, endTime: action.payload };
    case 'RESET':
      return initialState;
    default:
      return state;
  }
}

const Filters = () => {
  const [state, localDispatch] = useReducer(filterReducer, initialState);
  const dispatch = useDispatch();
  const { originalLogs } = useSelector(state => state.logs);

  const applyFilters = () => {
    let filtered = [...originalLogs];

    if (state.severity) {
      filtered = filtered.filter(log => 
        log.severity.toLowerCase() === state.severity.toLowerCase()
      );
    }

    if (state.developerId) {
      filtered = filtered.filter(log => 
        String(log.developerId).includes(state.developerId)
      );
    }

    if (state.startTime) {
      const startTimestamp = new Date(state.startTime).getTime();
      filtered = filtered.filter(log => log.timestamp >= startTimestamp);
    }

    if (state.endTime) {
      const endTimestamp = new Date(state.endTime).getTime();
      filtered = filtered.filter(log => log.timestamp <= endTimestamp);
    }

    dispatch(filterLogs(filtered));
  };

  const resetFilters = () => {
    localDispatch({ type: 'RESET' });
    dispatch(filterLogs(originalLogs));
  };

  return (
    <div className="filters-container">
      <div className="filter-group">
        <label>Severity:</label>
        <select
          value={state.severity}
          onChange={(e) => localDispatch({ type: 'SET_SEVERITY', payload: e.target.value })}
        >
          <option value="">All</option>
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
          <option value="critical">Critical</option>
        </select>
      </div>

      <div className="filter-group">
        <label>Developer ID:</label>
        <input
          type="text"
          value={state.developerId}
          onChange={(e) => localDispatch({ type: 'SET_DEVELOPER', payload: e.target.value })}
          placeholder="Enter developer ID"
        />
      </div>

      <div className="filter-group">
        <label>Time Range:</label>
        <div className="time-range">
          <input
            type="datetime-local"
            value={state.startTime}
            onChange={(e) => localDispatch({ type: 'SET_START_TIME', payload: e.target.value })}
          />
          <span>to</span>
          <input
            type="datetime-local"
            value={state.endTime}
            onChange={(e) => localDispatch({ type: 'SET_END_TIME', payload: e.target.value })}
          />
        </div>
      </div>

      <div className="filter-actions">
        <button onClick={applyFilters}>Apply Filters</button>
        <button onClick={resetFilters}>Reset</button>
      </div>
    </div>
  );
};

export default Filters;