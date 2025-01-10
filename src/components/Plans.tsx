import React from 'react';

export function Plans() {
  const plans = [
    {
      name: 'Plano Básico',
      price: 'R$ 119,90',
      features: [
        '2x por semana',
        ' 1 modalidade',
        'Acesso à academia',
        'Aulas em grupo',
        '20% de desconto em eventos exclusivo',
      ],
    },
    {
      name: 'Plano Plus',
      price: 'R$ 149,90',
      features: [
        '3x por semana',
        '1 modalidade',
        'Funcional incluso',
        'Acesso à academia',
        'Aulas em grupo',
        '40% de desconto em eventos exclusivos',
      ],
    },
    {
      name: 'Plano Premium',
      price: 'R$ 179,90',
      features: [
        'Livre acesso',
        'Todas as modalidades',
        'Acesso a eventos exclusivos',
      ],
    },
    {
      name: ['Plano Semestral'],
      price: 'R$ 899,90',
      features: [
        'Livre acesso',
        'Todas as modalidades',
        'Acesso a eventos exclusivos',
      ],
    },
    {
      name: ['Plano Anual'],
      price: 'R$ 1399,00',
      features: [
        'Livre acesso',
        'Todas as modalidades',
        'Acesso a eventos exclusivos',
      ],
    },
  ];

  return (
    <section id="plans" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 text-red-700">
          Nossos Planos
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className="bg-gray-800 border border-gray-700 rounded-lg p-8 shadow-lg hover:shadow-xl transition"
            >
              <h3 className="text-2xl font-bold text-center mb-4 text-white">
                {plan.name}
              </h3>
              <p className="text-3xl font-bold text-center text-red-500 mb-6">
                {plan.price}
              </p>
              <ul className="space-y-3">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-gray-300">
                    <span className="text-green-500 mr-2">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
