import React from "react";
import { AiOutlineInstagram } from "react-icons/ai";
import {
  FaChevronCircleRight,
  FaFacebookF,
  FaLinkedinIn,
} from "react-icons/fa";
import { IoLogoTwitter } from "react-icons/io";
const Expertise = () => {
  return (
    <div className="bg-gray-100">
      <div className="container mx-auto py-32">
        <div className="grid grid-cols-a sm:grid-cols-1 lg:grid-cols-2 gap-10 ">
          <div className="space-y-5">
            <h4 className="uppercase text-[#33D687] font-bold">
              Our Expertise
            </h4>
            <h2 className="text-5xl font-semibold capitalize">
              Cardiologists are doctors who treating diseases
            </h2>
            <p className="text-lg text-gray-500">
              A surgical procedure used in which the blocked portion of the
              coronary artery is bypassed with another piece of blood vessel.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 space-x-3">
              <div className="flex bg-white p-5 justify-center space-x-3 items-center">
                <FaChevronCircleRight className="text-[#33D687] text-xl" />
                <h3 className="capitalize hover:text-[#33D687]">
                  Reliable and proven
                </h3>
              </div>
              <div className="flex bg-white p-5 justify-center space-x-3 items-center">
                <FaChevronCircleRight className="text-[#33D687] text-xl" />
                <h3 className="capitalize hover:text-[#33D687]">
                  Best team members
                </h3>
              </div>
            </div>

            <p className="py-4">
              <hr />
            </p>
            <div className="flex items-center">
              <img
                className="img_color w-12 mr-5"
                src="https://i.ibb.co/gZgxqhB/heart-attack-3.png"
                alt=""
              />
              <p className="text-lg text-gray-500">
                We Have <span className="text-[#33D687]"> 25+ Years </span> Of
                Experiance For Give You Better Quality Results.
              </p>
            </div>
          </div>
          <div className="flex">
            <div>
              <div className="bg-[#2A334E] group">
                <div className="w-[20rem] h-[20rem] overflow-hidden">
                  <img
                    className="group-hover:scale-110 transform duration-1000"
                    src="https://i.ibb.co/9vw9z8J/team-01.jpg"
                    alt=""
                  />
                </div>
                <div className="p-5  space-y-2">
                  <h3 className="text-3xl hover:text-[#33D687] text-white font-semibold">
                    Dr. Terassa Myler
                  </h3>
                  <p className="text-white hover:text-[#33D687]">
                    123 456 7890
                  </p>
                  <p className="text-white hover:text-[#33D687]">
                    sales@themetechmount.com
                  </p>
                  <div className="flex space-x-2 pt-3">
                    <span className="bg-white p-3 hover:bg-[#33D687] hover:text-white">
                      <FaFacebookF />
                    </span>
                    <span className="bg-white p-3 hover:bg-[#33D687] hover:text-white">
                      <IoLogoTwitter />
                    </span>
                    <span className="bg-white p-3 hover:bg-[#33D687] hover:text-white">
                      <AiOutlineInstagram />
                    </span>
                    <span className="bg-white p-3 hover:bg-[#33D687] hover:text-white">
                      <FaLinkedinIn />
                    </span>
                  </div>
                </div>
              </div>
              <button className="border transition duration-1000 border-[#2A334E] px-6 py-3 mt-8 hover:bg-[#2A334E] hover:text-white">
                View More Team
              </button>
            </div>
            <div className="bg-[#33D687] mt-20 group">
              <div className="w-[20rem] h-[20rem] overflow-hidden">
                <img
                  className="group-hover:scale-110 transform duration-1000"
                  src="https://i.ibb.co/9gJWFn7/team-02.jpg"
                  alt=""
                />
              </div>
              <div className="p-5  space-y-2">
                <h3 className="text-3xl text-white hover:text-[#2A334E] font-semibold">
                  Dr. Sam Martin
                </h3>
                <p className="text-white hover:text-[#2A334E]">123 456 7890</p>
                <p className="text-white hover:text-[#2A334E]">
                  sales@themetechmount.com
                </p>
                <div className="flex space-x-2 pt-3">
                  <span className="bg-white p-3 hover:bg-[#2A334E] hover:text-white">
                    <FaFacebookF />
                  </span>
                  <span className="bg-white p-3 hover:bg-[#2A334E] hover:text-white">
                    <IoLogoTwitter />
                  </span>
                  <span className="bg-white p-3 hover:bg-[#2A334E] hover:text-white">
                    <AiOutlineInstagram />
                  </span>
                  <span className="bg-white p-3 hover:bg-[#2A334E] hover:text-white">
                    <FaLinkedinIn />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Expertise;
