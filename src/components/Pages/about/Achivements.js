import React from "react";

const Achivements = () => {
  return (
    <div className="container mx-auto py-32">
      <div className="text-center">
        <h5 className="uppercase text-[#33D687]">Big archivements</h5>
        <h2 className="capitalize text-4xl font-semibold">
          We are achieve the success of
        </h2>
        <h2 className="capitalize text-4xl font-semibold">heart surgery</h2>
      </div>
      <div className="grid grid-cols-1  sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-56 gap-6">
        <div className="bg-gray-100">
          <img
            className="px-10 -mt-32"
            src="https://i.ibb.co/hY3NhyX/01.png"
            alt=""
          />
          <div className="text-center py-6">
            <h2 className="text-3xl font-semibold">ISO 1231</h2>
            <p className="text-lg">Quality Services Provider</p>
          </div>
        </div>
        <div className="bg-gray-100">
          <img
            className="px-10 -mt-32"
            src="https://i.ibb.co/6NdBVHh/02.png"
            alt=""
          />
          <div className="text-center py-6">
            <h2 className="text-3xl font-semibold">ISO 1231</h2>
            <p className="text-lg">Quality Services Provider</p>
          </div>
        </div>
        <div className="bg-gray-100">
          <img
            className="px-10 -mt-32"
            src="https://i.ibb.co/zHdDKhp/03.png"
            alt=""
          />
          <div className="text-center py-6">
            <h2 className="text-3xl font-semibold">ISO 1231</h2>
            <p className="text-lg">Quality Services Provider</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Achivements;
