import { Footer } from "flowbite-react";
import React from "react";

export default function Patient() {
  const items = [
    {
      image: "https://i.ibb.co/hLQ55m5/blog-06.jpg",
      title: "Can depression increase your risk for heart disease?",
      subtitle: "Heart Transplant / By Admin",
      content:
        "The medical experts carefully transplant the heart you are nothing without care",
      text: "View More!",
    },
    {
      image: "https://i.ibb.co/Wv4twMw/blog-07.jpg",
      title: "Heart Transplant development solutions for great surgery",
      subtitle: "Health care / By Admin",
      content:
        "The heart care hospital have the best machine with the specialist doctors.",
      text: "View More!",
    },
    {
      image: "https://i.ibb.co/zRL9ddL/blog-08.jpg",
      title: "Hard Content We Decide Ourselves A Intently Heart Transplant",
      subtitle: "Cardiology Exercise / By Admin",
      content:
        "Quickly response provide our specialist doctrors to patients in online conference",
      text: "View More!",
    },

    {
      image: "https://i.ibb.co/f8npSzw/blog-10.jpg",
      title: "5 Ways to Overcome Your Stumbling Blocks to a Healthy Heart",
      subtitle: "Cardio Consultancy / By Admin",
      content:
        "The medical experts carefully transplant the heart you are nothing without care",
      text: "View More!",
    },
    {
      image: "https://i.ibb.co/8d45GwJ/blog-09.jpg",
      title: "How to take care of Heart Health?",
      subtitle: "Special surgeon / By Admin",
      content:
        "The heart care hospital have the best machine with the specialist doctors",
      text: "View More!",
    },
  ];
  return (
    <div className="bg-service-color	">
      <div className="container mx-auto">
        {/* All-Items */}
        <div className="md:flex md:space-x-4">
          <div>
            {/* cards */}
            <div>
              {items.map((x) => (
                <div className="bg-white  ">
                  <div className="md:flex space-x-2 md:my-6  p-5 my-3 ">
                    <div>
                      <img className="md:h-64" src={x.image} alt="" />
                    </div>
                    <div className="md:p-5 w-[30rem]">
                      <h2 className="text-2xl font-semibold text-dark hover:text-green">
                        {x.title}
                      </h2>
                      <h3 className="text-gray-400 py-2">{x.subtitle}</h3>
                      <hr className="py-1" />

                      <p className="py-2 text-gray-400">{x.content}</p>
                      <p className="mt-5">{x.text}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* Side -Section */}
          <div>
            {/* Search */}
            <div className=" bg-white mt-6 p-8 w-[25rem]  border-b-2 border-[#33D687]">
              <h2 className="py-2 text-start text-dark text-lg font-semibold">
                Search
              </h2>
              <input
                className="bg-service-color border-none w-full py-2 h-full" 
                placeholder="Search.."
                type="text"
              />
            </div>
          </div>
          {/* Categories */}
        </div>
      </div>
      <Footer />
    </div>
  );
}
