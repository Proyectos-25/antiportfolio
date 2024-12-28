import React, { useState } from 'react';

const RunningButton: React.FC<{ text: string }> = ({ text }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseOver = () => {
    const newX = Math.random() * (window.innerWidth - 200);
    const newY = Math.random() * (window.innerHeight - 100);
    setPosition({ x: newX, y: newY });
  };

  return (
    <button
      className="absolute px-6 py-3 bg-neon-green text-black font-bold rounded-md transition-all duration-200 hover:scale-105"
      style={{
        left: position.x,
        top: position.y,
        transform: 'translate(-50%, -50%)',
      }}
      onMouseEnter={handleMouseOver}
    >
      {text}
    </button>
  );
};

export default RunningButton;