import React from 'react';

const FrontOfCard = (props) => {
    return(
        // <div className="absolute inset-0 w-full h-full flex flex-col justify-center items-center bg-pink-100 border-2 border-pink-200 text-[#2c0f37] transition-all z-20 hover:opacity-0 card-front">
        // <div className="flex flex-col justify-center items-center card-front">
        //     <img className='w-24 mx-auto' src={props.src}/>
        //     <p className='p-4'>{props.para}</p>
        // </div>
        // </div>

        <div class="flip-card-front flex flex-col justify-center items-center rounded-lg">
            <img className='w-24 mx-auto' src={props.src}/>
            <p className='p-4'>{props.para}</p>
        </div>
    );
}

export default FrontOfCard;