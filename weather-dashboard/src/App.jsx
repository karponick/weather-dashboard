import './App.css';
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SearchBar from './components/SearchBar/SearchBar';
import WeatherDetailsComponent from './components/WeatherDetails/WeatherDetailsComponent';
import AirDetailsComponent from './components/AirDetails/AirDetailsComponent';
import SunDetailsComponent from './components/SunDetails/SunDetailsComponent';
import HourlyTemperatureComponent from './components/HourlyTemperature/HourlyTemperatureComponent';
import { fetchWeatherData } from './services/api';

const App = () => {
  const [selectedCity, setSelectedCity] = useState(null);
  const [weatherData, setWeatherData] = useState(null);
  const [airData, setAirData] = useState(null);
  const [sunData, setSunData] = useState(null);

  const handleCitySelect = async (city) => {
    setSelectedCity(city);
    try {
      const data = await fetchWeatherData(city.lat, city.lon);

      setWeatherData({
        cityName: city.name,
        temperature: data.current.temp,
        feels_like: data.current.feels_like,
        description: data.current.weather[0].description,
      });

      setAirData({
        humidity: data.current.humidity,
        windSpeed: data.current.wind_speed,
      });

      setSunData({
        sunrise: new Date(data.current.sunrise * 1000).toLocaleTimeString(),
        sunset: new Date(data.current.sunset * 1000).toLocaleTimeString(),
      });
    } catch (error) {
      console.error('Error fetching weather details:', error.message);
    }
  };

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <SearchBar onCitySelect={handleCitySelect} />
              {weatherData && (
                <>
                  <WeatherDetailsComponent weatherData={weatherData} />
                  <AirDetailsComponent airData={airData} />
                  <SunDetailsComponent sunData={sunData} />
                </>
              )}
            </div>
          }
        />
        <Route
          path="/hourly-temperature"
          element={
            selectedCity ? (
              <HourlyTemperatureComponent lat={selectedCity.lat} lon={selectedCity.lon} />
            ) : (
              <p>Please select a city first to view hourly data.</p>
            )
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
