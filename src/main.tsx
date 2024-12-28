import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import { ChaosProvider } from './context/ChaosContext';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ChaosProvider>
      <App />
    </ChaosProvider>
  </StrictMode>
);