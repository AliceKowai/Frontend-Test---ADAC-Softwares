import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export const Card = ({ children, className = "" }: CardProps) => {
  return (
    <div className={`bg-[#181818] border border-gray-700 rounded-[10px] ${className}`}>
      {children}
    </div>
  );
};