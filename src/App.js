import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/navbar/index';
import Home from './components/home/index';
import Footer from './components/footer';
import AboutUs from './components/aboutus';
import Product from './components/products';

function App() {

  return (
    <Router >
      <Navbar />
      <div>
      <Routes>
          <Route  path="/" element={<Home />} />
          <Route  path="/Aboutus" element={<AboutUs/>} />
          <Route  path="/Product" element={<Product/>} />
      </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
