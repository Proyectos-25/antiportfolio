import React, { useState, useEffect } from 'react';
import { Quote } from 'lucide-react';
import GlitchText from '../GlitchText';

const testimonials = [
  {
    text: "Nunca había visto algo tan fe0 e inconsistente.",
    author: "Cliente que nunca existió"
  },
  {
    text: "Definitivamente... si, es un portfolio.",
    author: "Empresa Imaginaria S.R.L."
  },
  {
    text: "Le pedí hacer un sitio web y terminó haciendo una obra de arte contemporáneo. 10/10",
    author: "John Doe (literalmente)"
  },
  {
    text: "?????????????????????????????",
    author: "??????"
  }
];

const ImaginaryClients = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="mb-20">
      <h2 className="text-4xl font-serif text-neon-green mb-8 -rotate-1">
        <GlitchText text="Clientes Imaginarios" />
      </h2>
      <div className="bg-black/50 p-8 rounded-lg relative">
        <Quote className="text-neon-pink absolute top-4 left-4" size={32} />
        <div className="ml-12">
          <p className="text-xl text-white mb-4 italic">
            {testimonials[currentIndex].text}
          </p>
          <p className="text-neon-yellow text-right">
            - {testimonials[currentIndex].author}
          </p>
        </div>
      </div>
    </section>
  );
};

export default ImaginaryClients;