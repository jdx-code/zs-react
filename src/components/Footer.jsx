import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Footer = () => {
    return(
        <div className='footerClass bg-[#191a2b]'>
            <div className='w-full max-w-[95%] m-auto p-4 md:pt-8 grid md:grid-cols-6 text-white'>
                <div className='w-full max-w-[95%] text-xs font-bold mb-8 col-span-4 md:border-r-2 md:border-blue-200'>
                    <p className='font-bold text-lg pb-3 underline'>Our Services</p>
                    <div className='grid grid-cols-6 '>                
                        <div className='col-span-3 sm:col-span-2'>
                            <ul>                            
                                <li className='pb-2'>
                                    <a href="#">Web Development</a>
                                </li>
                                <li className='pb-2'>
                                    <a href="#">Turbo Hosting Services</a>
                                </li>
                                <li className='pb-2'>
                                    <a href="#">Internships & Training</a>
                                </li>
                                <li className='pb-2'>
                                    <a href="#">Internships & Training</a>
                                </li>
                            </ul>
                        </div>  
                        <div className='col-span-3 sm:col-span-2'>
                            <ul>     
                                <li className='pb-2'>
                                    <a href="#">UI/UX Design</a>
                                </li>                       
                                <li className='pb-2'>
                                    <a href="#">Mobile Application</a>
                                </li>
                                <li className='pb-2'>
                                    <a href="#">Cloud Services</a>
                                </li>
                                <li className='pb-2'>
                                    <a href="#">Product Engineering</a>
                                </li>                                
                            </ul>
                        </div> 
                        <div className='col-span-6 sm:col-span-2'>
                            <ul>
                                <li className='pb-2'>
                                    <a href="#">SEO & Digital Marketing</a>
                                </li> 
                                <li className='pb-2'>
                                    <a href="#">IT Products & Services</a>
                                </li>                            
                                <li className='pb-2'>
                                    <a href="#">Maintenance Services</a>
                                </li>
                            </ul>
                        </div>             
                    </div>
                </div>
                
                <div className='grid grid-cols-4 col-span-2 text-xs font-bold mb-8'>                    
                    <div className='col-span-3'>
                        <p className='font-bold text-lg pb-3 underline'>Reach Us</p>
                        <p className='pb-1'>Beltola Tiniali</p>
                        <p className='pb-1'>Guwahati-781028</p>
                        <p className='pb-1'>Assam, India</p>
                        <p className='pb-1'>+91-7578094093</p>
                        <p className='pb-1'>info@zephyrsolutionsgroup.com</p>                    
                    </div>
                    <div className='col-span-1 grid justify-items-end items-center'>
                        <ul>
                            <li className='pb-4'>
                                <a href="#"><FontAwesomeIcon icon={['fab', 'twitter']} size="lg"/></a>
                            </li>
                            <li className='pb-4'>
                                <a href="#"><FontAwesomeIcon icon={['fab', 'linkedin']} size="lg"/></a>
                            </li>
                            <li className='pb-4'>
                                <a href="#"><FontAwesomeIcon icon={['fab', 'facebook']} size="lg"/></a>
                            </li>
                            <li className='pb-4'>
                                <a href="#"><FontAwesomeIcon icon={['fab', 'github']} size="lg"/></a>
                            </li>
                        </ul>
                    </div>                    
                </div>            
            </div>
        </div>        
    )
}

export default Footer;