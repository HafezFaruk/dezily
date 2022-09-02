import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import About from "./components/Pages/About.js";

import Error from "./pages/Error.js";
import Home from "./pages/Home.js";
import Pages from "./pages/Pages.js";
import Services from "./pages/Services.js";
import Footer from "./Share/Footer/Footer.js";

import Navigation from "./Share/Navigation/Navigation.js";
import HeartSurgery from './components/ServicesComponents/HeartSurgery/HeartSurgery'



function Router() {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route index element={<Home />} />


        <Route path="services" element={<Services />}>
          <Route path="heartSurgery" element={<HeartSurgery />} />
        </Route>

        <Route path="pages" element={<Pages />}>
          <Route path="about" element={<About />} />
        </Route>
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default Router;
