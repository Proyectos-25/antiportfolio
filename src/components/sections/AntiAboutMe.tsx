import React from 'react';
import { Skull, XCircle, Coffee } from 'lucide-react';
import GlitchText from '../GlitchText';

const AntiAboutMe = () => {
  return (
    <section className="mb-20">
      <h2 className="text-4xl font-serif text-neon-green mb-8 rotate-3">
        <GlitchText text="Por Qué No Deberías Contratarme" />
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-black/50 p-6 rounded-lg transform hover:scale-105 transition-transform">
          <Skull className="text-neon-pink mb-4" size={46} />
          <h3 className="text-neon-yellow text-xl mb-2">expertise en caos</h3>
          <p className="text-white">Convierto simples errores en catástrofes artísticas.</p>
        </div>
        <div className="bg-black/50 p-6 rounded-lg transform hover:scale-105 transition-transform">
          <XCircle className="text-neon-green mb-4" size={32} />
          <h3 className="text-neon-yellow text-xl mb-2">anti-metodología</h3>
          <p className="text-white">Mi flujo de trabajo es como un laberinto en construcción.</p>
        </div>
        <div className="bg-black/50 p-6 rounded-lg transform hover:scale-105 transition-transform">
          <Coffee className="text-neon-yellow mb-4" size={39} />
          <h3 className="text-neon-yellow text-xl mb-2">café &gt; código</h3>
          <p className="text-white">Experto en convertir cafeína en bugs creativos.</p>
        </div>
      </div>
      <div className="mt-8 text-center">
        <p className="text-lg text-white italic">
          "La perfección es aburrida. Prefiero ser consistentemente inconsistente."
        </p>
        <br />
        <p className="text-lg text-white italic">
          "El arte debe perturbar al cómodo y confortar al perturbado."
        </p>
      </div>
    </section>
  );
};

export default AntiAboutMe;