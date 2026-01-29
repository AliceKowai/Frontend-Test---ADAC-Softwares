import React from "react";
import { Button } from "../ui/Button";

// IMPORTANTE: Importe as duas imagens aqui
// Substitua pelos nomes reais dos seus arquivos na pasta assets
import ctaImageDesktop from "../../assets/mokup.png"; 
import ctaImageMobile from "../../assets/tumbnail.jpg"; // Exemplo: crie/use a imagem específica mobile

export const CTA = () => {
  return (
    <section className="py-20 bg-background px-0 md:px-6 flex justify-center">
      
      {/* CONTAINER PRINCIPAL */}
      <div className="w-full max-w-[1219px] h-auto md:h-[370px] bg-[#1E1E1E] md:bg-[#343434] rounded-none md:rounded-[33px] overflow-hidden flex flex-col md:flex-row items-center">
        
        {/* LADO ESQUERDO (Texto + Botão) */}
        <div className="w-full md:w-1/2 p-12 md:pl-[60px] flex flex-col items-center md:items-start gap-8 md:gap-[50px]">
          <h2 className="text-[40px] md:text-[52px] leading-[120%] font-medium text-white text-center md:text-left max-w-md">
            OpenType feature and Variable fonts
          </h2>

          <Button className="bg-[#4452FE] hover:bg-[#3240cb] text-white border-none h-[52px] px-[38px] text-[16px] font-bold transition-colors w-full max-w-[300px] md:w-auto">
            Try For Free
          </Button>
        </div>

        {/* LADO DIREITO (Área das Imagens) */}
        <div className="w-full h-auto md:w-1/2 md:h-full flex justify-center md:justify-end items-end">
          
          {/* === IMAGEM MOBILE ===
              - block md:hidden: Aparece no mobile, some no desktop.
              - Sem translate-y: Fica normal, sem corte.
          */}
          <img
            src={ctaImageMobile}
            alt="App Mobile"
            className="w-[350px] p-2 mt-4 h-auto object-cover object-top block md:hidden"
          />

          {/* === IMAGEM DESKTOP ===
              - hidden md:block: Some no mobile, aparece no desktop.
              - md:translate-y-[22%]: Aplica o efeito de corte apenas aqui.
          */}
          <img
            src={ctaImageDesktop}
            alt="App Desktop"
            className="w-full h-auto object-cover object-top hidden md:block md:translate-y-[5%] transition-transform"
          />

        </div>
        
      </div>
    </section>
  );
};