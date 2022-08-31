import React from "react";
import { FaHeartbeat } from "react-icons/fa";
import { GiHeartOrgan } from "react-icons/gi";
import doublePeople from "../../assets/images/single-img-09.jpg";
import singleDoctor from "../../assets/images/singleDoctor.jpg";
import HeaderFeature from "./HeaderFeature";
function About() {
  return (
    <div className="">
      <div className="h-[32rem]">
        <HeaderFeature tab="About Us" />
      </div>
      <div>
        <div className="container mx-auto  font-serif">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
            <div className="space-y-3">
              <div className="space-y-3">
                <h5 className="text-[#33D687] uppercase text-lg font-bold">
                  About Dezily
                </h5>
                <h1 className="text-5xl font-bold capitalize">
                  Cardiologists Are doctors who treating diseases
                </h1>
                <p className="text-[#8D8D8D] text-lg py-4">
                  Chest pain is the most common warning sign of a heart attack.
                  But there can be other symptoms, too, like lightheadedness,
                  nausea, and shortness of the breath.Breathing can be caused by
                  different conditions.
                </p>
                <button className="bg-[#33D687] p-4 text-white font-semibold hover:bg-[#2A334E] transition duration-75">
                  Contact Us
                </button>
              </div>
              <p className="py-7">
                <hr />
              </p>
              <div className="grid grid-cols-1 pt-5 gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
                <div className="flex justify-between group">
                  <div className="border-l-4 h-20 w-24 flex justify-center group-hover:bg-[#33D687]  rounded-r-sm items-center bg-gray-100 border-[#33D687]">
                    <span className="text-4xl text-[#33D687] group-hover:text-white px-3">
                      <FaHeartbeat />
                    </span>
                  </div>
                  <div className="ml-5">
                    <h2 className="text-2xl font-bold">Heart Transplante</h2>
                    <h3 className="text-[#8D8D8D]">
                      Heart symptoms call us for immediate
                    </h3>
                  </div>
                </div>
                <div className="flex justify-between group">
                  <div className="border-l-4 h-20 w-24 flex justify-center group-hover:bg-[#33D687] rounded-r-sm items-center bg-gray-100 border-[#33D687]">
                    <span className="text-5xl text-[#33D687] group-hover:text-white px-4">
                      <GiHeartOrgan />
                    </span>
                  </div>
                  <div className="ml-5">
                    <h2 className="text-2xl font-bold">Heart Surgery</h2>
                    <h3 className="text-[#8D8D8D]">
                      The heart is getting replaced with healthier.
                    </h3>
                  </div>
                </div>
              </div>
              <div className="bg-white pt-20">
                <img className="w-full" src={doublePeople} alt="" />
              </div>
            </div>
            <div className="flex pb-20 justify-around">
              <img src={singleDoctor} alt="" />
            </div>
          </div>
        </div>
        <div className="bg-[#2A334E] h-[40rem] w-full">
          {/* <img
            className="bg-repeat"
            src="https://i.ibb.co/X3jM5f3/heartbeat.png"
            `https://i.ibb.co/X3jM5f3/heartbeat.png`
            alt=""
          /> */}
          <div className="bg-repeat bg-[url('https://i.ibb.co/X3jM5f3/heartbeat.png')]"></div>
          hello
        </div>
      </div>
    </div>
  );
}

export default About;
