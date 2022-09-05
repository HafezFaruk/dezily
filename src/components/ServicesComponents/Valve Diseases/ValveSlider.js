import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { valveData } from './valveData';




const ValveSlider = () => {


    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };


    return (
        <div>

            <Slider {...settings}>

                {valveData.map(item => (
                    <div className='px-[1rem]'>
                        <div className="bg-gradient-to-tr from-zinc-700 to-zinc-600 w-full relative h-[18rem] bg-cover bg-center">
                            <img
                                className="w-full absolute mix-blend-overlay h-full bg-center object-cover"
                                src={item.img}
                                alt=""
                            />
                            <div className='p-[2rem]'>
                                <p className='text-[0.9rem] font-medium text-[#0de67d] pb-[0.6rem]'>{item.name}</p>
                                <h1 className='text-[1.4rem] font-semibold text-white leading-[1.5rem]'>{item.title}</h1>
                            </div>
                        </div>
                    </div>
                ))}

            </Slider>

        </div>
    )
}

export default ValveSlider