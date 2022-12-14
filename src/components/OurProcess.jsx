import React from 'react';
import FirstInteraction from '../assets/handshake-deal-svgrepo-com.svg';
import EvaluationScope from '../assets/graph-svgrepo-com.svg';
import DevTesting from '../assets/code-svgrepo-com.svg';
import LaunchSupport from '../assets/support-svgrepo-com.svg';
import ProcessCard from './ProcessCard';

const OurProcess = () => {
    return(
        <div className="w-full bg-white text-[#2c0f37] font-black border-2 py-12">
            <div className='flex flex-col justify-center items-center px-4 md:px-2'>
                <div className='mx-2 px-2 text-center sm:px-20'>
                    <h1 className='text-[1.8rem] font-black m-1 py-1 text-center sm:text-[2rem] md:text-[2.2rem]'>We take full-cycle care of our clients</h1>
                    <p className='text-sm px-2 md:text-lg md:px-24 md:m-6'>Clarity, transparency, and integrity are among the core values of our team at Zephyr. As such, we don’t just “work on projects”. We bring our experience and expertise to every stage of the development lifecycle. You will have a reliable IT partner with Zephyr.</p>
                </div>                
                <div className='w-full grid justify-items-center sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-8 mb-8 sm:px-12'>                
                    <ProcessCard 
                        src={FirstInteraction} 
                        para="Share your vision "
                        back="You share your vision. We assign a dedicated team to build your dream project."
                    >
                    </ProcessCard>

                    <ProcessCard
                        src={EvaluationScope}
                        para="Get a roadmap"
                        back="We present a clear roadmap of the development process to turn your vision into reality."
                    >
                    </ProcessCard>

                    <ProcessCard
                        src={DevTesting}
                        para="Development and Testing"
                        back="Developers work closely with testing team to ensure you get the best possible results."
                    >
                    </ProcessCard>

                    <ProcessCard
                        src={LaunchSupport}
                        para="Post-launch support"
                        back="Post delivery, we take care of ongoing project maintenance, updates, and infrastructure."
                    >
                    </ProcessCard>                    
                </div>
            </div>            
        </div>
    )
}

export default OurProcess;