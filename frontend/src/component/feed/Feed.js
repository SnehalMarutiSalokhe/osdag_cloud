import "./feed.css";
import Navbar from "../../component/Navbar/Navbar.js";
import Sidebar from "../../component/Sidebar/Sidebar";

import InputDocs from "./InputDocs";
import EditorDocs from "./EditorDocs";
import OutputDocs from "./OutputDocs";
export default function feed(props) {
  return (
    <>
    <Navbar></Navbar>
    <div className="feed">
      <div className="feed_header">
      {props.title}
      </div>
        <div className="feedEditor">
        <Sidebar/>
          <InputDocs/>
          <EditorDocs/>
          <OutputDocs/>

        </div>
    </div>
    </>

  )
}

