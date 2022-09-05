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
      title: "SPECAIL SESSION",
      subtitle: "How To Take Care Of Heart Health?",
      content: "The medical Experts carefully Transplant the Heart You are",
    },

    // {
    //   image: "https://i.ibb.co/8NWSLfT/post-05.jpg",
    //   title: "CARDIO CONSULTANCY",
    //   subtitle: "CARDIO CONSULTANCY 5 Ways To Overcome Your Stumbling Blocks",
    //   content: "The medical Experts carefully Transplant the Heart You are",
    // },
    {
      image: "https://i.ibb.co/vYkWrrd/post-06.jpg",
      title: "CARDIO ",
      subtitle: "How To Take Care Of Heart Health?",
      content: "The medical Experts carefully Transplant the Heart You are",
    },
  ];
  return (
    <div className="my-[5rem]">
      <div className="my-5">
        <div className="container mx-auto ">
          <div className="md:grid md:grid-rows-3 md:grid-flow-col gap-4 ">
            {items.map((x) => (
              <div className="md:flex gap-1 bg-service-color  ">
                <div className=" flex justify-center">
                  <img className="md:h-[18rem] h-full w-full scale-90 hover:scale-100 ease-in duration-500" src={x.image} alt="" />
                </div>
                <div className="p-[1rem] ">
                  <p className="bg-green text-white p-1">{x.title}</p>
                  <h2 className="text-2xl text-dark font-bold my-2">{x.subtitle}</h2>
                  <p className="text-gray-400 my-3">{x.content}</p>
                  <p>View-></p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
