import './Note.css';

interface NoteProps {
  children: string;
}

export const Note = ({ children }: NoteProps) => {
  return <div className="note">{children}</div>;
};
