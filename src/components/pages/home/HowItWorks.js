import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './HowItWorks.css';

function HowItWorks() {
    return (
        <section className="how-it-works">
            <Container>
                <Row className="justify-content-center">
                    <Col md={8} className="text-center">
                        <h2>Jak to działa?</h2>
                        <p>Przekonaj się, jak łatwo i szybko możesz skorzystać z naszych usług!</p>
                    </Col>
                </Row>
                <Row className="step-row">
                    <Col md={4} className="text-center">
                        <div className="step">
                            <h3>Krok 1</h3>
                            <p>Wybierz miasto i daty: odbioru oraz zwrotu samochodu.</p>
                        </div>
                    </Col>
                    <Col md={4} className="text-center">
                        <div className="step">
                            <h3>Krok 2</h3>
                            <p>Wybierz interesujący Cię samochód z naszej bogatej oferty.</p>
                        </div>
                    </Col>
                    <Col md={4} className="text-center">
                        <div className="step">
                            <h3>Krok 3</h3>
                            <p>Zarezerwuj samochód online lub skontaktuj się z nami telefonicznie.</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default HowItWorks;