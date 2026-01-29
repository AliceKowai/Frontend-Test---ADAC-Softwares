import React from "react";
import chatbot from "../../assets/chatbot.jpg";
import lineChart from "../../assets/line Chart.jpg";

const Icons = {
  cutlery: (
    <svg
      width="26"
      height="24"
      viewBox="0 0 26 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7.14636 13.6089L10.9197 9.83554L2.66636 1.59554C2.02636 0.955542 0.919691 1.12888 0.519691 1.95554C-0.426976 3.94221 -0.0803094 6.38221 1.55969 8.03554L7.14636 13.6089ZM16.1864 11.1955C18.2264 12.1422 21.093 11.4755 23.213 9.35554C25.7597 6.80887 26.253 3.15554 24.293 1.19554C22.3464 -0.751124 18.693 -0.271124 16.133 2.27554C14.013 4.39554 13.3464 7.26221 14.293 9.30221L2.21302 21.3822C1.96372 21.6315 1.82366 21.9696 1.82366 22.3222C1.82366 22.6748 1.96372 23.0129 2.21302 23.2622C2.46233 23.5115 2.80046 23.6516 3.15302 23.6516C3.50559 23.6516 3.84372 23.5115 4.09302 23.2622L12.3464 15.0355L20.5864 23.2755C20.7098 23.399 20.8563 23.4969 21.0176 23.5637C21.1789 23.6305 21.3518 23.6649 21.5264 23.6649C21.7009 23.6649 21.8738 23.6305 22.0351 23.5637C22.1964 23.4969 22.3429 23.399 22.4664 23.2755C22.5898 23.1521 22.6877 23.0055 22.7545 22.8443C22.8213 22.683 22.8557 22.5101 22.8557 22.3355C22.8557 22.161 22.8213 21.9881 22.7545 21.8268C22.6877 21.6655 22.5898 21.519 22.4664 21.3955L14.2264 13.1555L16.1864 11.1955Z"
        fill="#02E4C0"
      />
    </svg>
  ),
  alien: (
    <svg
      width="29"
      height="30"
      viewBox="0 0 29 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12.0495 13.395C13.5285 15.855 13.311 18.75 11.542 19.92C9.773 21.06 7.134 19.995 5.6405 17.535C4.1615 15.075 4.3935 12.15 6.1625 11.01C7.9315 9.87 10.5705 10.935 12.0495 13.395ZM14.5 23.625C17.4 23.625 18.125 22.5 18.125 22.5C18.125 22.5 17.4 25.5 14.5 25.5C11.6 25.5 10.875 22.545 10.875 22.5C10.875 22.5 11.6 23.625 14.5 23.625ZM22.8375 11.01C24.6065 12.15 24.8385 15.075 23.3595 17.535C21.866 19.995 19.227 21.06 17.458 19.92C15.689 18.75 15.4715 15.855 16.9505 13.395C18.4295 10.935 21.0685 9.87 22.8375 11.01ZM14.5 27C18.125 27 26.1 19.29 26.1 13.5C26.1 7.71 20.8945 3 14.5 3C8.1055 3 2.9 7.71 2.9 13.5C2.9 19.29 10.875 27 14.5 27ZM14.5 0C22.475 0 29 6.06 29 13.5C29 19.62 20.764 30 14.5 30C8.236 30 0 19.62 0 13.5C0 6.06 6.525 0 14.5 0Z"
        fill="#02E4C0"
      />
    </svg>
  ),
  infinity: (
    <svg
      width="41"
      height="53"
      viewBox="0 0 41 53"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_62_2518)">
        <path
          d="M31.775 17C29.315 17 26.9917 17.9889 25.3346 19.7017L13.325 30.7203C12.2317 31.8504 10.7796 32.4684 9.225 32.4684C6.03042 32.4684 3.41667 29.8021 3.41667 26.5C3.41667 23.198 6.03042 20.5316 9.225 20.5316C10.7796 20.5316 12.2317 21.1497 13.3933 22.3504L15.3238 24.1162L17.9375 21.75L15.7508 19.79C14.8953 18.9024 13.8782 18.1988 12.7581 17.7199C11.6379 17.2411 10.4371 16.9964 9.225 17C4.13417 17 0 21.2733 0 26.5C0 31.7268 4.13417 36 9.225 36C11.685 36 14.0083 35.0112 15.6654 33.2983L27.675 22.2798C28.7683 21.1497 30.2204 20.5316 31.775 20.5316C34.9696 20.5316 37.5833 23.198 37.5833 26.5C37.5833 29.8021 34.9696 32.4684 31.775 32.4684C30.2375 32.4684 28.7683 31.8504 27.6067 30.6496L25.625 28.8662L23.0625 31.2324L25.2492 33.21C26.107 34.0932 27.125 34.7927 28.2448 35.2684C29.3646 35.7442 30.5643 35.9868 31.775 35.9823C36.8658 35.9823 41 31.7268 41 26.5C41 21.2026 36.8658 17 31.775 17Z"
          fill="#02E4C0"
        />
      </g>
      <defs>
        <clipPath id="clip0_62_2518">
          <rect width="41" height="53" fill="white" />
        </clipPath>
      </defs>
    </svg>
  ),
};

const featuresList = [
  {
    title: "A single source of truth",
    description:
      "When you add work to your Slate calendar we automatically calculate useful insights.",
    icon: Icons.cutlery,
  },
  {
    title: "Intuitive interface",
    description:
      "When you add work to your Slate calendar we automatically calculate useful insights.",
    icon: Icons.alien,
  },
  {
    title: "Or with rules",
    description:
      "When you add work to your Slate calendar we automatically calculate useful insights.",
    icon: Icons.infinity,
  },
];

export const Features = () => {
  return (
    <section className="py-20 md:py-32 bg-background text-white px-4 overflow-hidden">
      <div className="max-w-4xl mx-auto text-center mb-16 md:mb-24">
        <h2 className="text-xl md:text-2xl font-bold mb-6 uppercase tracking-widest text-white">
          Features
        </h2>
        <p className="text-3xl md:text-[20px] font-bold leading-tight max-w-3xl mx-auto text-white">
          Most calendars are designed for teams. Slate is designed for
          freelancers who want a simple way to plan their schedule.
        </p>
      </div>

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 md:gap-20">
        <div className="w-full md:w-[752px] relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] h-[80%] bg-primary/20 blur-[100px] rounded-full -z-10"></div>

          <img
            src={chatbot}
            alt="Dashboard Interface"
            className="w-full shadow-2xl border border-gray-800"
          />

          <img
            src={lineChart}
            alt="Growth Chart"
            className="absolute z-10 border border-gray-800 shadow-2xl
             w-[232px] md:w-[400px] -bottom-6 md:-bottom-20 left-1/2 -translate-x-1/2 md:left-auto md:translate-x-0 md:-right-1"
          />
        </div>

        <div className="w-full md:w-auto flex flex-col gap-[50px] md:pl-10 items-center">
          {featuresList.map((item, index) => (
            <div
              key={index}
              className="flex flex-col gap-3 items-start text-left"
            >
              <div className="flex items-center gap-4">
                <div className="shrink-0 text-primary">{item.icon}</div>
                <h3 className="text-xl md:text-2xl font-bold text-white m-0">
                  {item.title}
                </h3>
              </div>

              <p className="text-gray-400 text-[20px] leading-[30px] tracking-[0.2px] max-w-[309px] text-left">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
