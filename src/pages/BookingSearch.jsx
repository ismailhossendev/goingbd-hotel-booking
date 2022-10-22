import React from 'react';


const BookingSearch = () => {

   
    return (
        <div className="hero bg-black ">
            <div className="flex relative w-11/12 mx-auto p-4 overflow-hidden justify-around">
                <div className="opacity-100 w-[455px] text-white ">
                    <h1 className='my-2 text-7xl font-serif font-extrabold '>KUAKATA</h1>
                    <p className='my-2'>Cox's Bazar is a city, fishing port, tourism centre and district headquarters in southeastern Bangladesh. It is famous mostly for its long natural sandy beach, and it ...</p>
                </div>
                <div className="ml-4 bg-white p-5 rounded-xl ">
                    <form novalidate="" action="" className="space-y-6 ng-untouched ng-pristine ng-valid text-black w-96 h-68 ">
                        <div className="space-y-1 text-sm" bis_skin_checked="1">
                            <label for="origin" className="block ">Origin</label>
                            <input type="text" name="origin" id="origin" placeholder="Dhaka" className="w-full px-4 py-3 rounded-md border-gray-700 bg-gray-400 text-black focus:border-violet-400 placeholder-gray-600" />
                        </div>
                        <div className="space-y-1 text-sm" bis_skin_checked="1">
                            <label for="destination" className="block ">Destination</label>
                            <input type="text" name="destination" id="destination" placeholder="Kuakata " className="w-full px-4 py-3 rounded-md border-gray-700 bg-gray-400  focus:border-violet-400 placeholder-gray-600" />
                            <form className='flex justify-between'>
                                <div className="">
                                    <label >Form</label> <br />
                                    <input type="date" name="" id="" />
                                </div>
                                <div className="">
                                    <label >To</label> <br />
                                    <input type="date" name="" id="" />
                                </div>
                                
                            </form>
                        </div>
                        <button className="block w-full p-3 text-center rounded-sm text-gray-900 bg-[#F9A51A]">Start Booking</button>
                    </form>   
                </div>
            </div>
        </div>
    );
};

export default BookingSearch;