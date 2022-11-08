import React from 'react';
import AboutUS from '../AboutUS/AboutUS';
import Banner from '../Banner/Banner';
import Gallery from '../Gallery/Gallery';
import Service from '../Service/Service';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Service></Service>
            <Gallery></Gallery>
            <AboutUS></AboutUS>
        </div>
    );
};

export default Home;