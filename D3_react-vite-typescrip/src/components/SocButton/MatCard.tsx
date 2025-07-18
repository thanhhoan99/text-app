// components/MatchCard.tsx
import React from "react";
import Card from "./Card";
import { Ellipsis } from "lucide-react";

const MatchCard = () => {
  return (
    <Card>
      <div>
        <div style={{ color: "red", fontWeight: "bold", display: "flex" }}>7'</div>
        <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
          <span>Spain</span>
          <img src="/assets/spain.png" alt="Spain" width={20} />
          <strong style={{ margin: "0 8px" }}>0 : 0</strong>
          <img src="/assets/france.png" alt="France" width={20} />
          <span>France</span>
        </div>
      </div>
      <Ellipsis style={{ marginTop: -28 }} />
    </Card>
  );
};

export default MatchCard;
