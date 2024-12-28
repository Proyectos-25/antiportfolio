import React from 'react';
import { ExternalLink } from 'lucide-react';

const poems = [
  {
    title: "Manifiesto 73",
    content: "En el vacío del código\nrespira la poesía\ndel espacio en blanco",
    image: "https://firebasestorage.googleapis.com/v0/b/shotgunseven73.appspot.com/o/73manifestv1.png?alt=media&token=9c3dd466-800e-46ea-b8d3-cbaf321fe470",
    link: "https://73labs-manifest.vercel.app/",
    link2: "https://73manifest-v2.vercel.app/"
  },
  {
    title: "SHOTGUN - Aforismos",
    content: "0 1 0 1\nEntre los números\nfluye la consciencia",
    image: "https://firebasestorage.googleapis.com/v0/b/shotgunseven73.appspot.com/o/shotgun.png?alt=media&token=c8803103-95d0-4f96-a182-2ff1e45157a8",
    link: "https://shotgun-seven.vercel.app/"
  },
  {
    title: "Refuercito 'e huevo",
    content: "Cada función\nes un mantra\nque purifica la memoria",
    image: "https://firebasestorage.googleapis.com/v0/b/shotgunseven73.appspot.com/o/rijuercinho.png?alt=media&token=32a4cd45-5d68-43f0-a2c5-a9d8f3c1995d",
    link: "https://refuercitoehuevo.vercel.app/"
  }
];

const DigitalPoetry = () => {
  return (
    <div>
      <div className="mb-8 text-center">
        <p className="text-xl mt-6 text-gray-600">Una colección de proyectos que combinan código y poesía {'(o algo muy parecido)'} para crear experiencias únicas.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {poems.map((poem, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
            <img
              src={poem.image}
              alt={poem.title}
              className="w-full h-48 object-cover rounded mb-4"
            />
            <h3 className="text-xl font-serif mb-2 text-gray-800">{poem.title}</h3>
            <p className="text-gray-600 whitespace-pre-line">{poem.content}</p>
            <div className="mt-6 flex justify-end space-x-4">
              <a href={poem.link} target="_blank" rel="noopener noreferrer" className="text-lg font-serif text-gray-800 flex items-center">
                Link al sitio <ExternalLink className="ml-2" />
              </a>
              {poem.link2 && (
                <a href={poem.link2} target="_blank" rel="noopener noreferrer" className="text-lg font-serif text-gray-800 flex items-center">
                  Segunda versión <ExternalLink className="ml-2" />
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
      <div className="mt-8 flex justify-center">
        <img
          src="https://firebasestorage.googleapis.com/v0/b/shotgunseven73.appspot.com/o/mayawr-removebg.png?alt=media&token=8a752a65-c7c2-4a62-9f20-a71741e0642a"
          alt="Maya WR"
          className="w-48 h-auto"
        />
      </div>
    </div>
  );
};

export default DigitalPoetry;