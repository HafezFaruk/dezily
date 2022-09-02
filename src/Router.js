import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
<<<<<<< HEAD
=======
import Service from "./components/Pages/Services/Service";
>>>>>>> c108023af24be27dbcee9e1befd17801245fd590
import Error from "./pages/Error.js";
import Home from "./pages/Home.js";
import Pages from "./pages/Pages.js";
import Footer from "./Share/Footer/Footer.js";
<<<<<<< HEAD
=======
import About from "./components/Pages/about/About";
>>>>>>> c108023af24be27dbcee9e1befd17801245fd590
import Navigation from "./Share/Navigation/Navigation.js";
// import NavigationBar from "./Share/Navigation/NavigationBar.js";

function Router() {
  return (
      <BrowserRouter>
      {/* <NavigationBar/> */}
      <Navigation/>
      <Routes>
<<<<<<< HEAD
        <Route path="/" element={<Home />}>
          <Route index element={<Home />} />
            <Route path="page" element={<Pages />} >
                      
            </Route>
          <Route path="*" element={<Error/>} />
=======
        <Route index element={<Home />} />
        <Route index element={<Home />} />
        <Route path="pages" element={<Pages />}>
          <Route path="about-us" element={<About />} />
          <Route path="services" element={<Service />} />
          <Route path="Team-Details" element={<About />} />
          <Route path="FAQ" element={<About />} />
>>>>>>> c108023af24be27dbcee9e1befd17801245fd590
        </Route>
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default Router;
