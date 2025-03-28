
import React from 'react';

interface FormInputProps {
  id: string;
  name: string;
  type: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  label: string;
  pattern?: string;
  inputMode?: 'none' | 'text' | 'tel' | 'url' | 'email' | 'numeric' | 'decimal' | 'search';
}

const FormInput = ({
  id,
  name,
  type,
  value,
  onChange,
  placeholder,
  label,
  pattern,
  inputMode
}: FormInputProps) => {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-gray-700 mb-1">
        {label}
      </label>
      <input
        id={id}
        name={name}
        type={type}
        className="auth-input"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        pattern={pattern}
        inputMode={inputMode}
      />
    </div>
  );
};

export default FormInput;
