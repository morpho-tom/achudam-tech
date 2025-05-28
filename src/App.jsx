// src/App.jsx
import React, { useEffect, useState } from "react";
import { Layout } from "antd";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home.jsx";
import AboutUsPage from "./Pages/AboutUs.jsx";
import ContactPage from "./Pages/Contact.jsx";
import ProductPage from "./Pages/Product.jsx";
import PageNotFound from "./Pages/PageNotFound.jsx";
import Navbar from "./components/navbar/Navbar.jsx";
import Footer from "./components/footer/index.jsx";
import Loader from "./components/loader/Loader.jsx";

const { Content } = Layout;
const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Change time as needed

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) return <Loader />;
  return (
    <BrowserRouter>
      <Content>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product" element={<ProductPage />} />
          <Route path="/about" element={<AboutUsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
        <Footer />
      </Content>
    </BrowserRouter>
  );
};

export default App;
