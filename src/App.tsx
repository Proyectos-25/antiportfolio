import React, { useEffect, useState } from 'react';
import { useTheme } from './context/ThemeContext';
import ThemeToggle from './components/ThemeToggle';
import GlitchText from './components/GlitchText';
import FloatingElements from './components/FloatingElements';
import RunningButton from './components/RunningButton';
import ForgettableWorks from './components/sections/ForgettableWorks';
import ImaginaryClients from './components/sections/ImaginaryClients';
import FeaturedFailure from './components/sections/FeaturedFailure';
import AntiAboutMe from './components/sections/AntiAboutMe';
import VisualPoetry from './components/sections/VisualPoetry';
import DigitalPoetry from './components/sections/DigitalPoetry';
import Footer from './components/Footer';
import Modal from './components/Modal';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { mode } = useTheme();

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 2000);
  }, []);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-neon-pink text-2xl animate-pulse">
          <GlitchText text="Cargando mi falta de talento..." />
        </div>
      </div>
    );
  }

  if (mode === 'zen') {
    return (
      <div className="min-h-screen bg-white">
        <header className="p-8 bg-white shadow-sm">
          <div className="max-w-7xl mx-auto flex justify-between items-center">
            <h1 className="text-4xl font-serif text-gray-800">
              Poesía <span className="line-through text-3xl"> y anti-poesía</span> Digital
            </h1>
            <ThemeToggle />
          </div>
        </header>
        <main className="p-8 max-w-7xl mx-auto">
          <DigitalPoetry />
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className={`min-h-screen ${mode === 'chaos' ? 'chaos-mode' : 'bg-black'} transition-colors duration-500`}>
      <FloatingElements />
      
      <header className="relative z-10 p-8">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <GlitchText 
            text="antiPortfoli0" 
            className="text-6xl font-serif text-neon-green"
          />
          <ThemeToggle />
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
      <Footer /> 

      <button
        onClick={toggleModal}
        className="fixed right-4 bottom-4 px-4 py-2 bg-neon-yellow text-black rounded-full shadow-lg hover:bg-neon-green transition-colors z-50"
      >
        ¿Pero qué es esto?!
      </button>
      <Modal isOpen={isModalOpen} onClose={toggleModal} />

    </div>
  );
}

export default App;