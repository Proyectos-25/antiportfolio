import React from 'react';
import { Trophy, Sparkles } from 'lucide-react';
import GlitchText from '../GlitchText';

const FeaturedFailure = () => {
  return (
    <section className="mb-20 text-center">
      <h2 className="text-4xl font-serif text-neon-pink mb-8 rotate-1">
        <GlitchText text="Fracaso Destacado" />
      </h2>
      <div className="relative inline-block group">
        <Trophy className="text-neon-yellow w-32 h-32 animate-float" />
        <Sparkles className="absolute -top-4 -right-4 text-neon-pink w-8 h-8 animate-spin" />
        <Sparkles className="absolute -bottom-4 -left-4 text-neon-green w-8 h-8 animate-spin" />
        <div className="mt-4">
          <p className="text-2xl text-white">Premio a la</p>
          <p className="text-3xl font-bold text-neon-green">INCOMPETENCIA CREATIVA</p>
          <p className="text-sm text-neon-pink mt-2">2024 - Presente</p>
        </div>
      </div>
    </section>
  );
};

export default FeaturedFailure;