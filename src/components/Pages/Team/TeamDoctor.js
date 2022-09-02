import React from "react";
import { BsTwitter } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";

const TeamDoctor = () => {
  return (
    <div className="container mx-auto py-5">
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-14">
        <div className="bg-gray-200 hover:bg-[#33D687] group overflow-hidden">
          <img
            className="group-hover:scale-105 group-hover:origin-bottom group-hover:-rotate-6 transition ease-in duration-700"
            src="https://i.ibb.co/9vw9z8J/team-01.jpg"
            alt=""
          />
          <div className="p-5 space-y-2 group-hover:text-white group-hover:float-right">
            <h3 className="text-2xl font-semibold">Dr. Sarah Rose</h3>
            <div className="flex space-x-2">
              <span>
                <FaFacebookF />
              </span>
              <span>
                <BsTwitter />
              </span>
              <span>
                <FiInstagram />
              </span>
            </div>
          </div>
        </div>
        <div className="bg-gray-200 hover:bg-[#33D687] group overflow-hidden">
          <img
            className="group-hover:scale-105 group-hover:origin-bottom group-hover:-rotate-6 transition ease-in duration-700"
            src="https://i.ibb.co/RpSFBQk/03.jpg"
            alt=""
          />
          <div className="p-5 space-y-2 group-hover:text-white group-hover:float-right">
            <h3 className="text-2xl font-semibold">Dr. Annia Konikova</h3>
            <div className="flex space-x-2">
              <span>
                <FaFacebookF />
              </span>
              <span>
                <BsTwitter />
              </span>
              <span>
                <FiInstagram />
              </span>
            </div>
          </div>
        </div>
        <div className="bg-gray-200 hover:bg-[#33D687] group overflow-hidden">
          <img
            className="group-hover:scale-105 group-hover:origin-bottom group-hover:-rotate-6 transition ease-in duration-700"
            src="https://i.ibb.co/YhqctPk/02.jpg"
            alt=""
          />
          <div className="p-5 space-y-2 group-hover:text-white group-hover:float-right">
            <h3 className="text-2xl font-semibold">Dr. Garrenth Mills</h3>
            <div className="flex space-x-2">
              <span>
                <FaFacebookF />
              </span>
              <span>
                <BsTwitter />
              </span>
              <span>
                <FiInstagram />
              </span>
            </div>
          </div>
        </div>
        <div className="bg-gray-200 hover:bg-[#33D687] group overflow-hidden">
          <img
            className="group-hover:scale-105 group-hover:origin-bottom group-hover:-rotate-6 transition ease-in duration-700"
            src="https://i.ibb.co/J31BfGx/04.jpg"
            alt=""
          />
          <div className="p-5 space-y-2 group-hover:text-white group-hover:float-right">
            <h3 className="text-2xl font-semibold">Dr. Maria Gordian</h3>
            <div className="flex space-x-2">
              <span>
                <FaFacebookF />
              </span>
              <span>
                <BsTwitter />
              </span>
              <span>
                <FiInstagram />
              </span>
            </div>
          </div>
        </div>
        <div className="bg-gray-200 hover:bg-[#33D687] group overflow-hidden">
          <img
            className="group-hover:scale-105 group-hover:origin-bottom group-hover:-rotate-6 transition ease-in duration-700"
            src="https://i.ibb.co/YhNZqjB/05.jpg"
            alt=""
          />
          <div className="p-5 space-y-2 group-hover:text-white group-hover:float-right">
            <h3 className="text-2xl font-semibold">Dr. Natalia Zox</h3>
            <div className="flex space-x-2">
              <span>
                <FaFacebookF />
              </span>
              <span>
                <BsTwitter />
              </span>
              <span>
                <FiInstagram />
              </span>
            </div>
          </div>
        </div>
        <div className="bg-gray-200 hover:bg-[#33D687] group overflow-hidden">
          <img
            className="group-hover:scale-105 group-hover:origin-bottom group-hover:-rotate-6 transition ease-in duration-700"
            src="https://i.ibb.co/DQ6c0B0/06.jpg"
            alt=""
          />
          <div className="p-5 space-y-2 group-hover:text-white group-hover:float-right">
            <h3 className="text-2xl font-semibold">Dr. Gordian Mon</h3>
            <div className="flex space-x-2">
              <span>
                <FaFacebookF />
              </span>
              <span>
                <BsTwitter />
              </span>
              <span>
                <FiInstagram />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamDoctor;
