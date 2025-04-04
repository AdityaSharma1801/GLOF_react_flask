import React, { useState } from 'react';
import axios from 'axios';

const HeroSection = () => {
  const [file, setFile] = useState(null);
  const [result, setResult] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!file) {
      alert("Please upload a file first.");
      return;
    }

    const formData = new FormData();
    formData.append('file', file);

    try {
      setLoading(true);
      const res = await axios.post('http://localhost:5000/predict', formData);
      setResult(res.data.prediction);
    } catch (err) {
      setResult('Error during prediction.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center mt-12">
      <div className="bg-white shadow-lg rounded-lg p-10 w-[90%] md:w-1/2">
        <h2 className="text-2xl font-bold mb-6 text-center text-blue-700">Glacial Lake Outburst Flood (GLOF) Risk Predictor</h2>
        <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
          <input
            type="file"
            accept=".csv,.xlsx"
            onChange={(e) => setFile(e.target.files[0])}
            className="p-2 border border-gray-300 rounded"
          />
          <button
            type="submit"
            className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition-all"
          >
            {loading ? 'Analyzing...' : 'Predict Risk'}
          </button>
        </form>
        {result && (
          <div className="mt-6 bg-green-100 border border-green-300 text-green-700 p-4 rounded text-center">
            <strong>Prediction:</strong> {result}
          </div>
        )}
      </div>
    </div>
  );
};

export default HeroSection;
