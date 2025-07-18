// components/CreditCard.tsx
import React from "react";
import Card from "./Card";
import { EyeOff } from "lucide-react";

const CreditCard = () => {
  return (
    <Card>
      <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
        <img src="/assets/user.png" width={40} style={{ borderRadius: "50%" }} />
        <div>
          <div style={{ fontWeight: "bold" }}>Wade Warren</div>
          <div>
            <img src="/assets/visa.png" width={30} style={{ verticalAlign: "middle" }} />
            <span style={{ marginLeft: 8 }}>4293 3242 ...</span>
          </div>
        </div>
      </div>
      <EyeOff />
    </Card>
  );
};

export default CreditCard;
