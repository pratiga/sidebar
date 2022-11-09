import React from "react";
import { data } from "../data/data";
import "../styles/sidebar.css";

const rightSidebar = ({ handeldetails, showMoreItem }) => {
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
      <button className="btns loadmore" onClick={showMoreItem} >
        Load item
      </button>
    </div>
  );
};

export default rightSidebar;
