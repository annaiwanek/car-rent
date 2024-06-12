import React from 'react';

const UserProfile = () => {
  return (
    <div className="profile-container">
      <h2>Twój profil</h2>
      <div className="profile-details">
        <p>E-mail: user@example.com</p>
        <p>Hasło: *********</p>
        <p>Telefon kontaktowy: +48 555 666 777</p>
        <p>Powiązane z Google: Tak</p>
        <p>Powiązane z Facebook: Nie</p>
      </div>
    </div>
  );
};

export default UserProfile;
