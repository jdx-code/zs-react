import React from 'react';

import EvaluationScope from '../assets/graph-svgrepo-com.svg';
import DevTesting from '../assets/code-svgrepo-com.svg';
import LaunchSupport from '../assets/support-svgrepo-com.svg';
import FrontOfCard from './FrontOfCard';
import BackOfCard from './BackOfCard';

const OurProcess = () => {
    return(
        <div className="w-full bg-white text-black border-2 border-blue-500 py-24">
            <div className='flex flex-col justify-center items-center px-24'>
                <div className='mx-16 px-24 text-center'>
                    <h1 className='text-2xl font-bold'>We take full-cycle care of our clients</h1>
                    <p>Clarity, transparency, and integrity are among the core values of our team at Catware. As such, we don’t just “work on projects”. We bring our experience and expertise to every stage of the development lifecycle. You will have a reliable IT partner with Catware.</p>
                </div>                
                <div className='grid md:grid-cols-4 w-full gap-8'>
                    <div className='relative w-full rounded-2xl shadow-2xl text-white overflow-hidden cursor-pointer transition-all duration-1000 card'>
                        <FrontOfCard/>
                        <BackOfCard/>
                    </div>
                    
                    
                    <div className='w-full bg-green-100 p-8 text-center rounded-xl shadow-2xl'>
                        <img className='w-24 mx-auto' src={EvaluationScope}/>
                        <p>Evaluation and scope</p>
                    </div>
                    <div className='w-full bg-green-100 p-8 text-center rounded-xl shadow-2xl'>
                        <img className='w-24 mx-auto' src={DevTesting}/>
                        <p>Development and testing</p>
                    </div>
                    <div className='w-full bg-green-100 p-8 text-center rounded-xl shadow-2xl'>
                        <img className='w-24 mx-auto' src={LaunchSupport}/>
                        <p>Post-launch support</p>
                    </div>
                </div>
            </div>            
        </div>
    )
}

export default OurProcess;