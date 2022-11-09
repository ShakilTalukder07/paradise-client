import React from 'react';
import aboutImg from '../../../assets/images/aboutUsImages/aboutImg.jpg'

const AboutUS = () => {
    return (
        <div className='my-8'>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={aboutImg} alt='/' className="max-w-sm rounded-lg shadow-2xl" />
                    <div className='ml-6'>
                        <h1 className="text-5xl font-bold">About US</h1>
                        <p className="py-6">Paradise is an tourism focused service. <br />
                            Paradise provide various types of services with minimal cost. <br />
                            Such as Flight Reservation Booking, Tour Visa, Hotel Booking, <br />
                            Delivery service, Passport Consultancy and many more. </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUS;