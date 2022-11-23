import React from 'react';

const OurProcess = () => {
    return(
        <div className="w-full bg-white text-black border-2 border-blue-500 py-24">
            <div className='flex flex-col justify-center items-center px-24'>
                <div className='mx-16 px-24 text-center'>
                    <h1 className='text-2xl font-bold'>We take full-cycle care of our clients</h1>
                    <p>Clarity, transparency, and integrity are among the core values of our team at Catware. As such, we don’t just “work on projects”. We bring our experience and expertise to every stage of the development lifecycle. You will have a reliable IT partner with Catware.</p>
                </div>                
                <div className='grid md:grid-cols-4 w-full'>
                    <div className=''>
                        <p>Icon</p>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </div>
                    <div className=''>
                        <p>Icon</p>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </div>
                    <div className=''>
                        <p>Icon</p>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </div>
                    <div className=''>
                        <p>Icon</p>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </div>
                </div>
            </div>            
        </div>
    )
}

export default OurProcess;