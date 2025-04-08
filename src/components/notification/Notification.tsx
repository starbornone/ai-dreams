import { ICONS } from './Icons';

import './Notification.css';

interface NotificationProps {
  children: string;
  icon: 'alert' | 'bell' | 'calendar' | 'info';
}

export const Notification = ({ children, icon = 'info' }: NotificationProps) => {
  return (
    <div className="notification">
      <div className="notification__icon">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          {ICONS[icon]}
        </svg>
      </div>
      <div className="notification__content">{children}</div>
    </div>
  );
};
