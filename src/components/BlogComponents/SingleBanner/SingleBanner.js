import React from "react";

export default function SingleBanner() {
  return (
    <div className="bg-blogBanner md:bg-cover bg-no-repeat md:h-100">
      <div data-aos="fade-up" className="p-20 md:p-52">
        <div className="flex justify-center">
          <button className="bg-green text-white px-3 py-2">CRDILOGY</button>
        </div>

        <h2 className="text-center  text-white text-3xl md:text-4xl font-bold text-">
          Blog-Single
        </h2>
        <p className="text-center text-white font-semibold text-lg">
          Home/Blog
        </p>
      </div>
    </div>
  );
}
