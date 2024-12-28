import React from 'react';
import { Ghost, Pyramid, Coffee, FlameKindling, Bug, Shell } from 'lucide-react';

const FloatingElements = () => {
  const elements = [
    { Icon: Ghost, delay: '0s' },
    { Icon: Pyramid, delay: '2s' },
    { Icon: Coffee, delay: '4s' },
    { Icon: FlameKindling, delay: '1s' },
    { Icon: Bug, delay: '3s' },
    { Icon: Shell, delay: '5s' },
  ];

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {elements.map(({ Icon, delay }, index) => (
        <div
          key={index}
          className="absolute animate-float"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: delay,
          }}
        >
          <Icon
            className="text-neon-pink opacity-20 transform rotate-12"
            size={45}
          />
        </div>
      ))}
    </div>
  );
};

export default FloatingElements;