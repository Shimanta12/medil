import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Service from '../Service/Service';
import './Services.css'

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, []);
    return (
        <Container className="mt-5" >
            <h4><i className="fas fa-wave-square"></i> Prevention <i className="fas fa-wave-square"></i></h4>
            <h1>How to prevent yourself</h1>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque dolorem ab vitae sed corporis eaque minus aperiam incidunt repellendus, porro laboriosam consequatur debitis ducimus odit facilis voluptate sunt blanditiis voluptatem!</p>
            <Row xs={1} md={3} className="mt-3">
                {
                    services.map(service => <Service key={service.id} service={service}></Service>)
                }
            </Row>
        </Container>
    );
};

export default Services;