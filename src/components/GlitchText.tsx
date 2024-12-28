import React, { useState, useEffect } from 'react';

const GlitchText: React.FC<{ text: string; className?: string }> = ({ text, className = '' }) => {
  const [glitchedText, setGlitchedText] = useState(text);
  
  useEffect(() => {
    const glitchChars = '!<>-_\\/[]{}—=+*^?#________';
    let interval: NodeJS.Timeout;
    
    const handleMouseOver = () => {
      let iterations = 0;
      clearInterval(interval);
      
      interval = setInterval(() => {
        setGlitchedText(
          text
            .split('')
            .map((char, index) => {
              if (index < iterations) {
                return text[index];
              }
              return glitchChars[Math.floor(Math.random() * glitchChars.length)];
            })
            .join('')
        );
        
        iterations += 1/3;
        if (iterations >= text.length) {
          clearInterval(interval);
        }
      }, 30);
    };

    const element = document.querySelector('.glitch-text');
    element?.addEventListener('mouseover', handleMouseOver);
    
    return () => {
      element?.removeEventListener('mouseover', handleMouseOver);
      clearInterval(interval);
    };
  }, [text]);

  return (
    <span className={`glitch-text inline-block ${className}`}>
      {glitchedText}
    </span>
  );
};

export default GlitchText;