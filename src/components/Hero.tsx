import React from 'react';
import { Phone } from 'lucide-react';

export function Hero() {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/5547989276884', '_blank');
  };

  return (
    <section id="home" className="relative h-screen">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            'url("https://img.freepik.com/fotos-premium/vista-lateral-da-arena-mma-vazia-sob-a-grade-do-octogono-luz_309665-134.jpg?w=740")',
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
      </div>
      <div className="relative h-full flex items-center justify-center text-white">
        <div className="text-center px-4">
          <h1 className="text-5xl text-red-700 md:text-7xl font-bold mb-6">
            DENILSON PROCOP TEAM
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
            Transforme sua vida através das artes marciais. <br /> Desenvolva
            força, disciplina e confiança.
          </p>
          <button
            onClick={handleWhatsAppClick}
            className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-full flex items-center justify-center mx-auto space-x-2 transition"
          >
            <Phone size={20} />
            <span>Fale Conosco no WhatsApp</span>
          </button>
        </div>
      </div>
    </section>
  );
}
