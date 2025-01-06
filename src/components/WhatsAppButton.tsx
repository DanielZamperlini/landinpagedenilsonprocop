import React from 'react';
import { MessageCircle } from 'lucide-react';

export function WhatsAppButton() {
  const handleClick = () => {
    window.open('https://wa.me/5547989276884', '_blank');
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-50 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-colors duration-300"
      aria-label="Contato WhatsApp"
    >
      <MessageCircle size={24} />
    </button>
  );
}
