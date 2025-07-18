// components/DashboardCard.tsx
import React from "react";
import Card from "./Card";
import { Ellipsis } from "lucide-react";

const DashboardCard = () => {
  return (
    <Card>
      <div style={{ flex: 1 }}>
        <div style={{ display: "flex", gap: 8 }}>
          <span style={{ background: "#c8ffc8", padding: "2px 6px", borderRadius: 10, fontSize: 12 }}>Highlight</span>
          <span style={{ background: "#f5d6ff", padding: "2px 6px", borderRadius: 10, fontSize: 12 }}>Feeds</span>
        </div>
        <div style={{ fontWeight: "bold", marginTop: 4 ,marginLeft:-120}}>Dashboard</div>
        <div style={{ color: "#a9a9a9", fontSize: 13 ,marginLeft:-40}}>Business management service</div>
        <div style={{ marginTop: 8, background: "#eee", borderRadius: 10, overflow: "hidden" ,display: "flex", alignItems: "center", gap: 8 }}>
          <div style={{ width: "80%", background: "#43d68f", height: 6 }}></div>80%
        </div>
      </div>
      <Ellipsis />
    </Card>
  );
};

export default DashboardCard;
