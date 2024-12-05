import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import axios from 'axios';

const HourlyTemperature = ({ lat, lon }) => {
  const [hourlyData, setHourlyData] = useState([]);

  useEffect(() => {
    const fetchHourlyData = async () => {
      try {
        const response = await axios.get('/api/weather', {
          params: { lat, lon },
        });
        setHourlyData(response.data.hourly);
      } catch (error) {
        console.error('Error fetching hourly data:', error);
      }
    };

    fetchHourlyData();
  }, [lat, lon]);

  const data = {
    labels: hourlyData.map((_, index) => `${index}h`),
    datasets: [
      {
        label: 'Temperature (°F)',
        data: hourlyData.map((hour) => hour.temp),
        fill: false,
        borderColor: 'blue',
      },
    ],
  };

  return (
    <div className="hourly-temperature">
      <h2>Hourly Temperature</h2>
      <Line data={data} />
    </div>
  );
};

export default HourlyTemperature;
