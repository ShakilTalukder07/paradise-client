import React from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import { Link } from 'react-router-dom';

const SingleService = ({ service }) => {
    // console.log(service);
    const { _id, title, img, description, price } = service;

    return (
        <div>
            <div className="card w-94 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <PhotoProvider>
                        <PhotoView src={img}>
                            <img src={img} alt='' className="rounded-xl h-40 w-50" />
                        </PhotoView>
                    </PhotoProvider>
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{title}</h2>
                    <p>{description.length > 100 ? description.slice(0, 100) + '...' : description}</p>
                    <p className='text-bold'>Price: <span>$</span>{price}</p>
                    <div className="card-actions">

                        <Link to={`/allServices/${_id}`} className="btn btn-primary">View details</Link>

                    </div>
                </div>
            </div>
        </div >
    );
};

export default SingleService;