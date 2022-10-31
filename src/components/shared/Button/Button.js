import React from "react";
import styles from "./Button.module.scss";

const Button = (props) => {
  const btnColorSwitch = (color) => {
    switch (color) {
      case "pink":
        return "pink";
      case "orange":
        return "orange";
      default:
        return "pink";
    }
  };
  return (
    <button
      className={`${styles[props.classNameOverride]} ${
        styles[btnColorSwitch(props.color)]
      }}`}
    >
      {props.label}
    </button>
  );
};

export default Button;
