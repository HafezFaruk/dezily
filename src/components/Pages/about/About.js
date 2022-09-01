import React from "react";
import AboutDezily from "./AboutDezily";
import Achivements from "./Achivements";
import CounterFeature from "./CounterFeature";
import Expertise from "./Expertise";
import HeaderFeature from "./HeaderFeature";

function About() {
  return (
    <div>
      <div className="h-[32rem]">
        <HeaderFeature tab="About Us" />
      </div>
      <AboutDezily />
      <CounterFeature />
      <Achivements />
      <Expertise />
    </div>
  );
}

export default About;
