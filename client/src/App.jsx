import React from "react";
import NavbarBanner from "./components/NavbarBanner";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Footer from "./Layouts/Footer";
import Login from "./components/Login";
import Success from "./components/success";
import ProductDetail from "./pages/ProductDetail";
import Cart from "./pages/Cart";
import Feedback from "./components/Feedback";

const App = () => {
  return (
    <div>
      <NavbarBanner />
      <Navbar />

      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/success" element={<Success />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/rate" element={<Feedback />} />
          <Route path="/product/detail" element={<ProductDetail />} />
        </Routes>
      </div>

      <Footer />
    </div>
  );
};

export default App;
