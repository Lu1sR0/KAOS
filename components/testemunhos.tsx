import React from 'react';
import { AnimatedTestimonialsDemo } from './testemonials';

const TestimonialsSection = () => {
  return (
    <section className="flex items-center justify-center py-16 px-6 sm:px-8 lg:px-16">
      <div className="max-w-7xl w-full flex flex-col lg:flex-row justify-between gap-12">
        <div className="w-full lg:w-max flex-col items-start space-y-6 text-white">
          <h2 className="text-4xl font-semibold">Conheça a Kaos</h2>
          <p className="text-lg max-w-prose">
            O Grupo Kaos é uma rede de networking que conecta profissionais criativos e empreendedores
            com o objetivo de compartilhar conhecimento, expandir negócios e construir parcerias de
            sucesso. Aqui, cada membro tem a oportunidade de crescer com apoio mútuo e inovação.
          </p>
          <div className="mt-8 ">
            <AnimatedTestimonialsDemo />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
