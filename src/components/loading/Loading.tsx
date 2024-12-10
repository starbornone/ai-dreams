import React from 'react';

interface LoadingProps {
  message?: string;
  color?: 'aqua' | 'yellow' | 'orange' | 'pink' | 'purple' | 'green';
}

const colorClasses = {
  aqua: 'border-aqua-500 border-t-aqua-900',
  yellow: 'border-yellow-500 border-t-yellow-900',
  orange: 'border-orange-500 border-t-orange-900',
  pink: 'border-pink-500 border-t-pink-900',
  purple: 'border-purple-500 border-t-purple-900',
  green: 'border-green-500 border-t-green-900',
};

const textColorClasses = {
  aqua: 'text-aqua-500',
  yellow: 'text-yellow-500',
  orange: 'text-orange-500',
  pink: 'text-pink-500',
  purple: 'text-purple-500',
  green: 'text-green-500',
};

export const Loading: React.FC<LoadingProps> = ({ message = 'Loading...', color = 'aqua' }) => {
  return (
    <div className="flex items-center justify-center gap-4 p-4 text-gray-500">
      <div
        className={`animate-spin-slow h-10 w-10 rounded-full border-4 border-t-transparent ${colorClasses[color]}`}
      ></div>
      <span className={`text-lg ${textColorClasses[color]}`}>{message}</span>
    </div>
  );
};
