import React, { useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../../firebase/AuthContext'; 
import UserAccount from '../../user/UserAccount';

function AccountPage() {
  const { currentUser } = useAuth();

  useEffect(() => {
    console.log("AccountPage rendered"); // Logowanie przy każdym renderowaniu
    console.log("currentUser:", currentUser); // Logowanie wartości currentUser
  }, [currentUser]); // Tablica zależności, aby logować tylko po zmianie currentUser

  if (!currentUser) {
    console.log("Redirecting to login page"); // Logowanie przed przekierowaniem
    return <Navigate to="/login" />;
  }

  return (
    <div>
      <UserAccount />
    </div>
  );
}

export default AccountPage;
