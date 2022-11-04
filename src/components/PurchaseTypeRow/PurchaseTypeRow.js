import React from "react";
import RadioButton from "../shared/RadioButton/RadioButton";

import styles from "./PurchaseTypeRow.module.scss";
const PurchaseTypeRow = ({ checked, onChange, countSelected, priceMap }) => {
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
              checked={checked === "subscribe"}
              onChange={onChange}
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
              {`$${priceMap["subscribe"][countSelected]}`}
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
              checked={checked === "one-time"}
              onChange={onChange}
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
              {`$${priceMap["one-time"][countSelected]}`}
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
