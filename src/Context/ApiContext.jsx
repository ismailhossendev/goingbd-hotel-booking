import React, { createContext, useEffect, useState } from 'react';
import { getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import app from '../firebase/firebase.confiq';



export const apiContext = createContext();
const auth = getAuth(app);



const ApiContext = ({children}) => {
    const [hotels,setHotels] = useState([]);
    const [user,setUser] = useState(null);
    const [loading,setLoading] = useState(true);
    const [palace,setPalace] = useState([])
    const [selected,setSelected] = useState({});
    const [tour,setTour] = useState();

    const gProvider = new GoogleAuthProvider();

    const withGoogle =() =>{
        setLoading(true)
        return signInWithPopup(auth,gProvider)
    }
    
    useEffect(()=>{
        fetch('hotel.json')
        .then(res => res.json())
        .then(data => setHotels(data));
    },[])
    useEffect(()=>{
        fetch('palace.json')
        .then(res => res.json())
        .then(data => setPalace(data));
    },[])

    useEffect(()=>{
        fetch('tourlist.json')
        .then(res => res.json())
        .then(data => setTour(data));
    },[])


    const logOut = () =>{
        setLoading(true)
        signOut(auth)
        .then(out=>{
            console.log('sign out user');
            setLoading(false)
        })
    }


    useEffect(()=>{
     const unlink =   onAuthStateChanged(auth,(result) =>{
                setUser(result)
                setLoading(false)
        })
        return ()=> {
            unlink()
        }
    },[])

    const value = {hotels,withGoogle,user,loading,setLoading,logOut,palace,selected,setSelected,tour}
    return (
        <div>
            <apiContext.Provider value={value}>
                {children}
            </apiContext.Provider>
        </div>
    );
};

export default ApiContext;