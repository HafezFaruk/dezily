import React from 'react';
import Banner from '../components/ServicesComponents/banner/Banner';
import ServicesNavbar from '../components/ServicesComponents/servicesNavbar/ServicesNavbar';
import HeartSurgery from '../components/ServicesComponents/HeartSurgery/HeartSurgery';



const Services = () => {
  return (
    <div>
      <Banner />
      <ServicesNavbar />
      <HeartSurgery />
    </div>
  )
}

export default Services