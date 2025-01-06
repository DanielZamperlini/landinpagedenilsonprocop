import React from 'react';

export function MasterSection() {
  const photos = [
    {
      url: 'https://media.discordapp.net/attachments/788414959179792424/1324569171648053318/image.png?ex=6778a0ab&is=67774f2b&hm=1ab77d6321e87fdde1297b93468a765c130b69db837590b517c6201e28d293ec&=&format=webp&quality=lossless&width=487&height=468',
      alt: 'Mestre em treino',
    },
    {
      url: 'https://media.discordapp.net/attachments/788414959179792424/1324572057987580014/image.png?ex=6778a35b&is=677751db&hm=82b91f8d89c5f61cd5743585e8b877e7ec8917375faaaa9d3c20d61217e1c4ae&=&format=webp&quality=lossless',
      alt: 'Mestre ensinando',
    },
    {
      url: 'https://media.discordapp.net/attachments/788414959179792424/1324570215299944469/image.png?ex=6778a1a4&is=67775024&hm=d004f1179d1ec9a4eca2e889ff1c5a2f11cb3feecb15efa9824f346ca98cf881&=&format=webp&quality=lossless&width=466&height=468',
      alt: 'Demonstração técnica',
    },
    {
      url: 'https://media.discordapp.net/attachments/788414959179792424/1324568706415722536/image.png?ex=677a9a7c&is=677948fc&hm=d25910dd7023b49cdfe09dac31d378a48a5ed6ca450aba433795e05bfbb4fd09&=&format=webp&quality=lossless&width=541&height=468',
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
