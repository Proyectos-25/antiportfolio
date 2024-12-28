import React, { useEffect, useState } from 'react';
import { Skull } from 'lucide-react';
import { useChaos } from './context/ChaosContext';
import GlitchText from './components/GlitchText';
import FloatingElements from './components/FloatingElements';
import RunningButton from './components/RunningButton';
import ForgettableWorks from './components/sections/ForgettableWorks';
import ImaginaryClients from './components/sections/ImaginaryClients';
import FeaturedFailure from './components/sections/FeaturedFailure';
import AntiAboutMe from './components/sections/AntiAboutMe';
import VisualPoetry from './components/sections/VisualPoetry';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const { isChaosModeActive, toggleChaosMode } = useChaos();

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 2000);
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-neon-pink text-2xl animate-pulse">
          <GlitchText text="Cargando mi falta de talento..." />
        </div>
      </div>
    );
  }

  return (
    <div className={`min-h-screen ${isChaosModeActive ? 'chaos-mode' : 'bg-black'} transition-colors duration-500`}>
      <FloatingElements />
      
      <header className="relative z-10 p-8">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <GlitchText 
            text="antiPortfoli0" 
            className="text-6xl font-serif text-neon-green"
          />
          <button
            onClick={toggleChaosMode}
            className="px-4 py-2 bg-neon-yellow text-black rounded-md hover:bg-neon-green transition-colors"
          >
            <Skull className="inline-block mr-2" />
            {isChaosModeActive ? '¡Socorro!' : 'Modo Caos'}
          </button>
        </div>
      </header>

      <main className="relative z-10 p-8 max-w-7xl mx-auto">
        <section className="mb-20">
          <h2 className="text-8xl font-serif text-neon-pink mb-8 -rotate-3">
            <GlitchText text="bienvenido al lugar donde no pasa nada interesante" />
          </h2>
          <p className="text-white text-xl max-w-2xl ml-auto rotate-1">
            Tengo exactamente las habilidades que NO buscas en un profesional.
          </p>
        </section>

        <AntiAboutMe />
        <ForgettableWorks />
        <ImaginaryClients />
        <FeaturedFailure />
        <VisualPoetry />
        
        <RunningButton text="¡No me cliques!" />
      </main>
    </div>
  );
}

export default App;