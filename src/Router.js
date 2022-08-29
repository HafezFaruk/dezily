import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Error from "./pages/Error.js";
import Home from "./pages/Home.js";
import Pages from "./pages/Pages.js";
import Footer from "./Share/Footer/Footer.js";
import NavigationBar from "./Share/Navigation/NavigationBar.js";

function Router() {
  return (
      <BrowserRouter>
       <NavigationBar/>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<Home />} />
            <Route path="page" element={<Pages />} >
                      
            </Route>
          <Route path="*" element={<Error/>} />
        </Route>
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default Router;
