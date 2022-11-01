import React from "react";
import Button from "../shared/Button/Button";

import styles from "./QuantityRow.module.scss";

const QuantityRow = (props) => {
  let count = 1;
  const switchDescription = () => {
    switch (count) {
      case count === 1:
        console.log(count);
        return "1 bottle ships every month";
      case count === 2:
        return "2 bottles ship every month";
      case count === 3:
        return "3 bottles ship every month";
      default:
        return "1 bottle ships every month";
    }
  };

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
            onClick={(event) => {
              event.preventDefault();
              props.handleQuantityChange(props.countSelected === 1);
            }}
            label="1"
          />
          <Button
            classNameOverride={styles["btn-quantity"]}
            onClick={(event) => {
              event.preventDefault();
              props.handleQuantityChange(props.countSelected === 2);
            }}
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
            onClick={(event) => {
              event.preventDefault();
              props.handleQuantityChange(props.countSelected === 3);
            }}
            label="3"
          />
        </div>
      </div>
      <p className={styles["quantity-row-description"]}>
        {switchDescription()}
      </p>
    </div>
  );
};

export default QuantityRow;
