import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import './PromotionsPage.css';

const promotions = [
  {
    title: "Promocja długoterminowa",
    description: "Gdy potrzebujesz auta na dłużej!",
    imgSrc: "/image/promo1.jpg",
    link: "#"
  },
  {
    title: "Promocja weekendowa",
    description: "Płacisz za 2 dni, jeździsz 3!",
    imgSrc: "/image/promo2.jpg",
    link: "#"
  },
  {
    title: "Promocja wakacyjna",
    description: "Jedź na urlop z CAR RENT!",
    imgSrc: "/image/promo3.jpg",
    link: "#"
  }
];

function PromotionsPage() {
  return (
    <Container className="promotions-page">
      <h1 className="my-5 text-center">Znajdź ofertę na miarę Twoich potrzeb!</h1>
      <Row>
        {promotions.map((promo, index) => (
          <Col md={4} key={index} className="mb-4">
            <Card>
              <Card.Img variant="top" src={promo.imgSrc} alt={promo.title} />
              <Card.Body>
                <Card.Title>{promo.title}</Card.Title>
                <Card.Text>{promo.description}</Card.Text>
                <Button variant="primary" href={promo.link} className="promo-button">Czytaj więcej</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default PromotionsPage;
