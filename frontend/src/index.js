import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import './index.css';

import App from './App';
// import Navbar from "../../component/Navbar/Navbar.js";
// import Sidebar from "../../component/Sidebar/Sidebar";
import Connection from  "./component/pages/connectionPage/Connection.js" ;
import ShearConnection from "./component/slides/ShearConnection";
import Moment from "./component/slides/MomentConnection.js";
import TrussConnection from "./component/slides/TrussConnection";
import ModuleNavail from "./component/pages/ModuleNavail/ModuleNavail.js";
 import Feed from "./component/feed/Feed.js";
import Welcome from "./component/Welcome";

import reportWebVitals from './reportWebVitals';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },

  {
    path: "welcome",
    element: <Welcome/>,
    
  },
  {
    path: "Connection",
    element: <Connection/>,
    
  },
  {
    path: "Tension",
     element: <ModuleNavail title="Tension Member"/>,
  },
  {
    path: "Compression",
    element: <ModuleNavail title="Compression Member"/>,
  },
  {
    path: "Flexural",
    element: <ModuleNavail title="Flexural Member"/>,
  },
  {
    path: "Beam-Column",
    element: <ModuleNavail title="Beam-Column"/>,
  },
  {
    path: "Plate",
    element: <ModuleNavail title="Plate Girder"/>,
  },
  {
    path: "Truss",
    element: <ModuleNavail title ="Truss"/>,
  },
  {
    path: "2D",
    element: <ModuleNavail title="2D Frame"/>,
  },
  
  {
    path: "3D",
    element: <ModuleNavail title="3D Frame"/>,
  },
  {
    path: "Group",
    element: <ModuleNavail title="Group Design"/>,
  },
 

  {
    path: "Shear",
    element: <ShearConnection/>,
  },
  {
    path: "Moment",
    element: <Moment/>,
  },
  {
    path: "TrussConnection",
    element: <TrussConnection/>,
  },
  {
    path: "Fin Plate",
    element: <Feed title ="Fin Plate"/>,
  },
 
  
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   < RouterProvider router ={router}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
