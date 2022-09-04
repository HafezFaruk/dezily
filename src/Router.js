import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Service from "./components/Pages/Services/Service";
import Error from "./pages/Error.js";
import Home from "./pages/Home.js";
import Pages from "./pages/Pages.js";
import Services from "./pages/Services.js";
import Footer from "./Share/Footer/Footer.js";
import About from "./components/Pages/about/About";
import Navigation from "./Share/Navigation/Navigation.js";
import Portfolio from "./pages/Portfolio.js";
import ProjectStyleOne from "./components/Portfolio/ProjectStyleOne.js";
import ProjectSingleView from "./components/Portfolio/ProjectSingleView.js";
import Blog from "./pages/Blog.js";
import BlogClassic from "./components/Blog/BlogClassic.js";
import BlogGridView from "./components/Blog/BlogGridView.js";
import BlogSingleView from "./components/Blog/BlogSingleView.js";
import HeartSurgery from "./components/ServicesComponents/HeartSurgery/HeartSurgery";
import ValveDiseases from "./components/ServicesComponents/Valve Diseases/ValveDiseases";


function Router() {
  return (
    <BrowserRouter>
      {/* <NavigationBar/> */}
      <Navigation />
      <Routes>
        <Route index element={<Home />} />


        <Route path="services" element={<Services />}>
          <Route path="heartSurgery" element={<HeartSurgery />} />
          <Route path="valveDiseases" element={<ValveDiseases />} />
        </Route>

        <Route path="pages" element={<Pages />}>
          <Route path="about-us" element={<About />} />
          <Route path="services" element={<Service />} />
          <Route path="Team-Details" element={<About />} />
          <Route path="FAQ" element={<About />} />
        </Route>


        <Route path="services" element={<Services />}>
          <Route path="HeartSurgery" element={<HeartSurgery />} />

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
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default Router;
