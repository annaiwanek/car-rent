import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';
import { AuthProvider } from './components/firebase/AuthContext'; // Import AuthProvider

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider> {/* Otocz App w AuthProvider */}
      <App />
    </AuthProvider>
  </React.StrictMode>
);
