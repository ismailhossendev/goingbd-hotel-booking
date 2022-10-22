import React from 'react';
import HomePalaceCard from '../components/HomePalaceCard';

const Home = () => {
    return (
        <div className="hero bg-black ">
            <div className="flex relative w-11/12 mx-auto p-4 overflow-hidden">
                <div className="opacity-100 w-[455px] text-white ">
                    <h1 className='my-2 text-7xl font-serif font-extrabold '>KUAKATA</h1>
                    <p className='my-2'>Cox's Bazar is a city, fishing port, tourism centre and district headquarters in southeastern Bangladesh. It is famous mostly for its long natural sandy beach, and it ...</p>
                    <button type="button" className="px-8 py-3 font-semibold rounded bg-gray-600 ">Basic</button>
                </div>
                <div className="ml-4 flex gap-3">
                    <HomePalaceCard/> 
                    <HomePalaceCard/>              
                    <HomePalaceCard/>
                    <HomePalaceCard/>              
                    <HomePalaceCard/>              
                    <HomePalaceCard/>              
                </div>
            </div>
        </div>
    );
};

export default Home;