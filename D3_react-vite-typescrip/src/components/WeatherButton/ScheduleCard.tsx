import React from 'react';
import "./Card.css";

const data = [
  { day: 'Mon', icon: '/assets/2.png' },
  { day: 'Tue', icon: '/assets/4.png' },
  { day: 'Wed', icon: '/assets/7.png' },
  { day: 'Thu', icon: '/assets/16.png' },
  { day: 'Fri', icon: '/assets/2.png' },
];

const WeatherWeekCard = () => {
  return (
    <div className="card" style={{ flexDirection: 'column', gap: 12 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
        {data.map((item) => (
          <div key={item.day} style={{ textAlign: 'center' }}>
            <img src={item.icon} width={30} />
            <div style={{ fontSize: 13 }}>{item.day}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WeatherWeekCard;