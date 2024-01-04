import React from 'react';
import AboutImage from '../assets/about.svg';
import LaunchSupport from '../assets/support-svgrepo-com.svg';
import ClientImage from '../assets/clientfirst.svg';
import CollaborationImage from '../assets/collaboration.svg';
import DedicationImage from '../assets/dedication.svg';
import DiversityImage from '../assets/diversity.svg';
import SmartImage from '../assets/smart.svg';
import GrowthImage from '../assets/growth.svg';

const About = () => {
    return(
        <div>
            <div className='aboutClass w-full h-[500px]'> 
                <div className='px-12 py-[245px] flex flex-col flex-wrap justify-center text-gray-300 md:w-[700px]'>
                    <h1 className='text-4xl font-black py-2 md:text-5xl'>About Us</h1>
                    <p className='w-[300px]  text-md font-black md:text-lg md:w-full'>Your trusted software partner with a passion for building beautiful & functional products.</p>
                </div>                
            </div>
            <div className='flex flex-col-reverse items-center md:flex-row my-12 text-sm sm:text-lg'>
                <div className='px-12 py-4 text-center md:w-[50%] lg:w-[60%]'>
                    <h1 className='m-2 text-[1.3rem] sm:text-[1.75rem] md:text-[1.95rem] font-black leading-9'>About us and our remote work culture:</h1>
                    <p className='py-2'> Zephyr Solutions is a trusted remote software development and IT consulting firm, offering dedicated services for all your business needs. With a wealth of experience, we've been seamlessly collaborating with clients, transcending geographical boundaries to deliver top-notch products and services. Our distributed team of talented professionals works remotely to develop cutting-edge solutions for your business. We pride ourselves on fostering a dynamic remote work culture that allows our team to thrive and deliver excellence from various locations. We are committed to building long-term relationships with our clients and offer a full range of services: from project discovery, software development, and design to product launch and support.  
</p>
                </div>
                <div className='md:w-[45%] lg:w-[35%]'>
                    <img className="w-[300px] mx-auto my-2 sm:w-[400px] md:w-[600px]" src={AboutImage} alt="/" />
                </div>
            </div>
            <div className='grid my-12 text-sm sm:text-lg'>
                <div className='text-center'>
                    <h1 className='m-2 text-[1.3rem] font-black sm:text-[1.75rem] md:text-[1.95rem]'>Our mission and values</h1>
                    <p className='px-8 py-2 md:px-[100px] lg:px-[270px]'>Our community comprises of Software, UI-UX & Product experts with a passion for building and delivering client-centric solutions</p>
                </div>
                <div className='grid md:grid-cols-6 md:justify-items-center py-12'>
                    <div className='grid grid-cols-6 gap-3 px-4 py-4 md:block md:col-span-2 md:px-16'>
                        <img className='col-span-1 md:mx-auto w-16' src={ClientImage}/>
                        <p className='col-span-5 md:text-center'> <span className='text-lg font-black'>Client-first</span> - With our client-first approach we always meet the correct requirements.</p>
                    </div>                    
                    <div className='grid grid-cols-6 gap-3 px-4 py-4 md:block md:col-span-2 md:px-16'>
                        <img className='col-span-1 md:mx-auto w-16' src={CollaborationImage}/>
                        <p className='col-span-5 md:text-center'> <span className='text-lg font-black'>Collaboration</span> - We believe in collaboration and appreciate opinions of everyone in team.</p>
                    </div>                    
                    <div className='grid grid-cols-6 gap-3 px-4 py-4 md:block md:col-span-2 md:px-16'>
                        <img className='col-span-1 md:mx-auto w-16' src={DedicationImage}/>
                        <p className='col-span-5 md:text-center'> <span className='text-lg font-black'>Dedication</span> - Each and every problem is looked upon with pure dedication.</p>
                    </div>
                    <div className='grid grid-cols-6 gap-3 px-4 py-4 md:block md:col-span-2 md:px-16'>
                        <img className='col-span-1 md:mx-auto w-16' src={DiversityImage}/>
                        <p className='col-span-5 md:text-center'> <span className='text-lg font-black'>Diversity</span> - We appreciate diverse cultures and hence approach problems from multiple perspectives.</p>
                    </div>                    
                    <div className='grid grid-cols-6 gap-3 px-4 py-4 md:block md:col-span-2 md:px-16'>
                        <img className='col-span-1 md:mx-auto w-16' src={SmartImage}/>
                        <p className='col-span-5 md:text-center'> <span className='text-lg font-black'>Simple & Smart</span> - We find simple yet smart ways to solve any given issue. This ensures client satisfaction.</p>
                    </div>
                    <div className='grid grid-cols-6 gap-3 px-4 py-4 md:block md:col-span-2 md:px-16'>
                        <img className='col-span-1 md:mx-auto w-16' src={GrowthImage}/>
                        <p className='col-span-5 md:text-center'> <span className='text-lg font-black'>Growth</span> - We believe that everyone should get an opportunity to grow. And so we provide that.</p>
                    </div>                    
                </div>
            </div>
            
        </div>        
    )
}

export default About;