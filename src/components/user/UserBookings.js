import React from 'react';
import { Card } from 'react-bootstrap';

function UserBookings() {
    return (
        <Card className="user-bookings">
            <Card.Body>
                <Card.Title>Bieżące rezerwacje</Card.Title>
                <Card.Text>Brak rezerwacji</Card.Text>
            </Card.Body>
        </Card>
    );
}

export default UserBookings;
