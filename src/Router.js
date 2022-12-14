import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./components/Pages/about/About";
import Error from "./components/Pages/Error/Error";
import FAQ from "./components/Pages/FAQ/FAQ";
import Service from "./components/Pages/Services/Service";
import Team from "./components/Pages/Team/Team";
import TeamDetails from "./components/Pages/TeamDetails/TeamDetails";
import Home from "./pages/Home.js";
import Pages from "./pages/Pages.js";
import Services from "./pages/Services.js";
import Footer from "./Share/Footer/Footer.js";
import Navigation from "./Share/Navigation/Navigation.js";
import Portfolio from "./pages/Portfolio.js";
import ProjectStyleOne from "./components/Portfolio/ProjectStyleOne.js";
import ProjectSingleView from "./components/Portfolio/ProjectSingleView.js";
import Blog from "./pages/Blog.js";
import ContactUs from "./pages/ContactUs.js";
import BlogClassic from "./components/Blog/BlogClassic.js";
import BlogGridView from "./components/Blog/BlogGridView.js";
import BlogSingleView from "./components/Blog/BlogSingleView.js";
import HeartSurgery from "./components/ServicesComponents/HeartSurgery/HeartSurgery";
import ValveDiseases from "./components/ServicesComponents/Valve Diseases/ValveDiseases";
import ChildrenServices from "./components/ServicesComponents/ChildrenServices/ChildrenServices";
import HeartTransplant from "./components/ServicesComponents/HeartTransplant/HeartTransplant";
import Endocrinology from "./components/ServicesComponents/Endocrinology/Endocrinology";
import CardiacSurgery from "./components/ServicesComponents/CardiacSurgery/CardiacSurgery";
import CardioConsultancy from "./components/BlogCategories/CardioConsultancy";
import CardiologyExercise from "./components/BlogCategories/CardiologyExercise";
import ExperienceDoctors from "./components/BlogCategories/ExperienceDoctors";
import HealthCare from './components/BlogCategories/HealthCare';
import HeartTransplants from './components/BlogCategories/HeartTransplants';


function Router() {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route index element={<Home />} />


        <Route path="services" element={<Services />}>
          <Route path="heartSurgery" element={<HeartSurgery />} />
          <Route path="valveDiseases" element={<ValveDiseases />} />
          <Route path="childrenServices" element={<ChildrenServices />} />
          <Route path="heartTransplant" element={<HeartTransplant />} />
          <Route path="endocrinology" element={<Endocrinology />} />
          <Route path="cardiacSurgery" element={<CardiacSurgery />} />
        </Route>

        <Route path="pages" element={<Pages />}>
          <Route path="about-us" element={<About />} />
          <Route path="services" element={<Service />} />
          <Route path="our-team" element={<Team />} />t
          <Route path="team-details" element={<TeamDetails />} />
          <Route path="FAQ" element={<FAQ />} />
        </Route>



        <Route path="portfolio" element={<Portfolio />}>
          <Route path="ProjectStyleOne" element={<ProjectStyleOne />} />
          <Route path="ProjectSingleView" element={<ProjectSingleView />} />
        </Route>
        <Route path="blog" element={<Blog />}>
          <Route path="BlogClassic" element={<BlogClassic />} />
          <Route path="BlogGridView" element={<BlogGridView />} />
          <Route path="BlogSingleView" element={<BlogSingleView />} />
        </Route>

        {/* Naimur */}
        <Route path="CardioConsultancy" element={<CardioConsultancy />} />
        <Route path="CardiologyExercise" element={<CardiologyExercise />} />
        <Route path="ExperienceDoctors" element={<ExperienceDoctors />} />
        <Route path="HealthCare" element={<HealthCare />} />
        <Route path="HeartTransplants" element={<HeartTransplants />} />
        {/* Naimur */}
        <Route path="contact" element={<ContactUs />} />

        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default Router;
