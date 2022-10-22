import React, { useState } from 'react';
import HomePalaceCard from '../components/HomePalaceCard';

const Home = () => {
    const [c,setC] = useState(5)
    const handleSlide = () =>{
        if(c > 6){
            setC(2)
            return
        }
        setC(c+ 1)
    }
    return (
        <div className="hero bg-black ">
            <div className="flex relative w-11/12 mx-auto p-4 overflow-hidden">
                <div className="opacity-100  text-white ">
                    <h1 className='my-2 text-7xl font-serif font-extrabold '>KUAKATA</h1>
                    <p className='my-2'>Cox's Bazar is a city, fishing port, tourism centre and district headquarters in southeastern Bangladesh. It is famous mostly for its long natural sandy beach, and it ...</p>
                    <button type="button" className="px-8 py-3 font-semibold rounded bg-gray-600 ">Basic</button>
                </div>
                <div className="ml-4 lg:w-[65%]">
                    <div className="carousel gap-4">
                        <div id="slide1" className="carousel-item relative w-[270px]">
                            <HomePalaceCard/> 
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            </div>
                        </div> 
                        <div id="slide2" className="carousel-item relative w-[270px]">
                            <HomePalaceCard/> 
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">

                            </div>
                        </div> 
                        <div id="slide3" className="carousel-item relative w-[270px]">
                            <HomePalaceCard/>
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            </div>
                        </div> 
                        <div id="slide4" className="carousel-item relative w-[270px]">
                            <HomePalaceCard/> 
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            </div>
                        </div>
                        <div id="slide5" className="carousel-item relative w-[270px]">
                            <HomePalaceCard/> 
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            </div>
                        </div>
                        <div id="slide6" className="carousel-item relative w-[270px]">
                            <HomePalaceCard/> 
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            </div>
                        </div>
                        <div id="slide7" className="carousel-item relative w-[270px]">
                            <HomePalaceCard/> 
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            </div>
                        </div>
                    </div>     
                    <a href="#slide3" className="btn btn-circle">❮</a> 
                    <a onClick={handleSlide} href={`#slide${c}`} className="btn btn-circle ">❯</a>   
                </div>
            </div>
        </div>
    );
};

export default Home;