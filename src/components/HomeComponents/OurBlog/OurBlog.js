import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
export default function OurBlog() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

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
    {
      image: "https://themetechmount.com/html/dezily/images/blog/blog-18.jpg",
      title: "Hard Content We Decide Ourselves A Intently Heart Transplant",
    },
  ];
  return (
    <div>
      <Carousel responsive={responsive}>
        
       {
        items.map((x)=>(
          <div>
            
          </div>
        ))

       }
      </Carousel>
    </div>
  );
}
