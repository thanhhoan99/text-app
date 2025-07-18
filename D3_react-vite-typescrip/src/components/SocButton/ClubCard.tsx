// components/ClubCard.tsx
import React from "react";
import Card from "./Card";
import { Ellipsis } from "lucide-react";

const ClubCard = () => {
  return (
    <Card>
      <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
        <img src="/assets/manutd.png" alt="MU" width={28} />
        <span style={{ fontWeight: "bold" }}>Manchester United</span>
      </div>
      <Ellipsis />
    </Card>
  );
};

export default ClubCard;
