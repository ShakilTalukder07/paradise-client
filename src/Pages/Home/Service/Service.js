import React, { useEffect, useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import ServiceCard from './ServiceCard';
import DotLoader from 'react-spinners/DotLoader';
import { AuthContext } from '../../../context/AuthProvider';

const Service = () => {
    const [service, setService] = useState([])
    const { loading } = useContext(AuthContext)

    useEffect(() => {
        fetch('https://paradise-server.vercel.app/limitedServices')
            .then(res => res.json())
            .then(data => setService(data))
    }, [])

    if (loading) {
        return <DotLoader color={'#47E0C4'} loading={loading} ></DotLoader>
    }

    return (
        <div className='my-8'>
            <div className='text-center mb-6'>
                <div className='my-8 text-center mb-6'>
                    <h className="text-5xl font-bold">Our Service Area</h>
                </div>
                <p>The Majority Have Suffered Alteration In Some Form, By Injected Humour, Or Randomised <br /> Words Which Don't Look Even Slightly Believable.</p>
            </div>
            <div className=' w-100 '>
                <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                    {
                        service.map(servic => <ServiceCard
                            key={servic.service_id}
                            servic={servic}
                        ></ServiceCard>)
                    }
                </div>
                <div className='flex justify-center items-center'>
                    <Link to='/allServices'>
                        <button className='btn btn-wide inline-flex items-center my-6'>See all</button>
                    </Link>
                </div>
            </div>

        </div>
    );
};

export default Service;