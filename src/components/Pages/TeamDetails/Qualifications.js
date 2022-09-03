import React from "react";
import { FaChevronCircleRight } from "react-icons/fa";
const Qualifications = () => {
  return (
    <div>
      <div className="container mx-auto py-24">
        <h4 className="text-xl text-[#33D687] uppercase font-semibold">
          Qualification Details
        </h4>
        <h4 className="text-5xl text-[#2A334E] py-2 font-bold">
          My Experienceand Years Of Education
        </h4>
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 pt-10 gap-5">
          <div className="space-y-5">
            <div>
              {" "}
              <div className="flex items-center">
                <span className="text-[#33D687] text-3xl pr-2">
                  <FaChevronCircleRight />
                </span>
                <h2 className="text-3xl font-bold text-[#2A334E]">
                  Robotic Heart Surgery - Chicago
                </h2>
              </div>
              <p className="pb-3 text-[#8D8D8D] text-lg  py-2">2003-2006</p>
              <p className="pb-3 text-[#8D8D8D] text-lg">
                Surgeons can offer minimally-invasive robotic surgery across a
                variety of procedures. Colorectal. Gynecologic. Bariatric.
                Prostate. Inguinal & Ventral Hernia. Lung. More. Types: Da Vinci
                Surgical Systems, For General Surgery, For Gynecology, For
                Urology.
              </p>
            </div>
            <div>
              <div className="flex items-center">
                <span className="text-[#33D687] text-3xl pr-2">
                  <FaChevronCircleRight />
                </span>
                <h2 className="text-3xl font-bold text-[#2A334E]">
                  University of Pennsylvania Hospital Heart Surgery
                </h2>
              </div>
              <p className="pb-3 text-[#8D8D8D] text-lg  py-2">2016-2018</p>
              <p className="pb-3 text-[#8D8D8D] text-lg">
                The Hospital of the University of Pennsylvania has achieved a
                three-star rating for isolated coronary artery bypass surgery
                for calendar year 2019 from the best surgery for the year
              </p>
            </div>
          </div>
          <div className="space-y-5">
            <div>
              {" "}
              <div className="flex items-center">
                <span className="text-[#33D687] text-3xl pr-2">
                  <FaChevronCircleRight />
                </span>
                <h2 className="text-3xl font-bold text-[#2A334E]">
                  Killifish emperor bream
                </h2>
              </div>
              <p className="pb-3 text-[#8D8D8D] text-lg  py-2">2007-2009</p>
              <p className="pb-3 text-[#8D8D8D] text-lg">
                This is to verify that Dr. Sam George S/O Mr. George Steve has
                worked with our team at International Hospital for 3 years i.e.
                2012-2015. He has his specialization in Medicine and Surgery and
                for this reason he has been made in-charge of Surgery for a
                year.
              </p>
            </div>
            <div>
              <div className="flex items-center">
                <span className="text-[#33D687] text-3xl pr-2">
                  <FaChevronCircleRight />
                </span>
                <h2 className="text-3xl font-bold text-[#2A334E]">
                  Thresher shark red snapper
                </h2>
              </div>
              <p className="pb-3 text-[#8D8D8D] text-lg py-2">2010-2015</p>
              <p className="pb-3 text-[#8D8D8D] text-lg">
                His 8 years of experience is commendably suitable and perfect
                for the field. He is leaving the job as he his moving abroad for
                further specialization. We are glad to have him as a part of our
                team.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Qualifications;
