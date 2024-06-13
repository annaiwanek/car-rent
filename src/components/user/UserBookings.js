import React, { useState, useEffect } from 'react';
import { useAuth } from '../firebase/AuthContext';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { db } from '../firebase/firebaseConfig'; // Upewnij się, że jest poprawnie zaimportowane

function UserBookings() {
  const { currentUser } = useAuth();
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBookings = async () => {
      if (currentUser) {
        try {
          const q = query(collection(db, "bookings"), where("userId", "==", currentUser.uid));
          const querySnapshot = await getDocs(q);
          const bookingsData = [];
          querySnapshot.forEach((doc) => {
            bookingsData.push(doc.data());
          });
          setBookings(bookingsData);
        } catch (error) {
          console.error("Error fetching bookings:", error);
        }
      }
      setLoading(false);
    };

    fetchBookings();
  }, [currentUser]);

  return (
    <div>
      <h2>Aktywne wypożyczenia</h2>
      {loading ? (
        <p>Ładowanie...</p>
      ) : bookings.length === 0 ? (
        <p>Brak aktywnych wypożyczeń.</p>
      ) : (
        <ul>
          {bookings.map((booking) => (
            <li key={booking.id}>
              <p>Samochód: {booking.carName}</p>
              <p>Data rozpoczęcia: {booking.startDate}</p>
              <p>Data zakończenia: {booking.endDate}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default UserBookings;
