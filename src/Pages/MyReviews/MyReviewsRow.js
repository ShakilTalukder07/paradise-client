import React from 'react';

const MyReviewsRow = ({ reviews }) => {

    const { _id, img, serviceName, review, handleDelete } = reviews
    
    return (
        <div className="card w-96">
            <div className="card-body items-center text-center">
                <img src={img} alt="" />
                <h2 className="card-title">{serviceName}</h2>
                <p>{review}</p>
                <div className="card-actions justify-start ">
                    <button className="btn btn-primary">Update</button>
                    <button onClick={() => handleDelete(_id)} className="btn btn-ghost">Delete</button>
                </div>
            </div>
        </div>
    );
};

export default MyReviewsRow;