import React from "react";
import ChooseUsImage from '../assets/choose.png'

const ChooseUs = () => {
    return (
        <div className="w-full bg-white py-8 px-4">
            <div className="max-w-[1240px] mx-auto grid text-[#2c0f37] md:grid-cols-2">
                <img className="w-[300px] mx-auto my-4 sm:w-[400px] md:w-[500px]" src={ChooseUsImage} alt="/" />
                <div className="font-bold flex flex-col justify-center items-center text-center md:items-start md:text-left">
                    <h1 className="text-[1.8rem] font-black py-2 sm:text-[2rem] md:text-[2.2rem]">Why Choose Us ?</h1>
                    <p className="text-sm py-2 sm:text-lg md:text-xl">We transform bold business ideas into exceptional digital products. Searching for a partner that will take the process of software development off your hands? You’ve come to the right place. We ideate, design, and develop data-driven digital products made to answer business challenges. We offer 360° services to smoothly guide you on your way to creating a seamless digital masterpiece.</p>                    
                    <button className="w-[115px] bg-gray-100 text-[#2c0f37] border-2 border-[#2c0f37] text-sm px-2 py-3 mx-auto md:mx-0 my-4 rounded-md sm:w-[145px] md:w-[160px] sm:text-lg md:text-xl hover:bg-[#2c0f37] hover:text-gray-100 hover:transition duration-150">View projects</button>
                </div>
            </div>            
        </div>
    )
}

export default ChooseUs;