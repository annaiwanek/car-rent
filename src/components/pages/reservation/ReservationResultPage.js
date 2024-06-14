import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import carsData from '../../../data/carsData'; // Import danych samochodów
import './ReservationResultPage.css';

function ReservationResultPage() {
  return (
    <Container fluid className="reservation-result-page">
      <h2 className="section-title">Dostępne samochody</h2>
      <Row>
        {carsData.map((car, index) => (
          <Col md={4} sm={6} xs={12} key={index}>
            <Card className="car-card">
              <Card.Img variant="top" src={car.imgSrc} alt={car.title} />
              <Card.Body>
                <Card.Title>{car.title}</Card.Title>
                <Card.Text>{car.description}</Card.Text>
                <ul className="car-features">
                  {car.features.map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>
                <p className="car-price">Cena: {car.price} za 1 dzień</p>
                <Button variant="primary" href={car.link} className="promo-button">Zarezerwuj teraz</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default ReservationResultPage;