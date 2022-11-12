/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState, useEffect } from "react";
import "../styles/sidebar.css";
import "../styles/customerList.css";
import axios from "axios";

const customerList = () => {
  const [userList, setUserList] = useState([]);
  const showUsers = () => {
    setTimeout(() => {
      axios
        .get(
          "https://randomapi.com/api/6de6abfedb24f889e0b5f675edc50deb?fmt=raw&sole"
        )
        .then((res) => {
          setUserList(res.data);
        });
    }, 0);
  };
  useEffect(() => {
    showUsers();
  }, []);
  return (
    <div className="right-sidebar">
      {userList.map((user) => (
        <div className="card">
          <h3 className="username">{user.first + user.last}</h3>
          <img
            className="card-img"
            src={"https://joeschmoe.io/api/v1/" + user.first}
            alt={user.first}
          />
          <br />
          <span className="useremail">{user.email}</span>
          <br />
          <span className="useraddress">{user.address}</span>
        </div>
      ))}
    </div>
  );
};

export default customerList;
