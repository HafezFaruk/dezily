import React from 'react'
import heartImg1 from '../assets/heartImg1.jpg'
import heartImg2 from '../assets/heartImg2.jpg'
import { BiCheck } from 'react-icons/bi'
import { RiHeartPulseLine } from 'react-icons/ri'
import { GiHeartOrgan } from 'react-icons/gi';
import ValveSlider from './ValveSlider';







const ValveDiseases = () => {
    return (
        <div>


            <div className='container mx-auto main-w-[1100px] pt-[60px] pb-10'>



                <div className='px-[70px] py-10 items-center justify-center grid grid-cols-2'>
                    <div>
                        <img src={heartImg2} alt="" />
                    </div>


                    <div className='pl-8'>
                        <h1 className='text-[40px] leading-[50px] font-semibold text-[#2A334E] pb-[0.5rem]'>Quickly Response Provide Our Speciale Doctrors To Patients</h1>

                        <p className='leading-5 font-light text-zinc-500 tracking-wide pb-[2rem] font-sans'>Cardiologists are doctors who specialize in diagnosing and treating diseases or conditions of the heart and blood cardiovascular.</p>


                        <div className='grid grid-cols-2'>
                            <div className='flex items-center justify-center'>
                                <div className='text-[37px] p-4 text-[#33d687] border-l-2 border-[#2A334E]'><RiHeartPulseLine /></div>
                                <div>
                                    <h3 className='text-[20px] font-semibold text-[#2A334E] pb-1 '>Heart Transplante</h3>
                                    <p className='text-[15px] leading-[20px] font-medium text-zinc-500'>Heart symptoms call us for immediate</p>
                                </div>
                            </div>


                            <div className='flex items-center justify-center pl-4'>
                                <div className='text-[37px] p-4 text-[#33d687] border-l-2 border-[#2A334E]'><GiHeartOrgan /></div>
                                <div>
                                    <h3 className='text-[20px] font-semibold text-[#2A334E] pb-1'>Heart Surgery</h3>
                                    <p className='text-[15px] leading-[20px] font-medium text-zinc-500'>Heart is get replaced with healthier</p>
                                </div>
                            </div>
                        </div>



                        <div className='mt-8'>
                            <button className='mr-5 px-4 py-2 bg-[#2A334E] font-medium text-white hover:bg-[#33d687]'>Get Appointment</button>
                            <button className='px-4 py-2 bg-[#33d687] font-medium text-white hover:bg-[#2A334E]'>Contact Us</button>
                        </div>

                    </div>
                </div>















                <div className='px-[70px] py-10 items-center justify-center grid grid-cols-2'>
                    <div className='p-[0.9rem]'>
                        <h1 className='text-[40px] leading-[50px] font-semibold text-[#2A334E] pb-[0.5rem]'>The Heart Care Heart Hospital Latest & Best Technology.</h1>

                        <p className='leading-5 font-light text-zinc-500 tracking-wide pb-[1rem] font-sans'>Cardiologists are doctors who specialize in diagnosing and treating diseases or conditions of the heart and blood cardiovascular system Heart cardiologists are listed in the professional directory.</p>




                        <div className='grid grid-cols-2 gap-9 text-zinc-500'>
                            <div>
                                <div className='flex font-[15px] leading-[30px] pb-[0.3rem]'>
                                    <span className='pr-2 pt-1 text-xl text-[#33d687]'><BiCheck /></span>
                                    <p className='font-light'>The Vision Exams Equipment</p>
                                </div>
                                <div className='flex font-[15px] leading-[30px] pb-[0.3rem]'>
                                    <span className='pr-2 pt-1 text-xl text-[#33d687]'><BiCheck /></span>
                                    <p className='font-light'>A Bionic Heart Vision</p>
                                </div>
                                <div className='flex font-[15px] leading-[30px] pb-[0.3rem]'>
                                    <span className='pr-2 pt-1 text-xl text-[#33d687]'><BiCheck /></span>
                                    <p className='font-light'>The latest Transplant surgery</p>
                                </div>
                                <div className='flex font-[15px] leading-[30px] pb-[0.3rem]'>
                                    <span className='pr-2 pt-1 text-xl text-[#33d687]'><BiCheck /></span>
                                    <p className='font-light'>A Bionic Heart Vision</p>
                                </div>
                                <div className='flex font-[15px] leading-[30px] pb-[0.3rem]'>
                                    <span className='pr-2 pt-1 text-xl text-[#33d687]'><BiCheck /></span>
                                    <p className='font-light'>Nuclear Stress Testing</p>
                                </div>
                            </div>

                            <div>
                                <div className='flex font-[15px] leading-[30px] pb-[0.3rem]'>
                                    <span className='pr-2 pt-1 text-xl text-[#33d687]'><BiCheck /></span>
                                    <p className='font-light'>The Vision Exams Equipment</p>
                                </div>
                                <div className='flex font-[15px] leading-[30px] pb-[0.3rem]'>
                                    <span className='pr-2 pt-1 text-xl text-[#33d687]'><BiCheck /></span>
                                    <p className='font-light'>A Bionic Heart Vision</p>
                                </div>
                                <div className='flex font-[15px] leading-[30px] pb-[0.3rem]'>
                                    <span className='pr-2 pt-1 text-xl text-[#33d687]'><BiCheck /></span>
                                    <p className='font-light'>The latest Transplant surgery</p>
                                </div>
                                <div className='flex font-[15px] leading-[30px] pb-[0.3rem]'>
                                    <span className='pr-2 pt-1 text-xl text-[#33d687]'><BiCheck /></span>
                                    <p className='font-light'>A Bionic Heart Vision</p>
                                </div>
                                <div className='flex font-[15px] leading-[30px] pb-[0.3rem]'>
                                    <span className='pr-2 pt-1 text-xl text-[#33d687]'><BiCheck /></span>
                                    <p className='font-light'>Nuclear Stress Testing</p>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div>
                        <img src={heartImg1} alt="" />
                    </div>

                </div>




            </div>














            <div className='px-[70px] py-10 bg-zinc-100'>
                <div className='container mx-auto main-w-[1100px] px-6 pt-14 pb-24 items-center justify-center text-center'>
                    <p className='text-[1rem] font-bold pb-[0.8rem] text-[#33d687]'>WHAT WE HAVE</p>
                    <h1 className='text-[2.5rem] font-semibold pb-[1rem] leading-[2.8rem] text-[#2A334E] mb-[2.4rem]'>Few Reason Why You Should <br /> Choose Us</h1>


                    <ValveSlider />


                </div>

            </div>











            <div className='px-[70px] py-1'>
                <div className='container mx-auto main-w-[1100px] px-6 pt-14 mb-[6rem] items-center justify-center -m-[7rem]'>
                    <div>

                        <div className='grid grid-cols-3 text-start'>

                            <div>
                                <p className='text-[0.9rem] font-medium leading-[1.8rem] text-[#33d687]'>About Dezily</p>
                                <h1 className='text-[2.5rem] leading-[2.8rem] font-semibold text-[#2A334E]'>We Are Achieve The <br /> Success Of Heart <br /> Surgery</h1>
                            </div>

                            <div className='bg-[#33d687] p-[2.5rem] text-white'>
                                <span className='text-[3.1rem]'><GiHeartOrgan /></span>
                                <h1 className='text-[1.7rem] font-medium py-3'>The Heart care Hospital</h1>
                                <p className='text-[1rem] leading-[1.8rem]'>We have all the latest technology to treat our patients to give them best.</p>
                                <p className='font-medium pt-[1.4rem]'>View More</p>
                            </div>

                            <div></div>
                        </div>




                        <div className='grid grid-cols-3'>

                            <div className='mb-[1.5rem]'>
                                <p className='text-zinc-500 font-medium text-[1.1rem] leading-[1.7rem]'>A surgical option to treat advanced heart failure, occurs when the heart can't pump enough the <br /> body's organs.</p>

                                <div className='py-[2rem]'>
                                    <div className='flex text-[#2A334E] py-[0.8rem]'>
                                        <div className='bg-zinc-100 font-bold p-[1.1rem]'>75%</div>

                                        <div className='pl-[1.8rem]'>
                                            <p className='text-[1.2rem] font-bold'>Heart Transplant</p>
                                            <p className='bg-[#2A334E] h-[0.5rem] w-[10rem]'></p>
                                            <p className='bg-zinc-400 h-[1px] w-[15.5rem] mt-[0.5rem]'></p>
                                        </div>

                                    </div>

                                    <div className='flex text-[#2A334E] py-[0.8rem]'>
                                        <div className='bg-zinc-100 font-bold p-[1.1rem]'>95%</div>
                                        <div className='pl-[1.8rem]'>
                                            <p className='text-[1.2rem] font-bold'>Heart surgery</p>
                                            <p className='bg-[#2A334E] h-[0.5rem] w-[14rem]'></p>
                                            <p className='bg-zinc-400 h-[1px] w-[15.5rem] mt-[0.5rem]'></p>
                                        </div>
                                    </div>
                                </div>

                            </div>

                            <div>
                                <img src="https://i.ibb.co/f0wCqbH/heart-Img2.jpg" alt="" />
                            </div>
                            <div>hello</div>
                        </div>


                        <div className='grid grid-cols-3'>
                            <div>hello</div>
                            <div>hello</div>
                            <div>hello</div>
                        </div>

                    </div>
                </div>
            </div>















        </div>
    )
}

export default ValveDiseases