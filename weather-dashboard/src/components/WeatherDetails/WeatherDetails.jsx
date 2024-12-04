import React from 'react';
import { useNavigate } from 'react-router-dom';

const WeatherDetails = ({ weatherData }) => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate('/hourly-temperature');
  };

  return (
    <div className="weather-details" onClick={handleCardClick}>
      <h2>{weatherData?.cityName}</h2>
      <p>Temperature: {weatherData?.temperature}°F</p>
      <p>Feels Like: {weatherData?.feels_like}°F</p>
      <p>{weatherData?.description}</p>
    </div>
  );
};

export default WeatherDetails;
