import React from 'react';
import './loading-indicator.css';

const LoadingIndicator = ({ type = 'line-simple', size = 'md' }) => {
  if (type === 'line-simple') {
    return (
      <div className={`loading-indicator ${size}`}>
        <div className="line"></div>
      </div>
    );
  }

  if (type === 'spinner') {
    return (
      <div className={`loading-indicator ${size}`}>
        <div className="spinner"></div>
      </div>
    );
  }

  if (type === 'dots') {
    return (
      <div className={`loading-indicator ${size}`}>
        <div className="dots">
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    );
  }

  return null;
};

export { LoadingIndicator };