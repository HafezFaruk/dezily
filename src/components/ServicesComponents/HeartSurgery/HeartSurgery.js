import React from 'react'
import heartImg1 from '../assets/heartImg1.jpg'
import heartImg2 from '../assets/heartImg2.jpg'
import { BiCheck } from 'react-icons/bi'




const HeartSurgery = () => {
    return (
        <div className='container mx-auto main-w-[1100px]'>
            <div className='p-[120px] items-center justify-center grid grid-cols-2'>
                <div className='p-[0.9rem]'>
                    <h1 className='text-[40px] leading-[50px] font-semibold text-[#2A334E] pb-[0.5rem]'>The Heart Care Heart Hospital Latest & Best Technology.</h1>

                    <p className='leading-5 font-light text-zinc-400 tracking-wide pb-[1rem] font-sans'>Cardiologists are doctors who specialize in diagnosing and treating diseases or conditions of the heart and blood cardiovascular system Heart cardiologists are listed in the professional directory.</p>




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











            <div className='px-[120px] items-center justify-center grid grid-cols-2'>
                <div>
                    <img src={heartImg2} alt="" />
                </div>



                <div></div>
            </div>




        </div>
    )
}

export default HeartSurgery