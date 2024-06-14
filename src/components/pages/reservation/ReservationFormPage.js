import React from 'react';
import { Container, Row, Col, Card, Button, Form } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';
import carsData from '../../../data/carsData';
import './ReservationFormPage.css';

function ReservationFormPage() {
  const location = useLocation();
  const car = location.state ? location.state.car : carsData[0]; // Fallback to first car if no state is passed
  const selectedOption = location.state ? location.state.selectedOption : 'standard';

  return (
    <Container className="reservation-form-page">
      <h2 className="section-title">Twoje dane i płatność</h2>
      <Row>
        <Col md={8}>
          <Form className="reservation-form">
            <Form.Group controlId="formPersonType">
              <Form.Label>Osoba prywatna</Form.Label>
              <Form.Control as="select">
                <option>Osoba prywatna</option>
                <option>Firma</option>
              </Form.Control>
            </Form.Group>
            <Form.Group controlId="formFirstName">
              <Form.Label>Imię</Form.Label>
              <Form.Control type="text" placeholder="Wprowadź imię" />
            </Form.Group>
            <Form.Group controlId="formLastName">
              <Form.Label>Nazwisko</Form.Label>
              <Form.Control type="text" placeholder="Wprowadź nazwisko" />
            </Form.Group>
            <Form.Group controlId="formCountry">
              <Form.Label>Kraj</Form.Label>
              <Form.Control as="select">
                <option>Polska</option>
                <option>Niemcy</option>
                <option>Czechy</option>
                <option>Słowacja</option>
              </Form.Control>
            </Form.Group>
            <Form.Group controlId="formCity">
              <Form.Label>Miasto</Form.Label>
              <Form.Control type="text" placeholder="Wprowadź miasto" />
            </Form.Group>
            <Form.Group controlId="formAddress">
              <Form.Label>Ulica</Form.Label>
              <Form.Control type="text" placeholder="Wprowadź ulicę" />
            </Form.Group>
            <Form.Group controlId="formPostalCode">
              <Form.Label>Kod pocztowy</Form.Label>
              <Form.Control type="text" placeholder="Wprowadź kod pocztowy" />
            </Form.Group>
            <Form.Group controlId="formDrivingLicense">
              <Form.Label>Numer prawa jazdy</Form.Label>
              <Form.Control type="text" placeholder="Wprowadź numer prawa jazdy" />
            </Form.Group>
            <Form.Group controlId="formEmail">
              <Form.Label>Adres email</Form.Label>
              <Form.Control type="email" placeholder="Wprowadź adres email" />
            </Form.Group>
            <Form.Group controlId="formPhone">
              <Form.Label>Numer telefonu</Form.Label>
              <Form.Control type="text" placeholder="Wprowadź numer telefonu" />
            </Form.Group>
            <Form.Group controlId="formDiscountCode">
              <Form.Label>Kod rabatowy</Form.Label>
              <Form.Control type="text" placeholder="Wprowadź kod rabatowy" />
            </Form.Group>
          </Form>
        </Col>
        <Col md={4}>
          <Card className="reservation-summary">
            <h5>Podsumowanie rezerwacji</h5>
            <p>Samochód: <strong>{car.title}</strong></p>
            <p>Pakiet: <strong>{selectedOption}</strong></p>
            <p>Data odbioru: <strong>17.06.2024 10:30</strong></p>
            <p>Miejsce odbioru: <strong>Oddział Warszawa Łużycka 26E</strong></p>
            <p>Data zwrotu: <strong>18.06.2024 10:30</strong></p>
            <p>Miejsce zwrotu: <strong>Oddział Warszawa Łużycka 26E</strong></p>
          </Card>
          <Card className="additional-info">
            <h5>Administrator danych osobowych</h5>
            <p>Administratorem danych osobowych Najemcy jest CAR RENT Polska Sp. z o.o. z siedzibą w Kaliszu („Administrator”). Administrator przetwarza dane osobowe Najemcy w celu:</p>
            <ul>
              <li>zawarcia i obsługi umowy rezerwacyjnej,</li>
              <li>świadczenia usług wynajmu pojazdów i zawarcia umowy najmu poprzez podanie danych niezbędnych do obsługi pojazdu na etapie jego rezerwacji (np. zasięgiem umowy rezerwacyjnej) – tylko w przypadku, gdy Użytkownik dobrowolnie podał dane osobowe, których podanie nie jest obowiązkowe,</li>
              <li>prowadzenia komunikacji w sprawach związanych z zawarciem i wykonaniem umowy rezerwacyjnej,</li>
              <li>obsługi płatności elektronicznych,</li>
              <li>rozpatrywania ewentualnych reklamacji,</li>
              <li>realizacji obowiązków ciążących na Administratorze wynikających z bezwzględnie obowiązujących przepisów prawa, w tym np. prawa podatkowego,</li>
              <li>analiz statystycznych.</li>
            </ul>
            <Form.Check type="checkbox" label="Zaznacz wszystkie zgody" />
            <Form.Check type="checkbox" label="Akceptuję regulamin – Ogólne Warunki Najmu Pojazdu" />
            <Form.Check type="checkbox" label="Chcę otrzymywać newsletter, czyli informacje o nowościach, promocjach, produktach lub usługach CAR RENT" />
          </Card>
        </Col>
      </Row>
      <Button variant="primary" className="confirm-button">
        Rezerwuję i płacę
      </Button>
    </Container>
  );
}

export default ReservationFormPage;
