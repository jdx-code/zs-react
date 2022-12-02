import React from "react";
import initFontAwesome from "./components/FontAwesomeIcons/initFontAwesome";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Services from "./Pages/Services";
import Career from "./Pages/Career";
import Contact from "./Pages/Contact";

initFontAwesome();

function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="about" element={<About/>}/>
        <Route path="services" element={<Services/>}/>
        <Route path="career" element={<Career/>}/>
        <Route path="contact" element={<Contact/>}/>
      </Routes>  
      
      <Footer/>     
    </div>
  );
}

export default App;