import React, { useState } from 'react';
import { Container, Form, Button, Row, Col } from 'react-bootstrap';
import './ContactPage.css';

function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Dodanie logikę wysyłania formularza
    console.log('Form Data:', formData);
  };

  return (
    <Container className="contact-page">
      <h1 className="my-3">Kontakt</h1> {/* Zmniejszenie marginesu górnego */}
      
      {/* Sekcja informacji kontaktowych */}
      <Row className="contact-info mb-3">
        <Col xs={12} md={6}>
          <h3>Centrala</h3>
          <p>
            <strong>Dane firmy</strong><br />
            CAR RENT Polska Sp. z o.o.<br />
            00-123 Warszawa, ul. Przykładowa 1<br />
            NIP: 1234567890, REGON: 9876543210, KRS: 0123456789<br />
            Sąd Rejonowy w Warszawie<br />
            Kapitał zakładowy: 100 000 PLN opłacony w całości.
          </p>
          <p className="address-section">
            <strong>Adres do korespondencji</strong><br />
            ul. Przykładowa 1, 00-123 Warszawa<br />
            e-mail: kontakt@carrent.pl
          </p>
        </Col>
        <Col xs={12} md={6}>
          <h3>Dział Obsługi Klienta</h3>
          <p>
            telefon: +48 123 456 789<br />
            e-mail: kontakt@carrent.pl
          </p>
          <h3>Rozliczenia wynajmów i zwrot depozytu</h3>
          <p>
            telefon: +48 123 456 789<br />
            e-mail: ksiegowosc@carrent.pl
          </p>
          <h3>Rezerwacje średnioterminowe</h3>
          <p>
            telefon: +48 987 654 321<br />
            e-mail: handlowy@carrent.pl
          </p>
          <h3>Dział reklamacji</h3>
          <p>
            e-mail: reklamacje@carrent.pl
          </p>
          <h3>Dział marketingu</h3>
          <p>
            e-mail: marketing@carrent.pl
          </p>
        </Col>
      </Row>

      <h2 className="mt-5 mb-4 text-center">Wyślij wiadomość</h2> {/* Dodanie większego marginesu górnego */}

      <Form onSubmit={handleSubmit}>
        <Row>
          <Col xs={12} md={6} className="mb-3">
            <Form.Group controlId="formName">
              <Form.Label>Imię i nazwisko</Form.Label>
              <Form.Control 
                type="text" 
                name="name" 
                value={formData.name} 
                onChange={handleChange} 
                required 
              />
            </Form.Group>
          </Col>
          <Col xs={12} md={6} className="mb-3">
            <Form.Group controlId="formEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control 
                type="email" 
                name="email" 
                value={formData.email} 
                onChange={handleChange} 
                required 
              />
            </Form.Group>
          </Col>
        </Row>
        <Form.Group controlId="formMessage" className="mt-3">
          <Form.Label>Wiadomość</Form.Label>
          <Form.Control 
            as="textarea" 
            rows={5} 
            name="message" 
            value={formData.message} 
            onChange={handleChange} 
            required 
          />
        </Form.Group>
        <Button variant="primary" type="submit" className="promo-button mt-3">Wyślij</Button>
        <div className="contact-footer-space"></div>
      </Form>
    </Container>
  );
}

export default ContactPage;
