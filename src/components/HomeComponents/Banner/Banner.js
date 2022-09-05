import React from "react";
import Slider from "react-animated-slider";
import "react-animated-slider/build/horizontal.css";
export default function Banner() {
  const slides = [
    {
      title: "First item",
      description: "What patients and caregivers need to know about ",
    },
    {
      image:"https://themetechmount.com/html/dezily/images/slides/slider-mainbg-02.jpg"
    },
    { title: "Second item", description: "Lorem ipsum" },
  ];
  return (
    <div>
      <Slider>
        {slides.map((slide, index) => (
          <div key={index}>
            <img src={slide.image}/>
            <h2>{slide.title}</h2>
            <div>{slide.description}</div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
