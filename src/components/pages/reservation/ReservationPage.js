import React from 'react';
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';
import carsData from '../../../data/carsData'; // Import danych samochodów
import './ReservationPage.css';

function ReservationPage() {
  return (
    <Container className="reservation-page">
      <Row>
        <Col md={3}>
          <Form className="filter-form reservation-form">
            <h5 className="section-title">Szczegóły rezerwacji</h5>
            <Form.Group controlId="formLocation" className="mb-4">
              <Form.Control as="select" className="custom-select">
                <option>Wybierz miasto lub lotnisko</option>
                <option>Warszawa, Łużycka 26E</option>
                <option>Kraków, Rynek 10</option>
              </Form.Control>
            </Form.Group>
            <Form.Check 
              type="checkbox" 
              label="Zwróć samochód w innej lokalizacji" 
              className="mb-4 form-check" 
              style={{ marginLeft: '5px' }}
            />
            <Form.Group controlId="formPickupDate" className="mb-4">
              <Form.Label>Data odbioru</Form.Label>
              <div className="date-time-picker">
                <Form.Control type="date" className="date-picker" />
                <Form.Control type="time" className="time-picker" />
              </div>
            </Form.Group>
            <Form.Group controlId="formReturnDate" className="mb-4">
              <Form.Label>Data zwrotu</Form.Label>
              <div className="date-time-picker">
                <Form.Control type="date" className="date-picker" />
                <Form.Control type="time" className="time-picker" />
              </div>
            </Form.Group>
            <Form.Check 
              type="checkbox" 
              label="Wiek kierowcy poniżej 21 lat" 
              className="mb-4 form-check" 
            />
            <Button variant="primary" type="submit" className="search-car">Wyszukaj samochód</Button>
          </Form>
          <Form className="filter-form filters mt-5">
            <h5 className="section-title">Filtry</h5>
            <Form.Group controlId="formType" className="mb-4">
              <Form.Label>Typ pojazdu</Form.Label>
              <Form.Check type="checkbox" label="Pokaż wszystko" className="form-check" />
              <Form.Check type="checkbox" label="Limuzyny" className="form-check" />
              <Form.Check type="checkbox" label="Kombi" className="form-check" />
              <Form.Check type="checkbox" label="SUV" className="form-check" />
              <Form.Check type="checkbox" label="Minibusy" className="form-check" />
              <Form.Check type="checkbox" label="Coupe / Sportowe" className="form-check" />
            </Form.Group>
            <Form.Group controlId="formTransmission" className="mb-4">
              <Form.Label>Skrzynia biegów</Form.Label>
              <Form.Check type="checkbox" label="Ręczna" className="form-check" />
              <Form.Check type="checkbox" label="Automatyczna" className="form-check" />
            </Form.Group>
            <Form.Group controlId="formPrice" className="mb-4">
              <Form.Label>Cena</Form.Label>
              <Form.Check type="checkbox" label="Rosnąco" className="form-check" />
              <Form.Check type="checkbox" label="Malejąco" className="form-check" />
            </Form.Group>
          </Form>
        </Col>
        <Col md={9}>
          {carsData.map((car, index) => (
            <Card key={index} className="mb-4 car-card">
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
          ))}
        </Col>
      </Row>
    </Container>
  );
}

export default ReservationPage;