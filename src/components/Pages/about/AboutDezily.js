import React from "react";

const AboutDezily = () => {
  return (
    <div className="container mx-auto">
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
              Chest pain is the most common warning sign of a heart attack. But
              there can be other symptoms, too, like lightheadedness, nausea,
              and shortness of the breath.Breathing can be caused by different
              conditions.
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
                <span className=" px-3">
                  <img
                    className="w-12 
                      img_color 
                      group-hover:invert-[.94]
                      group-hover:sepia-[.50] 
                      group-hover:saturate-[881%] 
                      group-hover:hue-rotate-[70deg] 
                      group-hover:brightness-[1] 
                      group-hover:contrast-[1]
                      
                      "
                    src="https://i.ibb.co/YLbjkNw/heart-beat.png"
                    alt=""
                  />
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
                <span className="px-4">
                  <img
                    className="w-12
                      img_color
                      group-hover:invert-[.94]
                      group-hover:sepia-[.50] 
                      group-hover:saturate-[881%] 
                      group-hover:hue-rotate-[70deg] 
                      group-hover:brightness-[1] 
                      group-hover:contrast-[1]
                      "
                    src="https://i.ibb.co/xq0KnB6/microsurgery.png"
                    alt=""
                  />
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
          <div className="bg-white pt-40">
            <img
              className="w-full bg-white p-5 z-10"
              src="https://i.ibb.co/W3pdK8r/single-img-09.jpg"
              alt=""
            />
          </div>
        </div>
        <div className="flex pb-40 justify-around">
          <img src="https://i.ibb.co/mGT84BJ/single-Doctor.jpg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default AboutDezily;
