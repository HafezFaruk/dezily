import React from "react";
import HeaderFeature from "../about/HeaderFeature";
import FAQDetails from "./FAQDetails";

const FAQ = () => {
  return (
    <div>
      <div className="h-[32rem]">
        <HeaderFeature tab="FAQ" />
      </div>
      <FAQDetails />
    </div>
  );
};

export default FAQ;
