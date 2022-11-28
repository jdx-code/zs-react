import React from 'react';
import FirstInteraction from '../assets/handshake-deal-svgrepo-com.svg';
import EvaluationScope from '../assets/graph-svgrepo-com.svg';
import DevTesting from '../assets/code-svgrepo-com.svg';
import LaunchSupport from '../assets/support-svgrepo-com.svg';
import ProcessCard from './ProcessCard';

const OurProcess = () => {
    return(
        <div className="w-full bg-white text-[#2c0f37] font-black border-2 border-blue-500 py-12">
            <div className='flex flex-col justify-center items-center px-4 md:px-2'>
                <div className='mx-2 px-2 text-center'>
                    <h1 className='text-red-800 sm:text-yellow-500 md:text-blue-800 text-[1.8rem] font-black m-1 py-1 text-center sm:text-[2rem] md:text-[2.2rem]'>We take full-cycle care of our clients</h1>
                    <p className='text-sm px-2 md:text-base md:m-6'>Clarity, transparency, and integrity are among the core values of our team at Zephyr. As such, we don’t just “work on projects”. We bring our experience and expertise to every stage of the development lifecycle. You will have a reliable IT partner with Zephyr.</p>
                </div>                
                <div className='w-full grid md:grid-cols-4 justify-items-center gap-8 mt-8 mb-8'>
                    <ProcessCard 
                        src={FirstInteraction} 
                        para="First Interaction"
                    >
                    </ProcessCard>

                    <ProcessCard
                        src={EvaluationScope}
                        para="Evaluation and Scope"
                    >
                    </ProcessCard>

                    <ProcessCard
                        src={DevTesting}
                        para="Development and Testing"
                    >
                    </ProcessCard>

                    <ProcessCard
                        src={LaunchSupport}
                        para="Post-launch support"
                    >
                    </ProcessCard>                    
                </div>
            </div>            
        </div>
    )
}

export default OurProcess;