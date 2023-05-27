import React from 'react';
import ModuleNotAvailable from "./ModuleNotAvailable.png";
import beam  from "./images/beam beam.png";

import Connection from  "../../component/pages/connectionPage/Connection.js" ;

 function Moment() {
  return (
    
    <>
    <Connection></Connection>
      <div className="slidecontent">
        <ul >
       
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="radio"
            name="inlineRadioOptions"
            id="inlineRadio1"
            value="option1"
          />
          <label className="form-check-label" for="inlineRadio1">
          beam beam
            <div>
            <img src={beam  } class="rounded float-start" alt="beam "width="250px" height="150px"/>
            </div>
          </label>
        </div>
       
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="radio"
            name="inlineRadioOptions"
            id="inlineRadio2"
            value="option2"
          />
          <label className="form-check-label" for="inlineRadio2">
          Beam-column
            <div>
            <img src={ModuleNotAvailable }  width="250px" height="40%" class="rounded float-end" alt="ModuleNotAvailable"/>
            </div>
          </label>
        </div>
        
        </ul>     
        </div>
        <div className="slidecontent">
      <ul>
     
        
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="radio"
            name="inlineRadioOptions"
            id="inlineRadio1"
            value="option1"
          />
          <label className="form-check-label" for="inlineRadio1">
          column-column
            <div>
            <img src={ ModuleNotAvailable  }width="250px" height="40%" class="rounded float-start" alt=" ModuleNotAvailable "/>
            </div>
          </label>
        </div>
        
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="radio"
            name="inlineRadioOptions"
            id="inlineRadio2"
            value="option2"
          />
          <label className="form-check-label" for="inlineRadio2">
          peb
            <div>
            <img src={ModuleNotAvailable } width="250px" height="40%"class="rounded float-end" alt="ModuleNotAvailable"/>
            </div>
          </label>
        </div>
        

        </ul>
      </div>
    </>
    
  )
}




export default  Moment