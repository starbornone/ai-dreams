import React from 'react';
import './Note.css';

interface NoteProps {
  children: React.ReactNode;
}

export const Note = ({ children }: NoteProps) => {
  return <div className="note">{children}</div>;
};
