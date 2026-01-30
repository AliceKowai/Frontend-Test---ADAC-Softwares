import { ContentCard } from "../ui/ContentCard";
import { LaptopMockup } from "../ui/LaptopMockup";
import contentImage1 from "../../assets/Bank Account History.jpg"; 
import contentImage2 from "../../assets/boards notifications.jpg";

export const Contents = () => {
  return (
    <section className="py-20 bg-background text-white">
      {/* CABEÇALHO DA SEÇÃO */}
      <div className="max-w-4xl mx-auto text-center mb-16 md:mb-20 px-4">
        <h2 className="text-xl md:text-2xl font-bold mb-6 uppercase tracking-widest text-white">
          Contents
        </h2>
        <p className="text-3xl md:text-[40px] font-medium leading-tight max-w-2xl mx-auto">
          We focus on ergonomics and meeting you where you work. It's only a
          keystroke away.
        </p>
      </div>

      {/* GRID DE CARDS */}
      <div className="max-w-[1097px] mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row gap-8 md:gap-[35px] justify-center">
          
          {/* CARD 1: Work (Com o Laptop Mockup) */}
          <ContentCard
            title="Work"
            description="Ever wondered if you're too reliant on a client for work? Slate helps you identify."
            buttonText="Sign Up"
          >
            <LaptopMockup imageSrc={contentImage1} altText="Work Interface" />
          </ContentCard>

          {/* CARD 2: Design (Com imagem simples com sombra) */}
          <ContentCard
            title="Design with real data"
            description="Ever wondered if you're too reliant on a client for work? Slate helps you identify."
            buttonText="Try For Free"
          >
            <div className="shadow-[0px_4px_31px_0px_rgba(0,0,0,0.15)] md:w-[379px] h-auto md:h-[276px] rounded-[14px] overflow-hidden">
               <img
                 src={contentImage2}
                 alt="Design Interface"
                 className="w-full h-full object-cover"
               />
            </div>
          </ContentCard>
        </div>
      </div>
    </section>
  );
};