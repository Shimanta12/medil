import React from 'react';
import { Col, Container, Row, Button } from 'react-bootstrap';
import './Banner.css';

const Banner = () => {
    return (
        <Container id="home" className="banner d-flex align-items-center" fluid>
            <Row className="ms-2" md={7}>
                <Col>
                    <h1 className="text-light fw-bold">Take care of your health now !</h1>
                    <h3 className="text-light fw-bold mt-2">Sales up to 30% all product</h3>
                    <Button variant="btn btn-light fw-bold mt-4">Shop now</Button>
                </Col>
            </Row>
        </Container>
    );
};

export default Banner;