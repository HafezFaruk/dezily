import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavigationBar from "./components/Navigation/NavigationBar.js";
import Error from "./pages/Error.js";
import Home from "./pages/Home.js";
import Pages from "./pages/Pages.js";

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
    </BrowserRouter>
  );
}

export default Router;
