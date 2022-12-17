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
                    <p className='w-[300px]  text-md font-black md:text-lg md:w-full'>We are your trusted software partner providing smooth and flexible IT services for businesses.</p>
                </div>                
            </div>
            <div className='flex flex-col-reverse items-center md:flex-row my-12'>
                <div className='px-12 py-4 text-center md:w-[60%]'>
                    <h1 className='font-black text-[1.3rem] sm:text-[2rem] md:text-[2.2rem]'>Web & Mobile Development</h1>
                    <p className='py-2 text-sm sm:text-lg'> We deliver web solutions from simple websites to engaging applications. We build regular web apps, as well as SPA and PWA. We also create high-quality mobile apps that bring profit for your business. From idea validation to successful launch, we focus on the fastest route to market – respecting your time and pushing your web and mobile app to success.
Scale your web/mobile app development with experienced full-stack developers and product experts.
</p>
                </div>
                <div className='md:w-[40%]'>
                    <img className="w-[125px] mx-auto my-2 sm:w-[180px] md:w-[200px]" src={WebSVG} alt="/" />
                </div>
            </div>           

            <div className='flex flex-col items-center md:flex-row my-12'>
                <div className='md:w-[40%]'>
                    <img className="w-[125px] mx-auto my-2 sm:w-[180px] md:w-[200px]" src={CloudSVG} alt="/" />
                </div>
                <div className='px-12 py-4 text-center md:w-[60%]'>
                    <h1 className='text-[1.8rem] font-black sm:text-[2rem] md:text-[2.2rem]'>Cloud Services</h1>
                    <p className='py-2 text-sm sm:text-lg'> Plan your migration and move your servers to the cloud. Amazon AWS, Microsoft Azure, Google Cloud Platform, Heroku — we have mastered migrations to all major cloud providers. By incorporating cloud applications, we accelerate business transformation and get the most out of high-performance cloud environments. Our team of highly skilled and accomplished professionals enables secured infrastructure investments and simplifies the transition to SaaS, PaaS, and IaaS business models. 
</p>
                </div>                
            </div>

            <div className='flex flex-col-reverse items-center md:flex-row my-12'>
                <div className='px-12 py-4 text-center md:w-[60%]'>
                    <h1 className='font-black sm:text-[2rem] md:text-[2.2rem]'>Tech & Agile Consulting</h1>
                    <p className='py-2 text-sm sm:text-lg'> Our team of experts provide flexible and fast analysis and development helping organizations boom in their businesses. We provide expert guidance on technology architecture, strategic planning, QA, design and delivery. Quality assurance, automated tests, test-driven development, and peer code review are essential parts of the digital product development process. We understand how important a good process is and thus we deliver the full lifecycle of a successful software release. </p>
                </div>
                <div className='md:w-[40%]'>
                    <img className="w-[125px] mx-auto my-2 sm:w-[180px] md:w-[200px]" src={ITStuffSVG} alt="/" />
                </div>
            </div>

            <div>
                <h1 className='text-3xl font-black py-2 md:text-4xl text-center m-12'>Domains & Hosting Plans</h1>
                <div className='grid mx-12 sm:mx-36 md:grid-cols-3 md:gap-3 lg:gap-8 md:mx-8 lg:mx-20 lg:px-2 my-12 text-center'>
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

                    <div className='domainCard p-12 my-4 md:my-0 bg-[#EDE4E0] border-4 border-pink-200 rounded-xl hover:border-2 hover:border-[#3b1949] hover:scale-105 hover:shadow-2xl duration-300'>
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