import React from 'react';
import { Target, Shield, Users, Trophy } from 'lucide-react';

export function About() {
  const features = [
    {
      icon: <Target className="w-8 h-8" />,
      title: 'Treinadores Experientes',
      description:
        'Nossa equipe é formada por mestres e professores com anos de experiência',
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Ambiente Seguro',
      description: 'Estrutura completa e segura para sua prática marcial',
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Comunidade Unida',
      description: 'Faça parte de uma família de lutadores comprometidos',
    },
    {
      icon: <Trophy className="w-8 h-8" />,
      title: 'Resultados Comprovados',
      description: 'Atletas premiados e alunos transformados',
    },
  ];

  return (
    <section id="about" className="py-20  bg-black">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 text-red-700">
          Por que escolher a Denilsom Procop Team?
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-gray-800 p-6 rounded-lg shadow-lg text-center"
            >
              <div className="text-red-700 mb-4 flex justify-center">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">
                {feature.title}
              </h3>
              <p className="text-gray-300">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
