import React from 'react';

export function AboutUs() {
  return (
    <section className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl text-red-700 font-bold mb-6">
              Sobre o CT Procop Team
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed">
              No CT Procop Team, acreditamos em mais do que apenas treinamento
              físico - nós cultivamos disciplina, respeito e superação. Aqui,
              transformamos sua energia em habilidade, sua força em técnica
              precisa, e sua determinação em resultados concretos.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed mt-4">
              Junte-se a nós e descubra um ambiente que incentiva o crescimento
              pessoal e o aperfeiçoamento contínuo. Venha treinar conosco e
              desbloquear o seu verdadeiro potencial!
            </p>
          </div>
          <div className="relative">
            <img
              src="https://cdn.discordapp.com/attachments/788414959179792424/1324567572003426485/20230412_170453.jpg?ex=67789f2e&is=67774dae&hm=acf6292355bc7229acbc91a444c2046027349323a8a52e2bda6bfc24e7159851&"
              alt="Lutador de Muay Thai"
              className="rounded-lg shadow-2xl w-full h-[500px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-lg"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
