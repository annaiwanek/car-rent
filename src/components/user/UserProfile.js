import React, { useEffect, useState } from 'react';
import { useAuth } from '../firebase/AuthContext';
import { db } from '../firebase/firebaseConfig'; // Dodaj import
import { doc, getDoc } from 'firebase/firestore'; // Dodaj import

function UserProfile() {
  const { currentUser } = useAuth();
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      if (currentUser) {
        const userDoc = await getDoc(doc(db, 'users', currentUser.uid));
        if (userDoc.exists()) {
          setUserData(userDoc.data());
        }
      }
    };

    fetchUserData();
  }, [currentUser]);

  if (!userData) {
    return <div>Ładowanie...</div>;
  }

  return (
    <div>
      <h2>Twój profil</h2>
      <p>Email: {userData.email}</p>
      <p>Imię: {userData.name}</p>
      <p>Numer telefonu: {userData.phone}</p>
      {/* ... inne informacje o użytkowniku */}
    </div>
  );
}

export default UserProfile;
