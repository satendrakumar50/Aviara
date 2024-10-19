import React, { useState } from "react";

function SearchWeather({ fetchWeather }) {
  const [city, setCity] = useState("");

  const handleSearch = () => {
    if (city) {
      fetchWeather(city);
      setCity(""); 
    }
  };

  return (
    <div className="flex space-x-2 mb-6">
      <input
        type="text"
        className="px-4 py-2  rounded-md shadow-sm  border-2 border-blue-400 focus:outline-none focus:border-blue-400"
        placeholder="Enter city"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button
        onClick={handleSearch}
        className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
      >
        Search
      </button>
    </div>
  );
}

export default SearchWeather;
