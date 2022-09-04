import React from 'react'
import { Outlet } from 'react-router-dom'
import ServicesNavbar from '../components/ServicesComponents/servicesNavbar/ServicesNavbar'

function Services() {
  return (
    <div>
      <ServicesNavbar />
      <Outlet />
    </div>
  )
}

export default Services