import React from "react";
import "./Card.css";

const TransactionCard = () => {
  return (
    <div className="card">
      <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
        <img src="/assets/nike.png" width={40} height={40} />
        <div>
          <div style={{ fontWeight: "bold" }}>Nike store</div>
          <div style={{ fontSize: 13, color: "#888" }}>
            6 months of promotions
          </div>
        </div>
      </div>
      <div style={{ textAlign: "right" }}>
        <div style={{ fontWeight: "bold", color: "#f44336" }}>-27.50</div>
        <div style={{ fontSize: 12, color: "#999" }}>11:00AM</div>
      </div>
    </div>
  );
};

export default TransactionCard;
