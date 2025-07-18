import React from "react";
import { Camera } from "lucide-react";
import "./Card.css";

const ProfileCard = () => {
  return (
    <div className="card">
      <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
        <img
          src="/assets/yo.png"
          width={48}
          height={48}
          style={{ borderRadius: "50%" }}
        />
        <div>
          <div style={{ fontWeight: "bold" }}>Yolanda</div>
          <div style={{ color: "#888", fontSize: 13 }}>Web Development</div>
        </div>
      </div>
      <Camera />
    </div>
  );
};

export default ProfileCard;
