import React from 'react';
import { FormErrors, FormMessages } from "../../types";

interface FieldProps {
  value: string;
  onChange: (name: string, value: string) => void;
  errors: FormErrors;
  touched: FormMessages,
  name: string;
  label: string;
  placeholder?: string;
  type?: string;
  touchedMessage: (name: string, type: string) => void;
  validation?: {
    required?: boolean;
    pattern?: RegExp;
    custom?: (value: unknown) => boolean | Promise<boolean>;
  };
}

export const Field: React.FC<FieldProps> = ({
  value,
  onChange,
  errors,
  touched,
  name,
  label,
  type = 'text',
  placeholder,
  touchedMessage,
}) => {
  return <div>
    <label> {label}
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.name, e.target.value)}
        onFocus={(e) => touchedMessage(name, e.type)}
        onKeyDown={(e) => touchedMessage(name, e.type)}
        onBlur={(e) => touchedMessage(name, e.type)}
      />
    </label>
    {errors[name] && <span className="error">{errors[name]}</span>}
    {touched[name] && <span className="touch-message">{touched[name]}</span>}
  </div>
};
