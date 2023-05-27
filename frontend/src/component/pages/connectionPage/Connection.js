import { Link } from "react-router-dom";

// import ShearConnection from "../../slides/ShearConnection";
// import MomentConnection from "../../component/slides/MomentConnection";
// import TrussConnection from "../../component/slides/TrussConnection";
import Navbar from "../../Navbar/Navbar.js";


import "./connection.css";
import React from "react";

 function Connection() {
  return (
    <>

    <Navbar></Navbar>
    <div className="connectionPageContainer">
     
     <div className="connectionPageHeader">
     CONNECTION
     </div>
     <Link  to="/Shear" className="btn btn-secondary"  role="button"> Shear connection</Link>
     <Link  to="/Moment" className="btn btn-secondary"  role="button">Moment connection</Link>
     <Link  to="/TrussConnection" className="btn btn-secondary"  role="button"> Truss connection</Link>
             
     {/* <ShearConnection/>  */}
      {/* <MomentConnection/> */}

      {/* <TrussConnection/>  */}
    </div>

    </>
  )
}

export default  Connection