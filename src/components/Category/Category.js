import React from 'react';
import { Col } from 'react-bootstrap';

const Category = ({ category }) => {
    const { name, price, image } = category;
    return (
        <Col className="">
            <div className="p-4">
                <img className="img-fluid" src={image} alt="" />
            </div>
            <h6 className="fw-bold">{name}</h6>
            <h5 className="fw-bold text-primary">{price}</h5>
        </Col>
    );
};

export default Category;