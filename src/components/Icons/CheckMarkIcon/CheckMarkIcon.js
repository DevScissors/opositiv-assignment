import React from "react";

import styles from "./CheckMarkIcon.module.scss";

const CheckMarkIcon = (props) => {
  const checkMarkColorSwitch = (shape) => {
    switch (shape) {
      case "circle":
        return (
          <input type="checkbox" className={styles["circle-check"]}></input>
        );
      case "square":
        return (
          <input type="checkbox" className={styles["square-check"]}></input>
        );
      default:
        return (
          <input type="checkbox" className={styles["circle-check"]}></input>
        );
    }
  };

  return (
    <div className={styles["check-mark-icon-wrapper"]}>
      {checkMarkColorSwitch(props.shape)}
    </div>
  );
};

export default CheckMarkIcon;
