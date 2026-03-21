import React, { useId } from 'react';

interface InputProps {
  label?: string;
  type?: 'text' | 'email' | 'password' | 'number' | 'tel' | 'textarea';
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  className?: string;
  required?: boolean;
  error?: string;
  disabled?: boolean;
  rows?: number;
  name?: string;
  id?: string;
}

const Input: React.FC<InputProps> = ({
  label,
  type = 'text',
  placeholder,
  value,
  onChange,
  className = '',
  required = false,
  error,
  disabled = false,
  rows = 4,
  name,
  id,
}) => {
  const generatedId = useId();
  const inputId = id ?? generatedId;

  const baseClasses = "w-full px-4 py-3 border border-wetland-sand rounded-xl focus:outline-none focus:ring-2 focus:ring-wetland-lagoon focus:border-transparent transition-all duration-300";
  const errorClasses = error ? "border-red-500 focus:ring-red-500" : "";
  const disabledClasses = disabled ? "bg-wetland-sand/60 cursor-not-allowed opacity-60" : "bg-wetland-foam";

  return (
    <div className="w-full">
      {label && (
        <label htmlFor={inputId} className="block text-sm font-medium text-wetland-ink mb-2">
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}
      {type === 'textarea' ? (
        <textarea
          id={inputId}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          rows={rows}
          disabled={disabled}
          className={`${baseClasses} ${errorClasses} ${disabledClasses} ${className} resize-vertical`}
        />
      ) : (
        <input
          id={inputId}
          type={type}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          disabled={disabled}
          className={`${baseClasses} ${errorClasses} ${disabledClasses} ${className}`}
        />
      )}
      {error && (
        <p className="text-red-600 text-sm mt-1 flex items-center">
          {error}
        </p>
      )}
    </div>
  );
};

export default Input;
