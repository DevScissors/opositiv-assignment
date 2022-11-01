import React from "react";
import styles from "./Button.module.scss";

const Button = (props) => {
  return <button className={props.classNameOverride}>{props.label}</button>;
};

export default Button;
