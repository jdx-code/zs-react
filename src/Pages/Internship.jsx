import React from 'react';
import { NavLink } from "react-router-dom";
import AboutImage from '../assets/about.svg';
import ClientImage from '../assets/clientfirst.svg';
import CollaborationImage from '../assets/collaboration.svg';
import DedicationImage from '../assets/dedication.svg';
import DiversityImage from '../assets/diversity.svg';
import SmartImage from '../assets/smart.svg';
import GrowthImage from '../assets/growth.svg';
const Internship = () => {
    return(
        <>
            <div className='contactClass w-full p-8 grid md:grid-cols-2 justify-items-center'>                         
                <div className='w-full max-w-[600px] md:p-2'>                
                    <h1 className='text-4xl font-black py-2 md:text-5xl'>Boost your career with our Internship & Professional Training Programs</h1>
                    <p className='w-[300px]  text-md font-black md:text-lg md:w-full'>Through our training, participants can expect to gain valuable skills, experience personal growth, and achieve a deeper understanding of their chosen field, all while having the flexibility to pursue their learning journey individually or as part of a team.</p>
                    <button className="w-[115px] bg-[#2c0f37] text-gray-100 font-black border-[1px] border-[white] text-sm px-2 py-2 mx-auto my-2 rounded-md sm:w-[145px] md:w-[160px] sm:text-lg md:text-xl hover:bg-[#2c0f37] hover:text-gray-100 hover:transition duration-150">
                        <NavLink to="/about">Apply for free</NavLink>
                    </button>
                </div>            
                <div className='w-full max-w-[600px] mt-4 bg-[#06283D] rounded-lg md:mt-2 md:p-2'>
                    <img className="w-[300px] mx-auto my-2 sm:w-[400px] md:w-[600px]" src={AboutImage} alt="/" />
                </div>                            
            </div> 

            <div className='grid my-12 text-sm sm:text-lg'>
                <div className='text-center'>
                    <h1 className='m-2 text-[1.3rem] font-black sm:text-[2rem] md:text-[2.2rem]'>Level-up your career from anywhere</h1>
                    <p className='px-8 py-2 md:px-[100px] lg:px-[270px]'>
                        We bring together motivated individuals who thrive both in solo projects and team endeavors, allowing them to elevate their skills and capabilities in unique and impactful ways.
                    </p>
                </div>
                <div class="bg-white py-4 sm:py-16">
                    <div class="mx-auto max-w-7xl px-6 lg:px-8">
                        <dl class="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
                        <div class="mx-auto flex max-w-xs flex-col gap-y-4">
                            <dt class="text-base leading-7 text-gray-900"> Years of providing quality training </dt>
                            <dd class="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl"> 6+ </dd>
                        </div>
                        <div class="mx-auto flex max-w-xs flex-col gap-y-4">
                            <dt class="text-base leading-7 text-gray-900">Successful candidates</dt>
                            <dd class="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl"> 250+ </dd>
                        </div>
                        <div class="mx-auto flex max-w-xs flex-col gap-y-4">
                            <dt class="text-base leading-7 text-gray-900">Coding hours</dt>
                            <dd class="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl"> 40,000+</dd>
                        </div>
                        </dl>
                    </div>
                </div>

            </div>           

            <div className='grid my-12 text-sm sm:text-lg'>
                <div className='text-center'>
                    <h1 className='m-2 text-[1.3rem] font-black sm:text-[2rem] md:text-[2.2rem]'>How our Internships Work</h1>
                    <p className='px-8 py-2 md:px-[100px] lg:px-[270px]'>
                        At Zephyr, we follow an Agile methodology to create an environment where you can level-up your "hard" & "soft" skills while providing you with the freedom to be creative.
                    </p>
                </div>
                <div class="bg-white py-4 sm:py-16">
                    <div class="mx-auto max-w-xl px-6 lg:px-8 flex flex-col border-2 border-blue-200 hover:border-blue-400">
                        
                        <div class="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50">
                            <div class="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                                <svg class="h-6 w-6 text-gray-600 group-hover:text-indigo-600" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 6a7.5 7.5 0 107.5 7.5h-7.5V6z" />
                                <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 10.5H21A7.5 7.5 0 0013.5 3v7.5z" />
                                </svg>
                            </div>
                            <div class="flex-auto">
                                <a href="#" class="block font-semibold text-gray-900">
                                1. Apply & Interview
                                <span class="absolute inset-0"></span>
                                </a>
                                <p class="mt-1 text-gray-600">Apply online and shine in your personal interview to secure your spot.</p>
                            </div>
                        </div>

                        <div class="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50">
                            <div class="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                                <svg class="h-6 w-6 text-gray-600 group-hover:text-indigo-600" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 6a7.5 7.5 0 107.5 7.5h-7.5V6z" />
                                <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 10.5H21A7.5 7.5 0 0013.5 3v7.5z" />
                                </svg>
                            </div>
                            <div class="flex-auto">
                                <a href="#" class="block font-semibold text-gray-900">
                                2. Path Selection
                                <span class="absolute inset-0"></span>
                                </a>
                                <p class="mt-1 text-gray-600">Choose your journey: group or solo projects, tailored to your goals.</p>
                            </div>
                        </div>

                        <div class="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50">
                            <div class="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                                <svg class="h-6 w-6 text-gray-600 group-hover:text-indigo-600" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 6a7.5 7.5 0 107.5 7.5h-7.5V6z" />
                                <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 10.5H21A7.5 7.5 0 0013.5 3v7.5z" />
                                </svg>
                            </div>
                            <div class="flex-auto">
                                <a href="#" class="block font-semibold text-gray-900">
                                3. Cutting-Edge Industry Projects
                                <span class="absolute inset-0"></span>
                                </a>
                                <p class="mt-1 text-gray-600">Immerse in high-demand tech, collaborating with real clients for practical experience.</p>
                            </div>
                        </div>

                        <div class="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50">
                            <div class="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                                <svg class="h-6 w-6 text-gray-600 group-hover:text-indigo-600" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 6a7.5 7.5 0 107.5 7.5h-7.5V6z" />
                                <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 10.5H21A7.5 7.5 0 0013.5 3v7.5z" />
                                </svg>
                            </div>
                            <div class="flex-auto">
                                <a href="#" class="block font-semibold text-gray-900">
                                4. Holistic Growth
                                <span class="absolute inset-0"></span>
                                </a>
                                <p class="mt-1 text-gray-600">Develop coding skills and refine soft skills, essential for professional success.</p>
                            </div>
                        </div>

                        <div class="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50">
                            <div class="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                                <svg class="h-6 w-6 text-gray-600 group-hover:text-indigo-600" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 6a7.5 7.5 0 107.5 7.5h-7.5V6z" />
                                <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 10.5H21A7.5 7.5 0 0013.5 3v7.5z" />
                                </svg>
                            </div>
                            <div class="flex-auto">
                                <a href="#" class="block font-semibold text-gray-900">
                                5. Unlock Opportunities & Certification
                                <span class="absolute inset-0"></span>
                                </a>
                                <p class="mt-1 text-gray-600">Finish strong, opening doors to your future career, while also receiving a valuable completion certificate.</p>
                            </div>
                        </div>

                    </div>
                </div>


            </div>  
        </>
    )
}

export default Internship;