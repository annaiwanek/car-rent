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
    // Dodaj logikę wysyłania formularza
    console.log('Form Data:', formData);
  };

  return (
    <Container className="contact-page">
      <h1 className="my-5 text-center">Kontakt</h1>
      <Form onSubmit={handleSubmit}>
        <Row>
          <Col md={6}>
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
          <Col md={6}>
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
