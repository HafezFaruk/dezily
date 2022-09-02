
// import Services from './Services'

import React from "react";
import Banner from "../components/HomeComponents/Banner/Banner";
import ContactUs from "../components/HomeComponents/ContactUs/ContactUs";
import HomeService from "../components/HomeComponents/HomeService/HomeService";
import ServiceProvide from "../components/HomeComponents/ServiceProvide/ServiceProvide";
import { Outlet } from "react-router-dom";

function Home() {
  return (
    <div>
      {/* <Services /> */}

      <ContactUs />
      <ServiceProvide />
      <Outlet />
    </div>
  );
}

export default Home;
