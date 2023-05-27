import React from 'react'
import  "./moduleNavail.css";

import Navbar from "../../Navbar/Navbar.js";
import ModuleN from "./moduleNotAvaila.png";
 function moduleNavail(props) {
  return (

    <>
     <Navbar>  </Navbar>
     <div className="PageHeader">
     {props.title}
     </div>
    <div className = "moduleImg">
      <img src={ModuleN} alt="ModuleN" />
    </div>

    </>
  )
}

export default  moduleNavail