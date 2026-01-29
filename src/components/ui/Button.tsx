import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline';
  children: React.ReactNode;
}

export const Button = ({ variant = 'primary', children, className, ...props }: ButtonProps) => {
  const baseStyles = "h-[65px] px-[38px] flex items-center justify-center font-medium transition-all duration-300";
  
  const variants = {
    primary: "bg-primary text-white hover:bg-blue-600 border border-transparent",
    outline: "bg-transparent border border-white text-white hover:bg-white hover:text-black"
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${className || ""}`} 
      {...props}
    >
      {children}
    </button>
  );
};