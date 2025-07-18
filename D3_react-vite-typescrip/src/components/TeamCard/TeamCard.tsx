import React from "react";
import "./Card.css";

type TeamCardProps = {
  bgColor: string;
  avatarUrls: string[];
  title: string;
  subtitle?: string;
  textColor?: string;
};

const TeamCard = ({
  bgColor,
  avatarUrls,
  title,
  subtitle,
  textColor = "#fff",
}: TeamCardProps) => {
  return (
    <div
      className="card"
      style={{
        backgroundColor: bgColor,
        color: textColor,
        borderRadius: 40,
        padding: "16px 24px",
        justifyContent: "flex-start",
        gap: 16,
        minHeight: 80,
      }}
    >
      <div style={{ display: "flex", gap: -10 }}>
        {avatarUrls.map((url, index) => (
          <img
            key={index}
            src={url}
            width={40}
            height={40}
            style={{
              borderRadius: "50%",
              border: "2px solid white",
              marginLeft: index > 0 ? -12 : 0,
              zIndex: avatarUrls.length - index,
            }}
          />
        ))}
      </div>
      <div>
        <div style={{ fontWeight: "bold", fontSize: 16 }}>{title}</div>
        {subtitle && (
          <div style={{ fontSize: 13, opacity: 0.8, marginTop: 2 }}>
            {subtitle}
          </div>
        )}
      </div>
    </div>
  );
};

export default TeamCard;
