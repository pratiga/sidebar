/* eslint-disable no-unused-vars */
import React from "react";
import { data } from "../data/data";
import("../styles/leftPanel.css");

export default function leftPanel({ detail }) {
  let content = null;
  let count = 0;

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
    <div className="leftPanel">{data.map((item) => count++)}</div>;
    content = (
      <div className="leftPanel">
        <h1>Total NO of ITEM: {count}</h1>
      </div>
    );
  }
  return (
    <>
      <div className="content">{content}</div>
    </>
  );
}
