import React, { useState, useEffect } from 'react';
import { useAuth } from '../firebase/AuthContext';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { db } from '../firebase/firebaseConfig';

function UserReservations() {
  const { currentUser } = useAuth();
  const [reservations, setReservations] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchReservations = async () => {
      if (currentUser) {
        try {
          const q = query(collection(db, "reservations"), where("userId", "==", currentUser.uid));
          const querySnapshot = await getDocs(q);
          const reservationsData = [];
          querySnapshot.forEach((doc) => {
            reservationsData.push(doc.data());
          });
          setReservations(reservationsData);
        } catch (error) {
          console.error("Error fetching reservations:", error);
        }
      }
      setLoading(false);
    };

    fetchReservations();
  }, [currentUser]);

  return (
    <div>
      <h2>Historia rezerwacji</h2>
      {loading ? (
        <p>Ładowanie...</p>
      ) : reservations.length === 0 ? (
        <p>Brak historii rezerwacji.</p>
      ) : (
        <ul>
          {reservations.map((reservation) => (
            <li key={reservation.id}>
              <p>Samochód: {reservation.carName}</p>
              <p>Data rozpoczęcia: {reservation.startDate}</p>
              <p>Data zakończenia: {reservation.endDate}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default UserReservations;
