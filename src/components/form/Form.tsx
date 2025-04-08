import './Form.css';

interface FormProps {
  children: string;
}

export const Form = ({ children }: FormProps) => {
  return <div className="form">{children}</div>;
};
