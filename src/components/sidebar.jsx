import React from "react";
import "../styles/sidebar.css";
import { data } from "../data/data";

const sidebar = () => {
  return (
    <sidebar>
      <div className="left-sidebar"></div>
      <div className="right-sidebar">
        {data.map((item) => (
          <div className="item-box">
            <h1 className="title">{item.title}</h1>
            <p className="description">{item.details}</p>
            <div className="detail-box">
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
