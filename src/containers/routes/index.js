import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// components
import PageNotFound from "../../components/PageNotFound";
// containers
import Home from "../home";
import Pricing from "../pricing";
import FAQ from "../faq";
import About from "../about";
import TermsOfService from "../tos";
import PrivacyPolicy from "../privacy-policy";
import AppInstalled from "../app-installed";

const RoutesContainer = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />

        <Route exact path="/pricing" element={<Pricing />} />

        <Route exact path="/faq" element={<FAQ />} />

        <Route exact path="/about" element={<About />} />

        <Route exact path="/tos" element={<TermsOfService />} />

        <Route exact path="/privacy" element={<PrivacyPolicy />} />

        <Route exact path="/app-installed" element={<AppInstalled />} />

        <Route exact path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RoutesContainer;
