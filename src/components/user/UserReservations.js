import React from 'react';

const UserReservations = () => {
  return (
    <div className="reservations-container">
      <h2>Rezerwacje</h2>
      <div className="current-reservations">
        <h3>Bieżące rezerwacje</h3>
        <p>Brak rezerwacji</p>
      </div>
      <div className="reservation-history">
        <h3>Historia rezerwacji</h3>
        <p>Brak rezerwacji</p>
      </div>
    </div>
  );
};

export default UserReservations;
