import React from "react";
import { Outlet } from "react-router-dom";

function Pages() {
  return (
    <div>
      <Outlet />
    </div>
  );
}

export default Pages;
