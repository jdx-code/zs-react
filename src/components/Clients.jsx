import React from "react";
import IndiaPost from '../assets/indiapost.png';
import Nhidcl from '../assets/nhidcl.jpg';

const Clients = () => {
    return(
        <div className="w-full bg-white text-[#2c0f37] font-black">
            <div className="flex flex-col justify-center items-center py-12">
                <h1 className="text-[1.8rem] py-2 mb-12 sm:text-[2rem] md:text-[2.2rem]">Some of our clients</h1>
                <div className="flex flex-wrap justify-center">
                    <img className="w-[150px] h-[90px] px-6" src={IndiaPost}/>                
                    <img className="w-[150px] h-[90px] px-6" src={Nhidcl}/>                
                    <img className="w-[150px] h-[90px] px-6" src={IndiaPost}/>                
                    <img className="w-[150px] h-[90px] px-6" src={Nhidcl}/>
                    <img className="w-[150px] h-[90px] px-6" src={IndiaPost}/>                
                    <img className="w-[150px] h-[90px] px-6" src={Nhidcl}/>                    
                </div>            
            </div>            
        </div>
    )
}

export default Clients;