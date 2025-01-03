import React from 'react';
import { Github, ExternalLink } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import GlitchText from './GlitchText';

const Footer = () => {
  const { mode } = useTheme();
  
  return (
    <footer className={`p-8 text-center ${mode === 'zen' ? 'bg-white text-gray-800' : 'bg-black text-white'}`}>
      <a
        href="https://github.com/na7hk3r"
        target="_blank"
        rel="noopener noreferrer"
        className={`inline-flex items-center gap-2 ${
          mode === 'zen' 
            ? 'text-gray-800 hover:text-gray-600' 
            : 'text-neon-green hover:text-neon-pink'
        }`}
      >
        <Github className="w-5 h-5" />
        {mode === 'zen' ? (
          <span>Encuentra la paz en mi GitHub</span>
        ) : (
          <GlitchText text="Visita mi repositorio de código dudoso" />
        )}
      </a>
      {mode === 'zen' && (
        <>
          <span className="mx-2 text-gray-800">|</span>
          <a
            href="https://smcurbelo.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-gray-800 hover:text-gray-600"
          >
            <ExternalLink className="w-5 h-5" />
            <span>Visita mi portfolio normie/aburrido</span>
          </a>
        </>
      )}
    </footer>
  );
};

export default Footer;