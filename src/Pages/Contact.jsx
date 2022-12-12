import React from 'react';

const Contact = () => {
    return(
        <div className='contactClass w-full p-8 grid md:grid-cols-2 justify-items-center'>                         
            <div className='w-full max-w-[600px] md:p-2'>
                <h1 className='text-xl text-blue-900 pb-4'>Write to us</h1>                        
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
                        <p className='text-sm text-blue-100 lg:text-xl md:pb-4'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor ullam voluptas magnam deleniti maiores recusandae. Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque sapiente alias porro laborum ad molestiae doloribus fugit commodi dolorum provident. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, ratione.</p>               
                        <span className='text-sm text-blue-100 lg:text-xl md:pb-4'>Web Studio</span>                        
                    </blockquote>
                </div>                  
            </div>
        </div>
    )
}

export default Contact;