import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import './OfferPage.css'; // Dodanie stylów specyficznych dla tej podstrony

const offers = [
  {
    title: "Samochody Osobowe",
    description: "Wynajmij nowoczesne i ekonomiczne samochody osobowe.",
    imgSrc: "/image/skodaOctavia.webp",
    width: 600,
    height: 400
  },
  {
    title: "Samochody Dostawcze",
    description: "Idealne do przewozu towarów w mieście i na długie trasy.",
    imgSrc: "/image/c5.webp",
    width: 600,
    height: 400
  },
  {
    title: "Samochody Luksusowe",
    description: "Ciesz się komfortem i luksusem podczas jazdy.",
    imgSrc: "/image/c6.webp",
    width: 600,
    height: 400
  }
];

function Offer() {
  return (
    <Container className="offer-page">
      <h1 className="my-5 text-center">Nasza Oferta</h1>
      <Row>
        {offers.map((offer, index) => (
          <Col md={4} key={index} className="mb-4">
            <Card>
              <Card.Img 
                variant="top" 
                src={offer.imgSrc} 
                alt={offer.title} 
                loading="lazy" 
                width={offer.width}
                height={offer.height} 
              />
              <Card.Body>
                <Card.Title>{offer.title}</Card.Title>
                <Card.Text>{offer.description}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Offer;
