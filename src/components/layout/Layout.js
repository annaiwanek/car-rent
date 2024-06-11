// src/components/layout/Layout.js
import React from 'react';
import { Container, Nav, Navbar, Button, Form, NavDropdown, Col } from 'react-bootstrap';
import { Outlet, Link } from 'react-router-dom';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Footer from './Footer'; 
import './Layout.css';

function Layout() {
    return (
        <div className="app">
            <Navbar expand="lg" className="bg-body-tertiary">
                <Container fluid>
                    <Navbar.Brand>
                        <Link to="/" className="d-block">
                            <Image src="image/carImage.jpg" className="logo" />
                        </Link>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
                            <Nav.Link as={Link} to="/" className="d-block">Home</Nav.Link>
                            <Nav.Link as={Link} to="/offer" className="d-block">Oferta</Nav.Link>
                            <Nav.Link as={Link} to="/promotions" className="d-block">Promocje</Nav.Link>
                            <Nav.Link as={Link} to="/reservation" className="d-block">Rezerwacja</Nav.Link>
                            <Nav.Link as={Link} to="/fleet" className="d-block">Flota</Nav.Link>
                            <Nav.Link as={Link} to="/faq">FAQ</Nav.Link>
                            <Nav.Link as={Link} to="/contact" className="d-block">Kontakt</Nav.Link> 
                            <NavDropdown title="Oddziały" id="navbarScrollingDropdown">
                                <NavDropdown.Item as={Link} to="/warszawa" className="d-block">Warszawa</NavDropdown.Item>
                                <NavDropdown.Item as={Link} to="/krakow" className="d-block">Kraków</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                        <Form className="d-flex mx-5">
                            <Form.Control
                                type="search"
                                placeholder="Szukaj"
                                className="me-2"
                                aria-label="Szukaj"
                            />
                            <Button variant="outline-success" className="search-btn">Szukaj</Button>
                        </Form>
                        <Button as={Link} to="/login" className="login-btn">Zaloguj</Button> {/* Zmieniony link */}
                        <Button as={Link} to="/register" className="register-btn">Zarejestruj</Button> {/* Dodany link */}
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            <Container fluid>
                <Row className="justify-content-center my-4">
                    <Button as={Link} to="/reservation" variant="info" size="lg" className="b-2 top-button">
                        ROZPOCZNIJ SWOJĄ REZERWACJĘ
                    </Button>
                </Row>

                <Row>
                    <Col>
                        <Outlet />
                    </Col>
                </Row>
            </Container>

            <Footer /> 
        </div>
    );
}

export default Layout;
