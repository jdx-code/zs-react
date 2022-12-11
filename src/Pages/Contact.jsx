import React from 'react';

const Contact = () => {
    return(
        <div className='contactClass w-full p-8 grid grid-cols-2 justify-items-center'>                         
            <div className='w-full max-w-[600px] p-2'>
                <h1 className='text-xl text-blue-900 pb-4'>Write to us</h1>                        
                <form method="post" action="" className='flex flex-col w-full max-w-[600px]'>
                    <input className='p-4 rounded-lg border-2 border-purple-300 bg-purple-200' type="text" name="" placeholder="Your name"/>
                    <input className='my-2 p-4 rounded-lg border-2 border-purple-300 bg-purple-200' type="email" name="" placeholder="Your email"/>
                    <textarea className='p-4 rounded-lg border-2 border-purple-300 bg-purple-200' rows="10" placeholder="Your message"></textarea>
                </form>
            </div>            
            <div className='w-full max-w-[600px] p-2 bg-[#06283D] rounded-lg'>
                <div className='w-full px-12 py-24 text-white'>                    
                    <blockquote>                    
                        <p className='text-xl text-blue-100 pb-4'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor ullam voluptas magnam deleniti maiores recusandae. Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque sapiente alias porro laborum ad molestiae doloribus fugit commodi dolorum provident. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, ratione.</p>               
                        <span>Team Zephyr</span>
                    </blockquote>
                </div>                
            </div>
        </div>
    )
}

export default Contact;