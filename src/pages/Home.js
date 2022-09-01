import React from "react";
import Banner from "../components/HomeComponents/Banner/Banner";
import ContactUs from "../components/HomeComponents/ContactUs/ContactUs";
import Health from "../components/HomeComponents/Health/Health";
import HomeService from "../components/HomeComponents/HomeService/HomeService";
import OurBlog from "../components/HomeComponents/OurBlog/OurBlog";
import ServiceProvide from "../components/HomeComponents/ServiceProvide/ServiceProvide";

function Home() {
  
  return (
    <div className="bg">
      <ContactUs />
      <ServiceProvide />
      <Health/>
      <OurBlog />
    </div>
  );
}

export default Home;
