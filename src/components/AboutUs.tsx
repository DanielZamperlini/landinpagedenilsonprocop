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
              src="./src/imgs/equipe.jpg"
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
