import React from 'react';

const OfferCard = (props) => {
    return (
        <div className="w-full max-w-[85%] border-2 border-gray-700 rounded-lg p-12 text-center shadow-xl md:max-w-[99%] md:col-span-2 hover:scale-105 hover:shadow-2xl duration-300">
            <h1 className="text-lg font-bold sm:text-xl md:text-2xl">{props.heading}</h1>                    
            <p className='text-lg sm:text-xl md:text-xl'>{props.firstPara}</p>
            <p className='text-sm sm:text-lg md:text-lg'>{props.secondPara}</p>
        </div>
    )
}

export default OfferCard;