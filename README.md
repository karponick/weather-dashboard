# Weather-Dashboard

This app features a city search bar with a recommended autocomplete. 
When selecting a city, you are able to view essential whether data such as:
- temperature
- "feels like" temperature
- weather description (e.g., sunny, overcast)
- humidity
- wind speed
- sunrise/sunset times

## Getting Started

Add .env to both front and backend folders

### Backend .env file: 
API_KEY={your own OpenWeather API key}

### Frontend .env file:
REACT_APP_API_URL=http://localhost:3000/api/data
PORT=3001

### Open a terminal in the backend folder:
install package:
- npm install express
Start backend:
- node server.mjs

### Open a terminal in the frontend folder:
install package:
- npm install react-scripts
Start frontend:
- npm start