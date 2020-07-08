import React, { useContext } from "react";
import { Link } from "react-router-dom";

import Navigation from "../Navigation/Navigation";
import { ThemeContext } from "../../context/theme-context";
import Logo from "../../../assets/img/heroloLogo.png";

import "./Header.scss";

const Header = () => {
  const { themeMode, setDarkMode } = useContext(ThemeContext);

  return (
    <header className="header">
    <div className="header__right">
    <Link to="/">
        <img src={Logo} alt="logo" className="header__right--logo" />
      </Link>
      <Navigation />
    </div>
      

      <div>
        <label className="switch">
          <input type="checkbox" onChange={() => setDarkMode(themeMode)} />
          <span className="slider"></span>
        </label>
      </div>
    </header>
  );
};

export default Header;
