import React from "react";
import { Bell } from "lucide-react";
import "./Card.css";

const NotificationCard = () => {
  return (
    <div className="card">
      <div style={{ fontWeight: 500, flex: 1 }}>
        All your notifications are<br /> well turned on
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 12,
          fontWeight: "bold",
        }}
      >
        <div style={{ height: "100%", width: 1, backgroundColor: "#ccc" }} />|
        <Bell size={18} />
        <div
          style={{
            backgroundColor: "#000",
            color: "#fff",
            borderRadius: 16,
            padding: "4px 12px",
            fontSize: 14,
          }}
        >
          3
        </div>
      </div>
    </div>
  );
};

export default NotificationCard;
