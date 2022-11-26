import React from "react";

const ProcessCard = (props) => {
    return (
        <div className='w-full max-w-[85%] bg-pink-100 border-2 border-pink-200 p-12 text-center rounded-lg shadow-xl md:max-w-[99%]'>
            <img className='w-24 mx-auto' src={props.src}/>
            <p>{props.para}</p>
        </div>                                       
    )
}

export default ProcessCard;