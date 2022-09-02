import React from "react";
import HeaderFeature from "../about/HeaderFeature";
import Team from "./Team";

const Service = () => {
  return (
    <div>
      <div className="h-[32rem]">
        <HeaderFeature tab="Services" />
      </div>
      <Team />
    </div>
  );
};

export default Service;
