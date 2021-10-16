import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import aboutImage from '../../images/kit.png';
import './About.css'


const About = () => {
    return (
        <Container id="about" className="about-container mt-5">
            <div className="my-3"></div>
            <Row xs={1} md={2} className="d-flex align-items-center">
                <Col>
                    <img className="img-fluid" src={aboutImage} alt="" />
                </Col>
                <Col>
                    <div>
                        <div>
                            <h5><i className="fas fa-wave-square"></i> About</h5>
                            <h1>Medical Equipment & Kit</h1>
                            <p>Pair large text with an image to give focus to your chosen product, collection, or blog post. Add details on availability, style, or even provide a review. Even if you can't afford to travel the world, you can take your children to the museum, zoo or local park. And don't be afraid to take them to grown-up spots. Eating out in a restaurant teaches children how to be quiet and polite and gives them the pleasure of knowing you trust them to behave.</p>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default About;