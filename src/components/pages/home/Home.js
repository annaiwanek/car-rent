import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import CarouselHome from '../../carousel/CarouselHome';
import './Home.css'; 
import OfferSection from './OfferSection'; 
import HowItWorks from './HowItWorks'; 

function Home() {
    const navigate = useNavigate();

    const handleSearch = (event) => {
        event.preventDefault();
        navigate('/reservation');
    };

    return (
        <Container fluid>
            {/* Sekcja ofertowa */}
            <OfferSection />

            {/* Formularz wyszukiwania samochodu */}
            <Row className="justify-content-center mt-4">
                <Col md={10}>
                    <Form className="search-form d-flex flex-wrap justify-content-between align-items-center" onSubmit={handleSearch}>
                        <Form.Group controlId="formCity" className="mr-2">
                            <Form.Label>Miasto odbioru</Form.Label>
                            <Form.Control as="select" className="custom-select">
                                <option>Warszawa</option>
                                <option>Kraków</option>
                                <option>Wrocław</option>
                                <option>Poznań</option>
                                <option>Gdańsk</option>
                            </Form.Control>
                        </Form.Group>

                        <Form.Group controlId="formPickupDate" className="mr-2">
                            <Form.Label>Data odbioru</Form.Label>
                            <Form.Control type="date" className="custom-input" />
                        </Form.Group>

                        <Form.Group controlId="formReturnDate" className="mr-2">
                            <Form.Label>Data zwrotu</Form.Label>
                            <Form.Control type="date" className="custom-input" />
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
