import React from 'react';
import { Button } from './Button';

interface ContentCardProps {
  title: string;
  description: string;
  buttonText: string;
  children: React.ReactNode; 
}

export const ContentCard = ({ title, description, buttonText, children }: ContentCardProps) => {
  return (
    <div className="bg-white text-black rounded-xl p-8 md:p-12 flex flex-col items-center text-center shadow-2xl w-full md:w-1/2 border border-gray-200">
      <h3 className="text-xl font-bold mb-4">{title}</h3>
      <p className="text-gray-500 mb-8 max-w-xs leading-relaxed">
        {description}
      </p>
      <Button
        variant="primary"
        className="h-[52px] px-[36px] w-auto mb-10"
      >
        {buttonText}
      </Button>
      
      <div className="mt-auto w-full flex justify-center">
        {children}
      </div>
    </div>
  );
};