<<<<<<< HEAD
import React from 'react'
import Services from './Services'

function Home() {
  return (
    <div>
      <Services />
=======
import React from "react";
import Banner from "../components/HomeComponents/Banner/Banner";
import Clients from "../components/HomeComponents/Clients/Clients";
import ContactUs from "../components/HomeComponents/ContactUs/ContactUs";
import Health from "../components/HomeComponents/Health/Health";
import OurBlog from "../components/HomeComponents/OurBlog/OurBlog";
import ServiceProvide from "../components/HomeComponents/ServiceProvide/ServiceProvide";
import { Outlet } from "react-router-dom";
import HomeService from "../components/HomeComponents/HomeService/HomeService.js";

function Home() {
  return (
    <div className="bg">
      <Banner/>
      <HomeService />
      <ContactUs />
      <ServiceProvide />
      <Health />
      <Clients />
      <OurBlog />
      <Outlet />
>>>>>>> c108023af24be27dbcee9e1befd17801245fd590
    </div>
  )
}

export default Home