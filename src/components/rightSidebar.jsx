import React from "react";
import { data } from "../data/data";
import "../styles/sidebar.css";

const rightSidebar = ({ handeldetails }) => {
  return (
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
  );
};

export default rightSidebar;
