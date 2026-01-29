import React from 'react';
import { TestimonialCard } from '../ui/TestimonialCard'; // Caminho atualizado para UI

// Imports das imagens (ajuste se necessário)
import avatar1 from "../../assets/avatar_claire_bell.png"; 
import avatar2 from "../../assets/avatar_francisco_lane.png"; 
import avatar3 from "../../assets/avatar_ralp_fisher.png"; 
import avatar4 from "../../assets/avatar_jorge_murphy.png"; 

export const Testimonials = () => {
  const leftColumn = [
    {
      id: 1,
      name: "Claire Bell",
      role: "Designer",
      image: avatar1,
      text: "Slate helps you see how many more days you need to work to reach your financial goal for the month and year. Slate helps you see how many more days you need to work to reach your financial goal for the month and year. your financial goal for the month and year."
    },
    {
      id: 3,
      name: "Ralph Fisher",
      role: "Designer",
      image: avatar3,
      text: "Slate helps you see how many more days you need to work to reach your financial goal for the month and year. Slate helps you see how many more days you need to work to reach your financial goal for the month and year. your financial goal for the month and year."
    },
  ];

  const rightColumn = [
    {
      id: 2,
      name: "Francisco Lane",
      role: "Designer",
      image: avatar2,
      text: "Slate helps you see how many more days you need to work to reach your financial goal for the month and year. Slate helps you see how many more days you need to work to reach your financial goal."
    },
    {
      id: 4,
      name: "Jorge Murphy",
      role: "Designer",
      image: avatar4,
      text: "Slate helps you see how many more days you need to work to reach your financial goal for the month and year. Slate helps you see how many more days you need to work to reach your financial goal."
    },
  ];

  return (
    <section className="py-20 bg-background text-white">
      <div className="max-w-[1097px] mx-auto px-4 sm:px-6 flex flex-col items-center">
        
        {/* Header da Seção */}
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-[40px] md:text-[52px] font-medium mb-4 leading-tight">
            Testimonials
          </h2>
        </div>

        {/* Layout Masonry */}
        <div className="flex flex-col md:flex-row gap-[23px] items-start justify-center w-full max-w-[883px]">
            
            {/* Coluna Esquerda */}
            <div className="flex flex-col gap-[23px] w-full md:w-[430px]">
                {leftColumn.map(item => (
                    <TestimonialCard 
                        key={item.id} 
                        name={item.name}
                        role={item.role}
                        image={item.image}
                        text={item.text}
                    />
                ))}
            </div>

            {/* Coluna Direita */}
            <div className="flex flex-col gap-[23px] w-full md:w-[430px]">
                {rightColumn.map(item => (
                    <TestimonialCard 
                        key={item.id} 
                        name={item.name}
                        role={item.role}
                        image={item.image}
                        text={item.text}
                    />
                ))}
            </div>

        </div>

      </div>
    </section>
  );
};