import React, { useContext } from 'react';
import { AuthContext } from "../../context/AuthProvider";

const AddService = () => {
    const { user } = useContext(AuthContext)
    return (
        <div>
            <form >

                <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
                <label htmlFor="photoURL" className="input input-bordered w-full" required>
                  PhotoURL
                </label>
                    {/* <input name='firstName' type="text" placeholder="First Name" className="input input-bordered w-full " /> */}
                    <input name='title' type="text" placeholder="Title" className="input input-bordered w-full " required />
                    <input name='price' type="text" placeholder="Price" className="input input-bordered w-full " required />
                    <input name='email' type="text" placeholder="Your Email" defaultValue={user?.email} className="input input-bordered w-full " readOnly />
                </div>
                <textarea name='description' className="textarea textarea-bordered h-40 w-full my-6" placeholder="Description" required></textarea>
                <div className='flex justify-center items-center'>
                    <input className='btn btn-wide inline-flex items-center my-6' type="submit" value="Add to service" />
                </div>
            </form>
        </div>
    );
};

export default AddService;