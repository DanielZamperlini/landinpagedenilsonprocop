import React from 'react';

export function Testimonials() {
  const testimonials = [
    {
      name: 'João Silva',
      role: 'Aluno há 2 anos',
      content:
        'Mudou minha vida. Além da forma física, ganhei confiança e disciplina.',
      image:
        'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80',
    },
    {
      name: 'Maria Santos',
      role: 'Aluna há 1 ano',
      content:
        'Ambiente familiar e professores excepcionais. Superei minhas limitações aqui.',
      image:
        'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80',
    },
    {
      name: 'Pedro Oliveira',
      role: 'Aluno há 3 anos',
      content:
        'Os treinos são desafiadores e motivadores. A equipe é muito profissional.',
      image:
        'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80',
    },
  ];

  return (
    <section id="testimonials" className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 text-red-700">
          O que nossos alunos dizem
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-900 p-6 rounded-lg shadow-lg">
              <div className="flex items-center mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h3 className="font-semibold text-white">
                    {testimonial.name}
                  </h3>
                  <p className="text-gray-400 text-sm">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-gray-300">{testimonial.content}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
