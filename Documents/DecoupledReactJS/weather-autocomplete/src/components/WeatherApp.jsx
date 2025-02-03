import React, { useState } from "react";
import axios from "axios";
import Select from "react-select";
import "./WeatherApp.css";

const WeatherApp = () => {
  const [cityOptions, setCityOptions] = useState([]);
  const [selectedCity, setSelectedCity] = useState(null);
  const [weather, setWeather] = useState(null);

  const handleCitySearch = async (inputValue) => {
    inputValue = "pune";
    if (!inputValue) return;

    const API_KEY = "8bca890e7b3cefd5ee1cd30ffa5229ba";
    const url = `http://api.openweathermap.org/geo/1.0/direct?q=${inputValue}&limit=5&appid=${API_KEY}`;

    try {
      const response = await axios.get(url);
      const options = response.data.map((city) => ({
        value: city,
        label: `${city.name}, ${city.country}`,
      }));
      setCityOptions(options);
    } catch (error) {
      console.error("Error fetching city data:", error);
    }
  };

  const handleCitySelect = async (option) => {
    setSelectedCity(option);
    const { lat, lon } = option.value;
    const API_KEY = "8bca890e7b3cefd5ee1cd30ffa5229ba";
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}`;

    try {
      const response = await axios.get(url);
      setWeather(response.data);
    } catch (error) {
      console.error("Error fetching weather data:", error);
    }
  };

  return (
    <div className="weather-container">
      <h1 className="title">🌤️ Weather Autocomplete</h1>
      <Select
        className="city-select"
        options={cityOptions}
        onInputChange={handleCitySearch}
        onChange={handleCitySelect}
        placeholder="Search for a city..."
      />

      {weather && (
        <div className="weather-info">
          <h2>
            {weather.name}, {weather.sys.country}
          </h2>
          <p className="temperature">{Math.round(weather.main.temp)}°C</p>
          <p>{weather.weather[0].description}</p>
          <p>Humidity: {weather.main.humidity}%</p>
          <p>Wind Speed: {weather.wind.speed} m/s</p>
        </div>
      )}
    </div>
  );
};

export default WeatherApp;
