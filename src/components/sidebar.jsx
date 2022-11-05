/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from "react";
import "../styles/sidebar.css";
import LeftPanel from "./leftPanel";
import { data } from "../data/data";

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
        {data.map((item) => (
          <div className="items-box" onClick={() => handeldetails(item)}>
            <div className="items-image">
              <img src={item.image} alt="images" />
            </div>
            <div className="detail-box">
              <h1 className="title">{item.title}</h1>
              <span>{item.Location}</span>
              <span>{item.status}</span>
            </div>
          </div>
        ))}
      </div>
    </sidebar>
  );
};

export default sidebar;
