import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout'; 
import Home from './components/pages/home/Home'; 
import Fleet from './components/pages/fleet/FleetPage'; 
import CarouselHome from './components/carousel/CarouselHome';
import Offer from './components/pages/offer/OfferPage'; 
import PromotionsPage from './components/pages/promotions/PromotionsPage';
import ReservationPage from './components/pages/reservation/ReservationPage';
import FAQPage from './components/pages/faq/FAQPage';
import ContactPage from './components/pages/contact/ContactPage'; 
import Footer from './components/layout/Footer'; 
import LoginRegister from './components/firebase/LoginRegister'; 
import PrivateRoute from './components/routes/PrivateRoute';
import AccountPage from './components/pages/account/AccountPage'; 
import { AuthProvider } from './components/firebase/AuthContext'; 
import ReservationResultPage from './components/pages/reservation/ReservationResultPage';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="fleet" element={<Fleet />} />
            <Route path="carousel" element={<CarouselHome />} />
            <Route path="offer" element={<Offer />} />
            <Route path="promotions" element={<PromotionsPage />} />
            <Route path="reservation" element={<ReservationPage />} />
            <Route path="faq" element={<FAQPage />} />
            <Route path="contact" element={<ContactPage />} />
            <Route path="footer" element={<Footer />} />
            <Route path="login" element={<LoginRegister />} />
            <Route path="register" element={<LoginRegister />} />
            <Route path="account" element={<PrivateRoute />}>
            <Route path="" element={<AccountPage />} />
            </Route>
            <Route path="reservation-result" element={<ReservationResultPage />} />
          </Route>
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
