import React from 'react';
import { Button } from '../ui/Button';

import avatar1 from "../../assets/avatar_claire_bell.png"; 
import avatar2 from "../../assets/avatar_francisco_lane.png"; 
import avatar3 from "../../assets/avatar_ralp_fisher.png"; 
import avatar4 from "../../assets/avatar_jorge_murphy.png"; 

export const Testimonials = () => {
  // Ajustei os textos para garantir as alturas que você pediu:
  // Card 1 e 3 = Textos Longos (Mais altos)
  // Card 2 e 4 = Textos Curtos (Menores)
  const leftColumn = [
    {
      id: 1,
      name: "Claire Bell",
      role: "Designer",
      image: avatar1,
      // Texto Longo -> Card Alto
      text: "Slate helps you see how many more days you need to work to reach your financial goal for the month and year. Slate helps you see how many more days you need to work to reach your financial goal for the month and year. your financial goal for the month and year."
    },
    {
      id: 3,
      name: "Ralph Fisher",
      role: "Designer",
      image: avatar3,
      // Texto Longo -> Card Alto
      text: "Slate helps you see how many more days you need to work to reach your financial goal for the month and year. Slate helps you see how many more days you need to work to reach your financial goal for the month and year. your financial goal for the month and year."
    },
  ];

  const rightColumn = [
    {
      id: 2,
      name: "Francisco Lane",
      role: "Designer",
      image: avatar2,
      // Texto Curto -> Card Menor
      text: "Slate helps you see how many more days you need to work to reach your financial goal for the month and year. Slate helps you see how many more days you need to work to reach your financial goal."
    },
    {
      id: 4,
      name: "Jorge Murphy",
      role: "Designer",
      image: avatar4,
      // Texto Curto -> Card Menor
      text: "Slate helps you see how many more days you need to work to reach your financial goal for the month and year. Slate helps you see how many more days you need to work to reach your financial goal."
    },
  ];

  const TestimonialCard = ({ item }: { item: any }) => (
    <div className="bg-[#181818] border border-gray-700 rounded-[10px] p-[40px] flex flex-col gap-[30px] w-[352px] h-[376px] mx-auto md:w-full md:h-auto">
        <div className="flex items-center gap-4">
            <img 
                src={item.image} 
                alt={item.name} 
                className="w-[50px] h-[50px] rounded-full object-cover"
            />
            <div className="text-left">
                <h4 className="font-bold text-white text-[16px] leading-tight">
                    {item.name}
                </h4>
                <p className="text-gray-400 text-[14px] font-bold mt-1">
                    {item.role}
                </p>
            </div>
        </div>
        <p className="text-white text-[16px] leading-[150%] tracking-[0.2px] text-left">
            {item.text}
        </p>
    </div>
  );

  return (
    <section className="py-20 bg-background text-white">
      <div className="max-w-[1097px] mx-auto px-4 sm:px-6 flex flex-col items-center">
        
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-[40px] md:text-[52px] font-medium mb-4 leading-tight">
            Testimonials
          </h2>
        </div>
        <div className="flex flex-col md:flex-row gap-[23px] items-start justify-center w-full max-w-[883px]">
            
            <div className="flex flex-col gap-[23px] w-full md:w-[430px]">
                {leftColumn.map(item => (
                    <TestimonialCard key={item.id} item={item} />
                ))}
            </div>
            <div className="flex flex-col gap-[23px] w-full md:w-[430px]">
                {rightColumn.map(item => (
                    <TestimonialCard key={item.id} item={item} />
                ))}
            </div>

        </div>

      </div>
    </section>
  );
};