import { useId, type ChangeEvent } from 'react';

interface InputProps {
  label?: string;
  type?: 'text' | 'email' | 'password' | 'number' | 'tel' | 'textarea';
  placeholder?: string;
  value?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  className?: string;
  required?: boolean;
  error?: string;
  disabled?: boolean;
  rows?: number;
  name?: string;
  id?: string;
}

const BASE_CLASSES =
  'w-full px-4 py-3 border border-wetland-sand rounded-xl focus:outline-none focus:ring-2 focus:ring-wetland-lagoon focus:border-transparent transition-all duration-300';

export default function Input({
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
}: InputProps) {
  const generatedId = useId();
  const inputId = id ?? generatedId;
  const errorId = `${inputId}-error`;

  const errorClasses = error ? 'border-red-500 focus:ring-red-500' : '';
  const disabledClasses = disabled ? 'bg-wetland-sand/60 cursor-not-allowed opacity-60' : 'bg-wetland-foam';
  const fieldClasses = `${BASE_CLASSES} ${errorClasses} ${disabledClasses} ${className}`;

  const sharedProps = {
    id: inputId,
    name,
    placeholder,
    value,
    onChange,
    disabled,
    required,
    'aria-required': required || undefined,
    'aria-invalid': error ? (true as const) : undefined,
    'aria-describedby': error ? errorId : undefined,
    className: fieldClasses,
  };

  return (
    <div className="w-full">
      {label && (
        <label htmlFor={inputId} className="block text-sm font-medium text-wetland-ink mb-2">
          {label}
          {required && <span className="text-red-500 ml-1" aria-hidden="true">*</span>}
        </label>
      )}
      {type === 'textarea' ? (
        <textarea {...sharedProps} rows={rows} className={`${fieldClasses} resize-vertical`} />
      ) : (
        <input {...sharedProps} type={type} />
      )}
      {error && (
        <p id={errorId} role="alert" className="text-red-600 text-sm mt-1 flex items-center">
          {error}
        </p>
      )}
    </div>
  );
}
