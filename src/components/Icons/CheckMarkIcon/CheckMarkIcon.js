import React from "react";

import styles from "./CheckMarkIcon.module.scss";

const CheckMarkIcon = (props) => {
  const checkMarkShapeSwitch = (shape) => {
    switch (shape) {
      case "circle":
        return "circle";
      case "square":
        return "square";
      default:
        return "circle";
    }
  };

  return (
    <div className={styles["check-mark-icon-wrapper"]}>
      <label>
        <input
          className={`pink-${checkMarkShapeSwitch(props.shape)}`}
          type="checkbox"
          checked={props.checked === "gummies"}
          onChange={props.onChange}
        />
        {"Gummies"}
      </label>
      <label>
        <input
          className={`pink-${checkMarkShapeSwitch(props.shape)}`}
          type="checkbox"
          checked={props.checked === "capsules"}
          onChange={props.onChange}
        />
        {"Capsules"}
      </label>
    </div>
  );
};

export default CheckMarkIcon;
