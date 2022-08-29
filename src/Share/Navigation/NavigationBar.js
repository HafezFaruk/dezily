import React from 'react'
import { FiPhoneCall } from "react-icons/fi";
function NavigationBar() {
  return (
    <div className="bg-slate-600 p-3">
      <nav className="mx-20 flex items-center justify-between text-[#fff]">
        <div>
          <img
            className=""
            src="https://themetechmount.com/html/dezily/images/logo-img.svg"
            alt="logo"
          />
        </div>
        <ul className="flex justify-between">
          <li className="mx-4">Home</li>
          <li className="mx-4">Page</li>
          <li className="mx-4">services</li>
          <li className="mx-4">portfolio</li>
          <li className="mx-4">blog</li>
          <li className="mx-4">contact</li>
        </ul>
        <div className='flex items-center'>
          <FiPhoneCall className="text-[#33D687] w-10 h-10" />
          <div className='ml-3'>
            <p>Call Us Now!</p>
            <p>0284599657</p>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavigationBar