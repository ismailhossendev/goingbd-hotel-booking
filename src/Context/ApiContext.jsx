import React, { createContext, useEffect, useState } from 'react';
export const apiContext = createContext();
const ApiContext = ({children}) => {
    const [hotels,setHotels] = useState()
    useEffect(()=>{
        fetch('hotel.json')
        .then(res => res.json())
        .then(data => setHotels(data));
    },[])

    const value = {hotels}
    return (
        <div>
            <apiContext.Provider value={value}>
                {children}
            </apiContext.Provider>
        </div>
    );
};

export default ApiContext;