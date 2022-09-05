import React from "react";
import HeaderFeature from "./../../Pages/about/HeaderFeature";

export default function TopBanner() {
 
  return (
    <div>
      <div className="bg-blogBanner md:bg-cover bg-no-repeat md:h-100">
        <div className="h-[28rem]">
          <HeaderFeature tab="Blog " />
        </div>
      </div>
    </div>
  );
}
