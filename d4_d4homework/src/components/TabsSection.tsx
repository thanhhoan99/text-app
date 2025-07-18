import React, { useState } from 'react';
import './TabsSection.css';

const tabs = ['HISTORY', 'APPROACH', 'CULTURE', 'METHOD'];
const content = [
  'Nội dung tab HISTORY...',
  'Nội dung tab APPROACH...',
  'Nội dung tab CULTURE...',
  'Nội dung tab METHOD...'
];

const TabsSection = () => {
  const [active, setActive] = useState(1);

  return (
    <div className="tabs-wrapper">
      <h2>Button Tabs</h2>
      <div className="tab-buttons">
        {tabs.map((tab, i) => (
          <button
            key={i}
            className={i === active ? 'tab active' : 'tab'}
            onClick={() => setActive(i)}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="tab-content">{content[active]}</div>
    </div>
  );
};

export default TabsSection;
