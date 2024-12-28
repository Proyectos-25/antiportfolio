import React from 'react';
import GlitchText from '../GlitchText';

const VisualPoetry = () => {
  return (
    <section className="mb-20">
      <h2 className="text-4xl font-serif text-neon-yellow mb-8 -rotate-2">
        <GlitchText text="Poesía del Desastre" />
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-center">
        <div className="transform -rotate-3">
          <p className="text-neon-pink text-sm mb-2">404</p>
          <p className="text-white text-lg mb-1">Buscando talento</p>
          <p className="text-white text-lg mb-1">en el vacío digital</p>
          <p className="text-neon-green text-sm">Error encontrado</p>
        </div>
        <div className="transform rotate-2">
          <p className="text-neon-green text-2xl mb-2">{`{ }`}</p>
          <p className="text-white text-lg mb-1">Objeto vacío</p>
          <p className="text-white text-lg mb-1">{`{ como mi experiencia }`}</p>
          <p className="text-neon-pink text-sm">undefined</p>
        </div>
      </div>
    </section>
  );
};

export default VisualPoetry;