import React, { useState } from "react";
import SearchWeather from "./Components/SearchWeather";
import WeatherDisplay from "./Components/WeatherDisplay";
import FavoritesList from "./Components/FavoritesList";
import axios from "axios";

function App() {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setForecast] = useState(null);
  const [favorites, setFavorites] = useState(
    JSON.parse(localStorage.getItem("favorites")) || []
  );
  const [error, setError] = useState(null);

  const fetchWeather = async (city) => {
    try {
      const weatherResponse = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${"7d0c9550f67803ed5631b3f1957351c6"}&units=metric`
      );
      const forecastResponse = await axios.get(
        `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${"7d0c9550f67803ed5631b3f1957351c6"}&units=metric`
      );

      setCurrentWeather(weatherResponse.data);
      setForecast(forecastResponse.data);
      setError(null);
    } catch (err) {
      setError("City not found. Please try again.");
      setCurrentWeather(null);
      setForecast(null);
    }
  };

  const addToFavorites = (city) => {
    if (!favorites.includes(city)) {
      const updatedFavorites = [...favorites, city];
      setFavorites(updatedFavorites);
      localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
    }
  };

  const removeFromFavorites = (city) => {
    const updatedFavorites = favorites.filter((fav) => fav !== city);
    setFavorites(updatedFavorites);
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
  };

  return (
    <div className="min-h-screen bg-blue-50 flex flex-col items-center p-4">
      <h1 className="text-3xl font-bold text-blue-600 mb-6">Weather App</h1>
      <SearchWeather fetchWeather={fetchWeather} />
      {error && <p className="text-red-500 mt-4">{error}</p>}
      {currentWeather && forecast && (
        <WeatherDisplay
          currentWeather={currentWeather}
          forecast={forecast}
          addToFavorites={addToFavorites}
        />
      )}
      <FavoritesList
        favorites={favorites}
        fetchWeather={fetchWeather}
        removeFromFavorites={removeFromFavorites}
      />
    </div>
  );
}

export default App;
