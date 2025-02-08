// components/Sobre.js

import React from "react";
import { CardSpotlightDemo } from "./card";
import Textrandom from "./textrandom";

const Sobre = () => {
  return (
    <section id="sobre" className="py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto text-center">
        <Textrandom />
        <p className="mt-4 text-lg text-white text-justify">
          Bem-vindo ao <span className="font-semibold text-red-600">Kaos</span>!
          Somos um grupo apaixonado por marketing digital, composto por
          Designers, Social Media, Gestores de Tráfego, Empreendedores do meio
          digital e muitos outros profissionais talentosos.
        </p>
        <p className="mt-4 text-lg text-white text-justify">
          No <span className="font-semibold text-red-600">Kaos</span>, nossa
          missão é conectar mentes criativas e inovadoras para desenvolver
          estratégias de marketing que realmente fazem a diferença. Acreditamos
          no poder da colaboração e na troca de ideias para alcançar resultados
          extraordinários.
        </p>
        <p className="mt-4 text-lg text-white text-justify">
          Nossa equipe é formada por especialistas com vasta experiência em
          diversas áreas do marketing digital. Juntos, trabalhamos para criar
          campanhas impactantes, desenvolver marcas fortes, desenhar interfaces
          intuitivas e gerenciar redes sociais de forma eficaz. Cada projeto é
          uma oportunidade de superar expectativas e entregar valor real aos
          nossos clientes.
        </p>
        <p className="mt-4 text-lg text-white text-justify">
          Junte-se a nós e descubra como podemos transformar suas ideias em
          realidade, fortalecendo sua presença online e impulsionando seu
          negócio para novos patamares!
        </p>

        <div className="mt-8 flex justify-center items-center">
          <div className="w-full flex flex-col items-center lg:flex-row lg:justify-center">
            <CardSpotlightDemo />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sobre;
