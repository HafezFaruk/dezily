import React from "react";
import Count from "./Count";
const CounterFeature = () => {
  return (
    <div className="h-[45rem] -z-10 bg-heart_Beat relative -mt-10 w-full bg-cover bg-center">
      <div className="container mx-auto">
        <div className="flex h-[45rem] justify-center items-center">
          <div className="space-y-8">
            <h2 className="text-4xl text-gray-200 font-semibold">
              We Have The Top Level Of World Best Heart Surgery Specialist
              Expert Doctors. We are Used Latest Technology.
            </h2>
            <div className="grid grid-cols-1 gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
              <div className="flex justify-center items-center bg-gray-700 p-5 gap-10">
                <div>
                  <img
                    className="w-16
                    img_color
                  "
                    src="https://i.ibb.co/2yVXksy/heart-attack-4.png"
                    alt=""
                  />
                </div>
                <div>
                  <h2 className="text-white text-5xl font-bold">
                    <Count end="580" />
                  </h2>
                  <p className="text-white">Heart Inspection</p>
                </div>
              </div>
              <div className="flex justify-center items-center bg-gray-700 p-5 gap-10">
                <div>
                  <img
                    className="w-16
                    img_color
                  "
                    src="https://i.ibb.co/25fDx32/heart-attack-2.png"
                    alt=""
                  />
                </div>
                <div>
                  <h2 className="text-white text-5xl font-bold">
                    <Count end="420" />
                  </h2>
                  <p className="text-white">Heart Therapy</p>
                </div>
              </div>
              <div className="flex justify-center items-center bg-gray-700 p-5 gap-10">
                <div>
                  <img
                    className="w-16
                    img_color
                  "
                    src="https://i.ibb.co/2yDkx39/heart-attack.png"
                    alt=""
                  />
                </div>
                <div>
                  <h2 className="text-white text-5xl font-bold">
                    <Count end="340" />
                  </h2>
                  <p className="text-white">Heart Attack</p>
                </div>
              </div>
              <div className="flex justify-center items-center bg-gray-700 p-5 gap-10">
                <div>
                  <img
                    className="w-16
                    img_color
                  "
                    src="https://i.ibb.co/xq0KnB6/microsurgery.png"
                    alt=""
                  />
                </div>
                <div>
                  <h2 className="text-white text-5xl font-bold">
                    <Count end="125" />
                  </h2>
                  <p className="text-white">Heart Transplant</p>
                </div>
              </div>
            </div>
            <hr />
            <h2 className="capitalize text-gray-200 font-semibold text-4xl text-center">
              Get Primium candiac Services call us!
            </h2>
          </div>
        </div>
        <div className="flex  justify-center">
          <div className="text-center  w-2/5 p-7 -mt-20 text-gray-100 bg-[#33D687]">
            <h2 className="text-3xl font-semibold">+123 456 789 012</h2>
            <p>Lorem ipsum dolor lorea sit amet, conseream iscing</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CounterFeature;
