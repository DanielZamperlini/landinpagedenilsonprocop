import React from 'react';

export function MasterSection() {
  const photos = [
    {
      url: 'imgs/dpring.png',
      alt: 'Mestre em treino',
    },
    {
      url: 'imgs/figueiredo.png',
      alt: 'Mestre ensinando',
    },
    {
      url: 'imgs/junglefight.png',
      alt: 'Demonstração técnica',
    },
    {
      url: 'imgs/fotopbluta.png',
      alt: 'Competição internacional',
    },
  ];

  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="grid grid-cols-2 gap-4 transform -rotate-6">
            {photos.map((photo, index) => (
              <div
                key={index}
                className="overflow-hidden rounded-lg shadow-xl hover:scale-105 transition-transform duration-300"
              >
                <img
                  src={photo.url}
                  alt={photo.alt}
                  className="w-full h-48 object-cover"
                />
              </div>
            ))}
          </div>

          <div>
            <h2 className="text-4xl font-bold mb-6 text-red-700">
              Olá, me chamo Denilson Procop.
            </h2>
            <div className="space-y-4 text-gray-300">
              <p className="leading-relaxed">
                Sou mestre de Muay Thai e treinador de boxe, e vim aqui falar um
                pouco sobre mim. Tenho 14 anos de experiência no esporte
              </p>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <span className="text-red-800 mr-2">•</span>
                  Com 72 lutas profissionais de MMA contabilizadas no Sherdog 23
                  destas lutas.
                </li>
                <li className="flex items-center">
                  <span className="text-red-800 mr-2">•</span>
                  Federado pelo Conselho Nacional de Boxe (CNB) como treinador
                  de boxe.
                </li>
                <li className="flex items-center">
                  <span className="text-red-800 mr-2">•</span>
                  Kan Preta de Muay Thai pela Federação Gaúcha de Muay Thai.
                </li>
                <li className="flex items-center">
                  <span className="text-red-800 mr-2">•</span>
                  Faixa azul de BJJ.
                </li>
                <li className="flex items-center">
                  <span className="text-red-800 mr-2">•</span>
                  Campeão Brasileiro de wresthing (LUTA LIVRE).
                </li>
                <li className="flex items-center">
                  <span className="text-red-800 mr-2">•</span>
                  Graduando em Bacharelado em Educação Física.
                </li>
              </ul>
              <p className="leading-relaxed">
                Sou um profissional de MMA e luto no âmbito nacional e
                internacional. Hoje, como personal fight e personal trainer,
                vocês poderão contar com um profissional de carreira, com vasta
                experiência no ramo do esporte.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
