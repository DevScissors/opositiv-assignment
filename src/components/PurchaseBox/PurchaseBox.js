import React, { useState } from "react";
import CheckMarkIcon from "../Icons/CheckMarkIcon/CheckMarkIcon";
import QuantityIcon from "../Icons/QuantityIcon/QuantityIcon";
import Button from "../Button/Button";
import styles from "./PurchaseBox.module.scss";

const PurchaseBox = () => {
  const [isChecked, setIsChecked] = useState("capsules");

  const handleChange = () => {
    setIsChecked((isChecked) => !isChecked);
  };

  return (
    <div className={styles["purchase-box-wrapper"]}>
      <div className={styles["option-row-label"]}>1. Select Option</div>
      <div className={styles["option-row"]}>
        <div className={styles["options"]}>
          <CheckMarkIcon
            onChange={handleChange}
            checked={isChecked ? "capsules" : "gummies"}
            shape={"circle"}
          />
          <p>Strawberry</p>
        </div>
      </div>
      <QuantityIcon />
      <Button color={"pink"} />
    </div>
  );
};

export default PurchaseBox;
