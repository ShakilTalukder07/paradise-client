import React, { useContext } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AuthContext } from "../../context/AuthProvider";
import useTitle from '../../hooks/useTitle';

const AddService = () => {
    useTitle('AddService')
    const { user } = useContext(AuthContext)

    const diffToast = () => {
        toast('Service Add Successfully')
    }

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const img = form.img.value;
        const title = form.title.value;
        const price = form.price.value;
        const email = user?.email || 'Unregistered'
        const description = form.description.value;
        console.log(img, title, price, email, description);

        const totalServices = {
            img,
            serviceName: title,
            price,
            email,
            description
        }

        fetch('http://localhost:5000/services', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(totalServices)
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

                    <input name='title' type="text" placeholder="Title" className="input input-bordered w-full  bg-gray-900 text-red-100" required />

                    <input name='price' type="number" placeholder="Price" className="input input-bordered w-full  bg-gray-900 text-red-100" required />

                    <input name='email' type="text" placeholder="Your Email" defaultValue={user?.email} className="input input-bordered w-full  bg-gray-900 text-red-100" readOnly />

                </div>
                <textarea name='description' type="text" className="textarea textarea-bordered h-40 w-full my-6  bg-gray-900 text-red-100 " placeholder="Description" required></textarea>
                <div className='flex justify-center items-center'>
                    <input onClick={diffToast} className='btn btn-wide inline-flex items-center my-6' type="submit" value="Add to service" />
                </div>
            </form>
            <ToastContainer />
        </div>
    );
};

export default AddService;