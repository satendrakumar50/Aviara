import React from "react";

function WeatherDisplay({ currentWeather, forecast, addToFavorites }) {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 mb-8 w-full max-w-md">
      <h2 className="text-2xl font-bold mb-4">{currentWeather.name} Weather</h2>
      <p className="text-lg">Temperature: {currentWeather.main.temp} °C</p>
      <p className="text-lg">
        Weather: {currentWeather.weather[0].description}
      </p>
      <button
        onClick={() => addToFavorites(currentWeather.name)}
        className="mt-4 px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600"
      >
        Add to Favorites
      </button>

      <h3 className="text-xl font-semibold mt-6">5-Day Forecast</h3>
      <div className="space-y-4 mt-4">
        {forecast.list
          .filter((item, index) => index % 8 === 0)
          .map((item, index) => (
            <div
              key={index}
              className="bg-blue-100 p-4 rounded-lg flex justify-between items-center"
            >
              <div>
                <p className="font-semibold">
                  {new Date(item.dt_txt).toLocaleDateString()}
                </p>
                <p>Temp: {item.main.temp} °C</p>
                <p>Weather: {item.weather[0].description}</p>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default WeatherDisplay;
