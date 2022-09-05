import React from "react";

export default function GridComponents() {
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
    <div className="bg-service-color ">
      <div className="container mx-auto">
        <div className="grid grid-rows-3 grid-flow-col gap-4 ">
          {items.map((x) => (
            <div className="flex gap-3 bg-white">
              <div>
                <img className="h-[15rem]" src={x.image} alt="" />
              </div>
              <div>
                <p>{x.title}</p>
                <h2>{x.subtitle}</h2>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
