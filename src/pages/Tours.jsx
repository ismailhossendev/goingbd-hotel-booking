import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import SingelHotelList from '../components/SingelHotelList';
import TourCard from '../components/TourCard';
import { apiContext } from '../Context/ApiContext';


const Tours = () => {
    const {selected,tour} = useContext(apiContext);
    if(!tour){
        return
    }
    return (
        <div className='w-11/12 mx-auto my-4'>
            <h1 className='text-3xl font-serif font-bold'>Our All Tour Package's</h1>
                <div className="w-full grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1">
                    {
                        tour.map(t => <TourCard key={t.id} tour={t}/>)
                    }
                </div>
        </div>
    );
};

export default Tours; 