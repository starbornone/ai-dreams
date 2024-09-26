import React from 'react';
import styles from './Loading.module.scss';

interface LoadingProps {
  message?: string;
  color?: 'aqua' | 'yellow' | 'orange' | 'pink' | 'purple' | 'green';
}

export const Loading: React.FC<LoadingProps> = ({ message = 'Loading...', color = 'aqua' }) => {
  return (
    <div className={styles.loadingContainer}>
      <div className={`${styles.spinner} ${styles[color]}`}></div>
      <span className={styles.message} style={{ color: `var(--color-${color}-500)` }}>
        {message}
      </span>
    </div>
  );
};
