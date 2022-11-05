/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from "react";
import "../styles/sidebar.css";
import RightSidebar from "./rightSidebar";
import LeftPanel from "./leftPanel";

const sidebar = () => {
  const [detail, setDetail] = useState();
  function handeldetails(item) {
    setDetail({ ...item });
  }

  return (
    <sidebar>
      <div className="left-sidebar">
        <LeftPanel detail={detail} />
      </div>
      <div className="right-sidebar">
        <RightSidebar handeldetails={handeldetails} />
      </div>
    </sidebar>
  );
};

export default sidebar;
