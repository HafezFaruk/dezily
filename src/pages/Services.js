


import React from 'react';
import Banner from '../components/ServicesComponents/banner/Banner';
import ServicesNavbar from '../components/ServicesComponents/servicesNavbar/ServicesNavbar';
import HeartSurgery from '../components/ServicesComponents/HeartSurgery/HeartSurgery';
import {Outlet} from 'react-router-dom'



const Services = () => {
  return (
    <div>
      <Banner />
      <ServicesNavbar />

      <Outlet />

      <HeartSurgery />

    </div>
  )
}

export default Services