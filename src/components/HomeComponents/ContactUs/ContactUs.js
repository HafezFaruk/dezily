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
              <div className="bg-grey   hover:bg-green ">
                <i  className="fi fi-rr-pulse hover:text-whitetext-4xl w-full p-5 "></i>
              </div>
              <div>
                {" "}
                <h2> Heart Transplante</h2>
                <p>Heart symptoms call us for immediate</p>
              </div>
            </div>
            <div className="flex">
              <div>
                <i class="fi fi-rr-pulse"></i>
              </div>
              <div>
                {" "}
                <h2> Heart Transplante</h2>
                <p>Heart symptoms call us for immediate</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
