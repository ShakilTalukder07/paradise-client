import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../context/AuthProvider';
import useTitle from '../../hooks/useTitle';
import MyReviewsRow from './MyReviewsRow';

const MyReviews = () => {
    useTitle('MyReviews')

    const { user } = useContext(AuthContext)
    const [myallreviews, setMyallreviews] = useState([])


    useEffect(() => {
        fetch(`https://paradise-server.vercel.app/totalReviews?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setMyallreviews(data))
    }, [user?.email])

    const handleDelete = id => {
        const proceed = window.confirm('Are you sure ? You want to delete this review.');
        if (proceed) {
            fetch(`https://paradise-server.vercel.app/totalReviews/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    if (data.deletedCount > 0) {
                        alert('Deleted Successfully');
                        const remaining = myallreviews.filter(review => review._id !== id);
                        setMyallreviews(remaining);
                    }
                })
        }
    }

    return (
        <div>
            <h1 className='mx-20 text-3xl font-bold'> You have: {myallreviews.length} reviews </h1>
            <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3' w-full">
                {
                    myallreviews.map(reviews => <MyReviewsRow
                        key={reviews._id}
                        reviews={reviews}
                        handleDelete={handleDelete}
                    ></MyReviewsRow>)
                }
            </div>
        </div>
    );
};

export default MyReviews;