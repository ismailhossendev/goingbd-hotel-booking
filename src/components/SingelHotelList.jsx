import React from 'react';

const SingelHotelList = () => {
    return (
        <div className="mb-4">
            <div className="card card-side bg-base-100 shadow-xl m-2 border border-black rounded-xl">
                <div className="w-[40%]">
                    <img className='rounded-xl w-full h-full object-cover' src="https://i.ibb.co/S62MJ2H/Rectangle-26.png" alt="Movie"/>
                </div>
                <div className="card-body">
                    <h2 className="card-title">New movie is released!</h2>
                    <p>4 guests   2 bedrooms   2 beds   2 baths</p>
                    <p>Wif Air conditioning Kitchen</p>
                    <p>Cancellation flexibility available</p>
                    <div className="card-actions ">
                    <p>* 4.9(20)</p>
                    <p>$34/night</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingelHotelList;