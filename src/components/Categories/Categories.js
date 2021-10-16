import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Category from '../Category/Category';

const Categories = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('categories.json')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, []);
    return (
        <Container id="shop" className="mt-5">
            <div className="mt-3"></div>
            <h5><i className="fas fa-wave-square"></i> OUR PRODUCTS <i className="fas fa-wave-square"></i></h5>
            <h1>Shop By Category</h1>
            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa</p>
            <button className="btn btn-primary ms-3">New Arrivals</button>
            <button className="btn btn-outline-primary ms-3">Featured</button>
            <button className="btn btn-outline-primary ms-3">Best Sellers</button>
            <Row xs={1} md={4} className="mt-3">
                {
                    categories.map(category => <Category key={category.id} category={category}></Category>)
                }
            </Row>
        </Container>
    );
};

export default Categories;