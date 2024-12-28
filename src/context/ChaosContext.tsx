import React, { createContext, useContext, useState } from 'react';

interface ChaosContextType {
  isChaosModeActive: boolean;
  toggleChaosMode: () => void;
}

const ChaosContext = createContext<ChaosContextType | undefined>(undefined);

export const ChaosProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isChaosModeActive, setIsChaosModeActive] = useState(false);

  const toggleChaosMode = () => {
    setIsChaosModeActive(!isChaosModeActive);
    if (!isChaosModeActive) {
      document.documentElement.classList.add('chaos-mode');
    } else {
      document.documentElement.classList.remove('chaos-mode');
    }
  };

  return (
    <ChaosContext.Provider value={{ isChaosModeActive, toggleChaosMode }}>
      {children}
    </ChaosContext.Provider>
  );
};

export const useChaos = () => {
  const context = useContext(ChaosContext);
  if (context === undefined) {
    throw new Error('useChaos must be used within a ChaosProvider');
  }
  return context;
};