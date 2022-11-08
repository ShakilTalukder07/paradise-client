import React from 'react';
import { Link } from 'react-router-dom';

const ServiceCard = ({ servic }) => {
    // console.log(servic);
    const { title, img, description, price } = servic;
    return (
        <div>
            <div className="card w-94 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={img} alt='' className="rounded-xl h-40 w-50" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{title}</h2>
                    <p>{description.length > 100 ? description.slice(0, 100) + '...' : description}</p>
                    <p className='text-bold'>Price: <span>$</span>{price}</p>
                    <div className="card-actions">
                        <Link to='allServices'>
                        <button className="btn btn-primary">View details</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;