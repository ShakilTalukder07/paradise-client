import React from 'react';

const MyReviewsRow = ({ reviews }) => {

    const { _id, img, serviceName, review, myAllReviews, setMyAllReviews } = reviews

    const handleDelete = id => {
        console.log(id);
        const proceed = window.confirm('Are you sure, You want to delete this review?');
        if (proceed) {
            fetch(`http://localhost:5000/totalReviews/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount > 0) {
                        alert('deleted successfully')
                        const remaining = myAllReviews.filter(review => review._id !== id);
                        setMyAllReviews(remaining)
                    }
                })
        }
    }

    return (
        <div className="card w-96">
            <div className="card-body items-center text-center">
                <img src={img} alt="" />
                <h2 className="card-title">{serviceName}</h2>
                <p>{review}</p>
                <div className="card-actions justify-start ">
                    <button className="btn btn-primary">Update</button>
                    <button onClick={()=>handleDelete(_id)} className="btn btn-ghost">Delete</button>
                </div>
            </div>
        </div>
    );
};

export default MyReviewsRow;