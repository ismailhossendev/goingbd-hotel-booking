import React from 'react';
import SingelHotelList from '../components/SingelHotelList';

const HotelList = () => {
    return (
        <div className='w-11/12 mx-auto my-4'>
            <p>Apr 17- 22</p>
            <h1 className='text-3xl font-serif font-bold'>Stay in Kuakata</h1>
            <div className="lg:flex">
                <div className="w-3/6">
                    <SingelHotelList/>
                    <SingelHotelList/>
                    <SingelHotelList/>
                    <SingelHotelList/>
                    <SingelHotelList/>
                    <SingelHotelList/>
                    <SingelHotelList/>
                    <SingelHotelList/>
                </div>
                <div className="w-2/6 mx-auto h-screen p-1">
                <iframe className='w-[100%] h-4/5 rounded-xl' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29632.78753212864!2d90.1002929600671!3d21.815127069337375!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30aa7d1b38a082bd%3A0xce33209b2416f816!2sKuakata!5e0!3m2!1sen!2sbd!4v1666432399798!5m2!1sen!2sbd"></iframe>
                </div>
            </div>
        </div>
    );
};

export default HotelList; 