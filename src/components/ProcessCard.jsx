import React from "react";
import FrontOfCard from "./FrontOfCard";
import BackOfCard from "./BackOfCard";

const ProcessCard = (props) => {
    return (    
        // <div className="mainContainer">
        //     {/* <div className="card w-full max-w-[85%] h-60 p-12 text-center font-black rounded-lg shadow-xl md:max-w-[99%] md:col-span-2 lg:col-span-1 text-white overflow-hidden cursor-pointer transition-all duration-700"> */}
        //     <div className="card text-center font-black rounded-lg shadow-xl md:col-span-2 lg:col-span-1">
        //         <FrontOfCard src={props.src} para={props.para}/>
        //         <BackOfCard />
        //     </div>                                      
        // </div>
        
        <div className="flip-card md:w-[95%]">
            <div className="flip-card-inner w-full max-w-[99%] h-60 text-center font-black bg-[#EDE4E0] border-2 border-pink-200 hover:border-none rounded-lg shadow-xl md:max-w-[99%] text-white">
                <FrontOfCard src={props.src} para={props.para}/>
                <BackOfCard/>
            </div>
        </div> 
        
    )
}

export default ProcessCard;