import React from "react";

import "./Input.scss";

const Input = ({ name, label, value, error, onChange, type }) => {
  return (
    <div className="Input">
      <label htmlFor={name}>{label}</label>
      <input
        value={value}
        onChange={onChange}
        name={name}
        id={name}
        type={type}
        className="InputElement"
      />
      {error && <div className="AlertDanger">{error}</div>}
    </div>
  );
};

export default Input;
