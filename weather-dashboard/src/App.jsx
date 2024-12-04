import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SearchBar from './components/SearchBar/SearchBar';
import WeatherDetails from './components/WeatherDetails';
import AirDetails from './components/AirDetails';
import SunDetails from './components/SunDetails';
import HourlyTemperature from './components/HourlyTemperature';


const App = () => {
  const [selectedCity, setSelectedCity] = useState(null);
  const [weatherData, setWeatherData] = useState(null);

  const handleCitySelect = async (city) => {
    setSelectedCity(city);
    const data = await fetchWeatherData(city.lat, city.lon);
    setWeatherData(data);
  };

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <SearchComponent onCitySelect={handleCitySelect} />
              {weatherData && (
                <>
                  <WeatherDetailsComponent weatherData={weatherData} />
                  <AirDetailsComponent
                    humidity={weatherData.humidity}
                    windSpeed={weatherData.wind_speed}
                  />
                  <SunDetailsComponent
                    sunrise={weatherData.sunrise}
                    sunset={weatherData.sunset}
                  />
                </>
              )}
            </div>
          }
        />
        <Route
          path="/hourly-temperature"
          element={<HourlyTemperatureComponent lat={selectedCity.lat} lon={selectedCity.lon} />}
        />
      </Routes>
    </Router>
  );
};


export default App;
