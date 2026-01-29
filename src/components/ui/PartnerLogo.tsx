import React from 'react';

interface PartnerLogoProps {
  children: React.ReactNode;
  className?: string; // Aqui receberemos as larguras/alturas específicas
}

export const PartnerLogo = ({ children, className = "" }: PartnerLogoProps) => {
  // Classes base de interação que todos os logos compartilham
  const baseClasses = "hover:opacity-80 transition-opacity cursor-pointer object-contain";

  return (
    // Clonamos o elemento SVG filho para injetar as classes se necessário, 
    // ou simplesmente envolvemos em uma div/span se preferir. 
    // Aqui, aplicamos as classes diretamente no container.
    <div className={`${baseClasses} ${className} flex justify-center items-center`}>
      {children}
    </div>
  );
};