import React from 'react';

const SunDetails = ({ sunrise, sunset }) => {
  const formatTime = (timestamp) => {
    return new Date(timestamp * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <div className="sun-details">
      <h3>Sun Details</h3>
      <p>Sunrise: {formatTime(sunrise)}</p>
      <p>Sunset: {formatTime(sunset)}</p>
    </div>
  );
};

export default SunDetails;
