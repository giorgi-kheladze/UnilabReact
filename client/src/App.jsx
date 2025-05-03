import React from "react";
import NavbarBanner from "./components/NavbarBanner";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Footer from "./Layouts/Footer";

const App = () => {
  return (
    <div>
      <NavbarBanner />
      <Navbar />

      <div>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>

      <Footer />
    </div>
  );
};

export default App;
