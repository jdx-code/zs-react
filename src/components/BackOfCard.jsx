import React from "react";

const BackOfCard = (props) => {
    return(
        // <div className="absolute inset-0 w-full h-full flex justify-center items-center bg-[#1b0424] transition-all z-10 card-back">
        // <div className="flex justify-center items-center card-back">
        //     <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit, dignissimos!</p>
        // </div>
            <div className="flip-card-back flex justify-center items-center rounded-lg px-4">
                <p>{props.back}</p>
            </div>
    );
}

export default BackOfCard;