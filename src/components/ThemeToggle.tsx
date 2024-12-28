import React from 'react';
import { Skull, Flower } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const ThemeToggle = () => {
  const { mode, setMode } = useTheme();

  return (
    <div className="flex gap-2">
      <button
        onClick={() => setMode(mode === 'chaos' ? 'normal' : 'chaos')}
        className="px-4 py-2 bg-neon-yellow text-black rounded-md hover:bg-neon-green transition-colors"
      >
        <Skull className="inline-block mr-2" />
        {mode === 'chaos' ? '¡Socorro!' : 'Modo Caos'}
      </button>
      <button
        onClick={() => setMode(mode === 'zen' ? 'normal' : 'zen')}
        className="px-4 py-2 bg-white text-black rounded-md hover:bg-gray-100 transition-colors"
      >
        <Flower className="inline-block mr-2" />
        {mode === 'zen' ? 'Volver al Caos' : 'Modo Zen'}
      </button>
    </div>
  );
};

export default ThemeToggle;