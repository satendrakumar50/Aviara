import React from "react";

function FavoritesList({ favorites, fetchWeather, removeFromFavorites }) {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md">
      <h2 className="text-xl font-bold mb-4">Favorite Cities</h2>
      {favorites.length === 0 && (
        <p className="text-gray-500">No favorites added.</p>
      )}
      <ul className="space-y-2">
        {favorites.map((city, index) => (
          <li
            key={index}
            className="flex justify-between items-center bg-blue-100 p-4 rounded-lg"
          >
            <span
              onClick={() => fetchWeather(city)}
              className="cursor-pointer text-blue-600 hover:underline"
            >
              {city}
            </span>
            <button
              onClick={() => removeFromFavorites(city)}
              className="px-3 py-1 bg-red-500 text-white rounded-md hover:bg-red-600"
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FavoritesList;
