import React, { useState } from 'react';
import axios from 'axios';

const FileUpload = () => {
  const [file, setFile] = useState(null);
  const [predictions, setPredictions] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleFileChange = (e) => setFile(e.target.files[0]);

  const handleUpload = async () => {
    if (!file) {
      alert('Please select a file first.');
      return;
    }
    const formData = new FormData();
    formData.append('file', file);
    setLoading(true);
    try {
      const response = await axios.post('/api/predict', formData);
      setPredictions(response.data.predictions);
    } catch (error) {
      alert('Error uploading file.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white p-6 rounded shadow-md w-full md:w-1/2">
      <h3 className="text-xl font-semibold mb-4">Upload Data File</h3>
      <input type="file" onChange={handleFileChange} className="mb-4" />
      <button
        onClick={handleUpload}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        disabled={loading}
      >
        {loading ? 'Uploading...' : 'Upload and Predict'}
      </button>
      {predictions.length > 0 && (
        <div className="mt-4">
          <h4 className="text-lg font-semibold">Predictions:</h4>
          <ul>
            {predictions.map((pred, index) => (
              <li key={index}>{`Lake ${index + 1}: ${pred}`}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default FileUpload;
