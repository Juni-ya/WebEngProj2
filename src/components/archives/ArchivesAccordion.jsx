import React, { useState, useRef, useEffect } from 'react';
import './ArchivesAccordion.css';

const ArchivesAccordion = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(null);
  const contentRefs = useRef([]);

  const handleToggle = (index) => {
    const newActiveIndex = activeIndex === index ? null : index;
    setActiveIndex(newActiveIndex);
  };

  useEffect(() => {
    contentRefs.current.forEach((ref, index) => {
      if (ref) {
        if (activeIndex === index) {
          ref.style.maxHeight = ref.scrollHeight + 'px';
        } else {
          ref.style.maxHeight = '0px';
        }
      }
    });
  }, [activeIndex]);

  return (
    <div className="accordion__content">
      {items.map((item, index) => (
        <div key={item.id} className="accordion__item">
          <header
            className={`item__header ${activeIndex === index ? 'active' : ''}`}
            onClick={() => handleToggle(index)}
          >
            <h4 className="item__question">{item.header}</h4>
            <div className="item__icon">
              <i className='bx bx-chevron-down'></i>
            </div>
          </header>
          <div
            ref={(el) => (contentRefs.current[index] = el)}
            className="item__content"
          >
            <div className="item__answer">
              {item.content}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ArchivesAccordion;