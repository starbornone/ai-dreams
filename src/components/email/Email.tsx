import './Email.css';

interface EmailProps {
  children: string;
  sender?: string;
  subject?: string;
  time?: string;
}

export const Email = ({ children, sender = 'UNKNOWN_USER', subject = 'NO_SUBJECT', time = '00:00:00' }: EmailProps) => {
  return (
    <div className="email">
      <div className="email__header">
        <div className="email__header-line">
          <span className="email__label">From:</span>
          <span className="email__sender">{sender}</span>
        </div>
        <div className="email__header-line">
          <span className="email__label">Subject:</span>
          <span className="email__subject">{subject}</span>
        </div>
        <div className="email__time">{time}</div>
      </div>
      <div className="email__content">{children}</div>
    </div>
  );
};
