import "./outputDocs.css";


export default function outputDocs() {
  return (
  <div className="outputDocs">
      <div className="outputDocsHeader" >
         output dock
      </div>

      <div className="outputContent">
   {/*==================
           bolt
     ===================
       */}

          <ul className="outputContentList">
            <h6>Bolt</h6>

                {/*  select */}
              <li className="outputContentListItem">
                  <div className="outputContentText">
                  Shear capacity(kN)*
                  </div>
                  <div className="outputContentType">
                  <input placeholder="type" className="outputContentType" />
                   </div>
             </li>

                {/*  select */}
              <li className="outputContentListItem">
                  <div className="outputContentText">
                  Bearing capacity (KN)

                  </div>
                  <div className="outputContentChoose">
                  <div className="outputContentType">
                  <input placeholder="type" className="outputContentType" />
                   </div>
                   </div>

              </li>

              {/*  select */}
              <li className="outputContentListItem">
                  <div className="outputContentText">
                  Capacity of bolt (KN)
                  </div>
                  <div className="outputContentChoose">
                  <div className="outputContentType">
                  <input placeholder="type" className="outputContentType" />
                   </div>
                   </div>

              </li>
              <li className="outputContentListItem">
                  <div className="outputContentText">
                  No. of bolts required
                  </div>
                  <div className="outputContentChoose">
                  <div className="outputContentType">
                  <input placeholder="type" className="outputContentType" />
                   </div>
                   </div>

              </li>
              <li className="outputContentListItem">
                  <div className="outputContentText">
                  Bolt group capacity (KN)
                  </div>
                  <div className="outputContentChoose">
                  <div className="outputContentType">
                  <input placeholder="type" className="outputContentType" />
                   </div>
                   </div>

              </li>
              <li className="outputContentListItem">
                  <div className="outputContentText">
                  No. of rows
                  </div>
                  <div className="outputContentChoose">
                  <div className="outputContentType">
                  <input placeholder="type" className="outputContentType" />
                   </div>
                   </div>

              </li>
              <li className="outputContentListItem">
                  <div className="outputContentText">
                  No. of columns
                  </div>
                  <div className="outputContentChoose">
                  <div className="outputContentType">
                  <input placeholder="type" className="outputContentType" />
                   </div>
                   </div>

              </li>
              <li className="outputContentListItem">
                  <div className="outputContentText">
                  Pitch (mm)
                  </div>
                  <div className="outputContentChoose">
                  <div className="outputContentType">
                  <input placeholder="type" className="outputContentType" />
                   </div>
                   </div>

              </li>
              <li className="outputContentListItem">
                  <div className="outputContentText">
                  Gauge (mm)
                  </div>
                  <div className="outputContentChoose">
                  <div className="outputContentType">
                  <input placeholder="type" className="outputContentType" />
                   </div>
                   </div>

              </li>
              <li className="outputContentListItem">
                  <div className="outputContentText">
                  End distance (mm)
                  </div>
                  <div className="outputContentChoose">
                  <div className="outputContentType">
                  <input placeholder="type" className="outputContentType" />
                   </div>
                   </div>

              </li>
              <li className="outputContentListItem">
                  <div className="outputContentText">
                  Edge distance (mm)
                  </div>
                  <div className="outputContentChoose">
                  <div className="outputContentType">
                  <input placeholder="type" className="outputContentType" />
                   </div>
                   </div>

              </li>

            
        </ul>
          
       
        
    {/*==================
           plate
     ===================
       */}
       

        <ul className="outputContentList">
            <h6>plate</h6>

                {/*  select */}
              <li className="outputContentListItem">
                  <div className="outputContentText">
                  Height (mm)
                  </div>
                  <div className="outputContentChoose">
                  <div className="outputContentType">
                  <input placeholder="type" className="outputContentType" />
                   </div>
                   </div>
             </li>

                   
                {/*  type */}
              <li className="outputContentListItem">
                  <div className="outputContentText">
                  Width (mm)
                  </div >
                  <div className="outputContentType">
                  <input placeholder="type" className="outputContentType" />
                   </div>
              </li>

                {/*  type */}
                     <li className="outputContentListItem">
                  <div className="outputContentText">
                  Moment demand (kNm)
                  </div >
                  <div className="outputContentType">
                  <input placeholder="type" className="outputContentType" />
                   </div>
              </li>
                {/*  type */}
                     <li className="outputContentListItem">
                  <div className="outputContentText">
                  Moment capacity (kNm)
                  </div >
                  <div className="outputContentType">
                  <input placeholder="type" className="outputContentType" />
                   </div>
              </li>
        </ul>


       
    {/*==================
        weld
     ===================
       */}
 
        <ul className="outputContentList">
            <h6>Weld</h6>

                {/*  select */}
              <li className="outputContentListItem">
                  <div className="outputContentText">
                  Shear demand (kN/mm)
                  </div>
                  <div className="outputContentChoose">
                  <div className="outputContentType">
                  <input placeholder="type" className="outputContentType" />
                   </div>
                   </div>
             </li>
              <li className="outputContentListItem">
                  <div className="outputContentText">
                  Weld strength (kN/mm)
                  </div>
                  <div className="outputContentChoose">
                  <div className="outputContentType">
                  <input placeholder="type" className="outputContentType" />
                   </div>
                   </div>
             </li>
        </ul>
       

      <ul className="outputContentList">
       
        <button className="reset" type="button" class="btn btn-outline-danger">Save messages</button>
              <div></div>   
        <button className="design" type="button" class="btn btn-outline-danger">Create design report</button>
       
      </ul>
      </div>
      

  </div>
  )
}

