import React, { useState } from 'react';
import axios from 'axios';

const HeroSection = () => {
  const [file, setFile] = useState(null);
  const [result, setResult] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!file) return;

    const formData = new FormData();
    formData.append('file', file);

    try {
      const res = await axios.post('http://localhost:5000/predict', formData);
      setResult(res.data.prediction);
    } catch (error) {
      setResult('Error making prediction');
    }
  };

  return (
    <div className="flex flex-col items-center mt-10 p-4">
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md">
        <input type="file" onChange={(e) => setFile(e.target.files[0])} />
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded mt-3">
          Predict
        </button>
      </form>
      {result && (
        <div className="mt-5 p-4 bg-green-100 text-green-700 rounded shadow">
          Prediction Result: {result}
        </div>
      )}
    </div>
  );
};

export default HeroSection;
