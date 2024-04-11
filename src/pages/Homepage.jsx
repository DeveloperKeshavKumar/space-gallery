import React, { useState, useEffect } from 'react';

function HomePage() {
    const getTodayDate = () => {
        const today = new Date();
        const year = today.getFullYear();
        const month = String(today.getMonth() + 1).padStart(2, '0');
        const day = String(today.getDate()).padStart(2, '0');
        return `${year}-${month}-${day}`;
      };
  const [selectedDate, setSelectedDate] = useState(getTodayDate()); 
  const [apodData, setApodData] = useState(null);
  const [error, setError] = useState(null);

  const API_KEY = "fOJdCQiZwyYf0Y1qiWAp7zHIVrfon2G9B4ttgTVb";

  useEffect(() => {
    fetchApod();
  }, []);

  const handleDateChange = (e) => {
    setSelectedDate(e.target.value);
  };

  const fetchApod = async () => {
    try {
      const response = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}&date=${selectedDate}`);
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const data = await response.json();
      setApodData(data);
      setError(null);
    } catch (error) {
      setError('Failed to fetch data. Please check the date and try again.');
      setApodData(null);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchApod();
  };

  return (
    <div className="container mx-auto px-4 py-8 bg-gray-800">
      <h1 className="text-3xl font-bold mb-4 text-gray-100">Astronomy Picture of the Day</h1>
      <form onSubmit={handleSubmit} className="mb-4">
        <input
          type="date"
          value={selectedDate}
          onChange={handleDateChange}
          className="border border-gray-300 px-3 py-2 mr-2 bg-gray-500 rounded text-white"
        />
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
          Get APOD
        </button>
      </form>
      {error && <p className="text-red-500 mb-4">{error}</p>}
      {apodData && (
        <div className="max-w-lg mx-auto">
          <h2 className="text-2xl font-semibold mb-4 text-gray-100">{apodData.title}</h2>
          <img src={apodData.url} alt={apodData.title} className="w-full h-[500px] object-cover mb-4" />
          <p className="text-gray-200">{apodData.explanation}</p>
        </div>
      )}
    </div>
  );
}

export default HomePage;
