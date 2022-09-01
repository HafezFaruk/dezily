import React from "react";
import { FaChevronCircleRight } from "react-icons/fa";
const Expertise = () => {
  return (
    <div className="bg-gray-100">
      <div className="container mx-auto py-32">
        <div className="grid grid-cols-a sm:grid-cols-1 lg:grid-cols-2 gap-10 ">
          <div>
            <h4 className="uppercase text-[#33D687] font-bold">
              Our Expertise
            </h4>
            <h2>Cardiologists are doctors who treating diseases</h2>
            <p>
              A surgical procedure used in which the blocked portion of the
              coronary artery is bypassed with another piece of blood vessel.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 space-x-3">
              <div className="flex bg-white p-5">
                <FaChevronCircleRight className="text-[#33D687] text-xl" />
                <h3 className="capitalize">Reliable and proven</h3>
              </div>
              <div>
                <h3 className="capitalize">Best team members</h3>
              </div>
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Expertise;
