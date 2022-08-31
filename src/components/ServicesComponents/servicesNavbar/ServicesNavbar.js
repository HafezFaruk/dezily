import React from 'react'
import { Link } from 'react-router-dom';



const ServicesNavbar = () => {
    return (
        <div>
            <div className='bg-zinc-100 '>
                <ul className='flex items-center justify-center text-[1.2rem] font-semibold text-[#2A334E]'>
                    <li className='px-[2rem] py-[1.6rem] bg-[#33d687] text-white'><Link to="/">Heart Surgery</Link></li>
                    <li className='px-[2.2rem] py-[1.6rem] hover:bg-[#2A334E] hover:text-white'><Link to="/valveDiseases">Valve Diseases</Link></li>
                    <li className='px-[2.2rem] py-[1.6rem] hover:bg-[#2A334E] hover:text-white'><Link to="/childrenServices">Children Services</Link></li>
                    <li className='px-[2.2rem] py-[1.6rem] hover:bg-[#2A334E] hover:text-white'><Link to="/heartTransplant">Heart Transplant</Link></li>
                    <li className='px-[2.2rem] py-[1.6rem] hover:bg-[#2A334E] hover:text-white'><Link to="/endocrinology">Endocrinology</Link></li>
                    <li className='px-[2.2rem] py-[1.6rem] hover:bg-[#2A334E] hover:text-white'><Link to="/cardiacSurgery">Cardiac Surgery</Link></li>
                </ul>
            </div>
        </div>
    )
}

export default ServicesNavbar