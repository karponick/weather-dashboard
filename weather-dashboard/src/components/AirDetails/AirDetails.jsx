import React from 'react';

const AirDetails = ({ humidity, windSpeed }) => {
  return (
    <div className="air-details">
      <h3>Air Details</h3>
      <p>Humidity: {humidity}%</p>
      <p>Wind Speed: {windSpeed} mph</p>
    </div>
  );
};

export default AirDetails;
