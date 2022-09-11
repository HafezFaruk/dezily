import React from "react";
import HeaderFeature from "./../Pages/about/HeaderFeature";
import { FaArrowRight } from "react-icons/fa";
export default function CardiologyExercise() {
  const aboutDezily = [
    {
      image: "https://i.ibb.co/4Rs4cJD/single-img-14.jpg",
      title: "Heart Surgery Specialist Expert Doctors",
      headtext:
        "We have the top level of world best heart surgery specialist expert doctors. We are used latest technology in our healthcare.",
      subtitle: "About Dezily",
      subimage: "https://i.ibb.co/DQHL29s/single-img-01.jpg",
      content:"Contrary to popular belief, Lorem Ipsum is not ly randomtext. It has roots in a piece of classical Lterature from 45 BC, making it over 2000 . Rischard McClintock, a Latin professor at Hampden-Sydin Virginia",


    },
  ];

  const solutions = [
    {
      image: "https://i.ibb.co/x1wMFwS/service-09.png",
      title: "SURGERY",
      content: "Aneurysm repair",
    },
    {
      image: "https://i.ibb.co/nsPBR8m/service-10.png",
      title: "SURGERY",
      content: "MAZE SURGERY",
    },
    {
      image: "https://i.ibb.co/LPzhr1v/service-11.png",
      title: "SURGERY",
      content: "HEART TRANSPLANT",
    },
    {
      image: "https://i.ibb.co/YRJDZSH/service-12.png",
      title: "SURGERY",
      content: "BYPAS SURGARY",
    },
  ];
  const choseUsText = [
    {
      subtitle: "WHY CHOOSE US",
      title: "Cardiologists Are Doctors Who Treating Diseases",
      content:
        "A surgical procedure used in which the blocked portion of the coronary artery is bypassed with another piece of blood vessel.",
    },
  ];
  return (
    <div>
      {/* ServiceBanner */}
      <div className="bg-apple  ">
        <div className="h-[28rem]">
          <HeaderFeature tab="Services-2" />
        </div>
      </div>
      {/* About-Section */}
      <div className="container mx-auto">
        <div className="my-[8rem]">
          {aboutDezily.map((x) => (
            <div className="md:flex gap-3">
              <div>
                <img className="w-[57rem]" src={x.image} alt="doctorImage" />
              </div>
              <div className="my-[1rem] p-9">
                <h3 className="font-semibold text-green">{x.subtitle}</h3>
                <h2 className="text-5xl text-dark font-bold">{x.title}</h2>
                <p className="text-gray-400 text-md my-4 ">{x.headtext}</p>
                <div className="flex gap-4 ">
                  <img
                    className="w-[10rem] h-[10rem]"
                    src={x.subimage}
                    alt=""
                  />
                  <div>
                    <p className="text-lg text-gray-400 ">{x.content}</p>
                  </div>
                </div>
                <button className="bg-green text-white px-[1.5rem] py-[.6rem] my-4">
                  Contact
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Heart Care Based Solutions */}
      <div className="bg-service-color">
        <div className="container mx-auto my-[10rem]">
          <h2 className="text-center text-lg text-green font-bold py-2">
            WHAT WE HAVE
          </h2>
          <h2 className="text-center font-bold text-4xl text-dark my-2 p-4">
            Heart Care Based Solutions
          </h2>
          {/* WHAT WE HAVE */}

          <div className="md:flex gap-4 py-[4rem]">
            {solutions.map((x) => (
              <div className="bg-white">
                <div>
                  <img
                    className="transition-all duration-500 ease-in-out transform scale-100 hover:scale-105"
                    src={x.image}
                    alt="doctores"
                  />
                </div>
                <div className="py-4">
                  <p className="text-gray-400 text-md p-2">{x.title}</p>
                  <p className="text-dark text-lg p-2 py-3 font-semibold">
                    {x.content}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* WHY CHOOSE US */}
      <div className="container mx-auto">
        <div className="flex gap-4">
          <div>
            {choseUsText.map((x) => (
              <div>
                <p className="text-green text-start font-bold">{x.subtitle}</p>
                <h2 className="font-bold my-3 text-4xl text-dark f">
                  {x.title}
                </h2>
                <p className="text-gray-400 text-md py-2">{x.content}</p>
              </div>
            ))}
            <div className="flex gap-5 py-5">
              <div className="">
                <h2 className="flex justify-between gap-3 align-center text-center bg-gray-200 p-5">
                  {" "}
                  <FaArrowRight className="text-center mt-[0.3rem] hover:text-green" />{" "}
                  Reliable And Proven
                </h2>
              </div>
              <div className="flex">
                {" "}
                <h2 className="flex justify-between gap-3 align-center text-center bg-gray-200 p-5">
                  {" "}
                  <FaArrowRight className="text-center mt-[0.3rem] hover:text-green" />{" "}
                  Best Tean Members
                </h2>
              </div>
              <hr className="py-5" />
            </div>
          </div>

          <div>
            <h2 className="text-green text-xl">collpase</h2>{" "}
          </div>
        </div>
      </div>
    </div>
  );
}
