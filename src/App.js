import React from 'react';
import {BrowserRouter, Routes, Route } from 'react-router-dom'; // Dodajemy BrowserRouter
import Layout from './components/layout/Layout';
import Fleet from './components/pages/fleet/FleetPage';
import Home from './components/pages/home/Home';
import CarouselHome from './components/carousel/CarouselHome';

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />} >
            <Route index element={<Home />} />
            <Route path="fleet" element={<Fleet />} />
            <Route path="carousel" element={<CarouselHome />} />
          </Route>
        </Routes>
      
    </BrowserRouter>
    
  );
}

export default App;