import React from "react";

const Offers = () => {
    return (
        <div className="flex flex-col justify-center items-center bg-white text-gray-800 py-24 border-2 border-green-500">
            <h1 className="text-2xl text-center font-bold md:text-3xl">What we offer ?</h1>
            <div className="w-full max-w-[1200px] flex flex-col justify-center items-center m-8 md:flex-row md:flex-wrap border-2 border-yellow-300">
                <div className="w-[280px] h-[300px] border-2 border-gray-700 rounded-lg m-12 px-12 py-8 flex flex-col justify-center items-center">
                    <h1 className="text-2xl">Mobile Development</h1>                    
                    <p>Tailor-made Mobile Applications</p>
                    <p>Boost your business to the next level with our mobile development team.</p>
                </div>

                <div className="w-[280px] h-[300px] border-2 border-gray-700 rounded-lg m-12 px-12 py-8 flex flex-col justify-center items-center">
                    <h1 className="text-2xl">Web Development</h1>                    
                    <p>Scalable, efficient web apps</p>
                    <p>Our web applications are reliable, efficient and regardless of the budget - made for easy scaling.</p>
                </div>

                <div className="w-[280px] h-[300px] border-2 border-gray-700 rounded-lg m-12 px-12 py-8 flex flex-col justify-center items-center">
                    <h1 className="text-2xl">Product Engineering</h1>                    
                    <p>They will love your products.</p>
                    <p>We use the best practices in UI as well as UX of digital products which lead to beautiful and intuitive interfaces.</p>
                </div>

                <div className="w-[280px] h-[300px] border-2 border-gray-700 rounded-lg m-12 px-12 py-8 flex flex-col justify-center items-center">
                    <h1 className="text-2xl">IT Services</h1>                    
                    <p>Experts ready to work.</p>
                    <p>Try our Website/SaaS Hosting, Remote IT outsourcing and Maintenance Support.</p>
                </div>

                <div className="w-[280px] h-[300px] border-2 border-gray-700 rounded-lg m-12 px-12 py-8 flex flex-col justify-center items-center">
                    <h1 className="text-2xl">Cloud Services</h1>                    
                    <p>For us, sky is not the limit.</p>
                    <p>Efficient and flexible cloud based solutions for your data driven applications.</p>
                </div>
            </div>
        </div>
    )
}

export default Offers;