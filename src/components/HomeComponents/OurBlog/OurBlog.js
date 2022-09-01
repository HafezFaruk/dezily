import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
export default function OurBlog() {
  const items = [
    {
      image: "https://themetechmount.com/html/dezily/images/blog/blog-14.jpg",
      title: "Can depression increase your risk for heart disease?",
    },
    {
      image: "https://themetechmount.com/html/dezily/images/blog/blog-15.jpg",
      title: "Heart Transplant development solutions for great surgery",
    },
    {
      image: "https://themetechmount.com/html/dezily/images/blog/blog-16.jpg",
      title: "Hard Content We Decide Ourselves A Intently Heart Transplant",
    },
  ];
  return (
    <div className="container mx-auto py-16">
      <p className="text-center text-md font-bold text-green">READ OUR BLOG</p>
      <h2 className="text-4xl text-dark font-bold py-1 my-4" >
        We Provide Special Service <br /> For Patients
      </h2>
      <div className="flex space-x-3">
        {items.map((x) => (
          <div>
            <div>
              <img src={x.image} />
            </div>
            <div>
              <h2>{x.title}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
