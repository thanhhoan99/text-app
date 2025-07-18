import React from "react";
import { Ellipsis } from "lucide-react";
import "./Card.css";

type Props = {
  title: string;
  distance: string;
  icon?: string;
  bgColor?: string;
};

const LocationCard = ({ title, distance, icon, bgColor }: Props) => {
  return (
    <div className="card" style={{ backgroundColor: bgColor || "#fff" }}>
      <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
        <img src="/assets/anhtn.png" width={40} height={40} style={{ borderRadius: 8 }} />
        <div>
          <div style={{ fontWeight: "bold" }}>{title}</div>
          <div style={{ color: "#666", fontSize: 13 }}>{distance}</div>
        </div>
      </div>
      {icon ? <img src={icon} width={24} /> : <Ellipsis />}
    </div>
  );
};

export default LocationCard;