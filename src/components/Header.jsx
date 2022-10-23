import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { apiContext } from '../Context/ApiContext';

const Header = () => {
    const {logOut,user} = useContext(apiContext);
    return (
        <header className="py-1 text-black border-b border-black sticky top-0 z-50 bg-slate-200">
            <div className="navbar ">
                <div className="navbar-start">
                    <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><Link>Home</Link></li>
                        <li><Link to='/booking/search'>Search</Link></li>
                        <li><Link to='/hotels'>Hotels</Link></li>
                        <li><Link>Blog</Link></li>
                        <li><Link>Contact</Link></li>
                    </ul>
                    </div>
                    <Link to='/' className="btn btn-ghost normal-case text-xl">GoingBD</Link>
                </div>
                
                <div className="navbar-end">
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal p-0 font-serif text-xl font-se">
                            <li><Link to='/'>Home</Link></li>
                            <li><Link to='/booking/search'>Search</Link></li>
                            <li><Link to='/hotels'>Hotels</Link></li>
                            <li><Link to='/tours'>Packages</Link></li>
                            <li><Link>Contact</Link></li>

                        </ul>
                    </div >
                    {
                        user?.uid ? 
                        <>
                            <div className="avatar online">
                                <div className="w-14 mr-2 rounded-full border ring ring-primary ring-offset-base-100 ring-offset-2">
                                    <img src={user?.photoUrl ? user?.photoUrl : "https://sirinc2.org/branch129/wp-content/uploads/2019/04/no-photo-icon-22.png"} />
                                </div>
                            </div>
                            <Link onClick={logOut} className='btn'>Log Out</Link>
                        </>
                        :

                        <div className="flex gap-4">
                        <Link to='/login' className="btn btn-warning">Login</Link>
                        <Link to='/register' className="btn btn-warning">Register</Link>
                    </div>
                    }
                    

                </div>
            </div>
        </header>
    );
};

export default Header;