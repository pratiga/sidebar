/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from "react";
import { data } from "../data/data";
import ItemList from "./ItemList";
import LeftPanel from "./leftPanel";
import CustomerList from "./customerList";

const Homepage = () => {
  const [detail, setDetail] = useState();
  const [visible, setVisible] = useState(3);
  const [isLoading, setIsLoading] = useState();
  const [active, setActive] = useState("SecondCard");
  function handeldetails(item) {
    setDetail({ ...item });
  }
  function showMoreItem() {
    setIsLoading(true);
    setTimeout(() => {
      setVisible((prevValue) => prevValue + 5);
      setIsLoading(false);
    }, 1000);
  }

  const FilterData = data.slice(0, visible);

  return (
    <sidebar>
      <div className="left-sidebar">
        <LeftPanel detail={detail} visible={visible} />
      </div>
      <div className="right-sidebar">
        <nav>
          <button onClick={() => setActive("SecondCard")}>ItemList</button>
          <button onClick={() => setActive("Customer")}>CustomerList</button>
        </nav>
        <div>
          {active === "SecondCard" && (
            <ItemList
              handeldetails={handeldetails}
              FilterData={FilterData}
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
