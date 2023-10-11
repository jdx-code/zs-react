import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai';
import Logo from '../assets/logo.png'

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
                        <img className="w-[180px] my-4 sm:w-[200px] md:w-[230px] items-start" src={Logo} alt="/" />
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
                    <img className="w-[150px] items-start" src={Logo} />
                    
                    <ul className="uppercase p-4">
                        <li className="p-4 border-b border-gray-600">
                            <NavLink
                                to="/"
                                onClick={handleNav}
                            >
                                Home
                            </NavLink>
                        </li>
                        <li className="p-4 border-b border-gray-600">
                            <NavLink
                                to="/about"
                                onClick={handleNav}
                            >
                                About
                            </NavLink>
                        </li>
                        <li className="p-4 border-b border-gray-600">
                            <NavLink
                                to="/services"
                                onClick={handleNav}
                            >
                                Services
                            </NavLink>
                        </li>
                        <li className="p-4 border-b border-gray-600">
                            <NavLink
                                to="/career"
                                onClick={handleNav}
                            >
                                Career
                            </NavLink>
                        </li>
                        <li className="p-4">
                            <NavLink
                                to="/contact"
                                onClick={handleNav}
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