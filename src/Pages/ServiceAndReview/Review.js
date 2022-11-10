import React, { useContext } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AuthContext } from "../../context/AuthProvider";
import useTitle from '../../hooks/useTitle';

const Review = () => {
    useTitle('AddService')
    const { user } = useContext(AuthContext)

    const diffToast = () => {
        toast('Review Add Successfully')
    }

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const img = form.img.value;
        const name = form.name.value;
        const review = form.review.value;
        const email = user?.email || 'Unregistered'
        console.log(img, name, review, email);

        const totalReviews = {
            img,
            serviceName: name,
            review,
            email
        }

        fetch('https://paradise-server.vercel.app/totalReviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(totalReviews)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    form.reset();
                }
            })
            .catch(error => console.error(error))
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>

                    <input htmlFor="img" type="text" name="img" id="img" placeholder="photoURL" className="w-full px-4 py-3 rounded-md bg-gray-900 text-red-100 " required />

                    <input name='name' type="text" placeholder="service name" className="input input-bordered w-full  bg-gray-900 text-red-100" required />

                    <input name='review' type="text" placeholder="user review" className="input input-bordered w-full  bg-gray-900 text-red-100" required />

                    <input name='email' type="text" placeholder="Your Email" defaultValue={user?.email} className="input input-bordered w-full  bg-gray-900 text-red-100" readOnly />
                </div>
                <div className='flex justify-center items-center'>
                    <input onClick={diffToast} className='btn btn-wide inline-flex items-center my-6' type="submit" value="Add Review" />
                </div>
            </form>
            <ToastContainer />
        </div>
    );
};

export default Review;