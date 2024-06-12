import React from 'react';
import { Container, Nav, Navbar, Button, Form, NavDropdown, Col, Tooltip, OverlayTrigger } from 'react-bootstrap';
import { Outlet, Link, useNavigate } from 'react-router-dom';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Footer from './Footer'; 
import './Layout.css';
import { FaUser, FaSignOutAlt, FaSearch } from 'react-icons/fa';
import { useAuth } from '../firebase/AuthContext';

function Layout() {
    const { currentUser, logout } = useAuth();
    const navigate = useNavigate();

    const handleLogout = async () => {
        try {
            await logout();
            navigate('/login');
        } catch (error) {
            console.error("Error logging out: ", error);
        }
    };

    const renderTooltip = (props) => (
        <Tooltip id="button-tooltip" {...props}>
            Zaloguj
        </Tooltip>
    );

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
                            <Button variant="outline-success" className="search-btn">
                                <FaSearch />
                            </Button>
                        </Form>
                        <OverlayTrigger
                            placement="bottom"
                            delay={{ show: 250, hide: 400 }}
                            overlay={renderTooltip}
                        >
                            {!currentUser ? (
                                <Button as={Link} to="/login" className="login-icon">
                                    <FaUser />
                                </Button>
                            ) : (
                                <Button onClick={handleLogout} className="logout-icon">
                                    <FaSignOutAlt />
                                </Button>
                            )}
                        </OverlayTrigger>
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
