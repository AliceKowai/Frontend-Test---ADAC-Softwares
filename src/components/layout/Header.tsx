import { useState } from "react";
import { Button } from "../ui/Button";
import logo from "../../assets/logo-light.png";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="w-full top-0 z-50 bg-background/90">
      <div className="max-w-[1097px] mx-auto px-4 sm:px-6 relative">
        <div className="flex justify-between items-center h-[119px]">
          {/* Logo */}
          <div className="flex-shrink-0 cursor-pointer">
            <img
              src={logo}
              alt="Figma Land"
              className="w-[120px] md:w-[206px] h-auto object-contain"
            />
          </div>

          {/* Navegação Desktop */}
          <nav className="hidden md:flex items-center justify-between w-[393px] h-[44px] text-white font-medium text-[15px]">
            <a href="#" className="hover:text-primary transition">
              Home
            </a>
            <a href="#" className="hover:text-primary transition">
              Product
            </a>
            <a href="#" className="hover:text-primary transition">
              About
            </a>
            <a href="#" className="hover:text-primary transition">
              Contact
            </a>
          </nav>

          {/* LADO DIREITO */}
          <div className="flex items-center gap-4">
            {/* Botão Login */}
            <Button
              variant="outline"
              className="h-[52px] px-4 md:px-[36px] text-white border-white hover:bg-white hover:text-black transition-colors"
            >
              Login
            </Button>

            {/* Menu Hambúrguer */}
            <div className="md:hidden">
              {!isMenuOpen && (
                <button
                  onClick={() => setIsMenuOpen(true)}
                  className="text-white p-2"
                >
                  <svg
                    width="66"
                    height="53"
                    viewBox="0 0 66 53"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M11 13.25H55V17.6667H11V13.25ZM22 24.2917H55V28.7083H22V24.2917ZM35.75 35.3333H55V39.75H35.75V35.3333Z"
                      fill="white"
                    />
                  </svg>
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* MENU MOBILE FULLSCREEN */}
      {isMenuOpen && (
        <div className="fixed top-0 left-0 w-full h-[100dvh] bg-[#000000] z-[999] flex flex-col animate-in fade-in duration-200 overflow-y-auto">
          <div className="flex justify-between items-center px-4 sm:px-6 h-[119px] w-full max-w-[1097px] mx-auto shrink-0">
            <img
              src={logo}
              alt="Figma Land"
              className="w-[150px] object-contain"
            />
            <button onClick={closeMenu} className="text-white p-2">
              X
            </button>
          </div>

          <nav className="flex-1 flex flex-col justify-center items-center space-y-8 text-white text-2xl font-medium py-10">
            <a
              href="#"
              onClick={closeMenu}
              className="hover:text-primary transition"
            >
              Home
            </a>
            <a
              href="#"
              onClick={closeMenu}
              className="hover:text-primary transition"
            >
              Product
            </a>
            <a
              href="#"
              onClick={closeMenu}
              className="hover:text-primary transition"
            >
              Pricing
            </a>
            <a
              href="#"
              onClick={closeMenu}
              className="hover:text-primary transition"
            >
              About
            </a>
            <a
              href="#"
              onClick={closeMenu}
              className="hover:text-primary transition"
            >
              Contact
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};
