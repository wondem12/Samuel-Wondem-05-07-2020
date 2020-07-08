import React from "react";
import { useSelector } from "react-redux";

import List from "../components/List/List";

const Received = () => {
  const items = useSelector(state => {
    return state.items.items;
  });
  const currency = useSelector(state => {
    return state.currency.currency;
  });

  const filterdItems = items.filter(item => item.received === true);

  let sumUSD = filterdItems.reduce((prev, current) => {
    return prev + +current.price;
  }, 0);
  
  return (
    <>
      <List
        ListTitle="Received Items"
        data={filterdItems}
        sumUSD={sumUSD}
        sumILS={(sumUSD * currency).toFixed(2)}
      />
    </>
  );
};

export default Received;
