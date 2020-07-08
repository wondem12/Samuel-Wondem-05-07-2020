import React from "react";

import "./Button.scss";

const Button = ({btnText, btnClass, Clicked, btnType}) => {  
  return (
    <button className={btnClass} onClick={Clicked} type={btnType}>
      {btnText} 
    </button>
  );
};

export default Button;
