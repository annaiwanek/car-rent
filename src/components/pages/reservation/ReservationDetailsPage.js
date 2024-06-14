import React, { useState } from 'react';
import { Container, Row, Col, Card, Button, Form } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';
import carsData from '../../../data/carsData';
import './ReservationDetailsPage.css';

function ReservationDetailsPage() {
  const location = useLocation();
  const car = location.state ? location.state.car : carsData[0]; // Fallback to first car if no state is passed
  const [selectedOption, setSelectedOption] = useState('standard');
  const [showAdditionalOptions, setShowAdditionalOptions] = useState(false); // Zmienna stanu

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  };

  return (
    <Container className="reservation-details-page">
      <h2 className="section-title">Szczegóły rezerwacji</h2>
      <Row>
        <Col md={4}>
          <Card className="car-card">
            <Card.Img variant="top" src={car.imgSrc} alt={car.title} />
            <Card.Body>
              <Card.Title>{car.title}</Card.Title>
              <Card.Text>{car.description}</Card.Text>
              <ul className="car-features">
                {car.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
              <p className="car-price">Cena: {car.price} za 1 dzień</p>
            </Card.Body>
          </Card>
        </Col>
        <Col md={8}>
          <Card className="reservation-summary">
            <h5>Podsumowanie rezerwacji:</h5>
            <p>Data i godzina odbioru: <strong>17.06.2024 10:30</strong></p>
            <p>Miejsce odbioru: <strong>Oddział Warszawa Łużycka 26E</strong></p>
            <p>Data i godzina zwrotu: <strong>18.06.2024 10:30</strong></p>
            <p>Miejsce zwrotu: <strong>Oddział Warszawa Łużycka 26E</strong></p>
          </Card>
          <Card className="car-info">
            <h5>Informacje o samochodzie:</h5>
            <p><strong>Marka:</strong> {car.specs.brand}</p>
            <p><strong>Model:</strong> {car.specs.model}</p>
            <p><strong>Rok produkcji:</strong> {car.specs.year}</p>
            <p><strong>Pojemność silnika:</strong> {car.specs.engineSize}</p>
            <p><strong>Spalanie:</strong> {car.specs.consumption} l/100km</p>
          </Card>
        </Col>
      </Row>
      <div className="services-section">
        <Card className="additional-services">
          <h5>Wybierz pakiet ochronny</h5>
          <Row>
            <Col md={3} className={`service-option ${selectedOption === 'standard' ? 'selected' : ''}`}>
              <Form.Check
                type="radio"
                name="insurance"
                value="standard"
                label={<strong>Pakiet zniesienia odpowiedzialności STANDARD W CENIE</strong>}
                checked={selectedOption === 'standard'}
                onChange={handleOptionChange}
              />
              <p>✔ Podstawowe ubezpieczenie OC, AC i NW gwarantujące bezpieczne użytkowanie pojazdu.</p>
              <p className="service-price">Cena: W CENIE</p>
            </Col>
            <Col md={3} className={`service-option ${selectedOption === 'gold' ? 'selected' : ''}`}>
              <Form.Check
                type="radio"
                name="insurance"
                value="gold"
                label={<strong>Pakiet zniesienia odpowiedzialności GOLD +39 PLN</strong>}
                checked={selectedOption === 'gold'}
                onChange={handleOptionChange}
              />
              <p>✔ Opcja ubezpieczenie w wersji Gold gwarantuje zniesienie udziału własnego w szkodach AC do 0 zł.</p>
              <p className="service-price">Cena: +39 PLN</p>
            </Col>
            <Col md={3} className={`service-option ${selectedOption === 'gold-eu' ? 'selected' : ''}`}>
              <Form.Check
                type="radio"
                name="insurance"
                value="gold-eu"
                label={<strong>Pakiet zniesienia odpowiedzialności GOLD EU +89 PLN</strong>}
                checked={selectedOption === 'gold-eu'}
                onChange={handleOptionChange}
              />
              <p>✔ Opcja ubezpieczenie w wersji Gold EU gwarantuje zniesienie udziału własnego w szkodach AC do 0 zł.</p>
              <p className="service-price">Cena: +89 PLN</p>
            </Col>
            <Col md={3} className={`service-option ${selectedOption === 'abroad' ? 'selected' : ''}`}>
              <Form.Check
                type="radio"
                name="insurance"
                value="abroad"
                label={<strong>Wyjazd za granicę w strefie 1 +149 PLN</strong>}
                checked={selectedOption === 'abroad'}
                onChange={handleOptionChange}
              />
              <p>✔ Opcja wyjazdu za granicę w strefie 1.</p>
              <p className="service-price">Cena: +149 PLN</p>
            </Col>
          </Row>
        </Card>
        <Card className="additional-services">
          <h5>Wybierz dodatkowe opcje</h5>
          <Button
            className="toggle-additional-options"
            onClick={() => setShowAdditionalOptions(!showAdditionalOptions)}
          >
            Dodatkowe opcje <span>{showAdditionalOptions ? '▲' : '▼'}</span>
          </Button>
          {showAdditionalOptions && (
            <Form className="additional-options-form">
              <div className="form-check-wrapper">
                <Form.Check
                  type="checkbox"
                  label="Końcowe mycie pojazdu za 39 PLN"
                  className="form-check-item"
                />
              </div>
            </Form>
          )}
        </Card>
      </div>
      <Button variant="primary" className="proceed-button">
        Dalej
      </Button>
    </Container>
  );
}

export default ReservationDetailsPage;
