import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ChooseUs from "./components/ChooseUs";
import Offers from "./components/Offers";
import Techstacks from "./components/Techstacks";
import Clients from "./components/Clients";
function App() {
  return (
    <div>
      <Navbar/>  
      <Hero/>
      <ChooseUs/>
      <Clients/>      
      <Offers/>
      <Techstacks/>
    </div>
  );
}

export default App;
