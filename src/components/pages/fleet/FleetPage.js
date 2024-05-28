import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import './FleetPage.css';

const cars = [
  {
    title: "Citroen C3",
    description: "Samochody nowe, maksymalnie roczne",
    imgSrc: "/image/c1.jpg",
    price: "84 PLN",
    features: ["Bezpłatne odwołanie rezerwacji", "Bez limitu km"],
    specs: {
      passengers: 5,
      transmission: "Manual",
      fuel: "5.5 l/100 km",
      trunk: 305,
    },
    link: "#"
  },
  {
    title: "Hyundai i30",
    description: "Samochody nowe, maksymalnie roczne",
    imgSrc: "/image/c2.jpg",
    price: "104 PLN",
    features: ["Bezpłatne odwołanie rezerwacji", "Bez limitu km"],
    specs: {
      passengers: 5,
      transmission: "Automatic",
      fuel: "5.2 l/100 km",
      trunk: 395,
    },
    link: "#"
  },
  {
    title: "Skoda Octavia",
    description: "Samochody nowe, maksymalnie roczne",
    imgSrc: "/image/c3.jpg",
    price: "114 PLN",
    features: ["Bezpłatne odwołanie rezerwacji", "Bez limitu km"],
    specs: {
      passengers: 5,
      transmission: "Automatic",
      fuel: "6.1 l/100 km",
      trunk: 610,
    },
    link: "#"
  }
];

function FleetPage() {
  return (
    <Container className="fleet-page">
      <h2 className="section-title">Nasza Flota</h2>
      <Row>
        {cars.map((car, index) => (
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

export default FleetPage;
