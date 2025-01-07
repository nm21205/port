// src/page/WeatherDetails.jsx
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import '../page/Weatherdetails.scss'; 
import Footer from '../components/Footer';

const apiKey = process.env.REACT_APP_WEATHER_API_KEY;

const WeatherDetails = () => {
  const { city } = useParams();
  const [forecast, setForecast] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchForecast = async () => {
      try {
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`
        );
        if (!response.ok) {
          throw new Error('Failed to fetch forecast');
        }
        const data = await response.json();
        const dailyData = data.list.filter((reading) =>
          reading.dt_txt.includes('12:00:00')
        );
        setForecast(dailyData);
        setError(null);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchForecast();
  }, [city]);

  return (
    <div>
      <h1>Weather forecast for {city} - Next 5 days</h1>
      {error && <p>{error}</p>}
      <div className='weather-details'>
        {forecast.map((day) => (
          <div key={day.dt}>
            <h3>{new Date(day.dt_txt).toLocaleDateString()}</h3>
            <p>온도: {day.main.temp}°C</p>
            <p>날씨: {day.weather[0].description}</p>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default WeatherDetails;