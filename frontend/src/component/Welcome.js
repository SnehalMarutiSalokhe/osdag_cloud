import React from 'react';
// import Osdag_header from "./Navbar/Osdag_header.png";
import Navbar from "./Navbar/Navbar.js";

import "./Welcome.css";
export default function Welcome() {
  return (
    <div >
      <Navbar></Navbar>
      <div className="headerText">
        Welcome!!
      </div>
      <div className="Text">
    <span>
     
      <h3>This is a cross-platform free/libre and open-source software for the design (and detailing) of steel structures, following the Indian Standard IS 800:2007.</h3>

      <h3>This allows the user to design steel connections, members and systems using a graphical user interface. </h3></span>
      </div>
    {/* <div className="">    
    
      <img src={ Osdag_header } className="Welcome" alt="Osdag_header" width="80%" />

      
 </div> */}
    
    </div>
  )
}
