import React from 'react';
import './Loading.css';

interface LoadingProps {
  message?: string;
  color?: 'aqua' | 'yellow' | 'orange' | 'pink' | 'purple' | 'green';
}

export const Loading: React.FC<LoadingProps> = ({ message = 'Loading...', color = 'aqua' }) => {
  return (
    <div className="loading">
      <div className={`loading__spinner loading__spinner--${color}`}></div>
      <span className={`loading__text loading__text--${color}`}>{message}</span>
    </div>
  );
};
