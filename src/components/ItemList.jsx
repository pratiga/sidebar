/* eslint-disable react-hooks/rules-of-hooks */
import React from "react";
import "../styles/sidebar.css";
import Cardloader from "./cardloader";

const rightSidebar = ({
  handeldetails,
  items,
  showMoreItem,
  isLoading,
}) => {
  return (
    <div className="right-sidebar"
      style={{height:"100rem", overflow:"auto"}}
    >
      {items.map((item) => (
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
      {isLoading === true && <Cardloader />}
      <button className="btns loadmore" onClick={showMoreItem}>
        Load item
      </button>
    </div>
  );
};

export default rightSidebar;
