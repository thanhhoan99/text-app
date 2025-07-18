import React from 'react';
import "./Card.css";

const CalendarCard = () => {
  return (
    <div className="card">
      <div style={{ textAlign: 'center' }}>
        <div style={{ fontWeight: 'bold', fontSize: 20, color: '#d63384' }}>Jun</div>
        <div style={{ fontWeight: 'bold', fontSize: 24 }}>23</div>
      </div>
      <div>
        <div style={{ fontWeight: 'bold' }}>Wednesday</div>
        <div style={{ fontSize: 13, color: '#999' }}>08:00 PM - 18:30 PM</div>
      </div>
    </div>
  );
};

export default CalendarCard;