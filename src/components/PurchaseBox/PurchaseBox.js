import React from "react";
import CheckMarkIcon from "../Icons/CheckMarkIcon/CheckMarkIcon";
import QuantityIcon from "../Icons/QuantityIcon/QuantityIcon";
import Button from "../Button/Button";
import styles from "./PurchaseBox.module.scss";

const PurchaseBox = (checked) => {
  return (
    <div className={styles["purchase-box-wrapper"]}>
      <div className={styles["option-row-label"]}>1. Select Option</div>
      <div className={styles["option-row"]}>
        <div className={styles["option-gummies"]}>
          <CheckMarkIcon checked={!checked} label="Gummies" shape={"circle"} />
          <p>Strawberry</p>
        </div>
        <div className={styles["option-capsules"]}>
          <CheckMarkIcon checked={checked} label="Capsules" shape={"circle"} />
          <p>Sugar-Free</p>
        </div>
      </div>
      <CheckMarkIcon shape={"square"} />
      <QuantityIcon />
      <Button color={"pink"} />
    </div>
  );
};

export default PurchaseBox;
