/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from "react";
import { data } from "../data/data";
import "../styles/sidebar.css";
import Cardloader from "./cardloader";

const rightSidebar = ({ handeldetails }) => {
  const [visible, setVisible] = useState(3);
  const [isLoading, setIsLoading] = useState(false);
  const showMoreItem = () => {
    setIsLoading(true);
    setTimeout(() => {
      setVisible((prevValue) => prevValue + 5);
      setIsLoading(false);
    }, 1000);
  };
  return (
    <div className="right-sidebar">
      {data.slice(0, visible).map((item) => (
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
      <button className="btns loadmore"  onClick={showMoreItem}>
        Load item
      </button>
    </div>
  );
};

export default rightSidebar;
