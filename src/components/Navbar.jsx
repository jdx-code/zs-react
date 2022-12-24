import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai';

const Navbar = () =>{

    const [nav, setNav] = useState(false);

    const handleNav = () => {
        setNav(!nav)
    }

    return(
        <div>
            <div id="navbar" className="flex justify-between items-center h-24 w-full mx-auto px-4 text-white">
                <h1 className="w-full text-green-100 text-2xl font-bold uppercase m-4">
                    <NavLink to="/">
                        ZEPHYR
                    </NavLink>                    
                </h1>
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
                    {nav ? <AiOutlineClose size={20}/>: <AiOutlineMenu size={20}/>}                
                </div>
                <div className={nav ? "fixed left-0 top-0 w-[85%] h-[96%] z-20 border-r border-r-gray-900 bg-[#1b0424] ease-in-out duration-500" : "fixed left-[-100%]"}>
                <h1 className="w-full text-green-100 text-lg font-bold uppercase m-4">Zephyr Solutions</h1>
                    <ul className="uppercase p-4">
                        <li className="p-4 border-b border-gray-600">
                            <NavLink
                                to="/"
                            >
                                Home
                            </NavLink>
                        </li>
                        <li className="p-4 border-b border-gray-600">
                            <NavLink
                                to="/about"
                            >
                                About
                            </NavLink>
                        </li>
                        <li className="p-4 border-b border-gray-600">
                            <NavLink
                                to="/services"
                            >
                                Services
                            </NavLink>
                        </li>
                        <li className="p-4 border-b border-gray-600">
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
                </div>
            </div>
        </div>        
    )
}

export default Navbar;