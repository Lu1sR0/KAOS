"use client"
import { useEffect } from 'react';

const FormularioPage = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://tally.so/widgets/embed.js';
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white">
      <iframe 
        data-tally-src="https://tally.so/r/nGq81O?transparentBackground=1" 
        width="100%" 
        height="100%" 
        frameBorder="0" 
        title="Venha para o Kaos"
        style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
      ></iframe>
    </div>
  );
};

export default FormularioPage;
