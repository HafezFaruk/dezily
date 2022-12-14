import React from "react";
import HeaderFeature from "../about/HeaderFeature";
import ErrorPage from "./ErrorPage";

const Error = () => {
  return (
    <div>
      <div className="h-[32rem]">
        <HeaderFeature tab="Error Page" />
      </div>
      <ErrorPage />
    </div>
  );
};

export default Error;
