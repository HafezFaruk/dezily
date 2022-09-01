import React from "react";

export default function Health() {
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
            <div className="container mx-auto">2</div>
        </div>
        <div className="bg-dark">
        <div className="container mx-auto">2</div>
        </div>
      </div>
    </div>
  );
}
