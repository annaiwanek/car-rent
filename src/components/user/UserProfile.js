import React from 'react';
import { useAuth } from '../firebase/AuthContext';

function UserProfile() {
  const { currentUser } = useAuth();

  return (
    <div>
      <h2>Twój profil</h2>
      <p>Email: {currentUser?.email}</p>
      <p>Nazwa użytkownika: {currentUser?.displayName}</p>
      {/* ... inne informacje o użytkowniku */}
    </div>
  );
}

export default UserProfile;
