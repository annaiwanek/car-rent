import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App'; // Poprawiłem ścieżkę do pliku App
import './index.css'; // Poprawiłem ścieżkę do pliku index.css

window.addEventListener('vite:preloadError', (event) => {
  console.error('Błąd ładowania dynamicznego importu:', event.payload)
  window.location.reload() // Odśwież stronę, aby uniknąć błędu importu
})

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
