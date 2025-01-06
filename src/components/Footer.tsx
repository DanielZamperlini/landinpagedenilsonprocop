import React from 'react';
import { MapPin, Clock, Phone, Mail, Instagram, Youtube } from 'lucide-react';

export function Footer() {
  return (
    <footer id="contact" className="bg-black text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 text-red-700">Horários</h3>
            <div className="space-y-2">
              <div className="flex items-center">
                <Clock className="w-5 h-5 mr-2" />
                <span>Segunda a Sexta: 6h às 22h</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4 text-red-700">Contato</h3>
            <div className="space-y-2">
              <div className="flex items-center">
                <MapPin className="w-5 h-5 mr-2" />
                <span>Rua das Artes Marciais, 123</span>
              </div>
              <div className="flex items-center">
                <Phone className="w-5 h-5 mr-2" />
                <span>(47) 98927-6884 / (91) 98543-0631 </span>
              </div>
              <div className="flex items-center">
                <Mail className="w-5 h-5 mr-2" />
                <span>academiaprocopteam@gmail.com</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4 text-red-700">
              Redes Sociais
            </h3>
            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com/denilson_procop_team/?igsh=MTg0ZjZwaW8yazE0cg%3D%3D"
                className="hover:text-red-500 transition"
              >
                <Instagram className="w-6 h-6" />
              </a>
              <a
                href="https://www.youtube.com/channel/UCVEDfN1oDEUohLkYKMOZJgw"
                className="hover:text-red-500 transition"
              >
                <Youtube className="w-6 h-6" />
              </a>
              <a
                href="mailto:academiaprocopteam@gmail.com?subject=Assunto do email&cc=copia@academiaprocopteam@gmail.com&bcc=copiaoculta@academiaprocopteam@gmail.com&body=Olá tenho interesse nos planos, preciso de informações e detalhes."
                className="hover:text-red-500 transition"
              >
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p>
            &copy; {new Date().getFullYear()} Denilson Procop Team. Todos os
            direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
