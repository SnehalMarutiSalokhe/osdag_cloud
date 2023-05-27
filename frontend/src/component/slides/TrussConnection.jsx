
 import ModuleNotAvailable from "./ModuleNotAvailable.png";
 import Connection from  "../../component/pages/connectionPage/Connection.js" ;

function TrussConnection() {
  return (
    <>
    <Connection></Connection>
     <img src={ModuleNotAvailable} alt="ModuleNotAvailable" />
    </>
  );
}

export default  TrussConnection
