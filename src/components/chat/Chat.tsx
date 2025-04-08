import './Chat.css';

interface ChatProps {
  children: string;
}

export const Chat = ({ children }: ChatProps) => {
  return <div className="chat">{children}</div>;
};
