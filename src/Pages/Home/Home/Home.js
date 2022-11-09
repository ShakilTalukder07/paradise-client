import React from 'react';
import useTitle from '../../../hooks/useTitle';
import AboutUS from '../AboutUS/AboutUS';
import Banner from '../Banner/Banner';
import Gallery from '../Gallery/Gallery';
import Service from '../Service/Service';

const Home = () => {
    useTitle('Home')
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