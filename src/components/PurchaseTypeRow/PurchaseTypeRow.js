import React from "react";
import RadioButton from "../shared/RadioButton/RadioButton";

import styles from "./PurchaseTypeRow.module.scss";

const PurchaseTypeRow = (props) => {
  return (
    <div className={styles["purchase-type-row-wrapper"]}>
      <div className={styles["purchase-type-row-header-wrapper"]}>
        <p>2.</p>
        <p>Purchase Type</p>
      </div>
      <div className={styles["purchase-type-row-options"]}>
        <div className={styles["purchase-type-subscribe-content-wrapper"]}>
          <div className={styles["purchase-type-subscribe-content"]}>
            <RadioButton
              label="Subscribe & Save"
              type="radio"
              checked={props.checked === "subscribe"}
              onChange={props.onChange}
              value="subscribe"
            />
            <div
              className={styles["purchase-type-subscribe-description-wrapper"]}
            >
              <p className={styles["purchase-type-subscribe-description"]}>
                Easy to cancel, anytime
              </p>
              <p
                className={
                  styles[
                    ("purchase-type-subscribe-description", "free-shipping")
                  ]
                }
              >
                Free Shipping Always
              </p>
            </div>
          </div>
          <div className={styles["purchase-type-subscribe-price-wrapper"]}>
            <p className={styles["purchase-type-subscribe-price"]}>
              {props.selectedQuantity === 1
                ? "$26.99"
                : props.selectedQuantity === 2
                ? "$24.99"
                : props.selectedQuantity === 3
                ? "$24"
                : "$26.99"}
            </p>
            <p className={styles["purchase-type-subscribe-pricing-info"]}>
              /BOTTLE
            </p>
          </div>
        </div>
        <div className={styles["purchase-type-one-time-content-wrapper"]}>
          <div className={styles["purchase-type-one-time-content"]}>
            <RadioButton
              label="One Time"
              type="radio"
              checked={props.checked === "one-time"}
              onChange={props.onChange}
              value="one-time"
            />
            <div
              className={styles["purchase-type-one-time-description-wrapper"]}
            >
              <p className={styles["purchase-type-one-time-description"]}>
                One Time Purchase
              </p>
            </div>
          </div>
          <div className={styles["purchase-type-one-time-price-wrapper"]}>
            <p className={styles["purchase-type-one-time-price"]}>
              {props.selectedQuantity === 1
                ? "$31.99"
                : props.selectedQuantity === 2
                ? "$26.99"
                : props.selectedQuantity === 3
                ? "$26"
                : "$31.99"}
            </p>
            <p className={styles["purchase-type-one-time-pricing-info"]}>
              /BOTTLE
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PurchaseTypeRow;
