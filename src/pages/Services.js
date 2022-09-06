import React from 'react'
import { Outlet } from 'react-router-dom'
import ServicesNavbar from '../components/ServicesComponents/servicesNavbar/ServicesNavbar'
import HeaderFeature from '../components/Pages/about/HeaderFeature'


function Services() {
  return (
    <div>
      <div className="h-[32rem]">
        <HeaderFeature tab="Services Details" />
      </div>
      <ServicesNavbar />
      <Outlet />
    </div>
  )
}

export default Services