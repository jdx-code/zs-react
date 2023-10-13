import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Footer = () => {
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();

    return(
        <div className='footerClass bg-[#191a2b] text-white'>
            <div className='w-full max-w-[95%] m-auto p-4 md:pt-8 grid md:grid-cols-6'>
                <div className='w-full max-w-[95%] text-xs font-bold mb-8 col-span-4 md:border-r-2 md:border-blue-200'>
                    <p className='font-bold text-lg pb-3 underline'>Our Services</p>
                    <div className='grid grid-cols-6 '>                
                        <div className='col-span-3 sm:col-span-2'>
                            <ul>                            
                                <li className='pb-2'>
                                    <a href="/#services">Web Development</a>
                                </li>
                                <li className='pb-2'>
                                    <a href="/#services">Mobile Application</a>
                                </li>
                                <li className='pb-2'>
                                    <a href="/#services">Product Engineering</a>
                                </li>
                                <li className='pb-2'>
                                    <a href="/internship">Internships & Training</a>
                                </li>
                            </ul>
                        </div>  
                        <div className='col-span-3 sm:col-span-2'>
                            <ul>     
                                <li className='pb-2'>
                                    <a href="/#services">UI/UX Design</a>
                                </li>                       
                                <li className='pb-2'>
                                    <a href="/#services">Cloud Services</a>
                                </li>
                                <li className='pb-2'>
                                    <a href="/#services">IT Outsourcing</a>
                                </li>
                                <li className='pb-2'>
                                    <a href="/#services">Agile Consulting</a>
                                </li>                                
                            </ul>
                        </div> 
                        <div className='col-span-6 sm:col-span-2'>
                            <ul>
                                <li className='pb-2'>
                                    <a href="/about">SEO & Digital Marketing</a>
                                </li> 
                                <li className='pb-2'>
                                    <a href="/about">IT Products & Services</a>
                                </li>                            
                                <li className='pb-2'>
                                    <a href="/about">Maintenance & Support</a>
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
                                <a href="https://twitter.com/zephyrsolx"><FontAwesomeIcon icon={['fab', 'twitter']} size="lg"/></a>
                            </li>
                            <li className='pb-4'>
                                <a href="https://www.linkedin.com/in/zephyrsolutionsgroup/"><FontAwesomeIcon icon={['fab', 'linkedin']} size="lg"/></a>
                            </li>
                            <li className='pb-4'>
                                <a href="https://www.facebook.com/zephyrsolutionsgroup"><FontAwesomeIcon icon={['fab', 'facebook']} size="lg"/></a>
                            </li>
                            <li className='pb-4'>
                                <a href="https://github.com/zephyrsolutions"><FontAwesomeIcon icon={['fab', 'github']} size="lg"/></a>
                            </li>
                        </ul>
                    </div>                    
                </div>                        
            </div>        
            <div className='w-full'>
                <p className='text-center pb-4 text-sm'>Zephyr Solutions &#169; {currentYear} | All rights reserved. </p>                           
            </div>    
            
        </div>        
    )
}

export default Footer;