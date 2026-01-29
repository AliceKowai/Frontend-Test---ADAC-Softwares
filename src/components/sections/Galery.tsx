import React from 'react';
import { Button } from '../ui/Button';

import mobileImg1 from "../../assets/drone.jpg";      
import mobileImg2 from "../../assets/headset.jpg";
import mobileImg3 from "../../assets/typing.jpg"
import mobileImg4 from "../../assets/laptop-dark.jpg";

import deskImg1 from "../../assets/drone.jpg";        
import deskImg2 from "../../assets/tablet-pool.jpg";  
import deskImg3 from "../../assets/meeting.jpg";      
import deskImg4 from "../../assets/desktop-set.jpg";  

import deskImg5 from "../../assets/code-screen.jpg";  
import deskImg6 from "../../assets/tablet-hand.jpg";  
import deskImg7 from "../../assets/camera.jpg";    

export const Gallery = () => {
  return (
    <section className="py-20 bg-background text-white">
      <div className="max-w-[1097px] mx-auto px-4 sm:px-6 flex flex-col items-center">
        
        {/* CABEÇALHO */}
        <div className="text-center mb-12 md:mb-14">
          <h2 className="text-[40px] md:text-[52px] font-medium mb-4 leading-tight">
            Gallery
          </h2>
          <p className="text-gray-400 text-[18px] md:text-[20px] leading-relaxed max-w-2xl mx-auto">
            We focus on ergonomics and meeting you where you work. 
            It's only a keystroke away.
          </p>
        </div>

        {/* =========================================================
                            LAYOUT MOBILE
           ========================================================= */}
        <div className="md:hidden flex flex-col gap-6 w-full max-w-sm ">
           {/* Arredondamento e Sombra conforme o estilo geral */}
           <img src={mobileImg1} alt="Gallery 1" className="w-[323px] h-[285px] mx-auto rounded-[12px] shadow-lg object-cover" />
           <img src={mobileImg2} alt="Gallery 2" className="w-[323px] h-[285px] mx-auto rounded-[12px] shadow-lg object-cover" />
           <img src={mobileImg3} alt="Gallery 3" className="w-[323px] h-[285px] mx-auto rounded-[12px] shadow-lg object-cover" />
           <img src={mobileImg4} alt="Gallery 4" className="w-[323px] h-[285px] mx-auto rounded-[12px] shadow-lg object-cover" />
        </div>

        {/* =========================================================
                            LAYOUT DESKTOP
           ========================================================= */}
        <div className="hidden md:flex flex-col gap-[30px] w-full">
            
            {/* LINHA 1 (4 Imagens) */}
          <div className="hidden md:flex flex-col gap-[30px] w-full items-center">

    <div className="flex flex-row justify-center gap-[33px]">
        <img src={deskImg1} alt="Gallery 1" className="w-[225px] h-[285px] rounded-[12px] object-cover hover:scale-105 transition-transform duration-300" />
        <img src={deskImg2} alt="Gallery 2" className="w-[225px] h-[285px] rounded-[12px] object-cover hover:scale-105 transition-transform duration-300" />
        <img src={deskImg3} alt="Gallery 3" className="w-[225px] h-[285px] rounded-[12px] object-cover hover:scale-105 transition-transform duration-300" />
        <img src={deskImg4} alt="Gallery 4" className="w-[225px] h-[285px] rounded-[12px] object-cover hover:scale-105 transition-transform duration-300" />
    </div>

    <div className="flex flex-row justify-center gap-[33px]">
        <img src={deskImg5} alt="Gallery 5" className="w-[395px] h-[285px] rounded-[12px] object-cover hover:scale-105 transition-transform duration-300" />
        <img src={deskImg6} alt="Gallery 6" className="w-[225px] h-[285px] rounded-[12px] object-cover hover:scale-105 transition-transform duration-300" />
        <img src={deskImg7} alt="Gallery 7" className="w-[401px] h-[285px] rounded-[12px] object-cover hover:scale-105 transition-transform duration-300" />
    </div>

</div>

        </div>

        {/* BOTÃO "See more" */}
        <Button 
            variant="outline" 
            className="mt-12 h-[52px] px-[36px] border-white text-white hover:bg-white hover:text-black transition-colors"
        >
            See more
        </Button>

      </div>
    </section>
  );
};