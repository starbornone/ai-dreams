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
          <div className="email__label">From:</div>
          <div className="email__sender">{sender}</div>
        </div>
        <div className="email__header-line">
          <div className="email__label">Subject:</div>
          <div className="email__subject">{subject}</div>
        </div>
        <div className="email__time">
          <span className="email__time-prefix">Email received at </span>
          {time}
        </div>
      </div>
      <div className="email__content">{children}</div>
    </div>
  );
};
