import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { apiContext } from '../Context/ApiContext';


const BookingSearch = () => {
    const {setSelected} = useContext(apiContext)
    const [selectedPack,setSelectedPack] = useState('ALL'); 
    const navigate = useNavigate();
    const handleSubmit = (e) =>{
        e.preventDefault()
        const form = e.target
        const origin = form.origin.value;
        const formDate = form.formdate.value;
        const toDate = form.toDate.value;

        // if(!formDate  && !toDate){
        //     alert('Please Select Date')
        //     return
        // }

        const searchItems = {
            origin,formDate,toDate,selectedPack
        }
        setSelected(searchItems)
        navigate('/search/tour/result')

    } 
    return (
        <div className="hero  bg-black h-[90vh]">
            <div className="flex relative w-11/12 mx-auto p-4 overflow-hidden justify-around lg:flex-row flex-col ">
                <div className="opacity-100 w-[455px] text-white ">
                    <h1 className='my-2 md:text-7xl text-3xl font-serif font-extrabold '>Find Tour Package In KUAKATA</h1>
                    <p className='my-2'>Cox's Bazar is a city, fishing port, tourism centre and district headquarters in southeastern Bangladesh. It is famous mostly for its long natural sandy beach, and it ...</p>
                </div>
                <div className="ml-4 bg-white p-5 rounded-xl ">
                    <form onSubmit={handleSubmit} novalidate="" action="" className="space-y-6 ng-untouched ng-pristine ng-valid text-black lg:w-96 h-68 ">
                        <div className="space-y-1 text-sm" bis_skin_checked="1">
                            <label for="origin" className="block ">Origin</label>
                            <input type="text" name="origin" id="origin" placeholder="Dhaka" className="w-full px-4 py-3 rounded-md border-gray-700 bg-gray-400 text-black focus:border-violet-400 placeholder-gray-600" />
                        </div>
                        <div className="space-y-1 text-sm " bis_skin_checked="1">
                            <select onChange={(e)=> setSelectedPack(e.target.value)} className="select select-error w-full bg-gray-400 font-normal" >
                                <option disabled selected value="All">Select Tour Type</option>
                                <option value='Family Tour'>Family Tour</option>
                                <option value='Group Tour'>Group Tour</option>
                                <option value='Solo Tour' >Solo Tour</option>
                                <option value='Couple Tour' >Couple Tour</option>
                            </select>
                            <div className='flex justify-between'>
                                <div className="">
                                    <label >Form</label> <br />
                                    <input type="date" name="formdate" id="" required />
                                </div>
                                <div className="">
                                    <label >To</label> <br />
                                    <input type="date" name="toDate" id="" required />
                                </div>
                                
                            </div>
                        </div>
                        <button  type="submit"className='w-full rounded btn' >BOOK</button>
                        
                    </form>   
                </div>
            </div>
        </div>
    );
};

export default BookingSearch;