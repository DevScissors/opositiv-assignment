import React from "react";
import RadioButton from "../shared/RadioButton/RadioButton";

import styles from "./OptionRow.module.scss";

const OptionRow = ({ checked, onChange }) => {
  return (
    <div className={styles["option-row-wrapper"]}>
      <div className={styles["option-row-header-wrapper"]}>
        <p>1.</p>
        <p>Select Option</p>
      </div>
      <div className={styles["option-row-options"]}>
        <div className={styles["option-row-gummies-content"]}>
          <RadioButton
            label="Gummies"
            type="radio"
            checked={checked === "FLO - PMS Gummy Vitamins"}
            onChange={onChange}
            value="FLO - PMS Gummy Vitamins"
          />
          <p className={styles["option-row-gummies-description"]}>Strawberry</p>
        </div>
        <div className={styles["option-row-capsule-content"]}>
          <RadioButton
            label="Capsule"
            type="radio"
            checked={checked === "FLO - PMS Vitamin Capsule"}
            onChange={onChange}
            value="FLO - PMS Vitamin Capsule"
          />
          <p className={styles["option-row-capsule-description"]}>Sugar-Free</p>
        </div>
      </div>
    </div>
  );
};

export default OptionRow;
