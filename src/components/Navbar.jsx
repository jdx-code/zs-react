import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai';

const Navbar = () =>{

    const [nav, setNav] = useState(false);

    const handleNav = () => {
        setNav(!nav)
    }

    return(
        <div className="navbar flex justify-between items-center h-24 w-full mx-auto px-4 text-white">
            <h1 className="w-full text-green-100 text-lg font-bold uppercase m-4">WEB STUDIO</h1>
            <ul className="hidden md:flex">
                <li className="p-4">
                    <NavLink                         
                        to="/"                        
                    >
                        Home
                    </NavLink>
                </li>
                <li className="p-4">
                    <NavLink                         
                        to="/about"                        
                    >
                        About
                    </NavLink>
                </li>
                <li className="p-4">
                    <NavLink                         
                        to="/services"                        
                    >
                        Services
                    </NavLink>
                </li>
                <li className="p-4">
                    <NavLink                         
                        to="/career"                        
                    >
                        Career
                    </NavLink>
                </li>                
                <li className="p-4">
                    <NavLink
                        to="/contact"                        
                    >
                        Contact
                    </NavLink>
                </li>
            </ul>
            <div onClick={handleNav} className="block md:hidden">
                {!nav ? <AiOutlineClose size={20}/>: <AiOutlineMenu size={20}/>}                
            </div>
            <div className={!nav ? "fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500" : "fixed left-[-100%]"}>
            <h1 className="w-full text-green-100 text-lg font-bold uppercase m-4">Zephyr Solutions</h1>
                <ul className="uppercase p-4">
                    <li className="p-4 border-b border-gray-600">Home</li>
                    <li className="p-4 border-b border-gray-600">About</li>
                    <li className="p-4 border-b border-gray-600">Services</li>
                    <li className="p-4 border-b border-gray-600">Career</li>
                    <li className="p-4">Contact</li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar;