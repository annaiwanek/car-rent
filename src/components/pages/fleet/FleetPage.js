import React, { useState } from 'react';
import { Container, Row, Col, Card, Button, Tabs, Tab } from 'react-bootstrap';
import './FleetPage.css';
import carsData from '../../../data/carsData'; // Import danych samochodów
import '../../../data/carsData.css'; // Import wspólnych stylów dla samochodów

function FleetPage() {
  const [key, setKey] = useState('Personal');

  const filteredCars = carsData.filter((car) => car.categories.includes(key));

  return (
    <Container fluid className="fleet-page">
      <h2 className="section-title">Nasza Flota</h2>
      <Tabs id="fleet-tabs" activeKey={key} onSelect={(k) => setKey(k)} className="mb-3">
        <Tab eventKey="Personal" title="Osobowy"></Tab>
        <Tab eventKey="SUV" title="SUV"></Tab>
        <Tab eventKey="Van" title="Van"></Tab>
        <Tab eventKey="Delivery" title="Dostawczy"></Tab>
      </Tabs>
      <Row>
        {filteredCars.map((car, index) => (
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
