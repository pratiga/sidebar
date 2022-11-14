/* eslint-disable no-undef */
/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from "react";
import { data } from "../data/data";
import ItemList from "./ItemList";
import LeftPanel from "./leftPanel";
import CustomerList from "./customerList";

const Homepage = () => {
  const [detail, setDetail] = useState();
  const [items, setItems] = useState(data);
  const [visible, setVisible] = useState(5);
  const [isLoading, setIsLoading] = useState();
  const [active, setActive] = useState("SecondCard");

  function handeldetails(item) {
    setDetail({ ...item });
  }

  function handleSort(e) {
    const selectedElements = e.target.value;
    if (selectedElements === "Ascending") {
      const sortedData = [...items].sort((a, b) => a.id - b.id);
      setItems(sortedData);
    } else if (selectedElements === "Descending") {
      const sortedData = [...items].sort((a, b) => b.id - a.id);
      setItems(sortedData);
    }
  }
  function showMoreItem() {
    setIsLoading(true);
    setTimeout(() => {
      setVisible((prevValue) => prevValue + 5);
      setIsLoading(false);
    }, 1000);
  }
  const filterData = items.slice(0, visible);

  return (
    <sidebar>
      <div className="left-sidebar">
        <LeftPanel detail={detail} visible={visible} />
      </div>
      <div className="right-sidebar">
        <nav>
          <button onClick={() => setActive("SecondCard")}>ItemList</button>
          <button onClick={() => setActive("Customer")}>CustomerList</button>
          <label>Sorted</label>
          <select onChange={handleSort}>
            <option defaultvalue="sort">sort</option>
            <option value="Ascending">Ascending</option>
            <option value="Descending">Descending</option>
          </select>
        </nav>
        <div>
          {active === "SecondCard" && (
            <ItemList
              handeldetails={handeldetails}
              items={filterData}
              showMoreItem={showMoreItem}
              isLoading={isLoading}
            />
          )}
          {active === "Customer" && <CustomerList />}
        </div>
      </div>
    </sidebar>
  );
};

export default Homepage;
