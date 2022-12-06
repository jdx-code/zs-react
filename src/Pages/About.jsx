import React from 'react';
import ChooseUsImage from '../assets/choose.png'
import LaunchSupport from '../assets/support-svgrepo-com.svg';

const About = () => {
    return(
        <div>
            <div className='aboutClass w-full h-[500px]'> 
                <div className='px-12 py-[245px] flex flex-col flex-wrap justify-center text-gray-300 md:w-[700px]'>
                    <h1 className='text-4xl font-black py-2 md:text-5xl'>About Us</h1>
                    <p className='w-[300px]  text-md font-black md:text-lg md:w-full'>Your trusted software partner equipped with IoT, hardware and firmware design expertise. </p>
                </div>                
            </div>
            <div className='flex flex-col-reverse md:flex-row my-12'>
                <div className='px-12 py-4 text-center md:w-[65%]'>
                    <h1 className='text-[1.8rem] font-black sm:text-[2rem] md:text-[2.2rem]'>Our work culture</h1>
                    <p className='text-sm py-2 sm:text-lg md:text-xl'> We work as a united team of professionals doing our best for our clients' success.Focused on time, productivity, and scalability, our developer team designs, prototypes, and builds your IoT, hardware, and custom software. We have proven expertise in Smart Home, embedded devices, manufacturing, logistic, insurance and fintech industries. Reach out to learn how we transform a challenge into a competitive advantage — in weeks, not years.
We (dive) into your business challenges to develop and deliver game-changing solutions for your growth.
</p>
                </div>
                <div className='md:w-[35%]'>
                    <img className="w-[300px] mx-auto my-2 sm:w-[400px] md:w-[600px]" src={ChooseUsImage} alt="/" />
                </div>
            </div>
            <div className='grid my-12'>
                <div className='text-center'>
                    <h1 className='text-[1.7rem] font-black sm:text-[2rem] md:text-[2.2rem]'>Our mission and values</h1>
                    <p className='text-sm py-2 sm:text-lg md:text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio nihil accusamus sequi ipsam dolor totam.</p>
                </div>
                <div className='grid md:grid-cols-6 md:justify-items-center'>
                    <div className='grid grid-cols-6 px-4 py-4 md:block md:col-span-2 md:px-16'>
                        <img className='border-2 border-red-800 col-span-1 md:mx-auto' src={LaunchSupport}/>
                        <p className='border-2 border-blue-800 col-span-5 md:text-center'> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam iste aperiam qui.</p>
                    </div>                    
                    <div className='grid grid-cols-6 px-4 py-4 md:block md:col-span-2 md:px-16'>
                        <img className='border-2 border-red-800 col-span-1 md:mx-auto' src={LaunchSupport}/>
                        <p className='border-2 border-blue-800 col-span-5 md:text-center'> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo impedit quod repudiandae!</p>
                    </div>                    
                    <div className='grid grid-cols-6 px-4 py-4 md:block md:col-span-2 md:px-16'>
                        <img className='border-2 border-red-800 col-span-1 md:mx-auto' src={LaunchSupport}/>
                        <p className='border-2 border-blue-800 col-span-5 md:text-center'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus amet rerum eum eius unde.</p>
                    </div>
                    <div className='grid grid-cols-6 px-4 py-4 md:block md:col-span-2 md:px-16'>
                        <img className='border-2 border-red-800 col-span-1 md:mx-auto' src={LaunchSupport}/>
                        <p className='border-2 border-blue-800 col-span-5 md:text-center'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, deserunt!</p>
                    </div>                    
                    <div className='grid grid-cols-6 px-4 py-4 md:block md:col-span-2 md:px-16'>
                        <img className='border-2 border-red-800 col-span-1 md:mx-auto' src={LaunchSupport}/>
                        <p className='border-2 border-blue-800 col-span-5 md:text-center'> Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                    <div className='grid grid-cols-6 px-4 py-4 md:block md:col-span-2 md:px-16'>
                        <img className='border-2 border-red-800 col-span-1 md:mx-auto' src={LaunchSupport}/>
                        <p className='border-2 border-blue-800 col-span-5 md:text-center'> Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>                    
                </div>
            </div>
        </div>        
    )
}

export default About;