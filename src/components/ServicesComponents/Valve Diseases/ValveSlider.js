import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { valveData } from './valveData';




const ValveSlider = () => {
    return (
        <div>
            {valveData.map(item => (
                <div className="bg-gradient-to-tr from-gray-700 to-gray-600 w-full relative h-[28rem] bg-cover bg-center">
                    <img
                        className="w-full absolute mix-blend-overlay h-full bg-center object-cover"
                        src="{item.img}"
                        alt=""
                    />
                    <p>{item.name}</p>
                    <h1>{item.title}</h1>
                </div>
            ))}

        </div>
    )
}

export default ValveSlider