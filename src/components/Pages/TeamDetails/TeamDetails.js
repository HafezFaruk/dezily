import React from "react";
import HeaderFeature from "../about/HeaderFeature";
import AboutDoctor from "./AboutDoctor";
import Expertise from "./Expertise";
import Qualifications from "./Qualifications";

const TeamDetails = () => {
  return (
    <div>
      <div className="h-[32rem]">
        <HeaderFeature tab="Team Details" />
      </div>
      <Expertise />
      <AboutDoctor />
      <Qualifications />
    </div>
  );
};

export default TeamDetails;
