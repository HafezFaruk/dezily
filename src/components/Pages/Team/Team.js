import React from "react";
import HeaderFeature from "../about/HeaderFeature";
import TeamDoctor from "./TeamDoctor";

const Team = () => {
  return (
    <div>
      <div className="h-[32rem]">
        <HeaderFeature tab="Our Team" />
      </div>
      <TeamDoctor />
    </div>
  );
};

export default Team;
