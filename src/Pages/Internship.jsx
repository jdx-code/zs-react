import React from 'react';
import { NavLink } from "react-router-dom";
import InternshipImage from '../assets/internship.svg';
import DeveloperImage from '../assets/dev.svg';

const Internship = () => {
    return(
        <>     
            <div className='flex flex-col-reverse items-center md:flex-row my-20 text-sm sm:text-lg'>
                <div className='px-12 py-4 text-center md:w-[50%] lg:w-[60%]'>
                    <h1 className='m-4 text-[1.3rem] sm:text-[2rem] md:text-[2.4rem] font-black leading-9'>Boost your career with our Internship & Professional Training Programs</h1>
                    <p className='py-2'>Through our training, participants can expect to gain valuable skills, experience personal growth, and achieve a deeper understanding of their chosen field, all while having the flexibility to pursue their learning journey individually or as part of a team.</p>
                    <button className="m-4 w-[115px] bg-[#2c0f37] text-gray-100 font-black border-[1px] border-[white] text-sm px-2 py-2 rounded-md sm:w-[145px] md:w-[160px] sm:text-lg md:text-xl hover:border-[#2c0f37] hover:bg-[white] hover:text-[#2c0f37] hover:transition duration-150">
                        <a target="_blank" href="https://forms.gle/cUieKUCQBBcWuXyT6">Apply for free</a>
                    </button>
                </div>
                <div className='md:w-[45%] lg:w-[35%]'>
                    <img className="w-[300px] mx-auto my-2 sm:w-[400px] md:w-[600px]" src={InternshipImage} alt="/" />
                </div>
            </div>

            <div className='grid my-10 text-sm sm:text-lg'>
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
                    <h1 className='m-2 text-[1.3rem] font-black sm:text-[2rem] md:text-[2.2rem]'>How our internships work</h1>
                    <p className='px-8 py-2 md:px-[100px] lg:px-[270px]'>
                        At Zephyr, we follow an Agile methodology to create an environment where you can level-up your "hard" & "soft" skills while providing you with the freedom to be creative.
                    </p>
                </div>
                <div class="bg-white py-4 sm:py-16">
                    <div class="mx-auto max-w-xl px-6 lg:px-8 flex flex-col border-2 rounded-lg border-blue-200 hover:border-blue-400">
                        
                        <div class="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50">
                            <div class="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                                <svg height="32px" version="1.1" viewBox="0 0 32 32" width="32px" xmlns="http://www.w3.org/2000/svg" sketch="http://www.bohemiancoding.com/sketch/ns" xlink="http://www.w3.org/1999/xlink"><title/><desc/><defs/><g fill="none" fill-rule="evenodd" id="Page-1" stroke="none" stroke-width="1"><g fill="#000000" id="icon-27-one-finger-click"><path d="M13.1244203,0 L13.1244203,4 L14.1244203,4 L14.1244203,0 L13.1244203,0 L13.1244203,0 Z M19.5269278,2.57686389 L16.418344,5.09414546 L17.0476644,5.87129142 L20.1562482,3.35400985 L19.5269278,2.57686389 L19.5269278,2.57686389 Z M21.5318564,9.3124234 L17.6343761,8.41261918 L17.4094251,9.38698925 L21.3069053,10.2867935 L21.5318564,9.3124234 L21.5318564,9.3124234 Z M5.94193535,10.2867935 L9.83941561,9.38698925 L9.61446455,8.41261918 L5.71698429,9.3124234 L5.94193535,10.2867935 L5.94193535,10.2867935 Z M7.09259245,3.35400985 L10.2011763,5.87129142 L10.8304967,5.09414546 L7.72191284,2.57686389 L7.09259245,3.35400985 L7.09259245,3.35400985 Z M19.6231595,30.9999999 C23.7659915,31 27.1244203,27.4147752 27.1244203,23.5 C27.1244203,23.5 27.1244203,25.8132437 27.1244203,23.5 L27.1244203,19.7491622 L27.1244203,17.5016756 C27.1244203,16.6723231 26.4586231,16 25.6244203,16 C24.7959932,16 24.1244203,16.6711894 24.1244203,17.5016756 L24.1244203,18 L23.1244203,18 L23.1244203,15.5064385 C23.1244203,14.6744555 22.4586231,14 21.6244203,14 C20.7959932,14 20.1244203,14.6715406 20.1244203,15.5064385 L20.1244203,17 L19.1244203,17 L19.1244203,14.5064385 C19.1244203,13.6744555 18.4586231,13 17.6244203,13 C16.7959932,13 16.1244203,13.6715406 16.1244203,14.5064385 L16.1244203,18 L15.1244203,18 L15.1244203,7.50524116 C15.1244203,6.67391942 14.4586231,6 13.6244203,6 C12.7959932,6 12.1244203,6.66712976 12.1244203,7.50524116 L12.1244203,18.7999878 C10.0660207,16.599567 7.35605012,14.1791206 6.24545305,15.2957153 C5.15828327,16.3887562 7.95978233,19.4007216 11.8717958,25.9830936 C13.6344162,28.9488875 15.8647052,30.9995418 19.6231595,30.9999999 L19.6231595,30.9999999 Z M28.1244203,23.5 C28.1244203,28.1944206 24.3188409,32 19.6244203,32.0000003 C16.5115051,32.0000003 13.2262274,30.5474856 10.9652407,26.4282229 C7.70175208,20.4825159 3.52827319,16.5832077 5.51553361,14.5959473 C6.9371827,13.1742982 9.16926196,14.5381668 11.1244203,16.3667868 L11.1244203,16.3667868 L11.1244203,7.50840855 C11.1244203,6.11541748 12.2437085,5 13.6244203,5 C15.0147583,5 16.1244203,6.12305276 16.1244203,7.50840855 L16.1244203,12.4983653 C16.5422506,12.1853054 17.0616174,12 17.6244203,12 C18.7069384,12 19.6193054,12.6774672 19.9702378,13.6281239 C20.4110134,13.2379894 20.9901312,13 21.6244203,13 C23.0147583,13 24.1244203,14.1182256 24.1244203,15.4976267 L24.1244203,15.5110883 C24.5422506,15.1985158 25.0616174,15.014191 25.6244203,15.014191 C27.0147583,15.014191 28.1244203,16.1335355 28.1244203,17.5143168 L28.1244203,23.5 L28.1244203,23.5 Z" id="one-finger-click"/></g></g></svg>
                            </div>
                            <div class="flex-auto">
                                <p class="block font-semibold text-gray-900">
                                1. Apply & Interview
                                <span class="absolute inset-0"></span>
                                </p>
                                <p class="mt-1 text-gray-800">Apply online and shine in your personal interview to secure your spot.</p>
                            </div>
                        </div>

                        <div class="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50">
                            <div class="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                            <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><title/><g id="Street_sign"><path d="M458.0884,234.4116l-47.5-47.5a17.0681,17.0681,0,0,0-12.0884-5.01H273.0981V47a17.0981,17.0981,0,1,0-34.1962,0V67.9019H113.5a17.0681,17.0681,0,0,0-12.0884,5.01l-47.5,47.5a17.0893,17.0893,0,0,0,0,24.1768l47.5,47.5a17.0681,17.0681,0,0,0,12.0884,5.01H238.9019V447.9019H180a17.0981,17.0981,0,0,0,0,34.1962H332a17.0981,17.0981,0,0,0,0-34.1962H273.0981V311.0981H398.5a17.0681,17.0681,0,0,0,12.0884-5.01l47.5-47.5A17.0893,17.0893,0,0,0,458.0884,234.4116Z"/></g></svg>

                            </div>
                            <div class="flex-auto">
                                <p class="block font-semibold text-gray-900">
                                2. Path Selection
                                <span class="absolute inset-0"></span>
                                </p>
                                <p class="mt-1 text-gray-800">Choose your journey: group or solo projects, tailored to your goals.</p>
                            </div>
                        </div>

                        <div class="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50">
                            <div class="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                            
                            <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><title/><g data-name="1" id="_1"><path d="M365.64,450H136.77a50.17,50.17,0,0,1-50.11-50.11V98.11A50.17,50.17,0,0,1,136.77,48h150.1a15,15,0,0,1,10.6,4.39L411.35,166.27a15,15,0,0,1,4.4,10.61v223A50.17,50.17,0,0,1,365.64,450ZM136.77,78a20.13,20.13,0,0,0-20.11,20.11V399.89A20.13,20.13,0,0,0,136.77,420H365.64a20.13,20.13,0,0,0,20.11-20.11V183.09L280.65,78Z"/><path d="M400.75,191.88H322a50.17,50.17,0,0,1-50.11-50.11V63a15,15,0,0,1,30,0v78.77A20.13,20.13,0,0,0,322,161.88h78.77a15,15,0,0,1,0,30Z"/><path d="M198.63,358.06A15,15,0,0,1,188,353.67l-40.3-40.31a15,15,0,0,1,0-21.21l40.3-40.3a15,15,0,0,1,21.22,21.21l-29.7,29.7,29.7,29.69a15,15,0,0,1-10.61,25.61Z"/><path d="M303.77,358.06a15,15,0,0,1-10.6-25.61l29.69-29.69-29.69-29.7a15,15,0,1,1,21.21-21.21l40.3,40.3a15,15,0,0,1,0,21.21l-40.3,40.31A15,15,0,0,1,303.77,358.06Z"/><path d="M239.22,382.26a14.67,14.67,0,0,1-2.7-.25,15,15,0,0,1-12.08-17.44l24-132A15,15,0,0,1,278,237.94l-24,132A15,15,0,0,1,239.22,382.26Z"/></g></svg>

                            </div>
                            <div class="flex-auto">
                                <p class="block font-semibold text-gray-900">
                                3. Cutting-Edge Tech & Industry Projects
                                <span class="absolute inset-0"></span>
                                </p>
                                <p class="mt-1 text-gray-800">Dive into high-demand technologies while working on real-world industrial projects.</p>
                            </div>
                        </div>

                        <div class="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50">
                            <div class="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                            
                            <svg viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg"><rect fill="none" height="256" width="256"/><path d="M240.7,121.8,216,134.1,184,72.9l25-12.5a7.9,7.9,0,0,1,10.6,3.4l24.6,47.1A8,8,0,0,1,240.7,121.8Z" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/><path d="M40,133.1,15.3,120.7a7.9,7.9,0,0,1-3.5-10.8L36.4,62.8A8,8,0,0,1,47,59.3L72,71.8Z" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/><path d="M216,134.1l-16,18.8-36.8,36.8a8.5,8.5,0,0,1-7.6,2.1l-58-14.5a8,8,0,0,1-2.9-1.5L40,133.1" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/><path d="M200,152.9l-44-32-12.8,9.6a32.1,32.1,0,0,1-38.4,0l-5.4-4.1a8.1,8.1,0,0,1-.9-12.1l39.2-39.1a7.9,7.9,0,0,1,5.6-2.3H184" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/><path d="M72.6,71.8l51.3-15a8,8,0,0,1,5.5.4L164,72.9" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/><path d="M112,212.9l-30.1-7.6a7.4,7.4,0,0,1-3.3-1.7L56,184" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/></svg>

                            </div>
                            <div class="flex-auto">
                                <p href="#" class="block font-semibold text-gray-900">
                                4. Holistic Growth, Including Client Handling Skills
                                <span class="absolute inset-0"></span>
                                </p>
                                <p class="mt-1 text-gray-800">Develop coding skills, refine soft skills, and enhance client handling abilities essential for professional success.</p>
                            </div>
                        </div>

                        <div class="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50">
                            <div class="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                            <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg"><title/><g id="certification"><path d="M61,8H3A1,1,0,0,0,2,9V47a1,1,0,0,0,1,1H39v7a1,1,0,0,0,.53.88,1,1,0,0,0,1-.05L46,52.2l5.45,3.63A1,1,0,0,0,53,55V48h8a1,1,0,0,0,1-1V9A1,1,0,0,0,61,8ZM46,45a7,7,0,1,1,7-7A7,7,0,0,1,46,45Zm14,1H53V44a.88.88,0,0,0-.06-.28,9,9,0,1,0-13.88,0A.88.88,0,0,0,39,44v2H4V10H60Z"/><path d="M12,22H52a4,4,0,0,0,0-8H12a4,4,0,0,0,0,8Z"/><path d="M38,27H25a1,1,0,0,0,0,2H38a1,1,0,0,0,0-2Z"/><path d="M34,34H15a1,1,0,0,0,0,2H34a1,1,0,0,0,0-2Z"/><circle cx="46" cy="38" r="4"/></g></svg>
                            </div>
                            <div class="flex-auto">
                                <p href="#" class="block font-semibold text-gray-900">
                                5. Obtain your certification and unlock a world of opportunities. 
                                <span class="absolute inset-0"></span>
                                </p>
                                <p class="mt-1 text-gray-800">With your certification, endless possibilities emerge. Take the next step towards success.</p>
                            </div>
                        </div>

                    </div>
                </div>


            </div>  


            <div className='flex flex-col items-center md:flex-row my-12'>            
                <div className='md:w-[45%]'>
                    <img className="w-[125px] mx-auto my-2 sm:w-[180px] md:w-[400px]" src={DeveloperImage} alt="/" />
                </div>
                <div className='px-12 py-4 text-center md:w-[55%]'>
                    <h1 className='text-[1.8rem] font-black sm:text-[2rem] md:text-[2.2rem]'>Grow your coding skills. Apply today.</h1>
                    <p className='py-2 text-sm sm:text-lg'> Embark on an exciting journey with our internship program. Gain valuable experience, develop essential skills, and make meaningful connections in your chosen field. Our internship opportunities are designed to help you thrive and succeed in your career. 
</p>
<button className="m-4 w-[115px] bg-[#2c0f37] text-gray-100 font-black border-[1px] border-[white] text-sm px-2 py-2 rounded-md sm:w-[145px] md:w-[160px] sm:text-lg md:text-xl hover:border-[#2c0f37] hover:bg-[white] hover:text-[#2c0f37] hover:transition duration-150">
                        <a target="_blank" href="https://forms.gle/cUieKUCQBBcWuXyT6">Apply for free</a>
                    </button>
                </div>                
            </div>
        </>
    )
}

export default Internship;