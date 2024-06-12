import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Footer from './components/layout/Footer';
import './components/layout/Layout.css';
import Fleet from './components/pages/fleet/FleetPage';
import Home from './components/pages/home/Home';
import CarouselHome from './components/carousel/CarouselHome';
import Offer from './components/pages/offer/OfferPage';
import PromotionsPage from './components/pages/promotions/PromotionsPage';
import ContactPage from './components/pages/contact/ContactPage';
import ReservationPage from './components/pages/reservation/ReservationPage';
import FAQPage from './components/pages/faq/FAQPage';
import LoginRegister from './components/firebase/LoginRegister';
import AccountPage from './components/pages/account/AccountPage';
import { AuthProvider } from './components/firebase/AuthContext';
import PrivateRoute from './components/routes/PrivateRoute'; // Import PrivateRoute


function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />} >
            <Route index element={<Home />} />
            <Route path="fleet" element={<Fleet />} />
            <Route path="carousel" element={<CarouselHome />} />
            <Route path="offer" element={<Offer />} />
            <Route path="promotions" element={<PromotionsPage />} />
            <Route path="reservation" element={<ReservationPage />} />
            <Route path="faq" element={<FAQPage />} />
            <Route path="contact" element={<ContactPage />} />
            <Route path="login" element={<LoginRegister />} />
            <Route path="register" element={<LoginRegister />} />
            <Route path="footer" element={<Footer />} />
            <Route 
              path="account"
              element={
                <PrivateRoute>
                  <AccountPage /> 
                </PrivateRoute>
              }
            /> 
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
