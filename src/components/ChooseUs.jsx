import React from "react";
import ChooseUsImage from '../assets/choose.png'

const ChooseUs = () => {
    return (
        <div className="w-full bg-white py-16 px-4">
            <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
                <img className="w-[500px] mx-auto my-4" src={ChooseUsImage} alt="/" />
                <div className="flex flex-col justify-center items-center text-center md:items-start md:text-left">
                    <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">Why Choose Us ?</h1>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates totam reprehenderit ducimus aliquid harum ipsa quos molestiae, commodi quas! Quis, culpa nulla. Error, quasi expedita recusandae officia minus ea itaque.</p>
                    <button className="bg-black text-white font-medium px-4 py-2 my-4 rounded-md hover:bg-[#242124]">View projects</button>
                </div>
            </div>            
        </div>
    )
}

export default ChooseUs;