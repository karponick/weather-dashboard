import React from 'react';
// import { useNavigate } from 'react-router-dom';
import styles from './WeatherDetails.module.css';

const WeatherDetails = ({ weatherData }) => {
  if (!weatherData) {
    return <p>Please select a city to view the weather details.</p>;
  }

  return (
    <div className={styles.weatherDetails}>
      <h2>Weather in {weatherData.cityName}</h2>
      <div className={styles.detailsCard}>
        <p><strong>Temperature:</strong> {weatherData.temperature}°F</p>
        <p><strong>Feels Like:</strong> {weatherData.feels_like}°F</p>
        <p><strong>Description:</strong> {weatherData.description}</p>
        <p><strong>Humidity:</strong> {weatherData.humidity}%</p>
        <p><strong>Wind Speed:</strong> {weatherData.wind_speed} mph</p>
        <p><strong>Sunrise:</strong> {weatherData.sunrise}</p>
        <p><strong>Sunset:</strong> {weatherData.sunset}</p>
      </div>
    </div>
  );
};

export default WeatherDetails;
