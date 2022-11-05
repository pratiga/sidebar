import React from "react";
import { data } from "../data/data";
import("../styles/leftPanel.css");

export default function leftPanel({ detail }) {
  let content = null;
  if (detail) {
    content = (
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
    );
  }
  if (!detail) {
    content = (
      <div className="leftPanel">
        {data.map((item) => (
          <div className="item-box">
            <h1 className="title">{item.title}</h1>
            <div className="item-image">
              <img src={item.image} alt="images" />
            </div>
            <div className="detail-box">
              <span>{item.Location}</span>
              <span>{item.status}</span>
            </div>
            <p className="description">{item.details}</p>
          </div>
        ))}
      </div>
    );
  }
  return (
    <>
      <div className="content">{content}</div>
    </>
  );
}
