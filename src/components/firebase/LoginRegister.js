import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../firebase/AuthContext';
import './LoginRegister.css';

const LoginRegister = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isRegister, setIsRegister] = useState(false);
  const { login, register } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (isRegister) {
        await register(email, password);
      } else {
        await login(email, password);
      }
      navigate('/');
    } catch (error) {
      console.error("Error: ", error);
    }
  };

  return (
    <div className="login-register-container">
      <h1>{isRegister ? 'Zarejestruj się' : 'Zaloguj się'}</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Adres e-mail"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Hasło"
        />
        <button type="submit">{isRegister ? 'Zarejestruj się' : 'Zaloguj się'}</button>
      </form>
      <div
        className="toggle-button"
        onClick={() => setIsRegister(!isRegister)}
      >
        {isRegister ? 'Masz już konto? Zaloguj się' : 'Nie masz konta? Zarejestruj się'}
      </div>
    </div>
  );
};

export default LoginRegister;
