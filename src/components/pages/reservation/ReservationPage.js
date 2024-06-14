import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';
import carsData from '../../../data/carsData'; // Import danych samochodów
import './ReservationPage.css';

function ReservationPage() {
  const [filters, setFilters] = useState({
    type: [],
    transmission: [],
    price: '',
    returnLocation: false,
    ageBelow21: false,
  });

  const navigate = useNavigate();

  const handleFilterChange = (e) => {
    const { name, value, checked, type } = e.target;

    if (type === 'checkbox') {
      if (name === 'returnLocation' || name === 'ageBelow21') {
        setFilters((prevFilters) => ({
          ...prevFilters,
          [name]: checked,
        }));
      } else {
        setFilters((prevFilters) => {
          if (value === 'all' && checked) {
            return {
              ...prevFilters,
              type: [],
            };
          }

          if (checked) {
            return {
              ...prevFilters,
              [name]: [...(prevFilters[name] || []), value],
            };
          } else {
            return {
              ...prevFilters,
              [name]: (prevFilters[name] || []).filter((item) => item !== value),
            };
          }
        });
      }
    } else if (type === 'radio') {
      setFilters((prevFilters) => ({
        ...prevFilters,
        [name]: value,
      }));
    } else {
      setFilters((prevFilters) => ({
        ...prevFilters,
        [name]: value,
      }));
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    navigate('/reservation-result');
  };

  const filteredCars = carsData
    .filter((car) => {
      const filterByType = filters.type.length === 0 || filters.type.some((type) => car.categories.includes(type));
      const filterByTransmission = filters.transmission.length === 0 || filters.transmission.includes(car.specs?.transmission?.toLowerCase());
      return filterByType && filterByTransmission;
    })
    .sort((a, b) => {
      if (filters.price === 'ascending') {
        return parseFloat(a.price) - parseFloat(b.price);
      } else if (filters.price === 'descending') {
        return parseFloat(b.price) - parseFloat(a.price);
      } else {
        return 0;
      }
    });

  return (
    <Container fluid className="reservation-page">
      <Row>
        <Col md={3} sm={12} xs={12}>
          <Form className="filter-form reservation-form" onSubmit={handleSearch}>
            <h5 className="section-title">Szczegóły rezerwacji</h5>
            <Form.Group controlId="formLocation" className="mb-4">
              <Form.Control as="select" className="custom-select">
                <option>Wybierz miasto lub lotnisko</option>
                <option>Warszawa, Łużycka 26E</option>
                <option>Kraków, Rynek 10</option>
              </Form.Control>
            </Form.Group>
            <Form.Check 
              type="checkbox" 
              label="Zwróć samochód w innej lokalizacji" 
              className="mb-4 form-check" 
              style={{ marginLeft: '5px' }}
              checked={filters.returnLocation}
              onChange={handleFilterChange}
              name="returnLocation"
            />
            {filters.returnLocation && (
              <Form.Group controlId="formReturnLocation" className="mb-4">
                <Form.Control as="select" className="custom-select">
                  <option>Wybierz miasto lub lotnisko</option>
                  <option>Warszawa, Łużycka 26E</option>
                  <option>Kraków, Rynek 10</option>
                </Form.Control>
              </Form.Group>
            )}
            <Form.Group controlId="formPickupDate" className="mb-4">
              <Form.Label>Data odbioru</Form.Label>
              <div className="date-time-picker">
                <Form.Control type="date" className="date-picker" />
                <Form.Control type="time" className="time-picker" />
              </div>
            </Form.Group>
            <Form.Group controlId="formReturnDate" className="mb-4">
              <Form.Label>Data zwrotu</Form.Label>
              <div className="date-time-picker">
                <Form.Control type="date" className="date-picker" />
                <Form.Control type="time" className="time-picker" />
              </div>
            </Form.Group>
            <Form.Check 
              type="checkbox" 
              label="Wiek kierowcy poniżej 21 lat" 
              className="mb-4 form-check" 
              checked={filters.ageBelow21}
              onChange={handleFilterChange}
              name="ageBelow21"
            />
            {filters.ageBelow21 && (
              <Form.Group controlId="formDriverAge" className="mb-4">
                <Form.Control as="select" className="custom-select">
                  <option>Wskaż wiek kierowcy</option>
                  <option>18</option>
                  <option>19</option>
                  <option>20</option>
                </Form.Control>
              </Form.Group>
            )}
            <Button variant="primary" type="submit" className="search-car">Wyszukaj samochód</Button>
          </Form>
          <Form className="filter-form filters mt-5">
            <h5 className="section-title">Filtry</h5>
            <Form.Group controlId="formType" className="mb-4">
              <Form.Label>Typ pojazdu</Form.Label>
              <Form.Check type="checkbox" label="Pokaż wszystko" value="all" name="type" onChange={handleFilterChange} className="form-check" />
              <Form.Check type="checkbox" label="Osobowe" value="Personal" name="type" onChange={handleFilterChange} className="form-check" />
              <Form.Check type="checkbox" label="Kombi" value="Combi" name="type" onChange={handleFilterChange} className="form-check" />
              <Form.Check type="checkbox" label="SUV" value="SUV" name="type" onChange={handleFilterChange} className="form-check" />
              <Form.Check type="checkbox" label="Minibusy" value="Van" name="type" onChange={handleFilterChange} className="form-check" />
              <Form.Check type="checkbox" label="Coupe / Sportowe" value="Sport" name="type" onChange={handleFilterChange} className="form-check" />
            </Form.Group>
            <Form.Group controlId="formTransmission" className="mb-4">
              <Form.Label>Skrzynia biegów</Form.Label>
              <Form.Check type="checkbox" label="Ręczna" value="manual" name="transmission" onChange={handleFilterChange} className="form-check" />
              <Form.Check type="checkbox" label="Automatyczna" value="automatic" name="transmission" onChange={handleFilterChange} className="form-check" />
            </Form.Group>
            <Form.Group controlId="formPrice" className="mb-4">
              <Form.Label>Cena</Form.Label>
              <Form.Check type="radio" label="Rosnąco" value="ascending" name="price" onChange={handleFilterChange} className="form-radio" />
              <Form.Check type="radio" label="Malejąco" value="descending" name="price" onChange={handleFilterChange} className="form-radio" />
            </Form.Group>
          </Form>
        </Col>
        <Col md={9} sm={12} xs={12}>
          {filteredCars.length > 0 ? (
            filteredCars.map((car, index) => (
              <Card key={index} className="mb-4 car-card">
                <Card.Img variant="top" src={car.imgSrc} alt={car.title} />
                <Card.Body>
                  <Card.Title>{car.title}</Card.Title>
                  <Card.Text>{car.description}</Card.Text>
                  <ul className="car-features">
                    {car.features.map((feature, i) => (
                      <li key={i}>{feature}</li>
                    ))}
                  </ul>
                  <p className="car-price">Cena: {car.price} za 1 dzień</p>
                  <Button variant="primary" href={car.link} className="promo-button">Zarezerwuj teraz</Button>
                </Card.Body>
              </Card>
            ))
          ) : (
            <p className="no-offers">Brak ofert spełniających kryteria</p>
          )}
        </Col>
      </Row>
    </Container>
  );
}

export default ReservationPage;
