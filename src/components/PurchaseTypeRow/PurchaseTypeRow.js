import React from "react";
import RadioButton from "../shared/RadioButton/RadioButton";
import styles from "./PurchaseTypeRow.module.scss";

const PurchaseTypeRow = (props) => {
  return (
    <div>
      <div className={styles["purchase-type-row-header-wrapper"]}>
        <p className={styles["purchase-type-row-number"]}>2.</p>
        <p>Purchase Type</p>
      </div>
      <div className={styles["purchase-type-row-options"]}>
        <div className={styles["purchase-type-subscribe"]}>
          <RadioButton
            label="Subscribe & Save"
            className={styles["purchase-type-subscribe"]}
            type="radio"
            checked={props.checked === "subscribe"}
            onChange={props.onChange}
            value="subscribe"
          />
          <p className="purchase-type-subscribe-caption">
            Easy to cancel, anytime
          </p>
        </div>
        <div className={styles["purchase-type-one-time"]}>
          <RadioButton
            label="One Time"
            className={styles["purchase-type-one-time"]}
            type="radio"
            checked={props.checked === "one-time"}
            onChange={props.onChange}
            value="one-time"
          />
          <p className="purchase-type-subscribe-caption">One Time Purchase</p>
        </div>
      </div>
    </div>
  );
};

export default PurchaseTypeRow;
