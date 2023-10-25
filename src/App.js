import React from 'react';
import { BrowserRouter as Router} from "react-router-dom";
import Navbar from './components/navbar/index';
import Carousel from './components/image-Carousel/index';
import Home from './components/home/index';
import Footer from './components/footer';






function App() {

  return (
    <Router >
      <Navbar />
      <Carousel /><br/><br/><br/><br/><br/><br/>
      <Home/>
      <Footer/>
    </Router>
  );
}

export default App;
