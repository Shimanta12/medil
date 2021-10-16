import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Categories from '../Categories/Categories';
import Contact from '../Contact/Contact';
import Services from '../Services/Services';
import Footer from '../Shared/Footer/Footer';
import MenuBar from '../Shared/MenuBar/MenuBar';

const Home = () => {
    return (
        <div>
            <MenuBar></MenuBar>
            <Banner></Banner>
            <Services></Services>
            <About></About>
            <Categories></Categories>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Home;