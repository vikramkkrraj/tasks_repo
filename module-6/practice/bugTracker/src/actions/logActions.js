export const uploadLogs = (logs) => ({
    type: 'UPLOAD_LOGS',
    payload: logs
  });
  
  export const filterLogs = (filteredLogs) => ({
    type: 'FILTER_LOGS',
    payload: filteredLogs
  });
  
  export const setLoading = () => ({
    type: 'LOADING_LOGS'
  });
  
  export const setError = (error) => ({
    type: 'ERROR',
    payload: error
  });
  
  // Async action to handle log upload
  export const handleLogUpload = (file) => async (dispatch) => {
    dispatch(setLoading());
    try {
      const logs = await parseLogFile(file);
      dispatch(uploadLogs(logs));
    } catch (error) {
      dispatch(setError(error.message));
    }
  };
  
  async function parseLogFile(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = (event) => {
        try {
          const logs = JSON.parse(event.target.result);
          resolve(logs);
        } catch (e) {
          reject(new Error('Invalid JSON file'));
        }
      };
      reader.onerror = () => reject(new Error('Error reading file'));
      reader.readAsText(file);
    });
  }