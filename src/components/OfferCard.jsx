import React from 'react';

const OfferCard = (props) => {
    return (
        <div className="w-full max-w-[85%] text-center font-black flex flex-col sm:flex-row lg:flex-col bg-[#EDE4E0] border-2 border-pink-200 rounded-lg px-10 py-8 shadow-xl md:max-w-[99%] lg:col-span-2 hover:border-[#3b1949] hover:scale-105 hover:shadow-2xl duration-300">
            <div className='mx-2 my-auto sm:min-w-[30%] lg:mb-4'>
                <img className="w-[65px] lg:w-[85px] mx-auto" src={props.src}/>
                <h1 className="text-[1.1rem] sm:text-lg md:text-xl">{props.heading}</h1>                    
            </div>
            <div className='mx-2 my-auto'>                
                <p className='text-[1rem] sm:text-sm md:text-sm lg:text-lg'>{props.firstPara}</p>
                <p></p>
                <p className='text-[0.9rem] sm:text-sm md:text-sm lg:text-lg'>{props.secondPara}</p>
            </div>
        </div>
    )
}

export default OfferCard;