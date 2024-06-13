import React from 'react';
import { Container, Nav, Navbar, Button, Form, Tooltip, OverlayTrigger, Row, Col } from 'react-bootstrap';
import { Outlet, Link, useNavigate } from 'react-router-dom';
import Image from 'react-bootstrap/Image';
import Footer from './Footer';
import './Layout.css';
import { FaSearch, FaRegUser  } from 'react-icons/fa'; // Import nowej ikony
import { FiLogIn, FiLogOut } from 'react-icons/fi'; // Import nowej ikony
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

  return (
    <div className="app">
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container fluid>
          <Navbar.Brand as={Link} to="/">
            <Image src="/image/carImage.jpg" className="logo" alt="Logo" /> 
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
              <Nav.Link as={Link} to="/">Home</Nav.Link>
              <Nav.Link as={Link} to="/offer">Oferta</Nav.Link>
              <Nav.Link as={Link} to="/promotions">Promocje</Nav.Link>
              <Nav.Link as={Link} to="/reservation">Rezerwacja</Nav.Link>
              <Nav.Link as={Link} to="/fleet">Flota</Nav.Link>
              <Nav.Link as={Link} to="/faq">FAQ</Nav.Link>
              <Nav.Link as={Link} to="/contact">Kontakt</Nav.Link>
            </Nav>

            <Form className="d-flex mx-5">
              <Form.Control type="search" placeholder="Szukaj" className="me-2" aria-label="Szukaj" />
              <Button variant="outline-success" className="search-btn">
                <FaSearch />
              </Button>
            </Form>

            <Nav> 
              {currentUser && (
                <OverlayTrigger
                  placement="bottom"
                  delay={{ show: 250, hide: 400 }}
                  overlay={<Tooltip id="account-tooltip">Moje konto</Tooltip>}
                >
                  <Button as={Link} to="/account" className="nav-icons">
                   <FaRegUser/> {/* Użycie nowej ikony */}
                  </Button>
                </OverlayTrigger>
              )}

              <OverlayTrigger
                placement="bottom"
                delay={{ show: 250, hide: 400 }}
                overlay={
                  <Tooltip id="button-tooltip">
                    {currentUser ? 'Wyloguj' : 'Zaloguj'}
                  </Tooltip>
                }
              >
                {!currentUser ? (
                  <Button as={Link} to="/login" className="nav-icons">
                    <FiLogIn /> {/* Użycie nowej ikony */}
                  </Button>
                ) : (
                  <section>
                  <Button onClick={handleLogout} className="nav-icons">
                    <FiLogOut /> {/* Użycie nowej ikony */}
                  </Button>
                  </section>
                  
                )}
              </OverlayTrigger>
            </Nav>
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
