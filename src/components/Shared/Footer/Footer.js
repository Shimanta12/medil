import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import logo from './../../../images/logo.png'
import './Footer.css'

const Footer = () => {
    return (
        <Container className="mt-5 p-3 fw-bold footer" fluid>
            <Row xs={1} md={4} className="d-flex align-items-center">
                <Col>
                    <div className="mb-3">
                        <img src={logo} alt="" />
                    </div>
                    <h4>About us</h4>
                    <p>Lorem ipsum dolor sit amet.</p>
                    <p>Lorem ipsum dolor sit amet.</p>
                    <p>Lorem ipsum dolor sit amet.</p>
                </Col>
                <Col>
                    <a className="text-dark" href="acb">Privacy Policy</a>
                    <br />
                    <a className="text-dark" href="abc">Terms and Condition</a>
                    <br />
                    <br />
                    <h6>Social media links</h6>
                    <i className="fab fa-facebook fs-2 ms-2 text-primary"></i>
                    <i className="fab fa-instagram-square fs-2 ms-2 text-danger"></i>
                    <i className="fab fa-linkedin fs-2 ms-2 text-primary"></i>
                    <i className="fab fa-youtube fs-2 ms-2 text-danger"></i>
                </Col>
                <Col className="fw-bold mt-3">
                    <a className="text-dark" href="#home">Home</a>
                    <br />
                    <a className="text-dark" href="#about">About</a>
                    <br />
                    <a className="text-dark" href="#shop">Shop</a>
                    <br />
                    <a className="text-dark" href="#contact">Contact</a>
                </Col>
                <Col>
                    <h4>Contact us</h4>
                    <span>Office: 12 Fake Street,New York</span>
                    <br />
                    <span>Phone: (08) 8827 633354</span>
                    <br />
                    <span>Fax: 08) 08 4752 1499</span>
                    <br />
                    <span>Mail: support.goaltheme.com</span>
                </Col>
            </Row>
            <div>
                <hr />
                <p className="fw-bold">&copy; 2021 Medil Theme by Goalthemes. All Rights Reserved.</p>
            </div>
        </Container>
    );
};

export default Footer;