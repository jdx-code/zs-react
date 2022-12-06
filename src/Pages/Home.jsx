import React from 'react';
import Hero from "../components/Hero";
import ChooseUs from "../components/ChooseUs";
import Offers from "../components/Offers";
import Techstacks from "../components/Techstacks";
import Clients from "../components/Clients";
import OurProcess from "../components/OurProcess";
import CareerRibbon from "../components/CareerRibbon";

const Home = () => {
    return(
        <div id='main'>
            <Hero/>
            <CareerRibbon/>
            <ChooseUs/>                 
            <Offers/>
            <OurProcess/>
            {/* <Clients/>  */}
            <Techstacks/> 
        </div>
    )
}

export default Home;