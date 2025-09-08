import React from 'react';
import './Loading.css';

interface LoadingProps {
  message?: string;
  color?: 'aqua' | 'yellow' | 'orange' | 'pink' | 'purple' | 'green';
}

const spinnerClasses = {
  aqua: 'loading__spinner--aqua',
  yellow: 'loading__spinner--yellow',
  orange: 'loading__spinner--orange',
  pink: 'loading__spinner--pink',
  purple: 'loading__spinner--purple',
  green: 'loading__spinner--green',
};

const textColorClasses = {
  aqua: 'loading__message--aqua',
  yellow: 'loading__message--yellow',
  orange: 'loading__message--orange',
  pink: 'loading__message--pink',
  purple: 'loading__message--purple',
  green: 'loading__message--green',
};

export const Loading: React.FC<LoadingProps> = ({ message = 'Loading...', color = 'aqua' }) => {
  return (
    <div className="loading">
      <div className={`loading__spinner ${spinnerClasses[color]}`}></div>
      <span className={`loading__message ${textColorClasses[color]}`}>{message}</span>
    </div>
  );
};
