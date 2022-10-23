import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import BookingSearch from "../pages/BookingSearch";
import FindTour from "../pages/FindTour";
import Home from "../pages/Home";
import HotelList from "../pages/HotelList";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Tours from "../pages/Tours";
// import PrivateRoute from "./NeedLogin";
import NeedLogin from "./NeedLogin";


export const router = createBrowserRouter([
    {
        path:'/',
        element:<Main/>,
        children:([
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/booking/search',
                element:<BookingSearch/>   
            },
            {
                path:'/login',
                element:<Login/>   
            },
            {
                path:'/register',
                element:<Register/>   
            },
            {
                path:'/hotels',
                element:<NeedLogin><HotelList/></NeedLogin>
            },
            {
                path:'/search/tour/result',
                element:<FindTour/>
            },
            {
                path:'/tours',
                element:<Tours/>
            }


        ])

    }
])