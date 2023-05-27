import Navbar from "../../component/Navbar/Navbar.js";
//  import Feed from "../../component/feed/Feed";
// import Sidebar from "../../component/Sidebar/Sidebar";
import Connection from  "./connectionPage/Connection.js" ;
// import Welcome from "../../component/Welcome";

import "./home.css";
 function Home() {
  return (
    <>
      <Navbar/>
      <div className="homeContainer">
          {/* <Sidebar/> */}
          {/* <Feed/> */}

          <Connection/>
          {/* <Welcome/> */}      

      </div>
      
    </>
  )
}

export default  Home