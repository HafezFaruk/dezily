import React from 'react'
import serviceBanner from '../assets/serviceBanner.jpg'

const Banner = () => {
  return (
    <div className='overflow-hidden relative z-10 h-[28rem]'>
      <div className="bg-gradient-to-tr from-zinc-700 to-zinc-600 w-full relative h-[28rem] bg-cover bg-center">
        <img
          className="w-full absolute mix-blend-overlay h-full bg-center object-cover"
          src={serviceBanner}
          alt=""
        />

        <div className='h-full flex items-center justify-center'>
          <div>
            <h1 className='font-bold capitalize text-[3.8rem] leading-[3.5rem] text-white'>Services Details</h1>
            <div className='flex items-center justify-center'>
              <p className='text-white font-medium text-[1.1rem]'>Home<span className='px-4'>/</span>Services Details</p>
            </div>
          </div>
        </div>


      </div>
    </div>
  )
}

export default Banner