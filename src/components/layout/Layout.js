import React from 'react';
import { Container, Nav, Navbar, Button, Form, NavDropdown } from 'react-bootstrap';
import { Outlet, Link } from 'react-router-dom';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Footer from './Footer'; // Import stopki
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
                            <Nav.Link as={Link} to="/rezerwacja" className="d-block">Rezerwacja</Nav.Link>
                            <Nav.Link as={Link} to="/fleet" className="d-block">Flota</Nav.Link>
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
                        <Button as={Link} to="/logowanie" className="login-btn">Zaloguj się</Button>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            <Row className="justify-content-center my-4">
                <Button variant="info" size="lg" className="b-2 top-button">
                    ROZPOCZNIJ SWOJĄ REZERWACJĘ
                </Button>
            </Row>

            <div className="px-1">
                <Container fluid>
                    <Outlet />
                </Container>
            </div>

            <Footer /> 
        </div>
    );
}

export default Layout;
