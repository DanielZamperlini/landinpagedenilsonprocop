import React, { useState } from 'react';
import { Menu } from 'lucide-react';
import { MobileMenu } from './MobileMenu';

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <nav className="bg-black text-white fixed w-full z-50">
        <div className="container mx-auto px-4 py-0">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold flex items-center py-0">
              <img
                className="max-h-24"
                src="https://cdn.discordapp.com/attachments/788414959179792424/1324551704330633236/Minha_logo.png?ex=67789067&is=67773ee7&hm=57ab7fa8bf34d6ef26c989ca990a1f7b98a42e94388f5bbbbbfd83175466f124&"
                alt=""
              />
              DENILSON PROCOP TEAM
            </h1>
            <div className="hidden md:flex space-x-6">
              <a href="#home" className="hover:text-red-600 transition">
                Home
              </a>
              <a href="#about" className="hover:text-red-600 transition">
                Sobre
              </a>
              <a href="#plans" className="hover:text-red-600 transition">
                Planos
              </a>
              <a href="#testimonials" className="hover:text-red-600 transition">
                Depoimentos
              </a>
              <a href="#contact" className="hover:text-red-600 transition">
                Contato
              </a>
            </div>
            <button
              className="md:hidden"
              onClick={() => setIsMobileMenuOpen(true)}
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </nav>
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
    </>
  );
}
