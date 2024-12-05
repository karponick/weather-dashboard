import axios from 'axios';

export const fetchWeatherData = async (lat, lon) => {
  try {
    const response = await axios.get('/api/weather', { params: { lat, lon } });
    return response.data;
  } catch (error) {
    console.error('Error fetching weather data:', error);
  }
};
