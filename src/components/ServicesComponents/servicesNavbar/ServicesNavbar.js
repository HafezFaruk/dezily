import React from 'react'
import { Link } from 'react-router-dom';



const ServicesNavbar = () => {
    return (
        <div className='mt-0'>
            <div className='lg:bg-zinc-100 md:bg-white'>
                <ul className='items-center justify-center text-[1.2rem] font-semibold text-[#2A334E] md:flex flex-col lg:flex-row'>
                    <li className='px-[2rem] py-[1.4rem] bg-[#33d687] text-white '><Link to="/services/HeartSurgery">Heart Surgery</Link></li>
                    <li className='px-[2.2rem] py-[1.4rem] hover:bg-[#2A334E] hover:text-white'><Link to="/services/valveDiseases">Valve Diseases</Link></li>
                    <li className='px-[2.2rem] py-[1.4rem] hover:bg-[#2A334E] hover:text-white'><Link to="/services/childrenServices">Children Services</Link></li>
                    <li className='px-[2.2rem] py-[1.4rem] hover:bg-[#2A334E] hover:text-white'><Link to="/services/heartTransplant">Heart Transplant</Link></li>
                    <li className='px-[2.2rem] py-[1.4rem] hover:bg-[#2A334E] hover:text-white'><Link to="/services/endocrinology">Endocrinology</Link></li>
                    <li className='px-[2.2rem] py-[1.4rem] hover:bg-[#2A334E] hover:text-white'><Link to="/services/cardiacSurgery">Cardiac Surgery</Link></li>
                </ul>
            </div>
        </div>
    )
}

export default ServicesNavbar