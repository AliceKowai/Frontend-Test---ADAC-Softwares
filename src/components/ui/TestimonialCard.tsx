import React from 'react';
import { Card } from './Card'; // Importando da mesma pasta UI

interface TestimonialCardProps {
  name: string;
  role: string;
  image: string;
  text: string;
}

export const TestimonialCard = ({ name, role, image, text }: TestimonialCardProps) => {
  return (
    <Card className="p-[40px] flex flex-col gap-[30px] w-[352px] h-[376px] mx-auto md:w-full md:h-auto">
      <div className="flex items-center gap-4">
        <img 
          src={image} 
          alt={name} 
          className="w-[50px] h-[50px] rounded-full object-cover"
        />
        <div className="text-left">
          <h4 className="font-bold text-white text-[16px] leading-tight">
            {name}
          </h4>
          <p className="text-gray-400 text-[14px] font-bold mt-1">
            {role}
          </p>
        </div>
      </div>
      <p className="text-white text-[16px] leading-[150%] tracking-[0.2px] text-left">
        {text}
      </p>
    </Card>
  );
};