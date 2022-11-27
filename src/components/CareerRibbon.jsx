import React from 'react';

const CareerRibbon = () => {
    return(        
        <div className="w-full mt-[-175px] px-4 flex justify-around items-center md:justify-center md:mx-[-10px]">
            <div className='flex-1 md:flex-none md:px-4'>
                <p className="text-white text-xs sm:text-sm md:text-center md:text-lg">Join our team of experts and boost your career.</p>
            </div>            
            <div className='flex-2 md:flex-none'>
                <button className="w-[75px] bg-gray-100 text-[#2c0f37] font-black border-[1px] border-[white] text-xs py-1 mx-auto mr-2 my-4 rounded-sm sm:w-[85px] md:w-[112px] sm:text-sm md:text-lg hover:bg-[#2c0f37] hover:text-gray-100">Internships</button>            
                <button className="w-[95px] bg-gray-100 text-[#2c0f37] font-black border-[1px] border-[white] text-xs px-2 py-1 mx-auto my-4 rounded-sm sm:w-[110px] md:w-[135px] sm:text-sm md:text-lg hover:bg-[#2c0f37] hover:text-gray-100">Job Openings</button>
            </div>
        </div>        
    )
}

export default CareerRibbon;