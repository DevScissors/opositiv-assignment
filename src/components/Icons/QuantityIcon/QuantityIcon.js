import React from "react";
import styles from "./QuantityIcon.module.scss";

const QuantityIcon = () => {
  return (
    <div className={styles["quantity-icon-wrapper"]}>
      <span className={styles["circle-quantity"]}>1</span>
    </div>
  );
};

export default QuantityIcon;
