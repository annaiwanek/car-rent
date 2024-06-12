import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../firebase/AuthContext';
import './LoginRegister.css';
import { Form, Button, Alert, Container, Row, Col } from 'react-bootstrap';

const LoginRegister = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isRegister, setIsRegister] = useState(false);
  const [error, setError] = useState('');
  const { login, register } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    try {
      if (isRegister) {
        await register(email, password);
      } else {
        await login(email, password);
      }
      navigate('/');
    } catch (error) {
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
        <Col md="auto"> {/* Automatycznie dopasowuje szerokość kolumny */}
          <h1>{isRegister ? 'Zarejestruj się' : 'Zaloguj się'}</h1>

          {error && <Alert variant="danger">{error}</Alert>}

          <Form onSubmit={handleSubmit}>
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
