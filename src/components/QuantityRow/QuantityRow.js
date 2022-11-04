import React from "react";
import Button from "../shared/Button/Button";

import styles from "./QuantityRow.module.scss";

const QuantityRow = ({ countSelected, onClick, purchaseType }) => {
  const bottleDescription = [
    "1 bottle ships every month",
    "2 bottles ship every 2 months",
    "Congrats, you've selected our best value!\n",
    "3 bottles ship every 3 months",
  ];

  return (
    <div className={styles["quantity-row-wrapper"]}>
      <div className={styles["quantity-row-header-wrapper"]}>
        <div className={styles["quantity-row-header"]}>
          <p>3.</p>
          <p>Quantity</p>
        </div>
        <div className={styles["quantity-btn-wrapper"]}>
          <Button
            classNameOverride={`
              ${styles["btn-quantity"]}  +
              ${countSelected === 1 ? styles["btn-quantity-active"] : ""}`}
            onClick={() => onClick(1)}
            label="1"
          />
          <Button
            classNameOverride={`
            ${styles["btn-quantity"]}  +
            ${countSelected === 2 ? styles["btn-quantity-active"] : ""}`}
            onClick={() => onClick(2)}
            label="2"
          />
          <Button
            classNameOverride={`
            ${styles["btn-quantity"]}  +
            ${countSelected === 3 ? styles["btn-quantity-active"] : ""}`}
            onClick={() => onClick(3)}
            label="3"
          />
        </div>
      </div>
      {purchaseType === "one-time" ? null : (
        <p className={styles["quantity-row-description"]}>
          {countSelected === 3
            ? bottleDescription[2] + bottleDescription[3]
            : bottleDescription[countSelected - 1]}
        </p>
      )}
    </div>
  );
};

export default QuantityRow;
