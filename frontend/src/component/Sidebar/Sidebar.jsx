import "./Sidebar.css";
import sidebar_header from "./sidebar_header.png";

import FolderOutlined from '@mui/icons-material/FolderOutlined';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import HelpCenterOutlinedIcon from '@mui/icons-material/HelpCenterOutlined';
export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sideWrapper">
        <ul className="sidebarList">
          <li className= "sidebarListItem">
            <FolderOutlined className ="sidebarIcon"/>
              
                 <div className="dropdown">
                    <button className="btn btn-outline-dark dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    File
                    </button>
                   <ul className="dropdown-menu dropdown-menu-dark">
                         <li><a className="dropdown-item active" href="/">Load input</a></li>
                         <li><a className="dropdown-item" href="/">Save input</a></li>
                         <li><a className="dropdown-item" href="/">Save log messages</a></li>                         
                         <li><a className="dropdown-item" href="/">Create design report</a></li>                         
                         <li><a className="dropdown-item" href="/">Save 3D model</a></li>
                         <li><a className="dropdown-item" href="/">ave CAD imag</a></li>
                    </ul>
                </div>

          </li>

          <li className= "sidebarListItem">
            < EditOutlinedIcon className ="sidebarIcon"/>
            
            <div className="dropdown">
                    <button className="btn btn-outline-dark dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Edit
                    </button>
                   <ul className="dropdown-menu dropdown-menu-dark">
                         <li><a className="dropdown-item active" href="/">Cut</a></li>
                         <li><a className="dropdown-item" href="/">Copy</a></li>
                         <li><a className="dropdown-item" href="/">Paste</a></li>
                         
                         <li><a className="dropdown-item" href="/">Design preferences</a></li>
                     </ul>
                </div>
          </li>

          <li className= "sidebarListItem">
            < RemoveRedEyeOutlinedIcon className ="sidebarIcon"/>
           
            <div className="dropdown">
                    <button className="btn btn-outline-dark dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    view
                    </button>
                   <ul className="dropdown-menu dropdown-menu-dark">
                         <li><a className="dropdown-item active" href="/">Font</a></li>
                         <li><a className="dropdown-item" href="/">✔ Input dock</a></li>
                         <li><a className="dropdown-item" href="/">✓ Output dock</a></li>                      
                     </ul>
                </div>
          </li>

          <li className= "sidebarListItem">
            < HelpCenterOutlinedIcon className ="sidebarIcon"/>
            

            <div className="dropdown">
                    <button className="btn btn-outline-dark dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Help
                    </button>
                   <ul className="dropdown-menu dropdown-menu-dark">
                         <li><a className="dropdown-item active" href="https://www.youtube.com/channel/UCnSZ7EjhDwNi3eCPcSKpgJg">Video Tutorials</a></li>
                         <li><a className="dropdown-item" href="/">Design Examples</a></li>
                         <li><a className="dropdown-item" href="/">Ask Us a Question</a></li>
                         
                         <li><a className="dropdown-item" href="/">About Osdag</a></li>
                     </ul>
                </div>
          </li>

        </ul>

      </div>

      <hr/>
      
      <img src={sidebar_header} alt="sidebar_header"  width="100px" height="40px" className="sidebar_header" />

    </div>
  )
}


