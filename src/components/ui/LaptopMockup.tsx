
interface LaptopMockupProps {
  imageSrc: string;
  altText?: string;
}

export const LaptopMockup = ({ imageSrc, altText = "Screen Content" }: LaptopMockupProps) => {
  return (
    <div className="flex flex-col items-center mt-auto">
      <div className="w-[242.38px] h-[171.78px] md:w-[330.58px] md:h-[222.42px] bg-[#000000] rounded-t-[20px] pt-[9px] px-[9px] flex items-start justify-center shadow-2xl relative z-10">
        <img
          src={imageSrc}
          alt={altText}
          className="w-full h-full object-cover rounded-t-[4px]"
        />
      </div>
      
      <div className="w-[297.03px] md:w-[405.13px] h-[8.37px] bg-[#D8D8D8] rounded-t-sm z-20"></div>
      
      <div className="w-[297.03px] md:w-[405.13px] h-[4.72px] bg-[#9FA2A5] rounded-b-[10px] relative z-20">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[54.16px] h-[5.02px] bg-[#7D8083] rounded-b-[4px]"></div>
      </div>
    </div>
  );
};