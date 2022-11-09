/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from "react";
import RightSidebar from "./rightSidebar";
import LeftPanel from "./leftPanel";

const Sidebar = () => {
  const [detail, setDetail] = useState();
  const [visible, setVisible] = useState(3);
  function handeldetails(item) {
    setDetail({ ...item });
  }

  return (
    <sidebar>
      <div className="left-sidebar">
        <LeftPanel detail={detail} visible={visible} />
      </div>
      <div className="right-sidebar">
        <RightSidebar handeldetails={handeldetails}
          visible={visible}
          setVisible={setVisible}
         />
      </div>
    </sidebar>
  );
};

export default Sidebar;
