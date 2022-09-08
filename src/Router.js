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
import Footer from "./Share/Footer/Footer.js";
import Navigation from "./Share/Navigation/Navigation.js";
import Services from "./pages/Services.js";
import HeartSurgery from "./components/Services/HeartSurgery.js";
import ValveDiseases from "./components/Services/ValveDiseases.js";
import ChildrenServices from "./components/Services/ChildrenServices.js";
import HeartTransplant from "./components/Services/HeartTransplant.js";
import Endocrinology from "./components/Services/Endocrinology.js";
import CardiacSurgery from "./components/Services/CardiacSurgery.js";
import Portfolio from "./pages/Portfolio.js";
import ProjectStyleOne from "./components/Portfolio/ProjectStyleOne.js";
import ProjectSingleView from "./components/Portfolio/ProjectSingleView.js";
import Blog from "./pages/Blog.js";
import BlogClassic from "./components/Blog/BlogClassic.js";
import BlogGridView from "./components/Blog/BlogGridView.js";
import BlogSingleView from "./components/Blog/BlogSingleView.js";
import CardioConsultancy from "./components/BlogCategories/CardioConsultancy";

function Router() {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route index element={<Home />} />
        <Route path="pages" element={<Pages />}>
          <Route path="about-us" element={<About />} />
          <Route path="services" element={<Service />} />
          <Route path="our-team" element={<Team />} />
          <Route path="team-details" element={<TeamDetails />} />
          <Route path="FAQ" element={<FAQ />} />
        </Route>
        <Route path="services" element={<Services />}>
          <Route path="HeartSurgery" element={<HeartSurgery />} />
          <Route path="ValveDiseases" element={<ValveDiseases />} />
          <Route path="ChildrenServices" element={<ChildrenServices />} />
          <Route path="HeartTransplant" element={<HeartTransplant />} />
          <Route path="Endocrinology" element={<Endocrinology />} />
          <Route path="CardiacSurgery" element={<CardiacSurgery />} />
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
        <Route path="CardioConsultancy" element={<CardioConsultancy />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default Router;
