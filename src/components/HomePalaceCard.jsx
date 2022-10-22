import React from 'react';

const HomePalaceCard = () => {
    return (
        <div className='h-[416px] w-72 relative border-2 rounded-3xl'>
            <img className='h-full w-full' src="https://i.ibb.co/BqCD2FF/Sreemongol.png" alt="" />
            <div className="absolute bottom-0 text-white bg-gradient-to-t from-black h-6 w-full py-20 px-5 rounded-b-3xl">
                <h1 className='text-3xl font-serif font-bold'>KUAKATA</h1>
            </div>
        </div>
    );
};

export default HomePalaceCard ;