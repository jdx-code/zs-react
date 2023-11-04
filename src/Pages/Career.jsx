import React from 'react';
import ChooseUsImage from '../assets/choose.png'
import LaunchSupport from '../assets/support-svgrepo-com.svg';
import Techstacks from '../components/Techstacks';

const Career = () => {
    return(
<div>
            <div className='careerClass w-full h-[500px]'> 
                <div className='px-12 py-[245px] flex flex-col flex-wrap justify-center text-gray-300 md:w-[525px]'>
                    <h1 className='text-4xl font-black py-2 md:text-5xl'>Join Our Team</h1>
                    <p className='w-[300px]  text-md font-black md:text-lg md:w-full'>Collaborative working environment enabling you to learn and grow in quick time.</p>
                </div>                
            </div>
            <div className='flex flex-col-reverse md:flex-row my-12'>
                <div className='px-12 py-4 md:w-[50%]'>
                    <h1 className='text-[1.8rem] font-black sm:text-[2rem] md:text-[2rem]'>Job Openings</h1>
                    <p className='text-sm py-2 sm:text-lg md:text-xl'> No positions are open at this moment.</p>
                    <p className='text-sm py-2 sm:text-lg md:text-lg'> You can still send us your updated CV </p>
                    <p className='text-sm py-2 sm:text-lg md:text-lg font-bold italic underline'> mail@zephyrsolutionsgroup.com </p>
                </div>
                <div className='px-12 py-4 md:w-[50%]'>
                    <h1 className='text-[1.8rem] font-black sm:text-[2rem] md:text-[2rem]'>Internship Openings</h1>
                    <p className='text-sm py-2 sm:text-lg md:text-xl'> Everyone needs to start somewhere. But with Zephyr, it's not any ordinary start. We offer industry based projects for Interns to prepare themselves for a better tomorrow.</p>                    
                    <p className='text-sm py-2 sm:text-lg md:text-lg'> Register your name for an Internship Opportunity. Click 
                        <span className='text-xl font-bold text-purple-800'>
                            <a href="https://forms.gle/9Hcbh2T7bqnPvBd86"> here</a>
                        </span>.
                    </p>
                </div>
            </div>                      
            
            <div className='careerStack'>
                <Techstacks/>
            </div>
            
            
        </div>
    )
}

export default Career;