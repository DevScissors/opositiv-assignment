import React from "react";

const Button = (props) => {
  return (
    <button onClick={props.onClick} className={props.classNameOverride}>
      {props.label}
    </button>
  );
};

export default Button;
