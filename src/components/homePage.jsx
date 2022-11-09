/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from "react";
import RightSidebar from "./rightSidebar";
import LeftPanel from "./leftPanel";
import LoadmorePagination from "./loadmorePagination";

const Sidebar = () => {
  const [detail, setDetail] = useState();
  const [visible, setVisible] = useState(5);
  const [isLoading, setIsLoading] = useState(true);
  function handeldetails(item) {
    setDetail({ ...item });
  }
  const showMoreItem = () => {
    setTimeout(() => {
      setVisible((prevValue) => prevValue + 5);
    }, 1000);
    setIsLoading(false);
  };

  return (
    <sidebar>
      <div className="left-sidebar">
        <LeftPanel detail={detail} />
        <LoadmorePagination isLoading={isLoading} visible={visible} />
      </div>
      <div className="right-sidebar">
        <RightSidebar
          handeldetails={handeldetails}
          showMoreItem={showMoreItem}
        />
      </div>
    </sidebar>
  );
};

export default Sidebar;
