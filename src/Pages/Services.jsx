import React from 'react';
import ChooseUsImage from '../assets/choose.png'
import LaunchSupport from '../assets/support-svgrepo-com.svg';
import WebSVG from '../assets/coding.svg'
import CloudSVG from '../assets/cloud.svg'
import ITStuffSVG from '../assets/it-stuff.svg'


const Services = () => {
    return(
        <div>
            <div className='servicesClass w-full h-[500px]'> 
                <div className='px-12 py-[245px] flex flex-col flex-wrap justify-center text-gray-300 md:w-[700px]'>
                    <h1 className='text-4xl font-black py-2 md:text-5xl'>Services</h1>
                    <p className='w-[300px]  text-md font-black md:text-lg md:w-full'>Your trusted software partner equipped with IoT, hardware and firmware design expertise. </p>
                </div>                
            </div>
            <div className='flex flex-col-reverse items-center md:flex-row my-12'>
                <div className='px-12 py-4 text-center md:w-[60%]'>
                    <h1 className='text-[1.8rem] font-black sm:text-[2rem] md:text-[2.2rem]'>Web & Mobile Development</h1>
                    <p className='text-sm py-2 sm:text-lg md:text-xl'> We work as a united team of professionals doing our best for our clients' success.Focused on time, productivity, and scalability, our developer team designs, prototypes, and builds your IoT, hardware, and custom software. We have proven expertise in Smart Home, embedded devices, manufacturing, logistic, insurance and fintech industries. Reach out to learn how we transform a challenge into a competitive advantage — in weeks, not years.
We (dive) into your business challenges to develop and deliver game-changing solutions for your growth.
</p>
                </div>
                <div className='md:w-[40%]'>
                    <img className="w-[300px] mx-auto my-2 sm:w-[400px] md:w-[250px]" src={WebSVG} alt="/" />
                </div>
            </div>           

            <div className='flex flex-col-reverse items-center md:flex-row my-12'>
                <div className='md:w-[40%]'>
                    <img className="w-[300px] mx-auto my-2 sm:w-[400px] md:w-[250px]" src={CloudSVG} alt="/" />
                </div>
                <div className='px-12 py-4 text-center md:w-[60%]'>
                    <h1 className='text-[1.8rem] font-black sm:text-[2rem] md:text-[2.2rem]'>Cloud Services</h1>
                    <p className='text-sm py-2 sm:text-lg md:text-xl'> We work as a united team of professionals doing our best for our clients' success.Focused on time, productivity, and scalability, our developer team designs, prototypes, and builds your IoT, hardware, and custom software. We have proven expertise in Smart Home, embedded devices, manufacturing, logistic, insurance and fintech industries. Reach out to learn how we transform a challenge into a competitive advantage — in weeks, not years.
We (dive) into your business challenges to develop and deliver game-changing solutions for your growth.
</p>
                </div>                
            </div>

            <div className='flex flex-col-reverse items-center md:flex-row my-12'>
                <div className='px-12 py-4 text-center md:w-[60%]'>
                    <h1 className='text-[1.8rem] font-black sm:text-[2rem] md:text-[2.2rem]'>Tech & Agile Consulting</h1>
                    <p className='text-sm py-2 sm:text-lg md:text-xl'> We work as a united team of professionals doing our best for our clients' success.Focused on time, productivity, and scalability, our developer team designs, prototypes, and builds your IoT, hardware, and custom software. We have proven expertise in Smart Home, embedded devices, manufacturing, logistic, insurance and fintech industries. Reach out to learn how we transform a challenge into a competitive advantage — in weeks, not years.
We (dive) into your business challenges to develop and deliver game-changing solutions for your growth.
</p>
                </div>
                <div className='md:w-[40%]'>
                    <img className="w-[300px] mx-auto my-2 sm:w-[400px] md:w-[250px]" src={ITStuffSVG} alt="/" />
                </div>
            </div>

            <div>
                <h1 className='text-3xl font-black py-2 md:text-4xl text-center m-12'>Domains & Hosting Plans</h1>
                <div className='grid md:grid-cols-3 gap-24 mx-24 my-12 text-center'>
                    <div className='domainCard p-12 bg-[#EDE4E0] border-4 border-pink-200 rounded-xl hover:border-2 hover:border-[#3b1949] hover:scale-105 hover:shadow-2xl duration-300'>
                        <h3>Zephyr Basic</h3>
                        <ul>
                            <li>Single Domain</li>
                            <li>10 GB Disk Space</li>
                            <li>100 GB Transfer</li>
                            <li>1 Database</li>
                            <li>5 Email Account</li>
                        </ul>
                        <button>Buy @ 199/month</button>
                    </div>

                    <div className='domainCard p-12 bg-[#EDE4E0] border-4 border-pink-200 rounded-xl hover:border-2 hover:border-[#3b1949] hover:scale-105 hover:shadow-2xl duration-300'>
                        <h3>Zephyr Standard</h3>
                        <ul>
                            <li>3 Domains</li>
                            <li>Unmetered Disk Space</li>
                            <li>Unmetered Transfer</li>
                            <li>10 Databases</li>
                            <li>10 Email Accounts</li>
                        </ul>
                        <button>Buy @ 299/month</button>
                    </div>

                    <div className='domainCard p-12 bg-[#EDE4E0] border-4 border-pink-200 rounded-xl hover:border-2 hover:border-[#3b1949] hover:scale-105 hover:shadow-2xl duration-300'>
                        <h3>Zephyr Pro</h3>
                        <ul>
                            <li>Unlimited Domains</li>
                            <li>Unmetered Disk Space</li>
                            <li>Unmetered Transfer</li>
                            <li>Unlimited Databases</li>
                            <li>Unlimited Email Accounts</li>
                        </ul>
                        <button>Buy @ 399/month</button>
                    </div>
                </div>                
            </div>
            
            
        </div>
    )
}

export default Services;