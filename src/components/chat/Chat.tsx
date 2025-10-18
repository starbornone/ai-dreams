import React from 'react';
import './Chat.css';

interface ChatProps {
  children: React.ReactNode;
}

export const Chat = ({ children }: ChatProps) => {
  return <div className="chat">{children}</div>;
};
