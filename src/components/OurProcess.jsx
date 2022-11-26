import React from 'react';
import FirstInteraction from '../assets/handshake-deal-svgrepo-com.svg';
import EvaluationScope from '../assets/graph-svgrepo-com.svg';
import DevTesting from '../assets/code-svgrepo-com.svg';
import LaunchSupport from '../assets/support-svgrepo-com.svg';

const OurProcess = () => {
    return(
        <div className="w-full bg-white text-black border-2 border-blue-500 py-12">
            <div className='flex flex-col justify-center items-center px-4 md:px-24 text-gray-800'>
                <div className='mx-2 px-2 text-center md:mx-16 md:px-24'>
                    <h1 className='text-lg m-1 px-6 py-1 text-center font-bold md:m-6 md:text-3xl'>We take full-cycle care of our clients</h1>
                    <p className='text-sm px-2 md:text-base md:m-6'>Clarity, transparency, and integrity are among the core values of our team at Catware. As such, we don’t just “work on projects”. We bring our experience and expertise to every stage of the development lifecycle. You will have a reliable IT partner with Catware.</p>
                </div>                
                <div className='w-full grid md:grid-cols-4 justify-items-center gap-8 mt-8 mb-8'>
                    <div className='w-full max-w-[85%] bg-pink-100 border-2 border-pink-200 p-12 text-center rounded-lg shadow-xl md:max-w-[99%]'>
                        <img className='w-24 mx-auto' src={FirstInteraction}/>
                        <p>First Interaction</p>
                    </div>                                       
                    <div className='w-full max-w-[85%] bg-pink-100 border-2 border-pink-200 p-12 text-center rounded-lg shadow-xl md:max-w-[99%]'>
                        <img className='w-24 mx-auto' src={EvaluationScope}/>
                        <p>Evaluation and scope</p>
                    </div>
                    <div className='w-full max-w-[85%] bg-pink-100 border-2 border-pink-200 p-12 text-center rounded-lg shadow-xl md:max-w-[99%]'>
                        <img className='w-24 mx-auto' src={DevTesting}/>
                        <p>Development and testing</p>
                    </div>
                    <div className='w-full max-w-[85%] bg-pink-100 border-2 border-pink-200 p-12 text-center rounded-lg shadow-xl md:max-w-[99%]'>
                        <img className='w-24 mx-auto' src={LaunchSupport}/>
                        <p>Post-launch support</p>
                    </div>
                </div>
            </div>            
        </div>
    )
}

export default OurProcess;