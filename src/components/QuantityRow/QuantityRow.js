import React from "react";
import Button from "../shared/Button/Button";

import styles from "./QuantityRow.module.scss";

const QuantityRow = () => {
  return (
    <div className={styles["quantity-row-wrapper"]}>
      <div className={styles["quantity-row-header-wrapper"]}>
        <div className={styles["quantity-row-header"]}>
          <p>3.</p>
          <p>Quantity</p>
        </div>
        <div className={styles["quantity-btn-wrapper"]}>
          <Button classNameOverride={styles["btn-quantity"]} label="1" />
          <Button classNameOverride={styles["btn-quantity"]} label="2" />
          <Button classNameOverride={styles["btn-quantity"]} label="3" />
        </div>
      </div>
      <p className={styles["quantity-row-description"]}>
        1 bottle ships every month
      </p>
    </div>
  );
};

export default QuantityRow;
