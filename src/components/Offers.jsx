import React from "react";
import OfferCard from './OfferCard';
import MobileSVG from '../assets/mobile.svg'
import WebSVG from '../assets/coding.svg'
import CloudSVG from '../assets/cloud.svg'
import ProductSVG from '../assets/layers.svg'
import ITStuffSVG from '../assets/it-stuff.svg'

const Offers = () => {
    return (
        <div className="w-full bg-white text-[#2c0f37] border-2 border-blue-500 py-12">
            <div className='flex flex-col justify-center items-center px-4 md:px-24'>

                <div className="mx-auto px-2 text-center md:px-24">                
                    <h1 className="text-[1.8rem] font-black m-1 px-6 py-1 text-center sm:text-text-[2rem] md:text-text-[2.2rem] md:m-6">What we offer ?</h1>
                </div>            
                
                <div className="w-full grid lg:grid-cols-6 justify-items-center gap-8 mt-8 mb-8">                
                    <OfferCard 
                        src={MobileSVG}
                        heading="Mobile Development" 
                        firstPara="Tailor-made Mobile Apps"
                        secondPara="Boost your business with our mobile development team."
                    ></OfferCard>
                          
                    <OfferCard 
                        src={WebSVG}
                        heading="Web Development" 
                        firstPara="Tailor-made Mobile Apps"
                        secondPara="Boost your business with our mobile development team."
                    ></OfferCard>

                    <OfferCard 
                        src={ProductSVG}
                        heading="Product Engineering" 
                        firstPara="Tailor-made Mobile Apps"
                        secondPara="Boost your business with our mobile development team."
                    ></OfferCard>
                    
                    <div></div>

                    <OfferCard 
                        src={ITStuffSVG}
                        heading="IT Services" 
                        firstPara="Tailor-made Mobile Apps"
                        secondPara="Boost your business with our mobile development team."
                    ></OfferCard>

                    <OfferCard 
                        src={CloudSVG}
                        heading="Cloud Services" 
                        firstPara="Tailor-made Mobile Apps"
                        secondPara="Boost your business with our mobile development team."
                    ></OfferCard>

                    <div></div>
                    
                </div>
            </div>            
        </div>
    )
}

export default Offers;