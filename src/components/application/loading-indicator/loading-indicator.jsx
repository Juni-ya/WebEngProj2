import React from 'react';
import './loading-indicator.css';
import './loading-indicator.css';

const LoadingIndicator = ({ type = 'line-simple', size = 'md' }) => {
  if (type === 'line-simple') {
    return (
      <div className={`loading-indicator ${size}`}>
        <div className="line"></div>
      </div>
    );
  }
  return null;
};

export { LoadingIndicator };