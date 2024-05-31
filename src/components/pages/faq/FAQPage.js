
import React from 'react';
import { Accordion, Container, Row, Col } from 'react-bootstrap';
import './FAQPage.css';

const FAQPage = () => {
  return (
    <Container fluid className="faq-page">
      <Row>
        <Col xs={12}>
          <h2 className="faq-title">Najczęściej zadawane pytania</h2>
        </Col>
      </Row>
      <Row>
        <Col xs={12}>
          <Accordion>
            <Accordion.Item eventKey="0">
              <Accordion.Header>Wynajem krótkoterminowy</Accordion.Header>
              <Accordion.Body>
                <p>Odpowiedzi na pytania dotyczące wynajmu krótkoterminowego.</p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>Wynajem długoterminowy</Accordion.Header>
              <Accordion.Body>
                <p>Odpowiedzi na pytania dotyczące wynajmu długoterminowego.</p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header>W drodze</Accordion.Header>
              <Accordion.Body>
                <p>Odpowiedzi na pytania dotyczące użytkowania samochodu podczas wynajmu.</p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3">
              <Accordion.Header>Reklamacje</Accordion.Header>
              <Accordion.Body>
                <p>Odpowiedzi na pytania dotyczące składania reklamacji.</p>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Col>
      </Row>
    </Container>
  );
};

export default FAQPage;
