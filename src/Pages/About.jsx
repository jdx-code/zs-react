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
                    <p className='w-[300px]  text-md font-black md:text-lg md:w-full'>Your trusted software partner equipped with IoT, hardware and firmware design expertise. </p>
                </div>                
            </div>
            <div className='flex flex-col-reverse md:flex-row my-12'>
                <div className='px-12 py-4 text-center md:w-[60%]'>
                    <h1 className='text-[1.8rem] font-black sm:text-[2rem] md:text-[2.2rem]'>A li'l about us and our work culture</h1>
                    <p className='text-sm py-2 sm:text-lg md:text-xl'> We work as a united team of professionals doing our best for our clients' success.Focused on time, productivity, and scalability, our developer team designs, prototypes, and builds your IoT, hardware, and custom software. We have proven expertise in Smart Home, embedded devices, manufacturing, logistic, insurance and fintech industries. Reach out to learn how we transform a challenge into a competitive advantage — in weeks, not years.
We (dive) into your business challenges to develop and deliver game-changing solutions for your growth.
</p>
                </div>
                <div className='md:w-[35%]'>
                    <img className="w-[300px] mx-auto my-2 sm:w-[400px] md:w-[600px]" src={AboutImage} alt="/" />
                </div>
            </div>
            <div className='grid my-12'>
                <div className='text-center'>
                    <h1 className='text-[1.7rem] font-black sm:text-[2rem] md:text-[2.2rem]'>Our mission and values</h1>
                    <p className='text-sm px-8 py-2 sm:text-lg md:text-xl md:px-[100px] lg:px-[270px]'>A community comprised of Software, UX, & Product experts with a passion for building and delivering client-centric solutions</p>
                </div>
                <div className='grid md:grid-cols-6 md:justify-items-center py-12'>
                    <div className='grid grid-cols-6 px-4 py-4 md:block md:col-span-2 md:px-16'>
                        <img className='col-span-1 md:mx-auto w-16' src={ClientImage}/>
                        <p className='col-span-5 md:text-center'> <span className='text-lg font-black'>Client-first</span> - With our client-first approach we always meet the correct requirements.</p>
                    </div>                    
                    <div className='grid grid-cols-6 px-4 py-4 md:block md:col-span-2 md:px-16'>
                        <img className='col-span-1 md:mx-auto w-16' src={CollaborationImage}/>
                        <p className='col-span-5 md:text-center'> <span className='text-lg font-black'>Collaboration</span> - We believe in collaboration and appreciate opinions of everyone in team.</p>
                    </div>                    
                    <div className='grid grid-cols-6 px-4 py-4 md:block md:col-span-2 md:px-16'>
                        <img className='col-span-1 md:mx-auto w-16' src={DedicationImage}/>
                        <p className='col-span-5 md:text-center'> <span className='text-lg font-black'>Dedication</span> - Each and every problem is looked upon with pure dedication.</p>
                    </div>
                    <div className='grid grid-cols-6 px-4 py-4 md:block md:col-span-2 md:px-16'>
                        <img className='col-span-1 md:mx-auto w-16' src={DiversityImage}/>
                        <p className='col-span-5 md:text-center'> <span className='text-lg font-black'>Diversity</span> - We appreciate diverse cultures and hence approach problems from multiple perspectives.</p>
                    </div>                    
                    <div className='grid grid-cols-6 px-4 py-4 md:block md:col-span-2 md:px-16'>
                        <img className='col-span-1 md:mx-auto w-16' src={SmartImage}/>
                        <p className='col-span-5 md:text-center'> <span className='text-lg font-black'>Simple & Smart</span> - We find simple yet smart ways to solve any given issue. This ensures client satisfaction.</p>
                    </div>
                    <div className='grid grid-cols-6 px-4 py-4 md:block md:col-span-2 md:px-16'>
                        <img className='col-span-1 md:mx-auto w-16' src={GrowthImage}/>
                        <p className='col-span-5 md:text-center'> <span className='text-lg font-black'>Growth</span> - We believe that everyone should get an opportunity to grow. And so we provide that.</p>
                    </div>                    
                </div>
            </div>
        </div>        
    )
}

export default About;