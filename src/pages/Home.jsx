import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import PhoneSlider from '../components/PhoneSlider';
import SwipeToSlide from '../components/Slider';

const Home = () => {
    return (
        <div className="hero bg-black  h-[90vh]">
            <div className="flex  relative lg:w-11/12 mx-auto p-4 flex-col lg:flex-row w-full">
                <div className="opacity-100 lg:mt-0 -mt-36 text-white ">
                    <h1 className='my-2 text-7xl  font-serif font-extrabold '>KUAKATA</h1>
                    <p className='my-2'>Cox's Bazar is a city, fishing port, tourism centre and district headquarters in southeastern Bangladesh. It is famous mostly for its long natural sandy beach, and it ...</p>
                    <Link to='/booking/search' className='btn btn-warning'>Book Now</Link>
                </div>
                <div className="lg:ml-4 lg:w-[65%] w-full ">
                   <div className="hidden lg:block">
                        <SwipeToSlide/> 
                   </div>
                   <div className="lg:hidden -ml-40 mt-2">
                        <PhoneSlider/>
                   </div>
                </div>
            </div>
        </div>
    );
};

export default Home;