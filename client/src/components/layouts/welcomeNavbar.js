import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';



const WelcomeNavbar = () => {
    const [side, setSide] = useState(false)
    return ( 
        <div className="fixed top-0 w-full z-50 ">

        <div className="fixed z-high top-0 h-screen block md:hidden w-full backdrop transform duration-300 ease-in-out" onClick={(e)=> {
            if(e.target.classList.contains('backdrop')){
                setSide(false)
            }
            }} style={ side === true ? ( { display:"block" } ): ( { width:"0px"})}>
            <ul className="text-white  text-center rounded-r-lg pt-24 bgDarker h-screen inline-block overflow-hidden transform duration-500 ease-in-out" style={ side === true ? ( { width:"max-content" } ): ( { width:"0px"})}>
            
            <li>

            </li>
            </ul>
        </div>

            <div className="flex justify-between  py-3 px-2 mx-2 items-center">
            <div className="flex justify-between items-center">
                <span>
                <svg viewBox="0 0 20 20" onClick={() => setSide(true)} fill="#fff" className="menu w-6 h-6 inline-block md:hidden mr-4"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" /></svg>
                </span>
                <Link to="/">
                    <span className="syntax-ui text-xl md:ml-10">BeatFro</span>
                </Link>
            </div>
            
            <div>
                <ul className=" items-center justify-between mr-10 hidden md:flex">
                    <li className="mx-4">
                        <NavLink to="/premium" className="text-white text-sm hover:text-opacity-100">Premium</NavLink>
                    </li>
                    <li className="mx-4">
                        <NavLink to="/download" className="text-white text-sm hover:text-opacity-100">Help</NavLink>
                    </li>
                    <li className="mx-4">
                        <NavLink to="/download" className="text-white text-sm hover:text-opacity-100">Download</NavLink>
                    </li>
                    <li className="mx-4">
                        <NavLink to="/download" className="syntax-ui text-sm hover:text-opacity-100">Create account</NavLink>
                    </li>
                    <li className="vd"></li>
                    <li className="mx-4">
                        <NavLink to="/download" className="text-white text-sm hover:text-opacity-100">Log In</NavLink>
                    </li>
                </ul>
            </div>
            </div>
            

        </div>
     );
}
 
export default WelcomeNavbar;