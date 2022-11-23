import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ChooseUs from "./components/ChooseUs";
import Offers from "./components/Offers";
import Techstacks from "./components/Techstacks";
import Clients from "./components/Clients";
import OurProcess from "./components/OurProcess";

function App() {
  return (
    <div>
      <Navbar/>  
      <Hero/>
      <ChooseUs/>  
      <Clients/>          
      <Offers/>
      <OurProcess/>
      <Techstacks/>      
    </div>
  );
}

export default App;