/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from "react";
import { data } from "../data/data";
import "../styles/sidebar.css";
import RightSidebar from "./rightSidebar";
const sidebar1 = () => {
  const [detail, setDetail] = useState();
  let count = 0;
  function handeldetails(item) {
    setDetail({ ...item });
  }
  data.map(() => count++);
  return (
    <sidebar>
      <div className="left-sidebar">
        {detail ? (
          <div className="leftPanel">
            <h1 className="title"> {detail.title}</h1>
            <div className="item-image">
              <img src={detail.image} alt="images" />
            </div>
            <div className="detail-box">
              <span>{detail.Location}</span>
              <span>{detail.status}</span>
            </div>
            <p className="description">{detail.details}</p>
          </div>
        ) : (
          <div className="left-panel">
            <h1>Total No of ITEM: {count}</h1>
          </div>
        )}
      </div>
      <div className="right-sidebar">
        <RightSidebar handeldetails={handeldetails} />
      </div>
    </sidebar>
  );
};

export default sidebar1;
