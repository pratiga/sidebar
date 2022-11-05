import React from "react";
import { data } from "../data/data";

const leftPanel = ({ detail }) => {
  return (
    <>
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
          <h1>Total No of ITEM: {data.length}</h1>
        </div>
      )}
    </>
  );
};

export default leftPanel;
