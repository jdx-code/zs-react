import React from "react";
import Typed from "react-typed";

const Hero = () => {
    return(
        <div className="text-green-100">
            <div className="max-w-[800px] m-2 mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center">                                
                <div className="md:flex flex-row justify-center items-center">
                    <h1 className="text-3xl font-bold py-4 px-2 md:text-5xl sm:text-4xl">Solutions that are</h1>
                    <Typed 
                        className="text-3xl font-bold md:text-5xl sm:text-4xl text-blue-400"
                        strings={['Creative.', 'Effective.', 'Modern.']} 
                        typeSpeed={120} 
                        backSpeed={140} 
                        loop
                    />
                </div>                                    
                <p className="text-lg py-1 px-10">Accelerate your business growth and boost efficiency from day one with fast and effective IT Solutions.</p>
                <button className="bg-green-100 text-black font-medium w-[160px] px-2 py-2 mx-auto my-4 rounded-md hover:bg-green-300">Know us more</button>
            </div>                        
        </div>
    )
}

export default Hero;