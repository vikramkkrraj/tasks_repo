import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { filterLogs } from '../actions/logActions';
import { searchLogs, timestampComparator, severityComparator } from '../utils/search';

const SearchComponent = () => {
  const [searchType, setSearchType] = useState('timestamp');
  const [searchValue, setSearchValue] = useState('');
  const dispatch = useDispatch();
  const { originalLogs } = useSelector(state => state.logs);

  const handleSearch = () => {
    if (!searchValue) {
      dispatch(filterLogs(originalLogs));
      return;
    }

    let results = [];
    if (searchType === 'timestamp') {
      const targetTimestamp = new Date(searchValue).getTime();
      if (isNaN(targetTimestamp)) {
        alert('Invalid date format');
        return;
      }
      results = searchLogs(originalLogs, 'timestamp', targetTimestamp, timestampComparator);
    } else {
      results = searchLogs(originalLogs, 'severity', searchValue, severityComparator);
    }

    dispatch(filterLogs(results));
  };

  return (
    <div className="search-container">
      <select
        value={searchType}
        onChange={(e) => setSearchType(e.target.value)}
      >
        <option value="timestamp">Timestamp</option>
        <option value="severity">Severity</option>
      </select>

      {searchType === 'timestamp' ? (
        <input
          type="datetime-local"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
      ) : (
        <select
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        >
          <option value="">Select severity</option>
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
          <option value="critical">Critical</option>
        </select>
      )}

      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SearchComponent;