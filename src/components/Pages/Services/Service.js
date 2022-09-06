import React from "react";
import HeaderFeature from "../about/HeaderFeature";
import ServicePage from "./ServicePage";

const Service = () => {
  return (
    <div>
      <div className="h-[32rem]">
        <HeaderFeature tab="Services" />
      </div>
      <ServicePage />
    </div>
  );
};

export default Service;
