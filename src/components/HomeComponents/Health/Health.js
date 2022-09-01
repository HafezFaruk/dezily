import React from "react";

export default function Health() {
    const image={
        image:"https://i.ibb.co/7nQZ8MG/12.jpg"
    }
  return (
    <div>
      <div className="bg-no-repeat bg-health bg-cover bg-black ">
        <div className="container mx-auto">
          <h2 className="text-white font-bold pt-24">
            Heart Care Based Solutions
          </h2>
          <h1 className="text-white font-bold text-6xl pt-9 mb-5">
            We Take Good <span className="text-green">HEALTH</span> Care Of{" "}
            <span className="text-green">PATIENTS</span>
            <br /> Every Dieses
          </h1>
          <div className="py-28">
            <button className="bg-transparent hover:bg-white text-white font-semibold hover:text-black py-3 px-7 border border-white hover:border-transparent ">
              Contact
            </button>
          </div>
          {/* Two divs */}
        </div>
      </div>
      {/* two Card */}
      <div className="">
        <div className="bg-green">
          <div className="container mx-auto py-7 text-white font-bold">
            <p className="text-start">PATIENTS TESTIMONIALS</p>
            <h2 className="text-start text-4xl font-bold">
              What Are They Saying
            </h2>
            <hr className="w-96  mt-8"></hr>
            <p className="text-start">
              If you have any questions or need help contact
            </p>
            <p className="text-start py-1">with our team, or call</p>
            <div></div>
          </div>
        </div>
        <div className="bg-dark">
          <div className="container mx-auto">2</div>
        </div>
      </div>
    </div>
  );
}
