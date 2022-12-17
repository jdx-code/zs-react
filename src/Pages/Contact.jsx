import React from 'react';

const Contact = () => {
    return(
        <div className='contactClass w-full p-8 grid md:grid-cols-2 justify-items-center'>                         
            <div className='w-full max-w-[600px] md:p-2'>
                <h1 className='text-xl text-[#06283d] font-bold pb-4'>Write to us</h1>                        
                <form method="post" action="" className='flex flex-col w-full'>
                    <input className='p-4 rounded-lg border-2 border-purple-300 bg-purple-200' type="text" name="" placeholder="Your name"/>
                    <input className='my-2 p-4 rounded-lg border-2 border-purple-300 bg-purple-200' type="email" name="" placeholder="Your email"/>
                    <textarea className='p-4 rounded-lg border-2 border-purple-300 bg-purple-200' rows="10" placeholder="Your message"></textarea>
                    <button className='w-full text-white text-xl font-bold bg-[#06283d] border-2 border-[#06283d] my-2 px-4 py-3 rounded-md text-md hover:bg-[#191a2b]'>Submit</button>
                </form>
            </div>            
            <div className='w-full max-w-[600px] mt-4 bg-[#06283D] rounded-lg md:mt-2 md:p-2'>
                <div className='w-full px-6 py-16 md:py-24 lg:px-12 text-white'>                    
                    <blockquote>                    
                        <p className='text-sm text-blue-100 lg:text-xl md:pb-4'>
                        With our deep expertise in Customer and User Experience, we never lose sight of the ultimate goal. At Zephyr, we are dedicated to the success of your business by leveraging technology potential. Our team of engineers develops cutting-edge solutions for startups and established businesses.
                        </p>               
                        <span className='text-sm text-blue-100 lg:text-xl md:pb-4'>Zephyr Solutions</span>                        
                    </blockquote>
                </div>
                <div className='w-full px-6 lg:px-12 py-4 text-white'>
                    <p className='text-xs md:text-lg leading-8'>Tell us your requirements</p>
                    <p className='text-xs md:text-lg font-semibold leading-6'>Mail us <span className='underline italic'>info@zephyrsolutionsgroup.com</span></p>
                    <p className='text-xs md:text-lg font-semibold'>Or call +91-7578094093</p>
                </div>                  
            </div>
        </div>
    )
}

export default Contact;