import React, { useEffect, useState } from 'react';
import styles from './WeatherApp.module.css';

interface WeatherData {
  current: {
    temp_c: number;
    condition: {
      text: string;
      icon: string;
    };
    humidity: number;
    wind_kph: number;
  };
  forecast: {
    forecastday: {
      hour: {
        time: string;
        temp_c: number;
        condition: {
          icon: string;
        };
      }[];
    }[];
  };
}

const WeatherApp: React.FC = () => {
  const [city, setCity] = useState('Hanoi');
  const [data, setData] = useState<WeatherData | null>(null);

  const API_KEY = 'c9a0ca46550648b29ce125849232709';

  useEffect(() => {
    fetch(
      `https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${city}&days=1&aqi=no&alerts=no&lang=vi`
    )
      .then(res => res.json())
      .then(data => setData(data));
  }, [city]);

  if (!data) return <div className={styles.loading}>Đang tải...</div>;

  return (
    <div className={styles.container}>
      <input
        className={styles.search}
        type="text"
        placeholder="Hanoi"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <div className={styles.currentWeather}>
        <div className={styles.temp}>{data.current.temp_c}°</div>
        <div className={styles.condition}>
          <img src={data.current.condition.icon} alt="" />
          <span>{data.current.condition.text}</span>
        </div>
        <div className={styles.details}>
          <div className={styles.card}>
            <div>Humidity</div>
            <div>{data.current.humidity}%</div>
          </div>
          <div className={styles.card}>
            <div>Wind</div>
            <div>{data.current.wind_kph} km/h</div>
          </div>
        </div>
      </div>
      <div className={styles.hourly}>
        <div className={styles.label}>Now</div>
        <div className={styles.hours}>
          {data.forecast.forecastday[0].hour.slice(9, 13).map((hour, idx) => (
            <div key={idx} className={styles.hour}>
              <img src={hour.condition.icon} alt="" />
              <div>{hour.temp_c}°</div>
              <div>{hour.time.slice(11)}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WeatherApp;
