import { useState } from 'react';
import { Button } from '../ui/Button';
import logo from '../../assets/logo-light.png'; // Supondo que você exportou do Figma

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed w-full top-0 z-50 bg-background/90 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo */}
          <div className="flex-shrink-0 cursor-pointer">
            <img src={logo} alt="Figma Land" className="h-8" />
          </div>

          {/* Menu Desktop (Escondido no Mobile) */}
          <nav className="hidden md:flex space-x-8 text-gray-300">
            <a href="#" className="hover:text-white transition">Home</a>
            <a href="#" className="hover:text-white transition">Product</a>
            <a href="#" className="hover:text-white transition">About</a>
            <a href="#" className="hover:text-white transition">Contact</a>
          </nav>

          {/* Botão Login Desktop */}
          <div className="hidden md:flex">
             <Button variant="outline" className="py-2 px-6">Login</Button>
          </div>

          {/* Botão Mobile (Hambúrguer) */}
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white">
              {isMenuOpen ? '✕' : '☰'}
            </button>
          </div>
        </div>
      </div>

      {/* Menu Mobile Dropdown */}
      {isMenuOpen && (
        <div className="md:hidden bg-secondary p-4 space-y-4 text-center">
            <a href="#" className="block hover:text-primary">Home</a>
            <a href="#" className="block hover:text-primary">Product</a>
            <Button variant="outline" className="w-full">Login</Button>
        </div>
      )}
    </header>
  );
};