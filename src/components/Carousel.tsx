import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const images = [
  {
    url: 'https://i.pinimg.com/236x/05/71/af/0571afff9420f144c9627af653cfe1c9.jpg',
    title: 'Área de Treino Moderna',
    description: 'Equipamentos de última geração para seu desenvolvimento',
  },
  {
    url: 'https://www.brajiuartesmarciais.com.br/site2023/wp-content/uploads/2023/03/tatame.jpg',
    title: 'Tatames Profissionais',
    description: 'Ambiente seguro e adequado para sua prática',
  },
  {
    url: 'https://media.discordapp.net/attachments/788414959179792424/1324569171648053318/image.png?ex=6778a0ab&is=67774f2b&hm=1ab77d6321e87fdde1297b93468a765c130b69db837590b517c6201e28d293ec&=&format=webp&quality=lossless&width=487&height=468',
    title: 'Lutador profissional de mma',
    description: 'Com 72 lutas profissionais',
  },
  {
    url: 'https://media.discordapp.net/attachments/788414959179792424/1324572057987580014/image.png?ex=6778a35b&is=677751db&hm=82b91f8d89c5f61cd5743585e8b877e7ec8917375faaaa9d3c20d61217e1c4ae&=&format=webp&quality=lossless',
    title: 'Amigo do campeão mundial do ufc ',
    description: 'Deivison Figueiredo',
  },
  {
    url: 'https://media.discordapp.net/attachments/788414959179792424/1324570215299944469/image.png?ex=6778a1a4&is=67775024&hm=d004f1179d1ec9a4eca2e889ff1c5a2f11cb3feecb15efa9824f346ca98cf881&=&format=webp&quality=lossless&width=466&height=468',
    title: 'Área de Treino Moderna',
    description: 'Equipamentos de última geração para seu desenvolvimento',
  },
  {
    url: 'https://images.unsplash.com/photo-1549060279-7e168fcee0c2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    title: 'Treinos Personalizados',
    description: 'Acompanhamento individual para seu progresso',
  },
  {
    url: 'https://versusfightclub.com.br/wp-content/uploads/2020/11/5.jpg',
    title: 'Aulas em Grupo',
    description: 'Treine com pessoas comprometidas como você',
  },
  {
    url: 'https://images.unsplash.com/photo-1574680096145-d05b474e2155?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    title: 'Área de Musculação',
    description: 'Prepare seu corpo de forma completa',
  },
  {
    url: 'https://images.unsplash.com/photo-1576678927484-cc907957088c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    title: 'Vestiários Completos',
    description: 'Estrutura completa para seu conforto',
  },
];

export function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + 1 >= images.length ? 0 : prevIndex + 1,
    );
  };

  const prev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex - 1 < 0 ? images.length - 1 : prevIndex - 1,
    );
  };

  const visibleImages = () => {
    return images.slice(currentIndex).concat(images.slice(0, currentIndex));
  };

  return (
    <section className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 text-red-700">
          Galeria de fotos
        </h2>

        <div className="relative">
          <div className="flex gap-4 overflow-hidden">
            {visibleImages().map((image, index) => (
              <div
                key={index}
                className="w-full md:w-1/2 lg:w-1/3 flex-shrink-0 transition-transform duration-300 ease-in-out"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                <div className="bg-gray-900 rounded-lg shadow-lg overflow-hidden">
                  <img
                    src={image.url}
                    alt={image.title}
                    className="w-full h-64 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="text-xl font-semibold mb-2 text-white">
                      {image.title}
                    </h3>
                    <p className="text-gray-300">{image.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-red-600 text-white p-2 rounded-r-lg hover:bg-red-700 transition"
          >
            <ChevronLeft size={24} />
          </button>

          <button
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-red-600 text-white p-2 rounded-l-lg hover:bg-red-700 transition"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </section>
  );
}
