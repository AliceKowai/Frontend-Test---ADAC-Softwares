import { Button } from "../ui/Button";
import dashboard from "../../assets/dashboard.jpg";
import boards from "../../assets/boards.jpg";
import chatbot from "../../assets/chatbot.jpg";

export const Hero = () => {
  return (
    <section className="pt-60 pb-20 md:pb-80 flex flex-col items-center text-center px-4 bg-background overflow-hidden relative">
      {/* Luz de fundo */}
      <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[300px] h-[300px] md:w-[600px] md:h-[600px] bg-primary/20 blur-[80px] md:blur-[120px] rounded-full -z-10"></div>
      {/* Título e Textos */}
      <h1 className="text-4xl md:text-[80px] font-medium max-w-4xl md:leading-[88px] mb-6 text-white tracking-[0.2px]">
        Work at the speed <br /> of thought
      </h1>
      <p className="text-gray-400 text-base md:text-[20px] md:leading-[30px] tracking-[0.2px] font-normal max-w-2xl mb-8 md:mb-10">
        Most calendars are designed for teams. Slate is designed for freelancers
        who want a simple way to plan their schedule.
      </p>
      <div className="flex flex-col sm:flex-row gap-[35px] justify-center mb-20 md:mb-48">
        <Button variant="primary">Try For Free</Button>
        <Button variant="outline">Learn More</Button>
      </div>
      <div className="w-full flex justify-center items-center relative z-0 mt-8">
        <div
          className="flex justify-center items-center -space-x-12 md:-space-x-[100px] transform-style-3d scale-[0.55] sm:scale-75 md:scale-100 transition-transform duration-500"
          style={{
            transform: "rotateX(40deg) rotateY(10deg)",
          }}
        >
          <div className="transform translate-y-24 translate-x-4 md:translate-y-[250px] md:translate-x-[70px] transition-transform duration-500 hover:scale-105 z-10">
            <div className="w-[180px] md:w-[465px] bg-surface rotate-[40deg] overflow-hidden shadow-2xl border border-gray-800 rounded-xl">
              <img
                src={boards}
                alt="Boards"
                className="w-full h-auto object-cover opacity-80"
              />
            </div>
          </div>

          <div className="transform -translate-y-12 md:-translate-y-32 transition-transform duration-500 hover:scale-105 z-20">
            <div className="w-[200px] md:w-[500px] bg-surface rotate-[-50deg] overflow-hidden shadow-2xl border border-gray-700 rounded-xl">
              <img
                src={dashboard}
                alt="Dashboard"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
          <div className="transform translate-y-20 -translate-x-1 md:translate-y-[180px] md:translate-x-[-25px] transition-transform duration-500 hover:scale-105 z-10">
            <div className="w-[180px] md:w-[465px] bg-surface rotate-[40deg] overflow-hidden shadow-2xl border border-gray-800 rounded-xl">
              <img
                src={chatbot}
                alt="Chatbot"
                className="w-full h-auto object-cover opacity-80"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-[800px] bg-gradient-to-t from-[#000000] via-transparent to-transparent pointer-events-none"></div>{" "}
    </section>
  );
};
