import React, { useState } from "react";

import styles from "./CheckMarkIcon.module.scss";

const CheckMarkIcon = (props) => {
  const [isChecked, setIsChecked] = useState(true);
  const handleChange = () => {
    setIsChecked(!isChecked);
  };

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
          checked={isChecked}
          onChange={handleChange}
        />
        {props.label}
      </label>
    </div>
  );
};

export default CheckMarkIcon;
