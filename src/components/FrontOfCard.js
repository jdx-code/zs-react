import React from "react";
import FirstInteraction from '../assets/handshake-deal-svgrepo-com.svg';
function FrontOfCard() {
    return (
      <div className="absolute inset-0 w-full h-full flex justify-center items-center bg-green-100 text-black transition-all duration-100 delay-200 z-20 hover:opacity-0">
        <img className='w-24 mx-auto' src={FirstInteraction}/>
        <p>First Interaction</p>
      </div>
    );
  }
 export default FrontOfCard;