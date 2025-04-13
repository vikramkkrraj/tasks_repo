import React from 'react';
import { useSelector } from 'react-redux';

const LogTable = () => {
  const { filteredLogs } = useSelector(state => state.logs);

  const formatDate = (timestamp) => {
    return new Date(timestamp).toLocaleString();
  };

  return (
    <div className="log-table-container">
      <table className="log-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Timestamp</th>
            <th>Severity</th>
            <th>Message</th>
            <th>Developer ID</th>
          </tr>
        </thead>
        <tbody>
          {filteredLogs.map(log => (
            <tr key={log.id} className={`severity-${log.severity.toLowerCase()}`}>
              <td>{log.id}</td>
              <td>{formatDate(log.timestamp)}</td>
              <td>{log.severity}</td>
              <td>{log.message}</td>
              <td>{log.developerId || 'N/A'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default LogTable;