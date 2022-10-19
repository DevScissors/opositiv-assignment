import React from "react";
import styles from "./PurchaseTypeRow.module.scss";

const PurchaseTypeRow = (props) => {
  return (
    <div className={styles["quantity-row-wrapper"]}>
      <label>
        <input
          className={"quantity-row-subscribe"}
          type="checkbox"
          checked={props.checked === "subscribe"}
          onChange={props.onChange}
        />
        {"Subscribe & Save"}
      </label>
      <label>
        <input
          className={"quantity-row-one-time"}
          type="checkbox"
          checked={props.checked === "one-time"}
          onChange={props.onChange}
        />
        {"One Time"}
      </label>
    </div>
  );
};

export default PurchaseTypeRow;
