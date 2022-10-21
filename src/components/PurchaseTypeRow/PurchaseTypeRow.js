import React from "react";
import styles from "./PurchaseTypeRow.module.scss";

const PurchaseTypeRow = (props) => {
  return (
    <div className={styles["purchase-type-row-wrapper"]}>
      <label>
        <input
          className={"purchase-type-subscribe"}
          type="checkbox"
          checked={props.checked === "subscribe"}
          onChange={() => props.onChange("subscribe")}
        />
        <p>Subscribe & Save</p>
        <p className="purchase-type-subscribe-caption">
          Easy to cancel, anytime
        </p>
      </label>
      <label>
        <input
          className={"purchase-type-one-time"}
          type="checkbox"
          checked={props.checked === "one-time"}
          onChange={() => props.onChange("one-time")}
        />
        <p>One Time</p>
        <p className="purchase-type-one-caption">One Time Purchase</p>
      </label>
    </div>
  );
};

export default PurchaseTypeRow;
