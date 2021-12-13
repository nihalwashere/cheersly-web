import React from "react";
import NavBar from "./components/NavBar";
import RoutesContainer from "./containers/routes";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div>
      <NavBar />
      <RoutesContainer />
      <Footer />
    </div>
  );
}
