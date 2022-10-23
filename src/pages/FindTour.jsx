import React, { useContext } from 'react';
import SingelHotelList from '../components/SingelHotelList';
import TourCard from '../components/TourCard';
import { apiContext } from '../Context/ApiContext';


const FindTour = () => {
    const {selected,tour} = useContext(apiContext);
    console.log(selected);
    const {toDate,selectedPack,formDate} = selected;
    if(!tour){
        return
    }
    const finded = tour.filter(t => t.type === selectedPack);
    console.log(finded);
    return (
        <div className='w-11/12 mx-auto my-4'>
            <p>{formDate} To {toDate}</p>
            <h1 className='text-3xl font-serif font-bold'>List On {selectedPack}</h1>
                <div className=" w-full grid grid-cols-4">
                    {
                        finded.map(t => <TourCard tour={t}/>)
                    }
            </div>
        </div>
    );
};

export default FindTour; 