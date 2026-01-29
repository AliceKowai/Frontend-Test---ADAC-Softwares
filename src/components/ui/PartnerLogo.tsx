import React from 'react';

interface PartnerLogoProps {
  children: React.ReactNode;
  className?: string; // Aqui receberemos as larguras/alturas específicas
}

export const PartnerLogo = ({ children, className = "" }: PartnerLogoProps) => {
  const baseClasses = "hover:opacity-80 transition-opacity cursor-pointer object-contain";

  return (

    <div className={`${baseClasses} ${className} flex justify-center items-center`}>
      {children}
    </div>
  );
};