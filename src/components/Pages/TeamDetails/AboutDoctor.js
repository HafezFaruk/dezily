import React from "react";
import { AiOutlineInstagram } from "react-icons/ai";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { ImCheckmark } from "react-icons/im";
import { IoLogoTwitter } from "react-icons/io";
const AboutDoctor = () => {
  return (
    <div className="bg-[#F5F5F5]">
      <div className="container mx-auto py-20">
        <h2 className="text-[#33D687] text-xl pb-5 font-semibold uppercase">
          About Doctors
        </h2>
        <h1 className="text-[#2A334E] text-5xl font-bold capitalize">
          High Level Of Experienced And Professional.
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-10">
          <div>
            <h2 className="text-2xl text-[#2A334E] font-semibold">
              Address Info
            </h2>
            <div className="pt-4 space-y-3">
              <p className="text-[#8D8D8D] text-lg">
                New Yourk 523 Sylvan Ave, 5th Floor <br /> Mountain View, CA
                94041USA
              </p>
              <p className="text-[#8D8D8D] text-lg">
                +1 234 719 8948 <br />
                +1 987 654 3210
              </p>
              <p className="text-[#8D8D8D] text-lg underline">
                support@themetechmount.com
              </p>
              <div className="flex space-x-3 pt-3">
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
          <div>
            <h2 className="text-2xl text-[#2A334E] font-semibold">
              Personal Info
            </h2>
            <div className="pt-4 space-y-3">
              <ul className="space-y-3 text-lg text-[#8D8D8D]">
                <li className="flex items-center">
                  <span className="text-[#33D687]  pr-3">
                    <ImCheckmark />
                  </span>{" "}
                  Five years of professional cardiologist
                </li>
                <li className="flex items-center">
                  <span className="text-[#33D687]  pr-3">
                    <ImCheckmark />
                  </span>{" "}
                  Expertise in heart monitoring
                </li>
                <li className="flex items-center">
                  <span className="text-[#33D687]  pr-3">
                    <ImCheckmark />
                  </span>{" "}
                  Excellent knowledge of engiography
                </li>
                <li className="flex items-center">
                  <span className="text-[#33D687]  pr-3">
                    <ImCheckmark />
                  </span>{" "}
                  Passionate about giving best
                </li>
                <li className="flex items-center">
                  <span className="text-[#33D687]  pr-3">
                    <ImCheckmark />
                  </span>{" "}
                  Good in managing time and organizing tasks
                </li>
                <li className="flex items-center">
                  <span className="text-[#33D687]  pr-3">
                    <ImCheckmark />
                  </span>{" "}
                  Orthodontic appliances may also be a part
                </li>
                <li className="flex items-center">
                  <span className="text-[#33D687]  pr-3">
                    <ImCheckmark />
                  </span>{" "}
                  Expertise in heart monitoring
                </li>
              </ul>
            </div>
          </div>
          <div>
            <h2 className="text-2xl text-[#2A334E] font-semibold">Values</h2>
            <div className="pt-4 space-y-3">
              <ul className="space-y-3 text-lg text-[#8D8D8D]">
                <li className="flex items-center">
                  <span className="text-[#33D687]  pr-3">
                    <ImCheckmark />
                  </span>{" "}
                  Five years of professional cardiologist
                </li>
                <li className="flex items-center">
                  <span className="text-[#33D687]  pr-3">
                    <ImCheckmark />
                  </span>{" "}
                  Expertise in heart monitoring
                </li>
                <li className="flex items-center">
                  <span className="text-[#33D687]  pr-3">
                    <ImCheckmark />
                  </span>{" "}
                  Excellent knowledge of engiography
                </li>
                <li className="flex items-center">
                  <span className="text-[#33D687]  pr-3">
                    <ImCheckmark />
                  </span>{" "}
                  Passionate about giving best
                </li>
                <li className="flex items-center">
                  <span className="text-[#33D687]  pr-3">
                    <ImCheckmark />
                  </span>{" "}
                  Good in managing time and organizing tasks
                </li>
                <li className="flex items-center">
                  <span className="text-[#33D687]  pr-3">
                    <ImCheckmark />
                  </span>{" "}
                  Orthodontic appliances may also be a part
                </li>
                <li className="flex items-center">
                  <span className="text-[#33D687]  pr-3">
                    <ImCheckmark />
                  </span>{" "}
                  Expertise in heart monitoring
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutDoctor;
