import React from "react";
import RadioButton from "../shared/RadioButton/RadioButton";

import styles from "./OptionRow.module.scss";

const OptionRow = (props, itemName) => {
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
            checked={itemName === itemName.GUMMIES}
            onChange={props.onChange}
            value="gummies"
          />
          <p className={styles["option-row-gummies-description"]}>Strawberry</p>
        </div>
        <div className={styles["option-row-capsule-content"]}>
          <RadioButton
            label="Capsule"
            type="radio"
            checked={itemName === itemName.CAPSULE}
            onChange={props.onChange}
            value="capsule"
          />
          <p className={styles["option-row-capsule-description"]}>Sugar-Free</p>
        </div>
      </div>
    </div>
  );
};

export default OptionRow;
