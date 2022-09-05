import React from "react";
import HeaderFeature from "./../../Pages/about/HeaderFeature";

export default function TopBanner() {
  const items = [
    {
      image: "https://i.ibb.co/tYqwX6L/post-01.jpg",
      title: "Heart Transplant",
      subtitle: "Can Depression Increase Your Risk For Heart",
      content: "The medical Experts carefully Transplant the Heart You are..",
    },
    {
      image: "https://i.ibb.co/7zNgp00/post-03.jpg",
      title: "Cardiology Exercise",
      subtitle: "Hard Content We Decide Ourselves A Intently",
      content: "The medical Experts carefully Transplant the Heart You are..",
    },
    {
      image: "https://i.ibb.co/sydB2fG/post-02.jpg",
      title: "Health Care",
      subtitle: "Heart Transplant Development Solutions",
      content: "The medical Experts carefully Transplant the Heart You are",
    },
    {
      image: "https://themetechmount.com/html/dezily/images/post/post-04.jpg",
      title: "SPECAIL SESSION",
      subtitle: "How To Take Care Of Heart Health?",
      content: "The medical Experts carefully Transplant the Heart You are",
    },
   
    {
      image: "https://i.ibb.co/8NWSLfT/post-05.jpg",
      title: "CARDIO CONSULTANCY",
      subtitle: "CARDIO CONSULTANCY 5 Ways To Overcome Your Stumbling Blocks",
      content: "The medical Experts carefully Transplant the Heart You are",
    },
    {
      image: "https://i.ibb.co/vYkWrrd/post-06.jpg",
      title: "CARDIO ",
      subtitle: "How To Take Care Of Heart Health?",
      content: "The medical Experts carefully Transplant the Heart You are",
    },
  ];
  return (
    <div className="bg-blogBanner md:bg-cover bg-no-repeat md:h-100">
      <div className="h-[28rem]">
        <HeaderFeature tab="Blog " />
      </div>
    </div>
  );
}
