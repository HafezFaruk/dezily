
import React from "react";
import Banner from "../components/ServicesComponents/banner/Banner";
import Clients from "../components/HomeComponents/Clients/Clients";
import ContactUs from "../components/Pages/about/CounterFeature";
import Health from "../components/HomeComponents/Health/Health";
import OurBlog from "../components/HomeComponents/OurBlog/OurBlog";
import ServiceProvide from "../components/HomeComponents/ServiceProvide/ServiceProvide";
import { Outlet } from "react-router-dom";
import HomeService from "../components/HomeComponents/HomeService/HomeService.js";

function Home() {
  return (
    <div className="bg">
      <Banner />
      <HomeService />
      <ContactUs />
      <ServiceProvide />
      <Health />
      <Clients />
      <OurBlog />
      <Outlet />
    </div>
  )
}

export default Home