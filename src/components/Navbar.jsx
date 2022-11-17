import React from "react"

const Navbar = () =>{
    return(
        <div className="flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white">
            <h1 className="w-full text-green-100 text-lg font-bold uppercase mt-2 ml-2">Zephyr Solutions</h1>
            <ul className="flex">
                <li className="p-4">Home</li>
                <li className="p-4">About</li>
                <li className="p-4">Services</li>
                <li className="p-4">Career</li>
                <li className="p-4">Contact</li>
            </ul>
        </div>
    )
}

export default Navbar;