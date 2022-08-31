import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import headerBanner from "../../assets/images/pagetitle-bg.jpg";
const HeaderFeature = ({ tab }) => {
  return (
    <div className="bg-gradient-to-tr from-gray-700 to-gray-600 w-full relative h-[28rem] bg-cover bg-center">
      <img
        className="w-full absolute mix-blend-overlay h-full bg-center object-cover"
        src={headerBanner}
        alt=""
      />

      <div className="justify-center  flex w-full h-[32rem] items-center font-bold text-white">
        <div className="text-center">
          <h2 className="text-7xl my-3">{tab}</h2>
          <ul className="flex justify-center items-center">
            <li className="text-2xl">Home</li>
            <li className="text-2xl mx-2">
              <IoIosArrowForward />
            </li>
            <li className="text-2xl">{tab}</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default HeaderFeature;
