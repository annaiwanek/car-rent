import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../firebase/AuthContext';
import './LoginRegister.css';
import { Form, Button, Alert, Container, Row, Col } from 'react-bootstrap';
import { db } from '../firebase/firebaseConfig'; // Dodaj import
import { doc, setDoc } from 'firebase/firestore'; // Dodaj import

const LoginRegister = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState(''); // Dodaj pole dla imienia
  const [phone, setPhone] = useState(''); // Dodaj pole dla numeru telefonu
  const [isRegister, setIsRegister] = useState(false);
  const [error, setError] = useState('');
  const { login, register } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (isRegister) {
      // Walidacja pól rejestracji
      if (!name || !phone || !email || !password) {
        setError('Proszę wypełnić wszystkie pola.');
        return;
      }
      if (password.length < 6) {
        setError('Hasło musi mieć co najmniej 6 znaków.');
        return;
      }
    }

    try {
      if (isRegister) {
        const userCredential = await register(email, password);
        if (!userCredential || !userCredential.user) {
          throw new Error('Rejestracja nie powiodła się');
        }
        const user = userCredential.user;
        console.log('Użytkownik zarejestrowany:', user.uid); // Debugowanie

        // Logowanie danych przed zapisem do Firestore
        console.log('Dane do zapisania:', {
          name: name,
          phone: phone,
          email: email,
        });

        // Zapisz dodatkowe informacje o użytkowniku w Firestore
        await setDoc(doc(db, 'users', user.uid), {
          name: name,
          phone: phone,
          email: email,
        });
        console.log('Dane użytkownika zapisane w Firestore'); // Debugowanie
      } else {
        await login(email, password);
      }
      navigate('/');
    } catch (error) {
      console.error('Błąd podczas rejestracji:', error); // Debugowanie
      if (error.code === 'auth/weak-password') {
        setError('Hasło jest za słabe. Minimum 6 znaków.');
      } else if (error.code === 'auth/email-already-in-use') {
        setError('Podany adres e-mail jest już zajęty.');
      } else if (error.code === 'auth/user-not-found' || error.code === 'auth/wrong-password') {
        setError('Nieprawidłowy adres e-mail lub hasło.');
      } else {
        setError('Wystąpił błąd. Spróbuj ponownie później.');
      }
    }
  };

  return (
    <Container className="login-register-container">
      <Row className="justify-content-md-center">
        <Col md="auto">
          <h1>{isRegister ? 'Zarejestruj się' : 'Zaloguj się'}</h1>

          {error && <Alert variant="danger">{error}</Alert>}

          <Form onSubmit={handleSubmit}>
            {isRegister && (
              <>
                <Form.Group className="mb-3" controlId="formBasicName">
                  <Form.Control
                    type="text"
                    placeholder="Imię"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPhone">
                  <Form.Control
                    type="text"
                    placeholder="Numer telefonu"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                  />
                </Form.Group>
              </>
            )}
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control
                type="email"
                placeholder="Adres e-mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Control
                type="password"
                placeholder="Hasło"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              {isRegister ? 'Zarejestruj się' : 'Zaloguj się'}
            </Button>
          </Form>

          <div className="toggle-button" onClick={() => setIsRegister(!isRegister)}>
            {isRegister ? 'Masz już konto? Zaloguj się' : 'Nie masz konta? Zarejestruj się'}
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default LoginRegister;