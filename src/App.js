import React from 'react';
import {BrowserRouter, Routes, Route } from 'react-router-dom'; 
import Layout from './components/layout/Layout';
import Fleet from './components/pages/fleet/FleetPage';
import Home from './components/pages/home/Home';
import CarouselHome from './components/carousel/CarouselHome'; 
import Offer from './components/pages/offer/OfferPage';
import PromotionsPage from './components/pages/promotions/PromotionsPage'; 
import ContactPage from './components/pages/contact/ContactPage';
import ReservationPage from './components/pages/reservation/ReservationPage'; 

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />} >
            <Route index element={<Home />} />
            <Route path="fleet" element={<Fleet />} />
            <Route path="carousel" element={<CarouselHome />} />
            <Route path="offer" element={<Offer />} />
            <Route path="promotions" element={<PromotionsPage />} />
            <Route path="contact" element={<ContactPage />} />
            <Route path="reservation" element={<ReservationPage />} />
          </Route>
        </Routes>
      
    </BrowserRouter>
    
  );
}

export default App;