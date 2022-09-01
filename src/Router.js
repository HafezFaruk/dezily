import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./components/Pages/about/About";
import Service from "./components/Pages/Services/Service";
import Error from "./pages/Error.js";
import Home from "./pages/Home.js";
import Pages from "./pages/Pages.js";
import Footer from "./Share/Footer/Footer.js";
import NavigationBar from "./Share/Navigation/NavigationBar.js";

function Router() {
  return (
    <BrowserRouter>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<Home />} />
          <Route path="page" element={<Pages />}>
            <Route path="about" element={<About />} />
            <Route path="services" element={<Service />} />
          </Route>
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default Router;
