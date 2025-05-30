import React, { useState } from 'react';
import {FaChevronDown,FaChevronUp} from "react-icons/fa";
import './App.css';

const Accordion = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleItem = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return !items || items.length===0 ? "No items are available": (
    <div className="accordion">
      {items.map((item, index) => (
        <div
          className={`accordian-item ${activeIndex === index ? 'active' : ''}`}
          key={index}
        >
          <button
            className="accordion-title"
            onClick={() => toggleItem(index)}
          >
            {item.title} {activeIndex==index?<FaChevronUp/>:<FaChevronDown/>
            }
          </button>
        {activeIndex==index &&  <div className="accordion-content">
            {item.content}
          </div>}
        </div>
      ))}
    </div>
  );
};

export default Accordion;
