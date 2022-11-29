import React from "react";
import FrontOfCard from "./FrontOfCard";
import BackOfCard from "./BackOfCard";

const ProcessCard = (props) => {
    return (
        // <div className='w-full max-w-[85%] bg-pink-100 border-2 border-pink-200 p-12 text-center font-black rounded-lg shadow-xl md:max-w-[99%] md:col-span-2 lg:col-span-1'>
        //     <img className='w-24 mx-auto' src={props.src}/>
        //     <p>{props.para}</p>
        // </div> 
        <div className="relative w-full max-w-[85%] h-60 bg-pink-100 border-2 border-pink-200 p-12 text-center font-black rounded-lg shadow-xl md:max-w-[99%] md:col-span-2 lg:col-span-1 text-white overflow-hidden cursor-pointer transition-all duration-700 card">
            <FrontOfCard src={props.src} para={props.para}/>
            <BackOfCard />
        </div>                                      
    )
}

export default ProcessCard;