import React from "react";
import { Link } from "react-router-dom";

const Expertise = () => {
  return (
    <div className="container mx-auto py-14">
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5">
        <div>
          <div className="w-1/3 space-y-2">
            <h2 className="text-xl text-[#33D687] uppercase">why i am</h2>
            <hr />
          </div>
          <div>
            <h3 className="text-4xl font-semibold pt-3">Dr. Garrenth Mills</h3>
            <p className="text-gray-400 text-xl ">Cardiologist</p>
            <p className="font-bold text-2xl py-4">
              High level of experienced and professional. Member have extensive
              practical experience, full training courses and top educational.
              She is helping heart patient and achieved success
            </p>
            <div className="py-10">
              <p className="border-l-4 h-full border-[#33D687]">
                <p className="pl-4">
                  Cardiologists are doctors who specialize in diagnosing and
                  treating diseases or conditions of the heart and blood
                  cardiovascular. He is helping heart patient and achieved
                  success. Cardiologists are doctors who specialize in
                  diagnosing and treating diseases or conditions of the heart
                  and blood cardiovascular. She is helping heart patient and
                  achieved success
                </p>
              </p>
            </div>
            <div className="pt-7">
              <Link to="/contact">
                <button className="px-10 py-3 text-white  hover:bg-[#2A334E] bg-[#33C687] transition duration-1000">
                  Contact Me
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div>
          <img className="" src="https://i.ibb.co/YhqctPk/02.jpg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Expertise;
