import React from 'react'
import heartImg1 from '../assets/heartImg1.jpg'
import heartImg2 from '../assets/heartImg2.jpg'
import { BiCheck } from 'react-icons/bi'
import { RiHeartPulseLine } from 'react-icons/ri'
import { GiHeartOrgan } from 'react-icons/gi';
import { RiHandHeartLine } from 'react-icons/ri';
import { AiOutlineFileSearch } from 'react-icons/ai';
import { BsCalendar2Check } from 'react-icons/bs';
import { FaUserMd } from 'react-icons/fa';










const CardiacSurgery = () => {
    return (
        <div>
            <div className='container mx-auto main-w-[1100px]'>



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

            </div>










            <div className='px-[70px] pt-[100px] pb-10 items-center justify-center grid grid-cols-2'>
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















            <div className="bg-steps h-[90vh] bg-cover bg-center">
                <div className='container mx-auto main-w-[1100px] px-[70px] pt-[80px]'>
                    <div className='text-center'>
                        <p className='font-semibold text-[18px] text-[#33d687]'>OUR STEPS</p>
                        <h2 className='font-semibold text-[43px] text-[#2A334E]'>Our Working Process</h2>
                    </div>



                    <div className='grid grid-cols-4 text-center gap-7 pt-12'>

                        <div className='bg-white p-[30px]'>
                            <h1 className='text-[22px] font-semibold text-[#2A334E]'>Healthcare</h1>
                            <p className='font-medium text-zinc-500'>First step of process</p>
                            <div className='flex text-center items-center justify-center p-5'>
                                <p className='text-[32px] p-3 bg-zinc-200 text-[#33d687] border-l-2 border-[#2A334E]'><RiHandHeartLine /></p>
                                <p className=' text-[12px] font-medium px-3 py-2 rounded-full bg-[#2A334E] text-white hover:bg-[#33d687] -ml-[10px]'>01</p>
                            </div>
                            <p className='text-[15px] leading-[26px] text-zinc-500'>Committed for providing quality treatment.</p>
                        </div>


                        <div className='bg-white p-[30px]'>
                            <h1 className='text-[22px] font-semibold text-[#2A334E]'>Get Details</h1>
                            <p>Our second easy</p>
                            <div className='flex text-center items-center justify-center p-5'>
                                <p className='text-[32px] p-3 bg-zinc-200 text-[#33d687] border-l-2 border-[#2A334E]'><AiOutlineFileSearch /></p>
                                <p className=' text-[12px] font-medium px-3 py-2.5 rounded-full bg-[#2A334E] text-white hover:bg-[#33d687] -ml-[10px]'>02</p>
                            </div>
                            <p className='text-[15px] leading-[26px] text-zinc-500'>Search us on your browser get the information.</p>
                        </div>


                        <div className='bg-white p-[30px]'>
                            <h1 className='text-[22px] font-semibold text-[#2A334E]'>Appointment</h1>
                            <p className='font-medium text-zinc-500'>Important third step</p>
                            <div className='flex text-center items-center justify-center p-5'>
                                <p className='text-[32px] p-3 bg-zinc-200 text-[#33d687] border-l-2 border-[#2A334E]'><BsCalendar2Check /></p>
                                <p className=' text-[12px] font-medium px-3 py-2.5 rounded-full bg-[#2A334E] text-white hover:bg-[#33d687] -ml-[10px]'>03</p>
                            </div>
                            <p className='text-[15px] leading-[26px] text-zinc-500'>Regarding your health issue book an appointment.</p>
                        </div>


                        <div className='bg-white p-[30px]'>
                            <h1 className='text-[22px] font-semibold text-[#2A334E]'>Consult Us</h1>
                            <p className='font-medium text-zinc-500'>Solution in final step</p>
                            <div className='flex text-center items-center justify-center p-5'>
                                <p className='text-[32px] p-3 bg-zinc-200 text-[#33d687] border-l-2 border-[#2A334E]'><FaUserMd /></p>
                                <p className=' text-[12px] font-medium px-3 py-2.5 rounded-full bg-[#2A334E] text-white hover:bg-[#33d687] -ml-[10px]'>04</p>
                            </div>
                            <p className='text-[15px] leading-[26px] text-zinc-500'>Expertise treatments by our expert and be healthy.</p>
                        </div>


                    </div>

                </div>

            </div>









        </div>
    )
}

export default CardiacSurgery