import React from "react";
import Button from "../shared/Button/Button";

import styles from "./QuantityRow.module.scss";

const QuantityRow = (props) => {
  // const switchDescription = () => {
  //   switch (props.countSelected) {
  //     case props.countSelected === 1:
  //       return "1 bottle ships every month";
  //     case props.countSelected === 2:
  //       return "2 bottles ship every  2 months";
  //     case props.countSelected === 3:
  //       return "3 bottles ship every 3 months";
  //     default:
  //       return "1 bottle ships every month";
  //   }
  // };

  const bottleDescription = [
    "1 bottle ships every month",
    "2 bottles ship every  2 months",
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
            classNameOverride={styles["btn-quantity"]}
            onClick={() => props.onClick(1)}
            label="1"
          />
          <Button
            classNameOverride={styles["btn-quantity"]}
            onClick={() => props.onClick(2)}
            label="2"
          />
          <Button
            classNameOverride={styles["btn-quantity"]}
            // classNameOverride={
            //   styles[
            //     `btn-quantity ${
            //       props.countSelected === 3 && "btn-quantity-active"
            //     }`
            //   ]
            // }
            onClick={() => props.onClick(3)}
            label="3"
          />
        </div>
      </div>
      <p className={styles["quantity-row-description"]}>
        {bottleDescription[props.countSelected - 1]}
      </p>
    </div>
  );
};

export default QuantityRow;
