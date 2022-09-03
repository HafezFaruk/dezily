import React from "react";
import HeaderFeature from "../about/HeaderFeature";
import TeamDoctorsDetails from "./TeamDoctorsDetails";

const TeamDetails = () => {
  return (
    <div>
      <div className="h-[32rem]">
        <HeaderFeature tab="Team Details" />
      </div>
      <TeamDoctorsDetails />
    </div>
  );
};

export default TeamDetails;
