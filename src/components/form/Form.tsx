import React from 'react';
import './Form.css';

interface FormProps {
  children: React.ReactNode;
}

export const Form = ({ children }: FormProps) => {
  return <div className="form">{children}</div>;
};
