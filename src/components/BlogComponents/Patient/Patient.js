import { Footer } from "flowbite-react";
import React from "react";
import "aos/dist/aos.css";
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

  const categories = [
    {
      text: "Cardio Consultancy",
    },
    {
      text: " Cardiology Exercise",
    },
    {
      text: "Experience Doctors",
    },
    {
      text: " Health Care",
    },
    {
      text: "Heart Transplant",
    },
  ];

  const posts = [
    {
      image: "https://i.ibb.co/7YS4cjx/sidebar-post-01.jpg",
      date: "April 17, 2021",
      content: "Can depression increase your risk for heart disease?",
    },
    {
      image: "https://i.ibb.co/34LKBxc/sidebar-post-02.jpg",
      date: "April 15, 2021",
      content: "Heart Transplant development solutions for great surgery...",
    },
    {
      image: "https://i.ibb.co/bFPs5Zv/sidebar-post-03.jpg",
      date: "April 12, 2021",
      content: "5 Ways to Overcome Your Stumbling Blocks to a Healthy Heart.",
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
                  <div data-aos="fade-right" className="md:flex space-x-2 md:my-6  p-5 my-3 ">
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
            <div className=" bg-white mt-6 p-8  md:w-[25rem] sm:w-full border-b-2 border-[#33D687] my-5">
              <h2 className="py-2 text-start text-dark text-lg font-semibold">
                Search
              </h2>
              <input
                className="bg-service-color border-none w-full py-2 h-full"
                placeholder="Search.."
                type="text"
              />
            </div>
            {/* Categories */}

            <div className="bg-white p-5 border-b-2 border-green">
              <h2 className="text-dark font-semibold">Categories</h2>
              {categories.map((x) => (
                <div data-aos="fade-up">
                  <p className="text-gray-400 hover:text-green py-2 mt-1">
                    + <span className="ml-2">{x.text}</span>{" "}
                  </p>
                </div>
              ))}
            </div>

            {/* Recent Posts */}
            <div className="p-5 bg-white my-5 border-b-2 border-green">
              <h2 className="text-dark font-bold text-lg">Recent Postss</h2>
              <div>
                {posts.map((x) => (
                  <div data-aos="fade-up" className="flex space-x-2 my-2 p-2">
                    <div>
                      <img src={x.image} alt="" />
                    </div>
                    <div>
                      <p className="text-green">{x.date}</p>
                      <h2 className="text-dark text-xl font-semibold hover:text-green">
                        {x.content}
                      </h2>
                    </div>
                    <hr />
                  </div>
                ))}
              </div>
            </div>

            {/* Tages  */}
            <div className="p-5 bg-white border-b-2 border-green">
              <h2 className="text-dark font-semibold text-xl">Tages</h2>

              {/* Tages-container */}
              <div className="py-2">
                <div className="flex space-x-6 my-4">
                  <div className="px-5 py-2 text-gray-400 bg-service-color hover:bg-green hover:text-white">
                    Cardic
                  </div>
                  <div className="px-5 py-2 text-gray-400 bg-service-color hover:bg-green hover:text-white">
                    Discounts
                  </div>
                </div>
                <div className="flex space-x-6 my-4">
                  <div className="px-5 py-2 text-gray-400 bg-service-color hover:bg-green hover:text-white">
                    Health
                  </div>
                  <div className="px-5 py-2 text-gray-400 bg-service-color hover:bg-green hover:text-white">
                    News
                  </div>
                  <div className="px-5 py-2 text-gray-400 bg-service-color  hover:bg-green hover:text-white">
                    Heart
                  </div>
                </div>
                <div className="flex space-x-6 my-4">
                  <div className="px-5 py-2 text-gray-400 bg-service-color  hover:bg-green hover:text-white">
                    Cardic
                  </div>
                  <div className="px-5 py-2 text-gray-400 bg-service-color  hover:bg-green hover:text-white">
                    Discounts
                  </div>
                </div>
              </div>
            </div>

            {/* Opening Hours */}
            <div className=" p-5  my-5 ">
              <h2 className="text-dark font-semibold text-xl py-2">
                Opening hours
              </h2>
              <div>
                <img
                  src="https://i.ibb.co/d6Kvv2N/Screenshot-2022-09-03-120327.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
