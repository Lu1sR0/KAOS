// components/Sobre.js

import React from 'react';
import { CardSpotlightDemo } from './card';

const Sobre = () => {
  return (
    <section id="sobre" className=" py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-semibold text-white">Sobre Nós</h2>
        <p className="mt-4 text-lg text-white">
          Bem-vindo ao <span className="font-semibold text-red-600">CardSpotlightDemo</span>! Somos uma equipe apaixonada por criar experiências digitais inovadoras que impressionam e envolvem. Nosso objetivo é transformar ideias em soluções criativas e funcionais, com um foco especial em design de interfaces modernas, intuitivas e acessíveis.
        </p>
        <p className="mt-4 text-lg text-white">
          No <span className="font-semibold text-red-600">CardSpotlightDemo</span>, buscamos sempre a excelência em cada projeto, seja no desenvolvimento de sites, identidade visual ou soluções interativas. Nosso time é composto por profissionais com experiência em diversas áreas, unidos pela missão de oferecer resultados que atendam às necessidades dos nossos clientes de forma única e personalizada.
        </p>
        <p className="mt-4 text-lg text-white">
          Estamos prontos para ajudar você a destacar sua marca, melhorar sua presença online e atingir seus objetivos de forma eficaz e impactante. Venha fazer parte da nossa jornada e descubra como podemos transformar seu projeto em um sucesso!
        </p>
        
        {/* Aqui você insere o componente CardSpotlightDemo */}
        <div className="mt-8">
          <CardSpotlightDemo />
        </div>
      </div>
    </section>
  );
};

export default Sobre;
