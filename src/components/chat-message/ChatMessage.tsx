import './ChatMessage.css';

interface ChatMessageProps {
  children: string;
  sender?: string;
  time?: string;
}

export const ChatMessage = ({ children, sender, time }: ChatMessageProps) => {
  return (
    <div className="chat-message">
      <div className="chat-message__header">
        <div className="chat-message__sender">{sender}</div>
        <div className="chat-message__time">{time}</div>
      </div>
      <div className="chat-message__content">{children}</div>
    </div>
  );
};
