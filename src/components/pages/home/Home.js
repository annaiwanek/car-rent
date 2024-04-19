import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import CarouselHome from '../../carousel/CarouselHome';
import './Home.css'; // Importujemy plik CSS dla Home
import OfferSection from './OfferSection'; // Importujemy komponent OfferSection z odpowiedniej ścieżki
import HowItWorks from './HowItWorks'; // Importujemy komponent HowItWorks z odpowiedniej ścieżki

function Home() {
    return (
        <Container fluid>
            {/* Sekcja ofertowa */}
            <OfferSection />

            {/* Formularz wyszukiwania samochodu */}
            <Row className="justify-content-center mt-4">
                <Col md={10}>
                    <Form className="d-flex flex-wrap justify-content-between align-items-center">
                        <Form.Group controlId="formCity" className="mr-2">
                            <Form.Label>Miasto odbioru:</Form.Label>
                            <Form.Control as="select">
                                <option>Warszawa</option>
                                <option>Kraków</option>
                                <option>Wrocław</option>
                                <option>Poznań</option>
                                <option>Gdańsk</option>
                            </Form.Control>
                        </Form.Group>

                        <Form.Group controlId="formPickupDate" className="mr-2">
                            <Form.Label>Data odbioru:</Form.Label>
                            <Form.Control type="date" />
                        </Form.Group>

                        <Form.Group controlId="formReturnDate" className="mr-2">
                            <Form.Label>Data zwrotu:</Form.Label>
                            <Form.Control type="date" />
                        </Form.Group>

                        <Button variant="primary" type="submit" className="search-car">
                            Wyszukaj samochód
                        </Button>
                    </Form>
                </Col>
            </Row>

            {/* Karuzela */}
            <Row className="justify-content-center mt-4">
                <Col>
                    <CarouselHome />
                </Col>
            </Row>

            {/* Sekcja "Jak to działa" */}
            <HowItWorks />
        </Container>
    );
}

export default Home;
