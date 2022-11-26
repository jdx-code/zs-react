import React from "react";
import IndiaPost from '../assets/indiapost.png';
import Nhidcl from '../assets/nhidcl.jpg';

const Clients = () => {
    return(
        <div className="w-full bg-white">
            <div className="flex flex-col justify-center items-center py-12">
                <h1 className="py-2 mb-12 text-2xl font-bold md:text-3xl">Some of our clients</h1>
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