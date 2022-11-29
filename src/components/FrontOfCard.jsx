import React from 'react';

const FrontOfCard = (props) => {
    return(
        <div className="absolute inset-0 w-full h-full flex justify-center items-center bg-gray-900 transition-all duration-100 delay-200 z-20 hover:opacity-0">
            <img className='w-24 mx-auto' src={props.src}/>
            <p>{props.para}</p>
        </div>
    );
}

export default FrontOfCard;