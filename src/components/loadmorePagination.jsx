/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from "react";
import { data } from "../data/data";
import "../styles/loadmorePagination.css";
import Cardloader from "./cardloader";

const loadmorePagination = () => {
  const [visible, setVisible] = useState(5);
  const [isLoading, setIsLoading] = useState(true);

  const showMoreItem = () => {
    setIsLoading(false);
    setTimeout(() => {
      setVisible((prevValue) => prevValue + 5);
    }, 1000);
    setIsLoading(false);
  };
  return (
    <>
      <div className="app">
        {isLoading === false && (
          <div className="container">
            {data.slice(0, visible).map((item) => {
              return (
                <div className="card">
                  <h1 className="card-title">{item.title}</h1>
                  <div className="card-image">
                    <img src={item.image} alt="images" />
                  </div>
                  <div className="card-detail">
                    <span>{item.Location}</span>
                    <span>{item.status}</span>
                  </div>
                </div>
              );
            })}
          </div>
        )}
        {isLoading === true && <Cardloader />}
        <div className="loadmore">
          <button className=" btns" onClick={showMoreItem}>
            Load Item
          </button>
        </div>
      </div>
    </>
  );
};

export default loadmorePagination;
