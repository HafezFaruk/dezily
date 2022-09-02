import React from 'react'
import Banner from '../components/ServicesComponents/banner/Banner'
import HeartSurgery from '../components/ServicesComponents/HeartSurgery/HeartSurgery'
import ServicesNavbar from '../components/ServicesComponents/servicesNavbar/ServicesNavbar'


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