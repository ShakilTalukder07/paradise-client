import { Outlet, useLoaderData } from 'react-router-dom';
import useTitle from '../../hooks/useTitle';
import SingleService from './SingleService';

const AllServices = () => {
    useTitle('AllServices')
    const services = useLoaderData()
    // console.log(services);
    return (
        <>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    services.map(service => <SingleService
                        key='_id'
                        service={service}
                    ></SingleService>)
                }
            </div>
        </>
    );
};

export default AllServices;