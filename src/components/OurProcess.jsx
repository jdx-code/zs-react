import React from 'react';
import FirstInteraction from '../assets/handshake-deal-svgrepo-com.svg';
import EvaluationScope from '../assets/graph-svgrepo-com.svg';
import DevTesting from '../assets/code-svgrepo-com.svg';
import LaunchSupport from '../assets/support-svgrepo-com.svg';

const OurProcess = () => {
    return(
        <div className="w-full bg-white text-black border-2 border-blue-500 py-12">
            <div className='flex flex-col justify-center items-center px-24 text-gray-800'>
                <div className='mx-16 px-24 text-center'>
                    <h1 className='text-2xl m-8 text-center font-bold md:text-3xl'>We take full-cycle care of our clients</h1>
                    <p>Clarity, transparency, and integrity are among the core values of our team at Catware. As such, we don’t just “work on projects”. We bring our experience and expertise to every stage of the development lifecycle. You will have a reliable IT partner with Catware.</p>
                </div>                
                <div className='grid md:grid-cols-4 w-full gap-8 mt-8 mb-8'>
                    <div className='w-full bg-pink-200 p-8 text-center rounded-xl shadow-2xl'>
                        <img className='w-24 mx-auto' src={FirstInteraction}/>
                        <p>First Interaction</p>
                    </div>                                       
                    <div className='w-full bg-pink-200 p-8 text-center rounded-xl shadow-2xl'>
                        <img className='w-24 mx-auto' src={EvaluationScope}/>
                        <p>Evaluation and scope</p>
                    </div>
                    <div className='w-full bg-pink-200 p-8 text-center rounded-xl shadow-2xl'>
                        <img className='w-24 mx-auto' src={DevTesting}/>
                        <p>Development and testing</p>
                    </div>
                    <div className='w-full bg-pink-200 p-8 text-center rounded-xl shadow-2xl'>
                        <img className='w-24 mx-auto' src={LaunchSupport}/>
                        <p>Post-launch support</p>
                    </div>
                </div>
            </div>            
        </div>
    )
}

export default OurProcess;