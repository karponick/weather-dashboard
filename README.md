# Weather-Dashboard

## Overview
This Weather Dashboard is a React-based application that allows users to search for cities and view detailed weather information. This project leverages the OpenWeather API to provide real-time weather details, including temperature, air quality, and sun information. Users can also view an hourly temperature forecast.

## Getting Started
### View the webapp deployed on Render: https://weather-dashboard-frontend-bjwu.onrender.com/<br>
*NOTE: server may experience delays after periods of inactivty

### Or grab a copy and modify it for yourself:
1. Download/clone repository locally.
2. Add .env file to both front and backend folders

- Backend .env file: <br/>
"API_KEY=\<your own OpenWeather API key\>"

- Frontend .env file:<br/>
"REACT_APP_API_CITY_URL=http://localhost:3000/api/city<br/>
REACT_APP_API_WEATHER_URL=http://localhost:3000/api/weather<br/>
PORT=3001"

### Open a terminal in the backend folder:
install packages:
- npm install<br/>

Start backend:
- node server.mjs

### Open a terminal in the frontend folder:
install packages:
- npm install<br/>

Start frontend:
- npm start
