import React from 'react';
import { Link } from 'react-router-dom';


const Navbar = () => {



    const menuItems = <>
        <li className='text-white font-semibold hover:border-b-4 duration-300 border-violet-600 active'><Link to='/'>All Countries</Link></li>
        <li className='text-white font-semibold hover:border-b-4 duration-300 border-violet-600'><Link to='/AscendingDescending'>Ascending / Descending</Link></li>
        <li className='text-white font-semibold hover:border-b-4 duration-300 border-violet-600'><Link to='/SmallerLithuania'>Smaller Than Lithuania Area</Link></li>
        <li className='text-white font-semibold hover:border-b-4 duration-300 border-violet-600'><Link to='/OceaniaRegion'>Oceania Region</Link></li>
    </>



    return (
        <div className="navbar h-20 px-4 bg-gradient-to-br from-green-500 to-green-700 flex justify-center items-center shadow-xl">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={1} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-black rounded-box w-52">
                        {menuItems}
                    </ul>
                </div>
                <Link to="/" className="btn btn-ghost normal-case text-xl">

                    <h2 className='text-transparent bg-clip-text bg-gradient-to-r from-blue-100 to-blue-300 text-2xl font-bold '>Assignment</h2>


                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {menuItems}
                </ul>
            </div>


        </div>
    );
};

export default Navbar;





