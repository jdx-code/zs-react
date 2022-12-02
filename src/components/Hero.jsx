import React from "react";
import Typed from "react-typed";

const Hero = () => {
    return(
        <div className="text-green-100 h-screen">
            <div className="max-w-[800px] w-full py-24 mx-auto text-center flex flex-col justify-center">                                
                <div className="md:flex flex-row justify-center items-center">
                    <h1 className="text-4xl font-bold py-4 px-2 sm:text-5xl lg:text-5xl">Solutions that are</h1>
                    <Typed 
                        className="text-4xl font-bold sm:text-5xl lg:text-5xl text-blue-400"
                        strings={['Creative.', 'Effective.', 'Modern.']} 
                        typeSpeed={120} 
                        backSpeed={140} 
                        loop
                    />
                </div>                                    
                <p className="text-lg py-1 px-10 sm:text-xl md:text-xl md:px-[60px]">Accelerate your business growth and boost efficiency from day one with fast and effective IT Solutions.</p>
                <button className="w-[115px] bg-gray-100 text-[#2c0f37] font-black border-[1px] border-[white] text-sm px-2 py-2 mx-auto my-2 rounded-md sm:w-[145px] md:w-[160px] sm:text-lg md:text-xl hover:bg-[#2c0f37] hover:text-gray-100 hover:transition duration-150">Know us more</button>
            </div>                                    
        </div>
    )
}

export default Hero;