import React from "react";
import OfferCard from './OfferCard';

const Offers = () => {
    return (
        <div className="w-full bg-white text-black border-2 border-blue-500 py-12">
            <div className='flex flex-col justify-center items-center px-4 md:px-24 text-gray-800'>

                <div className="mx-2 px-2 text-center md:mx-16 md:px-24">
                    <h1 className="text-lg m-1 px-6 py-1 text-center font-bold sm:text-2xl md:text-4xl md:m-6">What we offer ?</h1>
                </div>            
                
                <div className="w-full grid md:grid-cols-6 justify-items-center gap-8 mt-8 mb-8">                
                    <OfferCard 
                        heading="Mobile Development" 
                        firstPara="Tailor-made Mobile Applications"
                        secondPara="Boost your business to the next level with our mobile development team."
                    ></OfferCard>
                          
                    <OfferCard 
                        heading="Web Development" 
                        firstPara="Scalable, efficient web apps"
                        secondPara="Our web applications are reliable, efficient and regardless of the budget - made for easy scaling."
                    ></OfferCard>

                    <OfferCard 
                        heading="Product Engineering" 
                        firstPara="They will love your products."
                        secondPara="We use the best practices in UI as well as UX of digital products which lead to beautiful and intuitive interfaces."
                    ></OfferCard>
                    
                    <div></div>

                    <OfferCard 
                        heading="IT Services" 
                        firstPara="Experts ready to work."
                        secondPara="Try our Website/SaaS Hosting, Remote IT outsourcing and Maintenance Support."
                    ></OfferCard>

                    <OfferCard 
                        heading="Cloud Services" 
                        firstPara="For us, sky is not the limit."
                        secondPara="Efficient and flexible cloud based solutions for your data driven applications."
                    ></OfferCard>

                    <div></div>
                    
                </div>
            </div>            
        </div>
    )
}

export default Offers;