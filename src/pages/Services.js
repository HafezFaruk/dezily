import React from 'react'
import Banner from '../components/ServicesComponents/banner/Banner'
import ServicesNavbar from '../components/ServicesComponents/servicesNavbar/ServicesNavbar'
import { Outlet } from 'react-router-dom'


const Services = () => {
  return (
    <div>
      <Banner />
      <ServicesNavbar />
      <Outlet />
    </div>
  )
}

export default Services