import React from 'react';
import "./Card.css";

const CityTemperatureCard = () => {
  return (
    <div className="card" style={{ background: 'linear-gradient(90deg, #f44336, #d63384)', color: '#fff' }}>
      <div>
        <div style={{ fontSize: 18, fontWeight: 'bold' }}>Seatle</div>
        <div style={{ fontSize: 13 }}>Cloudy</div>
      </div>
      <div style={{ fontSize: 32, fontWeight: 'bold' }}>32°</div>
      <img src="/assets/suncloud.png" width={40} />
    </div>
  );
};

export default CityTemperatureCard;
