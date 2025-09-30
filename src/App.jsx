import { useState, StrictMode } from "react";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero.jsx";
import Offer from "./components/Offer.jsx";
import Products from "./components/Products.jsx";
import Slider from "./components/Slider.jsx";
import Footer from "./components/Footer.jsx";
function App() {
  return (
    <BrowserRouter>
      <Navbar></Navbar>
      <Offer></Offer>
      <Hero></Hero>
      <Products></Products>
      <Slider></Slider>
      <Footer></Footer>
    </BrowserRouter>
  );
}

export default App;
