import React, { useState } from 'react';
import AccordionItem from './AccordionItem';

const content = [
  {
    title: 'HISTORY',
    text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium...'
  },
  {
    title: 'APPROACH',
    text: 'Contenidode tabNeque porro quisquam est, qui dolorem ipsum quia...'
  },
  {
    title: 'CULTURE',
    text: 'Culture multi content...'
  },
  {
    title: 'METHOD',
    text: 'Method multi content...'
  }
];

const MultiAccordion = () => {
  const [openItems, setOpenItems] = useState<boolean[]>(content.map((_, i) => i === 0)); // mở mặc định tab 0

  const toggle = (index: number) => {
    const updated = [...openItems];
    updated[index] = !updated[index];
    setOpenItems(updated);
  };

  return (
    <div className="accordion-group">
      {content.map((item, i) => (
        <AccordionItem
          key={i}
          title={item.title}
          isOpen={openItems[i]}
          onClick={() => toggle(i)}
        >
          {item.text}
        </AccordionItem>
      ))}
    </div>
  );
};

export default MultiAccordion;
