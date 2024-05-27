import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Footer.css'; 


function Footer() {
    return (
        <footer className="footer">
            <Container>
                <Row>
                    <Col md={4}>
                        <h5>Informacje</h5>
                        <ul>
                            <li>O nas</li>
                            <li>Regulamin</li>
                            <li>Polityka prywatności</li>
                        </ul>
                    </Col>
                    <Col md={4}>
                        <h5>Kontakt</h5>
                        <ul>
                            <li>Telefon: 123-456-789</li>
                            <li>Email: info@car.net</li>
                            <li>Adres: ul. Przykładowa 123, 00-000 Warszawa</li>
                        </ul>
                    </Col>
                    <Col md={4}>
                        <h5>Wsparcie</h5>
                        <ul>
                            <li>FAQ</li>
                            <li>Centrum pomocy</li>
                        </ul>
                    </Col>
                </Row>
                <Row>
                    <Col md={12}>
                        <p className="text-center">© 2024 Car.net. Wszelkie prawa zastrzeżone.</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
}

export default Footer;
