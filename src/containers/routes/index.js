import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// components
import PageNotFound from "../../components/PageNotFound";
// containers
import Home from "../home";
import About from "../about";
import AppInstalled from "../app-installed";

const RoutesContainer = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />

        <Route exact path="/about" element={<About />} />

        <Route exact path="/app-installed" element={<AppInstalled />} />

        <Route exact path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RoutesContainer;
