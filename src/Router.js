import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./components/Pages/about/About";
import FAQ from "./components/Pages/FAQ/FAQ";
import Service from "./components/Pages/Services/Service";
import Team from "./components/Pages/Team/Team";
import TeamDetails from "./components/Pages/TeamDetails/TeamDetails";
import Error from "./pages/Error.js";
import Home from "./pages/Home.js";
import Pages from "./pages/Pages.js";
import Footer from "./Share/Footer/Footer.js";
import Navigation from "./Share/Navigation/Navigation.js";

function Router() {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route index element={<Home />} />
        <Route index element={<Home />} />
        <Route path="pages" element={<Pages />}>
          <Route path="about-us" element={<About />} />
          <Route path="services" element={<Service />} />
          <Route path="our-team" element={<Team />} />
          <Route path="team-details" element={<TeamDetails />} />
          <Route path="FAQ" element={<FAQ />} />
        </Route>
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default Router;
