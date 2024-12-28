import React from 'react';

const GlitchImage: React.FC<{ src: string; alt: string }> = ({ src, alt }) => {
  return (
    <div className="relative overflow-hidden group">
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-cover transition-transform duration-200 group-hover:scale-105"
      />
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
        <div className="absolute inset-0 bg-neon-pink mix-blend-multiply animate-glitch"></div>
        <div className="absolute inset-0 bg-neon-green mix-blend-multiply animate-glitch-2"></div>
      </div>
    </div>
  );
};

export default GlitchImage;