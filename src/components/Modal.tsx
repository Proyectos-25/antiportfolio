import React from 'react';
import { AlertOctagon } from 'lucide-react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
      <div className="bg-white p-8 rounded-lg max-w-lg mx-auto text-center">
        <h2 className="text-2xl font-bold mb-4 text-black flex items-center justify-center">
          ¿Pero qué es esto?! <AlertOctagon className="ml-2" />
        </h2>
        <p className="text-gray-800 mb-4">
          Este es un sitio enfocado en destruir el concepto de portfolio y lo estéticamente agradable como una crítica hacia las tendencias y para mostrar el (anti) arte en su fase más absurda.
        </p>
        <button
          onClick={onClose}
          className="px-4 py-2 bg-neon-pink text-white rounded-md hover:bg-neon-green transition-colors"
        >
          Cerrar
        </button>
      </div>
    </div>
  );
};

export default Modal;