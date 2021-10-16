import React from 'react';
import { Col } from 'react-bootstrap';
import './Service.css'

const Service = ({ service }) => {
    const { name, image, description } = service;
    return (
        <div className="p-2">
            <Col className="service-card">
                <div className="">
                    <img className="img-fluid" src={image} alt="" />
                </div>
                <h4>{name}</h4>
                <p>{description}</p>

            </Col>
        </div>
    );
};

export default Service;