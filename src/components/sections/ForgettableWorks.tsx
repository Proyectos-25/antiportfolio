import React from 'react';
import GlitchImage from '../GlitchImage';
import GlitchText from '../GlitchText';

const ForgettableWorks = () => {
  return (
    <section className="mb-20">
      <h2 className="text-4xl font-serif text-neon-yellow mb-8 rotate-2">
        <GlitchText text="Obras Olvidables" />
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="group">
          <GlitchImage 
            src="https://firebasestorage.googleapis.com/v0/b/shotgunseven73.appspot.com/o/smcurbelo%2Fabout.webp?alt=media&token=61353679-b551-4dab-bc61-818b85ddd969"
            alt="Error 404: Talento no encontrado"
          />
          <p className="mt-2 text-neon-pink group-hover:animate-glitch">Error 404: Talento no encontrado</p>
        </div>
        <div className="group">
          <GlitchImage 
            src="https://firebasestorage.googleapis.com/v0/b/shotgunseven73.appspot.com/o/smcurbelo%2Foldportfol.webp?alt=media&token=e5234579-708f-45ee-9a2d-0a4839264fb4"
            alt="Proyecto abandonado #127"
          />
          <p className="mt-2 text-neon-green group-hover:animate-glitch">Proyecto abandonado #127</p>
        </div>
        <div className="group">
          <GlitchImage 
            src="https://firebasestorage.googleapis.com/v0/b/shotgunseven73.appspot.com/o/retro-keyboard.png?alt=media&token=abb21492-73c8-47cb-b467-5fb5df1f6a63"
            alt="Bug feature"
          />
          <p className="mt-2 text-neon-yellow group-hover:animate-glitch">No es un bug, es una feature</p>
        </div>
      </div>
    </section>
  );
};

export default ForgettableWorks;