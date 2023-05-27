import React from "react";
import logo from "./Osdag_header.png";
import { Link } from "react-router-dom";
class Navbar extends React.Component {
  render() {
    return (
      <div className="navebar">
        <nav className="navbar bg-light" data-bs-theme="light">
          
            <div className="container-fluid">

              <Link  to="/welcome" className="navbar-brand" >
                <img src={logo} alt="logo" width="80" height="40px" className="d-inline-block align-text-top" />                
              </Link>
              <Link  to="/Connection" className="btn btn-primary"  role="button">  Connection</Link>
              <Link  to="/Tension" className="btn btn-secondary"  role="button"> Tension Member</Link>
              <Link  to="/Compression" className="btn btn-success"  role="button"> Compression Member</Link>
              <Link  to="/Flexural" className="btn btn-warning"  role="button">Flexural Member</Link>
              <Link  to="/Beam-Column" className="btn btn-info"  role="button">Beam-Column</Link>
              <Link  to="/Plate" className="btn btn-dark"  role="button">Plate Girder</Link>
              <Link  to="/Truss" className="btn btn-success"  role="button">Truss</Link>
              <Link  to="/2D" className="btn btn-primary"  role="button">2D Frame</Link>
              <Link  to="/3D" className="btn btn-secondary"  role="button">3D Frame</Link>
              <Link  to="/Group" className="btn btn-info"  role="button"> Group Design</Link>
              <a className="btn btn-danger" href="https://www.youtube.com/channel/UCnSZ7EjhDwNi3eCPcSKpgJg" role="button">Help</a>


            </div>
          
        </nav>
      </div>
    );
  }
}

export default Navbar;



