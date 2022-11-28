import React from "react";
import initFontAwesome from "./components/FontAwesomeIcons/initFontAwesome";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ChooseUs from "./components/ChooseUs";
import Offers from "./components/Offers";
import Techstacks from "./components/Techstacks";
import Clients from "./components/Clients";
import OurProcess from "./components/OurProcess";
import CareerRibbon from "./components/CareerRibbon";
import Footer from "./components/Footer";

initFontAwesome();

function App() {
  return (
    <div>
      <Navbar/>  
      <Hero/>
      <CareerRibbon/>
      <ChooseUs/>                 
      <Offers/>
      <OurProcess/>
      <Clients/> 
      <Techstacks/> 
      <Footer/>     
    </div>
  );
}

export default App;