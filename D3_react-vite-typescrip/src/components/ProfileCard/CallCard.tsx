import React from "react";
import { Phone } from "lucide-react";
import "./Card.css";

const CallCard = () => {
  return (
    <div
      className="card"
      style={{ padding: 0, overflow: "hidden", alignItems: "stretch" }}
    >
      <img
        src="/assets/ma.png"
        width={72}
        height={72}
        style={{ objectFit: "cover", borderRadius: "16px 0 0 16px" }}
      />
      <div
        style={{
          flex: 1,
          padding: 16,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <span style={{ fontWeight: "bold" }}>María</span>
        <Phone />
      </div>
    </div>
  );
};

export default CallCard;
