// components/CreditCard.tsx

import { EyeOff } from "lucide-react";

const CreditCard = () => {
  return (
    <div className="card">
      <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
        <img src="/assets/2.png" width={40} style={{ borderRadius: "50%" }} />
        <div>
          <div style={{ fontWeight: "bold" }}>Great day to schedule</div>
          <div>
            
            <span style={{ marginLeft: 8 }}>Lorem ipsum dolor sitamet.</span>
          </div>
        </div>
      </div>
      <EyeOff />
    </div>
  );
};

export default CreditCard;
