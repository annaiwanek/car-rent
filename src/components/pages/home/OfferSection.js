import React from 'react';
import { Container } from 'react-bootstrap';
import './Home.css';

function OfferSection() {
    return (
        <Container fluid>
             <div className="offer-section">
            <h5>
                <span>&#10003;</span>
                <span>Bezpłatne anulowanie rezerwacji</span>
            </h5>
            <h5>
                <span>&#10003;</span>
                <span>Ponad 35 oddziałów w całej Polsce</span>
            </h5>
            <h5>
                <span>&#10003;</span>
                <span>W ofercie ponad 3000 nowych aut</span>
            </h5>
        </div>

        </Container>
       
    );
}

export default OfferSection;