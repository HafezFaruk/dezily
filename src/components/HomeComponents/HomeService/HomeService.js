import React from "react";

export default function HomeService() {
  return (
    <div className=" bg-service-color ">
      <div className=" container mx-auto py-10 ">
        <div className="md:grid grid-rows  grid-flow-col  gap-6">
          <div className="bg-white  flex space-x-2 p-7 my-2">
            <div className="flex justify-center">
              <img
                className="img_color h-12 w-16 "
                src="https://i.ibb.co/FKrF5jk/heart.png"
                alt="heart"
              />
            </div>
            <div>
              <h2 className="text-start text-dark font-bold ">
                Personalized Healthcare
              </h2>
              <p className="text-gray-400">
                You can call ohiical team if your child, teenager or...
              </p>
            </div>
          </div>
          <div className="bg-white flex space-x-2 p-7 my-2">
            <div className="flex justify-center">
              <img
                className="img_color h-12 w-16"
                src="https://i.ibb.co/gVqg24m/defibrillator.png"
                alt="doctor"
              />
            </div>
            <div>
              <h2 className="text-dark-blue text-start font-bold">
                fessional Team
              </h2>
              <p className="text-gray-400 text-start">
                Detects the presence or absence of skin...
              </p>
            </div>
          </div>
          <div className="bg-white flex space-x-2 p-7 my-2">
            <div className="flex justify-center">
              <img
                className="img_color h-12 w-16"
                src="https://i.ibb.co/SJHchgB/doctor.png"
                alt=""
              />
            </div>
            <div>
              <h2 className="text-dark-blue text-start font-bold">
                Regularly Checkup
              </h2>
              <p className="text-start text-gray-400">
                Device provides continuous recording of electrical...
              </p>
            </div>
          </div>
          <div className="bg-white flex space-x-2 p-7 my-2">
            <div className="flex justify-center">
              <img
                className="img_color h-12 w-16"
                src="https://i.ibb.co/jVCFDQ7/cardiology.png"
                alt=""
              />
            </div>
            <div>
              <h2 className="text-dark-blue text-start font-bold">
                Nuclear Stress Testing
              </h2>
              <p className="text-gray-400 text-start">
                Treatment of congenital heart , disease and...
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
