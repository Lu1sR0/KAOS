"use client"
import React, { useState, useEffect } from 'react';
import { RandomizedTextEffect } from './ui/text-randomized'; // Caminho correto do seu componente

function Textrandom() {
  const [isVisible, setIsVisible] = useState(false);

  const checkVisibility = () => {
    const rect = document.getElementById('textrandom')?.getBoundingClientRect();
    if (rect && rect.top <= window.innerHeight && rect.bottom >= 0) {
      setIsVisible(true);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', checkVisibility);
    checkVisibility(); // Verifica se o componente já está visível ao carregar a página

    return () => {
      window.removeEventListener('scroll', checkVisibility);
    };
  }, []);

  return (
    <div className='py-10 rounded-md' id="textrandom">
      <h1 className='text-6xl relative z-10 text-center h-[120px] md:h-auto leading-tight font-bold text-[#ff0000]'>
        {isVisible && <RandomizedTextEffect text='O KAOS' />}
      </h1>
    </div>
  );
}

export default Textrandom;
