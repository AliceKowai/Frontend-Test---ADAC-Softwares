import React from "react";
import { Button } from "../ui/Button";
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
          {/* CARD 1: Work */}
          <div className="bg-white text-black rounded-xl p-8 md:p-12 flex flex-col items-center text-center shadow-2xl w-full md:w-1/2 border border-gray-200">
            <h3 className="text-xl font-bold mb-4">Work</h3>
            <p className="text-gray-500 mb-8 max-w-xs leading-relaxed">
              Ever wondered if you're too reliant on a client for work? Slate
              helps you identify.
            </p>
            <Button
              variant="primary"
              className="h-[52px] px-[36px] w-auto mb-10"
            >
              Sign Up
            </Button>
            {/* CONTAINER DO LAPTOP */}
            <div className="flex flex-col items-center mt-auto">
              <div className="w-[242.38px] h-[171.78px] md:w-[330.58px] md:h-[222.42px] bg-[#000000] rounded-t-[20px] pt-[9px] px-[9px] flex items-start justify-center shadow-2xl relative z-10">
                <img
                  src={contentImage1}
                  alt="Work Interface"
                  className="md:w-[312.33px] md:h-[195.18px] object-cover rounded-t-[4px]"
                />
              </div>
              <div className="w-[297.03px] md:w-[405.13px] h-[8.37px] bg-[#D8D8D8] rounded-t-sm z-20"></div>
              <div className="w-[297.03px] md:w-[405.13px] h-[4.72px] bg-[#9FA2A5] rounded-b-[10px] relative z-20">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[54.16px] h-[5.02px] bg-[#7D8083] rounded-b-[4px]"></div>
              </div>
            </div>
          </div>
          <div className="bg-white text-black rounded-xl p-8 md:p-12 flex flex-col items-center text-center shadow-2xl w-full md:w-1/2 border border-gray-200">
            <h3 className="text-xl font-bold mb-4">Design with real data</h3>
            <p className="text-gray-500 mb-8 max-w-xs leading-relaxed">
              Ever wondered if you're too reliant on a client for work? Slate
              helps you identify.
            </p>
            <Button
              variant="primary"
              className="h-[52px] px-[36px] w-auto mb-10"
            >
              Try For Free
            </Button>
            <div className="mt-auto rounded-[14px] shadow-[0px_4px_31px_0px_rgba(0,0,0,0.15)] md:w-[379px] h-auto md:h-[276px] object-contain rounded-[14px] overflow-hidden">
              <img
                src={contentImage2}
                alt="Design Interface"
                className="w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
