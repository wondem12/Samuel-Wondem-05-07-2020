import React from "react";


import "./Wrapper.scss";

const Wrapper = ({ title, children }) => {
  return (
    <div className="Wrapper">
      <div className="Wrapper__top">
        <span className="Wrapper__top--title">{title}</span>
      </div>
      {children}
    </div>
  );
};

export default Wrapper;
