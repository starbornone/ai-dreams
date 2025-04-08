import './Input.css';

interface InputProps {
  label?: string;
  placeholder?: string;
  type: string;
}

export const Input = ({ label, placeholder, type = 'text' }: InputProps) => {
  return (
    <div className="input">
      {label && <label className="input__label">{label}</label>}
      {type === 'textarea' ? (
        <textarea className="input__field" placeholder={placeholder} />
      ) : (
        <input className="input__field" type={type} placeholder={placeholder} />
      )}
    </div>
  );
};
