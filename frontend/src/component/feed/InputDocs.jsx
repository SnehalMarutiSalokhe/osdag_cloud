import "./inputDocs.css";


export default function InputDocs() {
  return (
  <div className="inputDocs">
      <div className="inputDocsHeader" >
         Input dock
      </div>

      <div className="inputContent">
    {/*==================
       Connecting members
     ===================
       */}
             
       <ul className="inputContentList">
            <h6>Connecting members</h6>

                {/*  select */}
              <li className="inputContentListItem">
                  <div className="inputContentText">
                        Connectivity
                  </div>
                  <div className="inputContentChoose">
                  <div className="col-auto" >
                   
                      <label className="visually-hidden" for="autoSizingSelect"  >Preference</label>
                        <select className="form-select" id="autoSizingSelect">
                            <option selected>Select Connectivity</option>
                            <option value="1">Column flange-B</option>
                            <option value="2">Column...am web</option>
                            <option value="3">Column...am web</option>
                            <option value="4">Beam-Beam</option>
                       </select>
                    </div>
                   </div>

              </li>

                  {/*  select */}
              <li className="inputContentListItem">
                  <div className="inputContentText">
                        Column section
                  </div>
                  <div className="inputContentChoose">
                  <div className="col-auto" >
                   
                      <label className="visually-hidden" for="autoSizingSelect"  >Preference</label>
                        <select className="form-select" id="autoSizingSelect">
                            <option selected>Select section</option>
                            <option value="1">HB 150</option>
                            <option value="2">HB 150*</option>
                            <option value="3">HB 150*</option>
                            <option value="">HB 200</option>
                       </select>
                    </div>
                   </div>

              </li>

                  {/*  select */}
              <li className="inputContentListItem">
                  <div className="inputContentText">
                       Beam Section
                  </div>
                  <div className="inputContentChoose">
                  <div className="col-auto" >
                   
                      <label className="visually-hidden" for="autoSizingSelect"  >Preference</label>
                        <select className="form-select" id="autoSizingSelect">
                            <option selected>Select section</option>
                            <option value="1">JB 150</option>
                            <option value="2">JB 175</option>
                            <option value="3">JB 200</option>
                            <option value="4">JB 225</option>
                            <option value="5">JB 100</option>
                            <option value="6">JB 125</option>
                       </select>
                    </div>
                   </div>

              </li>
       
               
              <li className="inputContentListItem">
                  <div className="inputContentText">
                        fu (MPa)*
                  </div>
                  <div className="inputContentType" >
                  <input placeholder="type" className="inputContentType" /></div>
              </li>

                {/*  type */}
              <li className="inputContentListItem">
                  <div className="inputContentText">
                       fy (MPa)
                  </div >
                  <div className="inputContentType">
                  <input placeholder="type" className="inputContentType" />
                   </div>
              </li>
 
       </ul>
          
    {/*==================
           Factored shear load
     ===================
       */}

          <ul className="inputContentList">
            <h6>Factored shear load</h6>
             
              {/* Ver.Shear(KN)* */}
            <li className="inputContentListItem">
                  <div className="inputContentText">
                       Ver.Shear(KN)*
                  </div>
                  <div className="inputContentType" >
                  <input placeholder="type" className="inputContentType" /></div>
              </li>
  
           </ul>
          
          

 
    {/*==================
           bolt
     ===================
       */}

          <ul className="inputContentList">
            <h6>Bolt</h6>

                {/*  select */}
              <li className="inputContentListItem">
                  <div className="inputContentText">
                        Diameter(mm)*
                  </div>
                  <div className="inputContentChoose">
                  <div className="col-auto" >
                   
                      <label className="visually-hidden" for="autoSizingSelect"  >Preference</label>
                        <select className="form-select" id="autoSizingSelect">
                            <option selected> Diameter of bolt</option>
                            <option value="1">16</option>
                            <option value="2">20</option>
                            <option value="3">24</option>
                            <option value="4">32</option>
                            <option value="5">36</option>
                       </select>
                    </div>
                   </div>
             </li>

                {/*  select */}
              <li className="inputContentListItem">
                  <div className="inputContentText">
                     Type
                  </div>
                  <div className="inputContentChoose">
                  <div className="col-auto" >
                   
                      <label className="visually-hidden" for="autoSizingSelect"  >Preference</label>
                        <select className="form-select" id="autoSizingSelect">
                            <option selected>please select type</option>
                            <option value="1">Friction grip bolt</option>
                            <option value="2">bearing bolt</option>
                       </select>
                    </div>
                   </div>

              </li>

              {/*  select */}
              <li className="inputContentListItem">
                  <div className="inputContentText">
                       grade*
                  </div>
                  <div className="inputContentChoose">
                  <div className="col-auto" >
                   
                      <label className="visually-hidden" for="autoSizingSelect"  >Preference</label>
                        <select className="form-select" id="autoSizingSelect">
                            <option selected>3.6</option>
                            <option value="1">4.6</option>
                            <option value="2">4.8</option>
                            <option value="3">5.6</option>
                            <option value="5">6.8</option>
                            <option value="6">8.8</option>
                            <option value="7">9.8</option>
                       </select>
                    </div>
                   </div>

              </li>

            
        </ul>
          
       
        
    {/*==================
           plate
     ===================
       */}
       

        <ul className="inputContentList">
            <h6>plate</h6>

                {/*  select */}
              <li className="inputContentListItem">
                  <div className="inputContentText">
                        thickness(mm)*
                  </div>
                  <div className="inputContentChoose">
                  <div className="col-auto" >
                   
                      <label className="visually-hidden" for="autoSizingSelect"  >Preference</label>
                        <select className="form-select" id="autoSizingSelect">
                            <option selected>Select plate thickness</option>
                            <option value="1">6</option>
                            <option value="2">8</option>
                            <option value="3">10</option>
                            <option value="4">12</option>
                            <option value="5">14</option>
                            <option value="6">16</option>
                            <option value="7">18</option>
                            <option value="8">20</option>
                       </select>
                    </div>
                   </div>
             </li>

                   
                {/*  type */}
              <li className="inputContentListItem">
                  <div className="inputContentText">
                       Height (mm)
                  </div >
                  <div className="inputContentType">
                  <input placeholder="type" className="inputContentType" />
                   </div>
              </li>

                {/*  type */}
                     <li className="inputContentListItem">
                  <div className="inputContentText">
                     width(mm)
                  </div >
                  <div className="inputContentType">
                  <input placeholder="type" className="inputContentType" />
                   </div>
              </li>
        </ul>


       
    {/*==================
        weld
     ===================
       */}
 
        <ul className="inputContentList">
            <h6>Weld</h6>

                {/*  select */}
              <li className="inputContentListItem">
                  <div className="inputContentText">
                        thickness(mm)*
                  </div>
                  <div className="inputContentChoose">
                  <div className="col-auto" >
                   
                      <label className="visually-hidden" for="autoSizingSelect"  >Preference</label>
                        <select className="form-select" id="autoSizingSelect">
                            <option selected>Select weld thickness</option>
                            <option value="1">3</option>
                            <option value="2">4</option>
                            <option value="3">5</option>
                            <option value="4">6</option>
                            <option value="5">8</option>
                            <option value="6">10</option>
                            <option value="7">12</option>
                            <option value="8">14</option>
                            <option value="9">..</option>
                       </select>
                    </div>
                   </div>
             </li>
        </ul>
       

      <ul className="inputContentList">
       
        <button className="reset" type="button" class="btn btn-outline-danger">reset</button>
                 
        <button className="design" type="button" class="btn btn-outline-danger">design</button>
       
      </ul>
      </div>
      

  </div>
  )
}


