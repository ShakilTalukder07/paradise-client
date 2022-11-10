import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const ServiceAndReview = () => {
    const serviceDetails = useLoaderData()
    console.log(serviceDetails);
    const { title, img, description, price } = serviceDetails

    return (
        <div>
            <div className="card lg:card-side mx-40 my-10 w-3/4 bg-base-100 shadow-2xl">
                <figure><img src={img} alt="Album" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <p>{description}</p>
                    <p className='text-bold'>Price: <span>$</span>{price}</p>
                </div>
            </div>
            <div>
                <div className='flex justify-center items-center'>
                    <Link to='/writeReview'>
                        <button className='btn btn-wide inline-flex items-center my-6'>Add Review</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ServiceAndReview;