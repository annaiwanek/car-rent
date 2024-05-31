import React from 'react';
import { Carousel, Container, Row, Col } from 'react-bootstrap';
import './CarouselHome.css'; 

const CarouselHome = () => {
  return (
    <Container fluid className="carousel-container">
      <Row>
        <Col md={12} sm={12} xs={12}> 
          <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100 carousel-image" // Dodanie klasy carousel-image
                src="/image/c1.jpg"
                alt="First slide"
              />
              <Carousel.Caption>
                <h1>Odbierz auto jeszcze szybciej!</h1>
                <p>Tutaj możesz dodać opis pierwszego slajdu.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100 carousel-image" 
                src="/image/c2.jpg"
                alt="Second slide"
              />
              <Carousel.Caption>
                <h1>Przedłuż swój weekend!</h1>
                <p>Tutaj możesz dodać opis drugiego slajdu.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100 carousel-image" 
                src="/image/c3.jpg"
                alt="Third slide"
              />
              <Carousel.Caption>
                <h1>Zatrzymaj auto na dłużej</h1>
                <p>Tutaj możesz dodać opis trzeciego slajdu.</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Col>
      </Row>
    </Container>
  );
}

export default CarouselHome;
