import React from 'react';
import { Link, type LinkProps } from 'react-router-dom';

interface BaseButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'accent' | 'outline';
  className?: string;
  disabled?: boolean;
}

type LinkButtonProps = BaseButtonProps & Omit<LinkProps, 'to' | 'className' | 'children'> & {
  to: string;
  type?: never;
};

type NativeButtonProps = BaseButtonProps &
  Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'children' | 'className'> & {
    to?: undefined;
  };

type ButtonProps = LinkButtonProps | NativeButtonProps;

const Button: React.FC<ButtonProps> = (props) => {
  const baseClasses =
    'px-6 py-3 rounded-xl font-semibold tracking-wide transition-all duration-300 inline-flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-wetland-ivory';

  const variantClasses = {
    primary: 'bg-wetland-cta text-wetland-ink hover:bg-wetland-cta-dark focus:ring-wetland-cta disabled:bg-wetland-earth',
    secondary: 'bg-wetland-moss text-wetland-foam hover:bg-wetland-moss-dark focus:ring-wetland-moss disabled:bg-wetland-moss/70',
    accent: 'bg-wetland-lagoon text-wetland-foam hover:bg-wetland-lagoon-dark focus:ring-wetland-lagoon disabled:bg-wetland-lagoon/70',
    outline:
      'border-2 border-wetland-lagoon text-wetland-lagoon hover:bg-wetland-lagoon hover:text-wetland-foam focus:ring-wetland-lagoon disabled:border-wetland-lagoon/50 disabled:text-wetland-lagoon/50',
  };

  if ('to' in props && props.to) {
    const {
      to,
      children,
      variant = 'primary',
      className = '',
      disabled = false,
      ...linkProps
    } = props;

    const classes = `${baseClasses} ${variantClasses[variant]} ${disabled ? 'cursor-not-allowed' : ''} ${className}`;

    return (
      <Link
        to={to}
        className={`${classes} ${disabled ? 'pointer-events-none opacity-60' : ''}`}
        aria-disabled={disabled || undefined}
        tabIndex={disabled ? -1 : undefined}
        {...linkProps}
      >
        {children}
      </Link>
    );
  }

  const {
    type = 'button',
    children,
    variant = 'primary',
    className = '',
    disabled = false,
    ...buttonProps
  } = props as NativeButtonProps;

  const classes = `${baseClasses} ${variantClasses[variant]} ${disabled ? 'cursor-not-allowed' : ''} ${className}`;

  return (
    <button 
      type={type}
      className={classes} 
      disabled={disabled}
      {...buttonProps}
    >
      {children}
    </button>
  );
};

export default Button;
