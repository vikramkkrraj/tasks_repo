import React from 'react';
import { useDispatch } from 'react-redux';
import { handleLogUpload } from '../actions/logActions';

const FileUpload = () => {
  const dispatch = useDispatch();

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      dispatch(handleLogUpload(file));
    }
  };

  return (
    <div className="upload-container">
      <h2>Upload Error Logs</h2>
      <input type="file" accept=".json" onChange={handleFileChange} />
    </div>
  );
};

export default FileUpload;