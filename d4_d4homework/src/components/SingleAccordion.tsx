import React, { useState } from 'react';
import AccordionItem from './AccordionItem';

const content = [
  {
    title: 'HISTORY',
    text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium...'
  },
  {
    title: 'APPROACH',
    text: 'Approach content here...'
  },
  {
    title: 'CULTURE',
    text: 'Culture content here...'
  },
  {
    title: 'METHOD',
    text: 'Method content here...'
  }
];

const SingleAccordion = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  return (
    <div className="accordion-group">
      {content.map((item, i) => (
        <AccordionItem
          key={i}
          title={item.title}
          isOpen={activeIndex === i}
          onClick={() => setActiveIndex(activeIndex === i ? null : i)}
        >
          {item.text}
        </AccordionItem>
      ))}
    </div>
  );
};

export default SingleAccordion;
