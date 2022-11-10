import React from 'react';
import { Outlet } from 'react-router-dom';
import ServiceAndReview from '../Pages/ServiceAndReview/ServiceAndReview';
import Footer from '../shared/Footer/Footer';
import Header from '../shared/Header/Header';

const ShowServiceAndReview = () => {
    return (
        <div>
            <Header></Header>
            <ServiceAndReview></ServiceAndReview>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default ShowServiceAndReview;