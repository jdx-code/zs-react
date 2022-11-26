import React from 'react';

const OfferCard = (props) => {
    return (
        <div className="w-full max-w-[85%] border-2 border-gray-700 rounded-lg p-12 text-center shadow-xl md:max-w-[99%] md:col-span-2">
            <h1 className="text-2xl">{props.heading}</h1>                    
            <p>{props.firstPara}</p>
            <p>{props.secondPara}</p>
        </div>
    )
}

export default OfferCard;