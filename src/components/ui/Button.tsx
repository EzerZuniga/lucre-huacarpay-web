import React from 'react';
import { Link } from 'react-router-dom';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'accent' | 'outline';
  to?: string;
  onClick?: () => void;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary',
  to,
  onClick,
  className = '',
  type = 'button',
  disabled = false,
  ...props 
}) => {
  const baseClasses = "px-6 py-3 rounded-lg font-semibold transition-all duration-300 inline-flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-offset-2";
  
  const variantClasses = {
    primary: "bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500 disabled:bg-blue-400",
    secondary: "bg-slate-600 text-white hover:bg-slate-700 focus:ring-slate-500 disabled:bg-slate-400",
    accent: "bg-green-600 text-white hover:bg-green-700 focus:ring-green-500 disabled:bg-green-400",
    outline: "border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white focus:ring-blue-500 disabled:border-blue-400 disabled:text-blue-400",
  };
  
  const classes = `${baseClasses} ${variantClasses[variant]} ${disabled ? 'cursor-not-allowed' : ''} ${className}`;
  
  if (to) {
    return (
      <Link to={to} className={classes} {...props}>
        {children}
      </Link>
    );
  }
  
  return (
    <button 
      type={type}
      className={classes} 
      onClick={onClick} 
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;