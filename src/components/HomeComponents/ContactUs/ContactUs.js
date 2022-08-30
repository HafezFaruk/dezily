import React from "react";

export default function ContactUs() {
  return (
    <div className="container mx-auto md:p-20">
      <div className="  md:flex space-x-6">
        <div className=" md:p-15">
          <img
            className=""
            src="https://themetechmount.com/html/dezily/images/single-img-01.jpg"
            alt=""
          />
        </div>
        <div className="p-3">
          <h2 className="text-skin font-bold text-start">WHY CHOOSE US</h2>
          <h1 className="text-dark text-start font-bold  text-4xl">
            Heart Surgery Specialist <br /> Expert Doctors
          </h1>
          <p className="text-start text-grey py-5">
            Chest pain is the most common warning sign of a heart attack. But
            there can be other symptoms, too, like lightheadedness.
          </p>
          {/* Hart Transplate */}

          <div className="flex">
            <div className="flex">
              <div className="bg-light-gray flex hover:bg-green  border-l-red-500">
                <i className="fi fi-rr-pulse hover:text-white text-center text-4xl w-full mt-2 p-5 "></i>
              </div>
              <div>
                {" "}
                <h2 className="text-start text-dark text-md font-bold pl-2">
                  {" "}
                  Heart Transplante
                </h2>
                <p className="text-start text-light-gray pl-2">
                  {" "}
                  Heart symptoms call us for immediate
                </p>
              </div>
            </div>
            <div className="flex pl-1">
              <div className="bg-light-gray flex hover:bg-green ">
                <i className="fi fi-rr-pulse hover:text-white text-center text-4xl w-full p-5 mt-2 "></i>
              </div>
              <div>
                {" "}
                <h2 className="text-start text-dark text-md font-bold pl-2">
                  {" "}
                  Heart Surgery
                </h2>
                <p className="text-start text-light-gray pl-2">
                  {" "}
                  Heart is get replaced with healthier
                </p>
              </div>
            </div>
          </div>

          <hr className="mt-10 text-light-gray" />
          {/* Cardiology  */}
          <div className="md:flex  space-x-3 p-2 mt-5">
            <div>
              <img
                className="h-28 w-60"
                src="https://themetechmount.com/html/dezily/images/single-img-24.jpg"
                alt=""
              />
            </div>
            <div>
              <h2 className=" text-start text-lg font-bold">
                Our Cardiology Hospital Services  Manufacture Found In
                1996
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
