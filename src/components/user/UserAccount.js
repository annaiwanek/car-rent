import React from 'react';
import { Tabs, Tab } from 'react-bootstrap';
import UserProfile from './UserProfile';
import UserReservations from './UserReservations';
import UserBookings from './UserBookings'; // Dodaj import komponentu UserBookings
import './UserAccount.css';


function UserAccount() {
  return (
    <div className="user-account-container">
      <Tabs defaultActiveKey="profile" id="user-account-tabs">
        <Tab eventKey="profile" title="Twój profil">
          <UserProfile />
        </Tab>
        <Tab eventKey="bookings" title="Aktywne wypożyczenia"> {/* Dodaj zakładkę dla bieżących rezerwacji */}
          <UserBookings /> 
        </Tab>
        <Tab eventKey="reservations" title="Historia rezerwacji">
          <UserReservations />
        </Tab>
      </Tabs>
    </div>
  );
}

export default UserAccount;
