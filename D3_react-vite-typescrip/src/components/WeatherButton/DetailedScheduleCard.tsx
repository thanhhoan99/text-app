import React from 'react';
import { Ellipsis } from 'lucide-react';
import "./Card.css";

const data = [
  { day: 'Mon', time: '02:27 PM', icon: '/assets/2.png' },
  { day: 'Tue', time: '06:00 AM', icon: '/assets/4.png' },
  { day: 'Wed', time: '07:30 PM', icon: '/assets/5.png' },
  { day: 'Thu', time: '12:00 PM', icon: '/assets/16.png' },
  { day: 'Fri', time: '04:00 PM', icon: '/assets/2.png' },
];

const DetailedScheduleCard = () => {
  return (
    <div className="card" style={{ flexDirection: 'column', gap: 12 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
        <div>
          <div style={{ fontWeight: 'bold' }}>Great day to schedule</div>
          <div style={{ fontSize: 13, color: '#888' }}>Your usual hours</div>
        </div>
        <Ellipsis />
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
        {data.map((item) => (
          <div key={item.day} style={{ textAlign: 'center' }}>
            <img src={item.icon} width={30} />
            <div style={{ fontSize: 13 }}>{item.day}</div>
            <div style={{ fontSize: 12, color: '#777' }}>{item.time}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DetailedScheduleCard;