import React, { useState } from "react";
import { useSelector } from "react-redux";

import List from "../components/List/List";
import Modal from "../../shared/components/UiElements/Modal/Modal";
import AddItem from "../pages/AddItem";
import Button from "../../shared/components/FormElements/Button/Button";

import GroupByStore from "./GroupByStore";

import "./Home.scss";

const Home = () => {
  const [openModal, setOpenModal] = useState(false);

  const [showTab, setShowTab] = useState(false);

  const showTabHandler = () => {
    setShowTab(true);
  };

  const hideTabHandler = () => {
    setShowTab(false);
  };

  const openModalHandler = () => {
    setOpenModal(true);
  };
  const closeModalHandler = () => {
    setOpenModal(false);
  };

  const items = useSelector(state => {
    return state.items.items;
  });

  const filterdItems = items
    .filter(item => item.received === false)
    .sort((a, b) => {
      return new Date(a.deliveryDate) - new Date(b.deliveryDate);
    });

  const currency = useSelector(state => {
    return state.currency.currency;
  });

  let sumUSD = filterdItems.reduce((prev, current) => {
    return prev + +current.price;
  }, 0);

  return (
    <>
      <div className="btnWrapper">
        {!showTab && (
          <Button
            btnText="Add Item &#x0002B;"
            btnClass="btn-inline"
            Clicked={openModalHandler}
          />
        )}

        <Button
          btnText="Items List"
          btnClass="btn-inline"
          Clicked={hideTabHandler}
        />
        <Button
          btnText="Stores List"
          btnClass="btn-inline"
          Clicked={showTabHandler}
        />
      </div>

      <Modal show={openModal} modalClosed={closeModalHandler}>
        <AddItem closeModal={closeModalHandler} />
      </Modal>
      {showTab ? (
        <GroupByStore />
      ) : (
        <>
          <List
            ListTitle="Items"
            data={filterdItems}
            sumUSD={sumUSD}
            sumILS={(sumUSD * currency).toFixed(2)}
          />
        </>
      )}
    </>
  );
};

export default Home;
