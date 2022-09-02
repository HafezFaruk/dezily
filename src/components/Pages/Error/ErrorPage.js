import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="">
      <div className="container mx-auto">
        <div className="flex space-x-2 justify-center items-center">
          <h1 className="text-[30rem] font-semibold text-[#33D687]">4</h1>
          <img
            className="h-[30rem]"
            src="https://i.ibb.co/xXSdVSM/error-404.png"
            alt=""
          />
          <h1 className="text-[30rem] font-semibold text-[#33D687]">4</h1>
        </div>
        <div className="text-center space-y-2 mb-10">
          <h2 className="text-5xl font-bold">Page not found</h2>
          <p className="text-xl text-gray-500">
            The page you are looking for might have been removed had its name
            changed or is temporarily unavailable.
          </p>
          <br />
          <Link to="/">
            <button className="px-10 py-3 text-white bg-[#2A334E] hover:bg-[#33C687]">
              Back To Home
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
