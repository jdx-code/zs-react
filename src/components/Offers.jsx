import React from "react";

const Offers = () => {
    return (
        <div className="w-full bg-white text-black border-2 border-blue-500 py-12">
            <div className='flex flex-col justify-center items-center px-4 md:px-24 text-gray-800'>

                <div className="mx-2 px-2 text-center md:mx-16 md:px-24">
                    <h1 className="text-lg m-1 px-6 py-1 text-center font-bold md:m-6 md:text-3xl">What we offer ?</h1>
                </div>            
                
                <div className="w-full grid md:grid-cols-6 justify-items-center gap-8 mt-8 mb-8">                
                    <div className="w-full max-w-[85%] border-2 border-gray-700 rounded-lg p-12 text-center shadow-xl md:max-w-[99%] md:col-span-2">
                        <h1 className="text-2xl">Mobile Development</h1>                    
                        <p>Tailor-made Mobile Applications</p>
                        <p>Boost your business to the next level with our mobile development team.</p>
                    </div>

                    <div className="w-full max-w-[85%] border-2 border-gray-700 rounded-lg p-12 text-center shadow-xl md:max-w-[99%] md:col-span-2">
                        <h1 className="text-2xl">Web Development</h1>                    
                        <p>Scalable, efficient web apps</p>
                        <p>Our web applications are reliable, efficient and regardless of the budget - made for easy scaling.</p>
                    </div>

                    <div className="w-full max-w-[85%] border-2 border-gray-700 rounded-lg p-12 text-center shadow-xl md:max-w-[99%] md:col-span-2">
                        <h1 className="text-2xl">Product Engineering</h1>                    
                        <p>They will love your products.</p>
                        <p>We use the best practices in UI as well as UX of digital products which lead to beautiful and intuitive interfaces.</p>
                    </div>
                    
                    <div>
                        
                    </div>

                    <div className="w-full max-w-[85%] border-2 border-gray-700 rounded-lg p-12 text-center shadow-xl md:max-w-[99%] md:col-span-2">
                        <h1 className="text-2xl">IT Services</h1>                    
                        <p>Experts ready to work.</p>
                        <p>Try our Website/SaaS Hosting, Remote IT outsourcing and Maintenance Support.</p>
                    </div>

                    <div className="w-full max-w-[85%] border-2 border-gray-700 rounded-lg p-12 text-center shadow-xl md:max-w-[99%] md:col-span-2">
                        <h1 className="text-2xl">Cloud Services</h1>                    
                        <p>For us, sky is not the limit.</p>
                        <p>Efficient and flexible cloud based solutions for your data driven applications.</p>
                    </div>

                    <div>
                        
                    </div>
                </div>
            </div>            
        </div>
    )
}

export default Offers;