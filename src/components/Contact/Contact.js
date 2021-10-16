import React from 'react';
import { FloatingLabel, Form, Button, Container, Row, Col } from 'react-bootstrap';
import contactImage from './../../images/contactImage.jpg'

const Contact = () => {
    return (
        <Container id="contact" className="mt-5">
            <h1><i className="far fa-id-badge"></i> Contact Us</h1>
            <Row xs={1} md={2} className="mt-3 d-flex align-items-center">
                <Col>
                    <Form className="fw-bold" autoComplete="off">
                        <FloatingLabel controlId="floatingPassword" label="Name">
                            <Form.Control type="text" placeholder="your name" />
                        </FloatingLabel>
                        <FloatingLabel
                            controlId="floatingInput"
                            label="Email address"
                            className="mb-3"
                        >
                            <Form.Control type="email" placeholder="name@example.com" />
                        </FloatingLabel>
                        <FloatingLabel controlId="floatingTextarea2" label="message">
                            <Form.Control
                                as="textarea"
                                placeholder="leave a message here"
                                style={{ height: '100px' }}
                            />
                        </FloatingLabel>
                        <Button variant="success" type="submit" className="mt-3">
                            Submit
                        </Button>

                    </Form>
                </Col>
                <Col>
                    <div className="">
                        <img className="img-fluid" src={contactImage} alt="" />
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default Contact;