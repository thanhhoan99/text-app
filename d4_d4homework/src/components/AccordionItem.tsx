import React from 'react';
import './Accordion.css';

type Props = {
  title: string;
  isOpen: boolean;
  onClick: () => void;
  children: React.ReactNode;
};

const AccordionItem = ({ title, isOpen, onClick, children }: Props) => {
  return (
    <div className="accordion-item">
      <button
        className={`accordion-header ${isOpen ? 'active' : ''}`}
        onClick={onClick}
      >
        {title}
      </button>
      {isOpen && <div className="accordion-body">{children}</div>}
    </div>
  );
};

export default AccordionItem;
