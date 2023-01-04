import React, { ButtonHTMLAttributes, FC } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  // Additional props for the Button component
  variant?: 'primary' | 'secondary';
}

export const Button: FC<ButtonProps> = ({
  children,
  variant = 'primary',
  ...props
}) => {
  return (
    <button {...props} className={`btn btn-${variant}`}>
      {children}
    </button>
  );
};
