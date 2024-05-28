import React from 'react';
import { Accordion, Container } from 'react-bootstrap';

const FAQPage = () => {
  return (
    <Container>
      <h2>Najczęściej zadawane pytania</h2>
      <Accordion>
        <Accordion.Item eventKey="0">
          <Accordion.Header>Wynajem krótkoterminowy</Accordion.Header>
          <Accordion.Body>
            <p>Odpowiedzi na pytania dotyczące wynajmu krótkoterminowego.</p>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>W drodze</Accordion.Header>
          <Accordion.Body>
            <p>Odpowiedzi na pytania dotyczące użytkowania samochodu podczas wynajmu.</p>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>Reklamacje</Accordion.Header>
          <Accordion.Body>
            <p>Odpowiedzi na pytania dotyczące składania reklamacji.</p>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3">
          <Accordion.Header>Wynajem średnioterminowy</Accordion.Header>
          <Accordion.Body>
            <p>Odpowiedzi na pytania dotyczące wynajmu średnioterminowego.</p>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </Container>
  );
};

export default FAQPage;
