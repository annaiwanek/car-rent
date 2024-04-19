import React from 'react';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

function Fleet() {

    return (
        <Container fluid>
            <Form>
                <Row>
                    <Col xs="auto" className="pb-3">
                    </Col>
                </Row>
                <Row>
                    <Tabs
                        defaultActiveKey="osobowe"
                        id="parametrySamochodu"
                        className="mb-3"
                    >
                        <Tab eventKey="osobowe" title="Osobowe">
                            Samochody osobowe
                        </Tab>
                        <Tab eventKey="van" title="Van">
                            Samochody typu van
                        </Tab>
                        <Tab eventKey="automaty" title="Automaty">
                            Samochody z automatyczna skrzynia biegow
                        </Tab>
                        <Tab eventKey="dostawcze" title="Dostawcze">
                            Samochody dostawcze
                        </Tab>
                    </Tabs>
                </Row>
            </Form>
        </Container>
        

    )

} 

export default Fleet;