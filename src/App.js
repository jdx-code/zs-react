import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ChooseUs from "./components/ChooseUs";
import Offers from "./components/Offers";
function App() {
  return (
    <div>
      <Navbar/>  
      <Hero/>
      <ChooseUs/>
      <Offers/>
    </div>
  );
}

export default App;
