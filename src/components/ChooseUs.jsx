import React from "react";
import ChooseUsImage from '../assets/choose.png'

const ChooseUs = () => {
    return (
        <div className="w-full bg-white py-8 px-4">
            <div className="max-w-[1240px] mx-auto grid text-[#2c0f37] md:grid-cols-2">
                <img className="w-[300px] mx-auto my-4 sm:w-[400px] md:w-[500px]" src={ChooseUsImage} alt="/" />
                <div className="font-bold flex flex-col justify-center items-center text-center md:items-start md:text-left">
                    <h1 className="text-[1.8rem] font-black py-2 sm:text-[2rem] md:text-[2.2rem]">Why Choose Us ?</h1>
                    <p className="text-sm py-2 sm:text-lg md:text-xl">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates totam reprehenderit ducimus aliquid harum ipsa quos molestiae, commodi quas! Quis, culpa nulla. Error, quasi expedita recusandae officia minus ea itaque.</p>                    
                    <button className="w-[115px] bg-gray-100 text-[#2c0f37] border-2 border-[#2c0f37] text-sm px-2 py-3 mx-auto md:mx-0 my-4 rounded-md sm:w-[145px] md:w-[160px] sm:text-lg md:text-xl hover:bg-[#2c0f37] hover:text-gray-100">View projects</button>
                </div>
            </div>            
        </div>
    )
}

export default ChooseUs;