import React from "react";
import { NavLink } from "react-router-dom";

import "./Navigation.scss";

const Navigation = () => {
  return (
    <ul>
      <li className="navLink">
        <NavLink exact to="/" activeClassName={"NavActive"}>
          List
        </NavLink>
      </li>
      <li className="navLink">
        <NavLink to="/received" activeClassName={"NavActive"}>
        Received
        </NavLink>
      </li>
    </ul>
  );
};

export default Navigation;
