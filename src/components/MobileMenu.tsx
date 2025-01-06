import React from 'react';
import { X } from 'lucide-react';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-95 z-50">
      <div className="flex justify-end p-4">
        <button onClick={onClose} className="text-white">
          <X size={24} />
        </button>
      </div>
      <nav className="flex flex-col items-center space-y-8 pt-8">
        <a href="#home" onClick={onClose} className="text-white text-2xl hover:text-red-500 transition">Home</a>
        <a href="#about" onClick={onClose} className="text-white text-2xl hover:text-red-500 transition">Sobre</a>
        <a href="#plans" onClick={onClose} className="text-white text-2xl hover:text-red-500 transition">Planos</a>
        <a href="#testimonials" onClick={onClose} className="text-white text-2xl hover:text-red-500 transition">Depoimentos</a>
        <a href="#contact" onClick={onClose} className="text-white text-2xl hover:text-red-500 transition">Contato</a>
      </nav>
    </div>
  );
}