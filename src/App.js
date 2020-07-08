import React, { useCallback, useEffect } from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import * as actions from "./shared/store/actions/index";

import Home from "./items/pages/Home";
import Received from "./items/pages/Received";
import Header from "./shared/components/Navigation/Header";
import Footer from "./shared/components/Footer/Footer";
import Modal from "./shared/components/UiElements/Modal/Modal";



const App = () => {
  const error = useSelector(state => {
    return state.currency.error;
  });

  const dispatch = useDispatch();

  const onInitCurrency = useCallback(() => dispatch(actions.initCurrency()), [
    dispatch
  ]);

  useEffect(() => {
    onInitCurrency();
  }, [onInitCurrency]);

  useEffect(() => {
    const interval = setInterval(() => {
      onInitCurrency();
    }, 10000);
    return () => clearInterval(interval);
  }, [onInitCurrency]);

  return (
    <>
      <Header />
      <Modal show={error}>
        <div>{`Something Went Wrong With The Server`}</div>
      </Modal>
      <Switch>
        <Route path="/received" component={Received} />
        <Route path="/" component={Home} />
        <Route exact path="/" component={Home} />
        <Redirect to="/" />
      </Switch>
      <Footer />
    </>
  );
};

export default App;
